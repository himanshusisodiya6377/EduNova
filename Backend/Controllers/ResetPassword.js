const Crypto=require("crypto")
const User=require("../Models/User")
const Mailsender=require("../utils/mailsender")
const bcrypt=require("bcrypt")

exports.resettoken=async(req,res)=>{
    try{
        
        const {email}=req.body;

        const user=await User.findOne({email});
        
        if(!user){
           return res.status(401).json({
            success:false,
            message:"user doesnot exist!"
           })
        }

        const token = Crypto.randomUUID();

        //updating user with token

       const updateUser = await User.findByIdAndUpdate(
            user._id,
            {
            token,
            Expires: new Date(Date.now() + 3600000), // 1 hour from now
           },
          { new: true }
           );

        const url=`https://localhost:3000/${token}`;//frontent link
        
        await Mailsender(email,"Reset password link",url);

        return res.status(201).json({
            success:true,
            token,
            message:"url link generated successfully!"
        })

    }
    catch(error){
        console.error(error);

        return res.status(401).json({
            success:false,
            message:"url generation fails!"
        })

    }
}

exports.resetPassword=async(req,res)=>{
    try{
    //    console.log("hi")
        const{password,confirmpassword,token}=req.body;
       
       if(!password || !confirmpassword || !token){
        return res.status(401).json({
            success:false,
            message:"please fill all credentials!"
        })
       }

       const user=await User.findOne({token});
       
       if(!user){
        return res.status(401).json({
            success:false,
            message:"token is not valid!"
        })
       }

       if(!user.Expires>Date.now()){
        return res.status(401).json({
            success:false,
            message:"token expires!"
        })
       }
     
       const hashpwd=await bcrypt.hash(password,10);
      
       const updateuser=await User.findByIdAndUpdate(user._id,{
        password:hashpwd,
       })

       return res.status(201).json({
        success:true,
        updateuser,
        message:"password update successfully!"
       })
       
    }
    catch(error){
       
        console.error(error);
        return res.status(401).json({
            success:false,
            message:"reset password failed!"
        })
    }
}
const User=require("../Models/User")
const Otp=require("../Models/OTP")
const bcrypt=require("bcrypt")
const jwt=require("jsonwebtoken")
require("dotenv").config()
const Otpgenerator=require("otp-generator")

//sigup
const Singup=async(req,res)=>{
    try{
         const{
            firstname,
            lastname,
            email,
            password,
            confirmpassword,
            otp,
            accountType,
            phone,
         }=req.body;

         if(!firstname || !lastname || !email || !password || !confirmpassword || !otp || !accountType || !phone){
            return res.status(401).json({
                success:false,
                message:"please fill all credentials"
            })
         }

         if(password != confirmpassword){
            return res.status(401).json({
                success:false,
                message:"password doesnt match",
            })
         }

         if(await User.findOne({email})){
            return res.status(500).json({
                success:false,
                message:"user already exist"
            })
         }

         //otp verification
         //sort if it send multiple in once
         const OTP=await Otp.findOne({email});
         
       if (!OTP) {
         return res.status(404).json({
        success: false,
        message: "No OTP record found. Please request a new one.",
      });
       }
       
         if(OTP.otp!=otp){
            return res.status(401).json({
                success:false,
                message:"otp not verified!"
            })
         }

          
        const hashpwd=await bcrypt.hash(password,10);

         const user=await User.create({
            firstname,
            lastname,
            email,
            password:hashpwd,
            accountType,
            phone,
         }) 
     
         console.log(user);

        return res.status(201).json({
            success:true,
            message:"successfully singup"
        })  
    }
    catch(error){
        
        console.error(error);
        return res.status(401).json({
            success:false,
            message:"singup has been failed! try again"        
         })
    }
}


//login

const login=async(req,res)=>{
    try{
        const {email,password}=req.body;
        // console.log(email,password);
        if(!email || !password){
            return res.status(401).json({
                success:false,
                message:"please fill all credentials",
            })
        }

        const user=await User.findOne({email});
        

        if(!user){
            return res.status(401).json({
                success:false,
                message:"user doesnt exist",
            })
        }
        
        if(await bcrypt.compare(password,user.password)){
               const payload={
                email,
                id:user._id,
                accountType:user.accountType
               }
            // console.log(process.env.SECRET_KEY);
            const token=await jwt.sign(payload,process.env.SECRET_KEY,{
                expiresIn:"2h",
            })

            const option={
                httpOnly:true,
                expiresIn:new Date(Date.now+300000),
            }

            res.cookie("token",token,option);

            return res.status(201).json({
                success:true,
                token,
                message:"user login successfully!"
            })
        }
        
    }
    catch(error){
        console.error(error);
        return res.status(401).json({
            success:false,
            message:"login failed!"
        })
    }
}


const sendOtp=async(req,res)=>{
    try{

         const {email}=req.body
         console.log(email);
        //  const user=User.findOne({email});
        //  if(!user){
        //     return res.status(401).json({
        //         success:false,
        //         message:"user doesnot exist!"
        //     })
        //  }

         let otp=Otpgenerator.generate(6,{
            upperCaseAlphabets:false,
            lowerCaseAlphabets:false,
            specialChars:false,
         })
 
         while(await Otp.findOne({otp})){
            otp=Otpgenerator.generate(6,{
            upperCaseAlphabets:false,
            lowerCaseAlphabets:false,
            specialChars:false,
         })
         }
        console.log(otp);
        const otpres=await Otp.create({otp,email})
        return res.status(201).json({
            success:true,
            otpres,
            message:"otp send successfully!"
        })
    }
    catch(error){
       console.error(error);
       return res.status(401).json({
        success:false,
        message:"otp sending failed!"
       })
    }
}

module.exports={sendOtp,login,Singup};
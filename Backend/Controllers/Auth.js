const User=require("../Models/User")
const Otp=require("../Models/OTP")
const bcrypt=require("bcrypt")
const jwt=require("jasonwebtoken")
require("dotenv").config()
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
         const OTP=Otp.findOne({email}).sort({createdAt:-1});

         if(OTP.otp!=otp){
            return res.status(401).json({
                success:false,
                message:"otp not verified!"
            })
         }

          
        const hashpwd=bcrypt.hash(10,password);

         await User.creat({
            firstname,
            lastname,
            email,
            password:hashpwd,
            accountType,
            phone,
         }) 
  
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

        if(!email || !password){
            return res.status(401).json({
                success:false,
                message:"please fill all credentials",
            })
        }

        const user=await User.findOne({email});

        if(user){
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

            const token=await jwt.sign(payload,process.env.SECRET_KEY,{
                expireIn:"2h"
            })

            const option={
                httpOnly:true,
                expires:new Date(Date.now+300000),
            }

            res.cookie("token",token,option);

            return res.status(201).json({
                success:true,
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


// const sendotp=async()=>{
//     const {email}=req.body;
    
// }


//change password
// const changepassword=async()=>{
//     try{
//         const{email,password,confirmpassword}=req.body;
 
        

//         if(!password || !confirmpassword){
//             return res.status(401).json({
//                 success:false,
//                 messgae:"please fill all credentials",
//             })
//         }


//     }
//     catch(error){

//     }
// }


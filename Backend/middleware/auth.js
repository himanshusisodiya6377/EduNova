const jwt=require("jsonwebtoken")
require("dotenv").config()
const User=require("../Models/User")

const Auth=async(req,res,next)=>{
    try{
       const token=req.cookies.token || req.body.token || req.header("Authorization")?.replace("Bearer ", "");
       
       //console.log(token);
       if(!token){
        return res.status(401).json({
            success:false,
            message:"token doesnt exist",
        })
       }
       const payload=await jwt.verify(token,process.env.SECRET_KEY); 
       
       if(!payload){
        return res.status(401).json({
            success:false,
            message:"token verification fail!",
        })
       }
      const user=User.findOne({_id:payload._id});
       req.user=payload;
    //    return res.status(201).json({
    //     success:true,
    //     message:"user is verified!",
    //    })
       next();
    }
    catch(error){
      console.error(error);
      return res.status(401).json({
        success:false,
        user,
        message:"user authentication failed!"
      })
    }
}


//particular authentication

const isStudent=async(req,res,next)=>{
    try{
       if(req.user.accountType!="Student"){
        return res.status(401).json({
            success:false,
            message:"user is not authenticate as student!"
        })
       }

    //    return res.status(200).json({
    //     success:true,
    //     message:"user student auth success!"
    //    })
       next();
    }
    catch(error){
         console.error(error);
         return res.status(500).json({
            success:false,
            message:"user is not authenticate as student!"
         })
    }
}

const isInstructor=async(req,res,next)=>{
    try{
       if(req.user.accountType!="Instructor"){
        return res.status(401).json({
            success:false,
            message:"user is not authenticate as Instructor!"
        })
       }

    //    return res.status(200).json({
    //     success:true,
    //     message:"user Instructor auth success!"
    //    })
       next();
    }
    catch(error){
         console.error(error);
         return res.status(500).json({
            success:false,
            message:"user is not authenticate as Instructor!"
         })
    }
}

const isAdmin=async(req,res,next)=>{
    try{
       if(req.user.accountType!="Admin"){
        return res.status(401).json({
            success:false,
            message:"user is not authenticate as Admin!"
        })
       }
       next();
    }
    catch(error){
         console.error(error);
         return res.status(500).json({
            success:false,
            message:"user is not authenticate as Admin!"
         })
    }
}


module.exports={Auth,isAdmin,isInstructor,isStudent};
const nodemailer=require("nodemailer");
require("dotenv").config();

//functio that can be call anywhere to send mail
const SendMail=async(req,res)=>{
    try{

        //transporter
        const transporter=nodemailer.createTransport({
        service:"gmail",
        auth:{
        user:process.env.USER,
        pass:process.env.PASS
        }
        })
  
        //sending mail
        const response=await transporter.sendMail({
            from:"hsisodia988766@gmail.com",
            to:req.email,
            subject:"this is testing mail",
            text:"you have received this from banna !"
        })

        //return res 
        return res.status(201).json({
            success:true,
            response,
            message:"email has been send succeefully",
        })
    }
    catch(error){
        console.error(error);
        return res.status(401).json({
            success:false,
            message:"email sending fail"
        })
    }
}

module.exports=SendMail;
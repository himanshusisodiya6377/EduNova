const nodemailer=require("nodemailer");
require("dotenv").config();

//functio that can be call anywhere to send mail
const SendMail=async(email,title,body)=>{
    try{

        //transporter
        const transporter=nodemailer.createTransport({
        service:"gmail",
        auth:{
        user:process.env.EMAIL_USER,
        pass:process.env.EMAIL_PASS
        }
        })
        //console.log(process.env.EMAIL_USER,process.env.EMAIL_PASS);
        //sending mail
        const response=await transporter.sendMail({
            from:"hsisodia988766@gmail.com",
            to:`${email}`,
            subject: `${title}`,
            html: `${body}`,
        })
        
        console.log(response);
        return response;
        //return res 
        // return res.status(201).json({
        //     success:true,
        //     response,
        //     message:"email has been send succeefully",
        // })
    }
    catch(error){
        // console.error(error);
        console.error("Error sending email:", error.message);
        throw error;
    }
}

module.exports=SendMail;
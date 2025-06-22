const mailsend=require("../utils/mailsender");

const ContactUs=async(req,res)=>{
    try{
       const{
        firstname,
        lastname,
        phone,
        message,
        email
       }=req.body;

       if(!firstname || !lastname || !phone || !email || !message){
        return res.status(401).json({
            success:false,
            message:"please fill all credentials!"
        })
       }
  
    await mailsend(email,`thanks ${firstname} ${lastname} for contacting us`,"thanks");
       
    return res.status(201).json({
        success:true,
        message:"contact establish!",
    })
    }
    catch(error){
       
        console.error(error);
        return res.status(401).json({
            success:false,
            message:"contact fail to eastablish!"
        })
    }
}


module.exports={ContactUs};
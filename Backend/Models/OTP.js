const mongoose=require("mongoose");
const sendEmail=require("../utils/mailsender")
const otpSchema=mongoose.Schema({
    otp:{
        type:String,
        required:true,
    },
    email:{ //only required not full user
        type:String,
        required:true,
    },
    createdAt:{
        type:Date,
        default:Date.now,
        expires:300,
    }
})
//email code
//function
//lovebabbar way was too complicate you can do it this efficient way
otpSchema.post("save",async function(next){
    try{
    await sendEmail(this.email,this.otp);
    next();
    }
    catch(error){
        console.error(error);
        next(error);
    }
});

const otpModel=mongoose.model("Otp",otpSchema);

module.exports=otpModel;
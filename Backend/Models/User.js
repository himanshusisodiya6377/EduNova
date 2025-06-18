const mongoose=require("mongoose");

const userSchema=mongoose.Schema({
    firstname:{
        type:String,
        required:true,
        trim:true,
    },
    lastname:{
        type:String,
        required:true,
        trim:true,
    },
    password:{
        type:String,
        required:true,
        trim:true,
    },
    accountType:{
        type:String,
        enum:["Student","Admin","Instructor"]
    },
    profile:{
         type:mongoose.Schema.Types.ObjectId,
        ref:"Profile",
    },
    coures:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Course",
    }],
    otp:{
        type:String,
    },
    courseProgress:[{
          type:mongoose.Schema.Types.ObjectId,
          ref:"CourseProgress",
    }]
})

const userModel=mongoose.model("User",userSchema);

module.exports=userModel;
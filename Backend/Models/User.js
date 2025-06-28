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
     token: {
    type: String,
  },
  Expires: {
    type: Date,
  },
    email:{
        type:String,
        required:true,
    },
    accountType:{
        type:String,
        enum:["Student","Admin","Instructor"]
    },
    Profile:{
         type:mongoose.Schema.Types.ObjectId,
        ref:"Profile",
    },
    courses:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Course",
    }],
    otp:{
        type:String,
    },
    courseProgress:[{
          type:mongoose.Schema.Types.ObjectId,
          ref:"CourseProgress",
    }],
    thumbnail:{
        type:String,
        required:true
    }
})

const userModel=mongoose.model("User",userSchema);

module.exports=userModel;
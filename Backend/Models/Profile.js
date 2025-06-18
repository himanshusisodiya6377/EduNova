const mongoose=require("mongoose");

const profileSchema=mongoose.Schema({
    gender:{
        type:String,
        enum:["male","female","others"],
    },
    phone:{
        type:String,
    },
    about:{
        type:String,
    },
    DOB:{
        type:Date,
    }
})

const profileModel=mongoose.model("Profile",profileSchema);

module.exports=profileSchema;
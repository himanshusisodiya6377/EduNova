const mongoose=require("mongoose");

const SubsectionSchema=mongoose.Schema({
    title:{
        type:String,
        required:true,
    },
    description:{
        type:String,
        required:true,
    },
    videoUrl:[{
        type:String,
    }],
    duration:{
        type:String,
    },
    section:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Section",
    }
})

const Subsection=mongoose.model("Subsection",SubsectionSchema);

module.exports=Subsection;
const mongoose=require("mongoose");

const sectionSchema=mongoose.Schema({
    sectionName:{
        type:String,
        required:true,
    },
    subSection:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Subsection",
    }],
    course: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Course",
    required: true,
  },
  creatAt:{
    type:Date,
    default:Date.now,
  }
})

const sectionModel=mongoose.model("Section",sectionSchema);

module.exports=sectionModel;
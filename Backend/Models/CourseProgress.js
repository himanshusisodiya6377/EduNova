const mongoose=require("mongoose");

const courseprogressSchema=mongoose.Schema({
    course:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Course",
    },
      completedVideos: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "SubSection", 
    }
  ],
})

const courseProgressModel=mongoose.model("CourseProgress",courseprogressSchema);

module.exports=courseProgressModel;
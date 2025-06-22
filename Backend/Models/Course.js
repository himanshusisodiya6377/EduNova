const mongoose=require("mongoose");

const courseSchema=mongoose.Schema({
    courceName:{
        type:String,
        required:true,
    },
    description:{
        type:String,
        required:true,
    },
    price:{
        type:Number,
        required:true,
    },
    category:{
        type:String,
    },
    tags:[{
       type:String,
    }],
    BenefitofCourse:{
        type:String,
        required:true,
    },
    Instructions:[{
        type:String,
        required:true,
    }],
    thumbnail:{
        type:String,
       //required:true,
    },
    CourseUsers:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User",
    }],
    section:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Section"
    }],
    RatingandReview:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:"RatingandReview",
    }]
})

const courseModel=mongoose.model("Course",courseSchema);

module.exports=courseModel;
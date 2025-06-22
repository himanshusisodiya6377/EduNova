const mongoose=require("mongoose");

const ratingreviewSchema=mongoose.Schema({
    user:{
       type:mongoose.Schema.Types.ObjectId,
       ref:"User",
    },
    rating:{
       type:Number,
       reqiured:true, 
    },
    review:{
       type:String,
       required:true,
    },
    Course:{
       type:mongoose.Schema.Types.ObjectId,
       ref:"Course",
    },
})

const ratingreviewModel=mongoose.model("RatingReview",ratingreviewSchema);

module.exports=ratingreviewModel;
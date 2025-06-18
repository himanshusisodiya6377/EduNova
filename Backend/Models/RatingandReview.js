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
    }
})

const ratingreviewModel=mongoose.model("RatingReview",ratingreviewSchema);

module.exports=ratingreviewModel;
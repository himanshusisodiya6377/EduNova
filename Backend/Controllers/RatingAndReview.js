const CourseModel=require("../Models/Course")
const RatRew=require("../Models/RatingandReview")

exports.creatratingandreview=async(req,res)=>{
    try{
         
        const userId=req.user.id;
        const{rating,review,CourseId}=req.body;
        
        const course=await CourseModel.findOne({_id:CourseId,CourseUsers:userId});
        // console.log(rating,review,CourseId)
        if(!course){
            return res.status(401).json({
                success:false,
                message:"student is not enrolled in course!"
            })
        }

        const ratingreview=await RatRew.findOne({user:userId});

        if(ratingreview){
            return res.status(401).json({
                success:false,
                message:"user rating and review already exists!",
            })
        }

        const ratrew=await RatRew.create({
            userId,
            rating,
            review,
            CourseId
        })

        const updatecourse=await CourseModel.findByIdAndUpdate({_id:CourseId},{
            $push:{RatingandReview:ratrew._id},
        },{new:true})

        return res.status(201).json({
            success:true,
            message:"rating and review created successfully!"
        })
    }
    catch(error){
        console.error(error);
        return res.status(500).json({
            success:false,
            message:"rating review creation failed!"
        })

    }
}



exports.getallratingandreview=async(req,res)=>{
    try{
        //  const{CourseId}=req.body;

         const ratingreview=await RatRew.find({}).sort({rating:-1}).populate("User").populate("Course").exec();

         return res.status(201).json({
            success:true,
            ratingreview,
            message:"fetching all rating and review is successful!",
         })
    }
    catch(error){
        
        console.error(error);
        return res.status(500).json({
            success:false,
            message:"fetching all rating and review failed!"
        })
    }
}
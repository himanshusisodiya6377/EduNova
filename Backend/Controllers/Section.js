const Course=require("../Models/Course")
const Section=require("../Models/Section")

exports.CreatSection=async(req,res)=>{
    try{
       const {sectionName,courseId}=req.body;
        
       const course=await Course.findOne({_id:courseId});

       if(!course){
        return res.status(500).json({
            success:false,
            message:"course doesnt exist!"
        })
       }

       const section=await Section.create({
        sectionName,
        courseId,
       })

    //    console.log(section);

       const updatecourse=await Course.findOneAndUpdate({_id:courseId},{
        $push:{
            section:section._id,
        }
       },
       {new:true}
       ).populate({path:"section",//because Required for nested/advanced use
        populate:{
            path:"subSection",//.populate("asd") only when not nested
        }
       },
       ).exec();


       return res.status(200).json({
        success:true,
        updatecourse,
        message:"section created!",
       })

    }
    catch(error){

        console.error(error);
        return res.status(401).json({
            success:false,
            message:"section creation fail",
        })
    }
}

exports.UpdateSection=async(req,res)=>{
    try{
       const{SectionName,SectionId,CourseId}=req.body;

       if(!SectionName || !SectionId || !CourseId){
        return res.status(500).json({
            success:false,
            message:"please provide all credentials!"
        })
       }
    //    console.log("chal rha he")

       const section=await Section.findOneAndUpdate({_id:SectionId},{
        sectionName:SectionName},
        {new:true}
    )

       const course=await Course.findOneAndUpdate({_id:CourseId},
        // $push:{
        //     section:section._id,
        // }
    //    },
       {new:true}
       ).populate({path:"section",//because Required for nested/advanced use
        populate:{
            path:"subSection",//.populate("asd") only when not nested
        }
       },
       ).exec();

       return res.status(201).json({
        success:true,
        course,
        message:"section updation done!"
       })
    }
    catch(error){
      console.error(error);
      return res.status(401).json({
        success:false,
        message:"section updation fail!"
      })
    }
}

exports.deletesection=async(req,res)=>{
    try{
         const{sectionId,courseId}=req.body;

         if(!sectionId || !courseId){
            return res.status(500).json({
                success:false,
                message:"please provide all credentials!"
            })
         }

         const section=await Section.findByIdAndDelete({_id:sectionId});
         const course=await Course.findOneAndUpdate({_id:courseId},
            {
                $pull:{section:sectionId},
            },
            {new:true}
         ).populate({path:"section",//because Required for nested/advanced use
        populate:{
            path:"subSection",//.populate("asd") only when not nested
        }
       },
       ).exec();

         return res.status(201).json({
            success:true,
            course,
            message:"course deletino successful!",
         })
    }
    catch(error){
        console.error(error);
        return res.status(500).json({
            success:false,
            message:"section deletion fail!"
        })
    }
}
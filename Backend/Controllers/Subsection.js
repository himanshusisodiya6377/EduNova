const sectionModel = require("../Models/Section");
const subsectionModel = require("../Models/Subsection");
const upload=require("../utils/uploadToCloudinary")
require("dotenv").config()

exports.creatsubsection=async(req,res)=>{
    try{
        const{sectionId,title,description}=req.body;
        const videoUrl= req.files.videoUrl.tempFilePath;
       // console.log(videoUrl)
        if(!await sectionModel.findById({_id:sectionId})){
            return res.status(401).json({
                success:false,
                message:"no section exist!"
            })
        }

        if(!title || !description || !videoUrl){
            return res.status(401).json({
                success:false,
                message:"please fill all credentials!"
            })
        }
         
        const video=await upload(videoUrl,process.env.FOLDER)
        console.log(video);
        const subsection=await subsectionModel.create({
            title,description,videoUrl:video.secure_url,duration:video.duration
        })

        const section=await sectionModel.findByIdAndUpdate({_id:sectionId},
            {$push:{subSection:subsection._id}},
            {new:true}
        ).populate("subSection").populate("course").exec();

        return res.status(201).json({
            success:true,
            message:"subSection created successfully!"
        })

    }
    catch(error){
        console.error(error);
        return res.status(401).json({
            success:false,
            message:"subsection creation failed!"
        })

    }
}

exports.deletesubsection=async(req,res)=>{
    try{
        //  console.log("ji")
         const{subsectionId,sectionId}=req.body;

         await sectionModel.findByIdAndUpdate({_id:sectionId},
            {$pull:{subsection:subsectionId}},
            {new:true}
         )

         await subsectionModel.findByIdAndDelete(subsectionId);

         const updatesectino=await sectionModel.findByIdAndUpdate({_id:sectionId}
            ,{$pull:{subSection:subsectionId}},{new:true}
         ).populate("subSection");
          
         return res.status(201).json({
            success:true,
            message:"yes subsection deleted successfully!"
         })
    
        }  
    catch(error){
        console.error(error);
        return res.status(401).json({
            success:false,
            message:"dleetion of subsection fialed!"
        })
    }
}
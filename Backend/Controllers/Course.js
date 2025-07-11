const upload=require("../utils/uploadToCloudinary");
require("dotenv").config();
const Course=require("../Models/Course");
const User = require("../Models/User");
const subsection=require("../Models/Subsection")
const Section=require("../Models/Section")
// import { useParams } from 'react-router-dom'
//const Category=require("../Models/Category");


exports.Course=async(req,res)=>{
    try{

        const userid=req.user.id;

         const {
            courceName,
            description,
            price,
            category,
            tags,
            instructions,
            BenefitofCourse
         }=req.body;
        // console.log(req.files);
        // console.log(courceName,description,price,category,tags,instructions,BenefitofCourse);
        const thumb =  req.files.thumbnail.tempFilePath; 
        // console.log(thumb);
          
         if(!courceName || !description || !price || !category || !tags || !instructions || !BenefitofCourse || !thumb){
            return res.status(401).json({
                success:false,
                message:"please fill all credentials"
            })
         }

         tag=JSON.parse(tags);
         instruction=JSON.parse(instructions)

        //  const categoryres=await Category.findOne({category});

        //  if(!categoryres){
        //     return res.status(500).json({
        //         success:false,
        //         message:"this type of category doesnot exist"
        //     })
        //  }

        const thumres = await upload(thumb, process.env.FOLDER);

         //console.log(tag,instruction)
         const courseres=await Course.create({
            courceName,
            description,
            price,
            category,
            tags:tag,
            Instructions:instruction,
            BenefitofCourse,
           thumbnail:thumres.secure_url
         })

        const course=await User.findOneAndUpdate({_id:userid},{//typo mistake take it as _id
            //when two both same tab likhte he {....} other wise complete key value mention karo
            $push:{
                courses:courseres._id,
            },
        },
            {new:true},
         )

        // const updatecategory=await Category.findOneAndUpdate({category},{
        //     $push:{
        //        course:courses._id,
        //     }},
        //     {new:true},
        // )

         return res.status(201).json({
            success:true,
            message:"course created successfully",
            course,
         })
    }
    catch(error){
         console.error(error);
         return res.status(401).json({
            success:false,
            message:"error while during course creation"
         })
    }
}


exports.getAllcourses=async(req,res)=>{
    try{
        const courses=await Course.find({},{
            title:true,
            description:true,
            price:true,
            category:true,
            thumbnail:true,
        }).populate("CourseUsers").populate("category").exec();

        if(!courses){
            return res.status(401).json({
                success:false,
                message:"fetching courses fail!",
            })
        }

        return res.status(201).json({
            success:true,
            message:"fetching of all courses done!",
            courses,
        })
    }
    catch(error){
        console.error(error);
        return res.status(500).json({
            success:false,
            message:"fetching courses fails!",
        })
    }
}

exports.deletecourse=async(req,res)=>{
    try{
        const {courseId}=req.body;
        const userId=req.user.id;

        const course=await Course.findOne({_id:courseId});

        if(!course){
            return res.status(401).json({
                succss:false,
                message:"course doesnot exist!"
            })
        }

        //remove for students
        const students=course.CourseUsers;
        if(students){
            for(const user of students){
            await User.findOneAndUpdate({_id:user},{
                $pull:{courses:courseId},
            }
          )
        }
        }

       

        //remove subsection
        const section = course.section;
        // console.log(section);
        for(const sec of section){
             const sectionDoc = await Section.findById(sec);
            for(const sub of sectionDoc.subSection){
               await subsection.findByIdAndDelete(sub);
            }
            await Section.findByIdAndDelete(sec);
        }
        
        //deleting course itself
        await Course.findByIdAndDelete(courseId);

        return res.status(200).json({
            success:true,
            message:"course deleted successfully!"
        })
    }
    catch(error){
         console.error(error);
         return res.status(401).json({
            success:false,
            message:"deletion of course failed!"
         })
    }
}

exports.getInstructorcourse=async(req,res)=>{
    try{
        const userId=req.user.id;

        const user=await User.findOne({_id:userId}).populate("courses").populate("Profile");

        if(!user){
            return res.status(401).json({
                success:false,
                message:"user doesnot exist!"
            })
        }

        return res.status(200).json({
            success:true,
            message:"fetching successfully!",
            user
        })

        
    }
    catch(error){
            console.error(error);
         return res.status(401).json({
            success:false,
            message:"deletion of course failed!"
         })
    }
}

exports.getoneCourse=async(req,res)=>{
    try{
        const id=req.params.id
        // console.log(id)
        // console.log("aaya")
        if(!id){
            return res.status(400).json({
                status:false,
                message:"id is missing"
            })
        }

        const course=await Course.findById(id);
        // console.log(course)

        return res.status(200).json({
            status:true,
            course,
            message:"course fetch successfully"
        })
    }
    catch(error){
        console.log(error);
        return res.status(500).json({
            status:false,
            message:"fetching course fail"
        })
    }
}
const upload=require("../utils/uploadToCloudinary");
require("dotenv").config();
const Course=require("../Models/Course");
const User = require("../Models/User");
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
        }).populate("CourseUsers").exec();

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



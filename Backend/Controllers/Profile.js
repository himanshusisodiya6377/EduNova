const userModel = require("../Models/User");
const ProfileModel=require("../Models/Profile")

const creatprofile=async(req,res)=>{
    try{
         
        const{phone,gender,dob,about}=req.body;
        const userId=req.user.id;

        const user=await userModel.findById({_id:userId});
        // console.log(user);
        if(!user){
            return res.status(401).json({
                success:false,
                message:"user doesnot exists!"
            })
        }
    //    console.log(  gender,about,dob,phone)
        const profile=await ProfileModel.create({
            gender,about,DOB:dob,phone
        })
        // console.log("hi2")
         console.log(profile)
        const updateuser=await userModel.findByIdAndUpdate({_id:userId},{
            Profile:profile._id,
        },  {new:true})

        return res.status(201).json({
            success:true,
            updateuser,
            message:"profile created successfully!"
        })
    }
    catch(error){
           return res.status(401).json({
            success:false,
            message:"profile creation failed!"
           })
    }
}

//exports.updateprofile=async(req,res)=>{
    try{

    }
    catch(error){

    }
//}

const deleteprofile=async(req,res)=>{
     try{
          const userId=req.user.id;
          const{profileId}=req.body;

          const user=await userModel.findByIdAndUpdate({_id:userId},{Profile:null})
          await ProfileModel.findByIdAndDelete(profileId);

          return res.status(201).json({
            success:true,
            message:"profile deleted successfully!"
          })
        
          
     }
     catch(error){
        console.error(error);
        return res.status(401).json({
            success:false,
            message:"profile deletion failed!"
        })
     }
}

module.exports={creatprofile,deleteprofile};
const userModel = require("../Models/User");
const ProfileModel=require("../Models/Profile")

const creatprofile=async(req,res)=>{
    try{
         
        const{phone,gender,dob,about}=req.body;
        const userId=req.user.id;

        const user=await userModel.findById({id:userId});
        
        if(!user){
            return res.status(401).json({
                success:false,
                message:"user doesnot exists!"
            })
        }

        const profile=ProfileModel.creat({
            gender,about,dob,phone
        })

        const updateuser=userModel.findByIdAndUpdate({id:userId},{
            Profile:profile._id,
        }).populate("Profile")

        return res.status(201).json({
            success:true,
            updateuser,
            message:"profile created successfully!"
        })
    }
    catch(error){

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

          const user=await userModel.findByIdAndUpdate({id:userId},{Profile:null})
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
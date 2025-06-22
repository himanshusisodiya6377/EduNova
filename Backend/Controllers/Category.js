// const CategoryModel=require("../Models/Category")

// exports.creatCategory=async(req,res)=>{
//     try{
    
//         const {name,description}=req.body;

//         if(!name || !description){
//              return res.status(401).json({
//             success:false,
//             message:"fill all credentials!"
//         })   
//         }

//         const category=await CategoryModel.creat({
//             name,description
//         })

//             return res.status(201).json({
//             success:true,
//             message:"category created succefully!"
//         })  

//     }
//     catch(error){
//         console.error(error);
//         return res.status(401).json({
//             success:false,
//             message:"category creation failed!"
//         })
//     }
// }

// exports.showAllcategory=async(req,res)=>{
//     try{
//         const category=await CategoryModel.find({});
//           return res.status(201).json({
//             success:true,
//             category,
//             message:"all category showed succefully!"
//         })  
//     }
//     catch(error){
//         console.error(error);
//         return res.status(401).json({
//             success:false,
//             message:"showing all category failed!"
//         })
//     }
// }
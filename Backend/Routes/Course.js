const express=require("express");
const router=express.Router();


const { creatratingandreview,getallratingandreview } = require("../Controllers/RatingAndReview");
const {creatsubsection,deletesubsection}=require("../Controllers/Subsection");
const {getAllcourses,Course}=require("../Controllers/Course");
//const {showAllcategory,creatCategory}=require("../Controllers/Category");
const {deletesection,CreatSection,UpdateSection}=require("../Controllers/Section");
const {Auth,isAdmin,isInstructor,isStudent}=require("../middleware/auth");

router.post("/creat",Auth,isInstructor,Course);
router.post("/addsection",Auth,isInstructor,CreatSection);
router.put("/updatesection",Auth,isInstructor,UpdateSection);
router.delete("/deletesection",Auth,isInstructor,deletesection);
router.post("/creatsubsection",Auth,isInstructor,creatsubsection);
router.delete("/deletesubsection",Auth,isInstructor,deletesubsection);
router.get("/getallcourse",getAllcourses);

router.post("/creatratingandreview",Auth,isStudent,creatratingandreview);
router.get("/getallratingandreview",getallratingandreview);

// router.post("/creatcategory",Auth,isAdmin,creatCategory);
// router.get("/getallcategory",showAllcategory);

module.exports=router;
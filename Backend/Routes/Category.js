const express=require("express");
const router=express.Router();
const {creatCategory,showAllcategory}=require("../Controllers/Category")
const {Auth,isAdmin} =require("../middleware/auth")

router.post("/creatcategory",Auth,isAdmin,creatCategory);
router.get("/showcategory",showAllcategory);

module.exports=router;
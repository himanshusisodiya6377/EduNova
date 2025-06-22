const express=require("express");
const router=express.Router();

const{creatprofile,deleteprofile }=require("../Controllers/Profile");
const{Auth}=require("../middleware/auth");

router.post("/creatprofile",Auth,creatprofile);
router.delete("/deleteprofile",Auth,deleteprofile);

module.exports=router;

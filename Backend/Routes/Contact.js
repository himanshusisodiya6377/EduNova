const express=require("express");
const router=express.Router();
const {ContactUs}=require("../Controllers/Contactus")

router.post("/contactus",ContactUs);

module.exports=router;
const express=require("express");
const router=express.Router();

const{Singup,login,sendOtp}=require("../Controllers/Auth");
const{resettoken,resetPassword}=require("../Controllers/ResetPassword");
const{Auth}=require("../middleware/auth");

router.post("/singup",Singup);
router.post("/login",login);
router.post("/sendotp",sendOtp);

router.post("/resettoken",resettoken);
router.put("/changepassword",Auth,resetPassword);



module.exports=router;
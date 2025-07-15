const express=require("express");
require("dotenv").config();
const connectdb=require("./Config/Mongodb");
const cloudinary=require("./Config/cloudinary");
const fileupload=require("express-fileupload");
const Profile=require("./Routes/Profile")
const Contact=require("./Routes/Contact")
const Course=require("./Routes/Course")
const user=require("./Routes/user");
const cookieParser = require("cookie-parser");
const cors = require('cors');
const Category=require("./Routes/Category")
require("dotenv").config();

PORT=process.env.PORT || 8080;

const app=express();

//connecting to frontend
app.use(cors({
  origin:process.env.URL,  // replace with your frontend port
  credentials: true                // if you're sending cookies
}));

//start the server
app.use(express.json());
app.use(cookieParser());
//cloudinary setup
app.use(fileupload({
    useTempFiles:true,
    tempFileDir:"/tmp/"
}));

//cloudinary();

//connecting to data base
connectdb();





//starting server at respective port
app.listen(PORT,()=>{
    console.log(`server is running at port ${PORT}`);
})

app.use("/EduNova/Profile",Profile);
app.use("/EduNova",Contact);
app.use("/EduNova/Course",Course);
app.use("/EduNova/User",user);
app.use("/EduNova/Admin",Category);
//listening req at / route
app.use("/",(req,res)=>{
    res.send("yes its the home page!");
})


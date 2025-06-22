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

PORT=process.env.PORT || 8080;

//start the server
const app=express();
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

//listening req at / route
app.use("/",(req,res)=>{
    res.send("yes its the home page!");
})


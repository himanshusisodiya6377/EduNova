const express=require("express");
require("dotenv").config();
const connectdb=require("./Config/Mongodb");
const cloudinary=require("./Config/cloudinary");
const fileupload=require("express-fileupload");

PORT=process.env.PORT || 8080;

//start the server
const app=express();

//cloudinary setup
app.use(fileupload({
    useTempFiles:true,
    tempFileDir:"/tmp/"
}));

//connecting to data base
connectdb();

//starting server at respective port
app.listen(PORT,()=>{
    console.log(`server is running at port ${PORT}`);
})


//listening req at / route
app.use("/",(req,res)=>{
    res.send("yes its the home page!");
})

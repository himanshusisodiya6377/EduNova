const mongoose=require("mongoose");
require("dotenv").config();

const ConnectDb=async()=>{
    try{
       await mongoose.connect(process.env.MONGO_URL,{
        useNewUrlParser:true,
        useUnifiedTopology:true
       });
       console.log("mongo db connected!");
    }
    catch(error){
       console.log(error);
       console.log("mongo db not connected!");
    }
}

module.exports=ConnectDb;

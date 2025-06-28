const mongoose=require("mongoose");

const catSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true,
    },
    description:{
        type:String,
        required:true,
    }
})

const catModel=mongoose.model("category",catSchema);

module.exports=catModel;
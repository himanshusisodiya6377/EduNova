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

const catModel=mongoose.model("Category",catSchema);

module.exports=catModel;
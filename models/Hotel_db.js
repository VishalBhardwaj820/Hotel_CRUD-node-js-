const mongoose=require('mongoose');

const Hotel_Schema=new mongoose.Schema({

    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    }


},{timestamps:true});

const Hotel_DB=mongoose.model('Hotel_DB',Hotel_Schema);

module.exports=Hotel_DB;
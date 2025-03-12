

const mongoose=require("mongoose")

const customerSchema=new mongoose.Schema({
    name:{type:String,required:true},
    address:{type:String,required:true},
    email:{type:String,required:true},
    city:{type:String,required:true},
    mobile:{type:String,required:true},
    accountType:{type:String},
    createdAt: { type: Date, default: Date.now},

})

module.exports=mongoose.model("customer",customerSchema)
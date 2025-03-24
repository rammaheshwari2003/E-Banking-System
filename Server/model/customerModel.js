const mongoose=require("mongoose")

const customerSchema=new mongoose.Schema({
    accountID:{type:mongoose.Schema.Types.ObjectId,ref:"account"},
    name:{type:String,required:true},
    address:{type:String,required:true},
    email:{type:String,required:true},
    city:{type:String,required:true},
    mobile:{type:String,required:true},
    accountType:{type:String,required:true},
    password:{type:String, require:true},
    Date: { type: Date, default: Date.now},

})

module.exports=mongoose.model("customer",customerSchema)
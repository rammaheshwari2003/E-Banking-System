const mongoose=require("mongoose");
const accountSchema=new mongoose.Schema({
    customerId:{type:mongoose.Schema.Types.ObjectId, ref:"customer"},
    accountNumber:{type:Number, required:true, unique:true},
    balance:{type:Number, default:"0.00"},
    transactionID:[{type:mongoose.Schema.Types.ObjectId, ref:"transaction"}]
})

module.exports=mongoose.model("account",accountSchema);
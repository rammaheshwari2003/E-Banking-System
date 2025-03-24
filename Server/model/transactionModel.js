const mongoose=require("mongoose");

const transactionSchema=new mongoose.Schema({

    customerId:{type:mongoose.Schema.Types.ObjectId,ref:"customer"},
    accountNumber:{type:mongoose.Schema.Types.ObjectId,ref:"account"},
    amount:{type:Number,required:true},
    transactionType:{type:String,required:true},
    Date: { type: Date, default: Date.now}

})

module.exports=mongoose.model("transaction",transactionSchema);
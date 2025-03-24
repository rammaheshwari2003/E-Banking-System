const mongoose=require("mongoose");

const connetDB=async()=>{
    try {
        let db=await mongoose.connect(process.env.DBCONNECT);
        console.log("Db Connected");
    } catch (error) {
        console.log(error);
    }
};

module.exports={connetDB}
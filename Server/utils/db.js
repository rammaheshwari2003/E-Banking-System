const mongoose=require("mongoose");

// const connectDB = async () => {
//     try {
//         const conn = await mongoose.connect(process.env.DBCONNECT);
//         console.log(`MongoDB Connected: ${conn.connection.host}`);
//     } catch (error) {
//         console.error(`Error: ${error.message}`);
//         process.exit(1);
//     }
// };


const connetDB=async()=>{
    try {
        let db=await mongoose.connect(process.env.DBCONNECT);
        console.log("Db Connected");
    } catch (error) {
        console.log(error);
    }
};

module.exports={connetDB}
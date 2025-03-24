const express=require("express");
const app=express();
const cors=require("cors");
const bodyparser = require("body-parser");
const db=require("./utils/db");

const customerRoute=require("./route/customerRoute");
const accountRoute=require("./route/accountRoute");

require("dotenv").config();


app.use(cors());
app.use(bodyparser.urlencoded({extended:true}))
app.use(bodyparser.json())

db.connetDB();

app.use("/customer",customerRoute);
app.use("/account",accountRoute);


const port=process.env.PORT || 8000;

app.listen(port, ()=>{
    console.log(`Server run on port ${port}`);
})
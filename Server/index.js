const express=require("express");
const app=express();
const cors=require("cors");
const bodyparser = require("body-parser");
const db=require("./utils/db");

const customerRoute=require("./route/customerRoute");

require("dotenv").config();

// CORS configuration options
/*  const corsOptions = {
    origin: 'https://example.com', // Specify the allowed origin
    methods: ['GET', 'POST'], // Specify allowed HTTP methods
    allowedHeaders: ['Content-Type'], // Specify allowed headers
    credentials: true, // Allow credentials (cookies, authentication)
};  */

app.use(cors());
app.use(bodyparser.urlencoded({extended:true}))
app.use(bodyparser.json())

db.connetDB();

app.use("/customer",customerRoute);


const port=process.env.PORT || 8000;

app.listen(port, ()=>{
    console.log(`Server run on port ${port}`);
})
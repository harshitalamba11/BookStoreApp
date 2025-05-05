// const express=require("express");
// const dotenv=require("dotenv");
import  express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import cors from "cors";



const app=express();
app.use(cors());
app.use(express.json()) //json meh body request data conversion
dotenv.config();
const port=process.env.PORT || 3000;

//connect to mongodb
const URI=process.env.MongoDBURI;

try{
    mongoose.connect(URI);
    console.log("Connected to MongoDB")
}catch(err){
    console.log("Error connecting to MongoDB",err)
}



import bookRoute from "./Route/book.route.js";
import userRoute from "./Route/user.route.js"
app.use("/book",bookRoute);
app.use("/user",userRoute)

app.listen(port,()=>{
    console.log(`Server is running on http://localhost:${port}`)
}) 
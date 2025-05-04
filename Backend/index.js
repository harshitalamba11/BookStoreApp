// const express=require("express");
// const dotenv=require("dotenv");
import  express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import bookRoute from "./Route/book.route.js";
import cors from "cors";

const app=express();
app.use(cors());
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

app.use("/book",bookRoute)

app.listen(port,()=>{
    console.log(`Server is running on http://localhost:${port}`)
}) 
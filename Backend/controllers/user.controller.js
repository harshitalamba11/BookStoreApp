import User from "../model/user.model.js";
import bcryptjs from "bcryptjs";


export const signup=async (req,res)=>{
    //body se data chahiye pehle
    try{
        const {Fullname,email,password}=req.body;
        const user=await User.findOne({ email })
        if(user){
            return res.status(400).json({message:"User already exists"})
        }
        //password hashing
        const hashedPassword=await bcryptjs.hash(password,10);
    
            const createdUser=new User({
                Fullname:Fullname,
                email:email,
                password:hashedPassword
            })
            await createdUser .save().catch(err => {
                console.error("Error saving user:", err.message);
                return res.status(500).json({ message: "Error saving user" });
            });
            res.status(201).json({ message: "User  created successfully" });
        
    }
    catch(error){
        console.log("Error"+error.message);
        res.status(500).json({message:error.message})
    }
}


export const login=async(req,res)=>{
    try{
        const {email,password}=req.body;
        const user=await User.findOne({email});
        const isMatch=await bcryptjs.compare(password,user.password);
      if(!user || !isMatch){
            return res.status(400).json({message:"Invalid credentials"})
        }else{
        res.status(200).json({message:"Login successful",

            user:{
            _id:user._id,
            Fullname:user.Fullname,
            email:user.email
            }
        })
        }
    }
    catch(error){
        console.log("Error"+error.message);
        res.status(500).json({message:error.message})
    }
}
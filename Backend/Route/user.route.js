import express from "express";
import { signup } from "../controllers/user.controller.js"
import { login } from "../controllers/user.controller.js"
const router=express.Router();


router.post("/signup",signup)
router.post("/login",login)


export default router;

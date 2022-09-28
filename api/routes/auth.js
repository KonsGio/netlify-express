import express from "express";
import { register } from "../controllers/auth.js";

const router = express.Router();

// http://localhost:8800/auth/register
router.post("/register", register)


export default router
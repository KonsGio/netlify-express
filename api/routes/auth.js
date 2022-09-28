import express from "express";
import { login, register } from "../controllers/auth.js";

const router = express.Router();

// http://localhost:8800/auth/register
router.post("/register", register)

// http://localhost:8800/auth/login
router.post("/login", login)

export default router
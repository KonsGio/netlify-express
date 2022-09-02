import express from "express";

const router = express.Router();

// http://localhost:8800/auth
router.get("/", (req, res) => {
    res.send("Hello, this is auth endpoint")
})

// http://localhost:8800/auth/register
router.get("/register", (req, res) => {
    res.send("Hello, this is registration endpoint")
})


export default router
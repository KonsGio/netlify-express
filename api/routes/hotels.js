import express from "express";
import { countByCity, countByType, createHotel, deleteHotel, getHotel, getHotels, updateHotel } from "../controllers/hotel.js";
import Hotel from "../models/Hotel.js";
import { verifyUser } from "../utils/verifyToken.js";

const router = express.Router();

// CREATE
router.post('/',verifyUser, createHotel);

// UPDATE
router.put('/:id',verifyUser, updateHotel);

// DELETE
router.delete('/:id',verifyUser, deleteHotel);

// GET
router.get('/find/:id', getHotel);

// GET ALL
router.get('/', getHotels);

router.get('/countByCity', countByCity);
router.get('/countByType', countByType);

export default router
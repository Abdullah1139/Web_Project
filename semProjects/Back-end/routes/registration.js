import express from ' express';
import { createRegistration, getRegistration } from '../controllers/registration.js';
const router= express.Router();

router.get("/",getRegistration)
router.post("/",createRegistration)
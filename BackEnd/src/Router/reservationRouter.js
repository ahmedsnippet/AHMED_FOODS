import { Router } from "express";
import { sendReservation } from "../Controller/reservationController.js";


const router = Router()

router.post("/sendMessage", sendReservation)


export default router
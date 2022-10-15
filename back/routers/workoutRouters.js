import {protect} from "../middleware/authMiddleware.js"
import express from "express";
import {addNewWorkout} from "../controllers/workout/workoutController.js";

const router = express.Router()

router.route("/").post(protect, addNewWorkout)

export default router
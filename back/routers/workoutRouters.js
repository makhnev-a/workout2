import {protect} from "../middleware/authMiddleware.js"
import express from "express";
import {addNewWorkout, getWorkout} from "../controllers/workout/workoutController.js";

const router = express.Router()

router.route("/").post(protect, addNewWorkout)
router.route("/:id").get(protect, getWorkout)

export default router
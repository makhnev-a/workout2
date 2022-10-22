import {protect} from "../middleware/authMiddleware.js"
import express from "express";
import {addNewWorkout, getWorkout, updateWorkout} from "../controllers/workout/workoutController.js";
import {createNewWorkoutLog} from "../controllers/workout/createWorkoutLog.js";

const router = express.Router()

router.route("/").post(protect, addNewWorkout)
router.route("/").put(protect, updateWorkout)
router.route("/log").post(protect, createNewWorkoutLog)
router.route("/:id").get(protect, getWorkout)

export default router
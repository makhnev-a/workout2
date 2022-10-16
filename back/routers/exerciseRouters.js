import {addNewExercise} from "../controllers/exercise/mainController.js";
import {createNewExerciseLog} from "../controllers/exercise/logController.js";
import {protect} from "../middleware/authMiddleware.js"
import express from "express";

const router = express.Router()

router.route("/").post(protect, addNewExercise)
router.route("/log").post(protect, createNewExerciseLog)

export default router
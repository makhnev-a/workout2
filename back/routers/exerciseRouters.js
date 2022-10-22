import express from "express";
import {protect} from "../middleware/authMiddleware.js"
import {addNewExercise} from "../controllers/exercise/mainController.js";
import {getExerciseLog} from "../controllers/exercise/log/getController.js";
import {updateCompleteExerciseLog, updateExerciseLog} from "../controllers/exercise/log/updateController.js";

const router = express.Router()

router.route("/").post(protect, addNewExercise)
router.route("/log").put(protect, updateExerciseLog)
router.route("/log/completed").put(protect, updateCompleteExerciseLog)
router.route("/log/:id").get(protect, getExerciseLog)

export default router
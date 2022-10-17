import express from "express";
import {protect} from "../middleware/authMiddleware.js"
import {addNewExercise} from "../controllers/exercise/mainController.js";
import {getExerciseLog} from "../controllers/exercise/log/getController.js";
import {createNewExerciseLog} from "../controllers/exercise/log/createController.js";
import {updateExerciseLog} from "../controllers/exercise/log/updateController.js";

const router = express.Router()

router.route("/").post(protect, addNewExercise)
// router.route("/log").post(protect, createNewExerciseLog)
router.route("/log").put(protect, updateExerciseLog)
router.route("/log/:id").get(protect, getExerciseLog)

export default router
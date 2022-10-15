import expressAsyncHandler from "express-async-handler";
import Workout from "../../models/workoutModel.js";

// @desc    Create workout
// @route   POST /api/workouts
// @access  Private
export const addNewWorkout = expressAsyncHandler(async (req, res) => {
    const {name, exerciseIds} = req.body

    const workout = await Workout.create({
        name,
        exercises: exerciseIds
    })

    res.json(workout)
})
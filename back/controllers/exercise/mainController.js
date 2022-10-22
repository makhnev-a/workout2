import expressAsyncHandler from "express-async-handler";
import Exercise from "../../models/exerciseModel.js";

// @desc    Create exercise
// @route   POST /api/exercises
// @access  Private
export const addNewExercise = expressAsyncHandler(async (req, res) => {
    const {name, times, image} = req.body

    const exercise = await Exercise.create({
        name,
        times,
        image
    })

    res.json(exercise)
})

// @desc    Update exercise
// @route   PUT /api/exercises/:id
// @access  Private
export const updateExercise = expressAsyncHandler(async (req, res) => {
    const {name, times, imageId, exerciseId} = req.body

    const exercise = await Exercise.findById(exerciseId)

    if (!exercise) {
        res.status(404)
        throw new Error("Данное упражнение не найдено")
    }

    exercise.name = name
    exercise.times = times
    exercise.imageId = imageId

    const updatedExercise = await exercise.save()

    res.json(updatedExercise)
})
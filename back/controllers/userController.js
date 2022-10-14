// @desc    Get user profile
// @route   GET /api/users/profile
// @access  Private
export const getUserProfile = (req, res) => {
    const user = {
        name: "Andrey",
        age: 30
    }

    res.json(user)
}
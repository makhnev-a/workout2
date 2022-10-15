// @desc    Get user profile
// @route   GET /api/users/profile
// @access  Private
import User from "../../models/userModel.js";
import expressAsyncHandler from "express-async-handler";

export const getUserProfile = expressAsyncHandler(async (req, res) => {
    const user = await User.findById(req.user._id).select("-password")
    res.json(user)
})
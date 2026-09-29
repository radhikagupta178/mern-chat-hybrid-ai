import User from '../models/user.model.js';

const getUsersForSidebar = async (req, res) => {
    try {
        const loggedInUserId = req.user._id,
            filteredUsers = await User.find({ _id: { $ne: loggedInUserId } }).select("-password");
        res.status(200).json(filteredUsers);

    } catch (error) {
        console.log("Error in getUsersForSidebar controller: ", error.message);
        res.status(500).json({ error: "Internal Server Error" });
    }
}

export default getUsersForSidebar;
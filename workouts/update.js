// Update user details in the database.

const User = require("./models/User");

const updateUser = async (req) => {
    const email = req.session.user.email;

    try {
        const updatedUser = await User.findOneAndUpdate(
            { email },
            { $set: { age: 29 } },
            { new: true },
        );

        console.log("Updated User:", updatedUser);
    } catch (error) {
        console.error("Error updating user:", error.message);
    }
};

updateUser();
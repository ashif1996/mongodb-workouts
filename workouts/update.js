// Update user details in the database.

const User = require("./models/User");

const updateUser = async () => {
    try {
        const updatedUser = await User.findOneAndUpdate(
            { email: "ashif@example.com" },
            { $set: { age: 29 } },
            { new: true },
        );
        
        console.log("Updated User:", updatedUser);
    } catch (error) {
        console.error("Error updating user:", error.message);
    }
};

updateUser();
// Delete a user from the database.

const User = require("./models/User");

const deleteUser = async (req) => {
    const email = req.session.user.email;

    try {
        const deletedUser = await User.findOneAndDelete({ email });
        console.log("Deleted User:", deletedUser);
    } catch (error) {
        console.error("Error deleting user:", error.message);
    }
};

deleteUser();
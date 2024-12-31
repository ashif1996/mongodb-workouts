// Delete a user from the database.

const User = require("./models/User");

const deleteUser = async () => {
    try {
        const deletedUser = await User.findOneAndDelete({ email: "alice@example.com" });
        console.log("Deleted User:", deletedUser);
    } catch (error) {
        console.error("Error deleting user:", error.message);
    }
};

deleteUser();
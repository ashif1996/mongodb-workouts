// Count the number of documents in a collection.

const User = require("./models/User");

const countUsers = async () => {
    try {
        const totalUsers = await User.countDocuments();
        console.log("Total Users:", totalUsers);
    } catch (error) {
        console.error("Error counting users:", error.message);
    }
};

countUsers();
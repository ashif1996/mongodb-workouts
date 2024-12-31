// Retrieve users from the database with filtering and projection.

const User = require("./models/User");

const getUsers = async () => {
    try {
        const allUsers = await User.find()
            .select("_id name age")
            .lean();

        console.log("All Users:", allUsers);

        const filteredUsers = await User.find({ age: { $gt: 20 } })
            .select("_id name age")
            .lean();

        console.log("Filtered Users:", filteredUsers);
    } catch (error) {
        console.error("Error reading users:", error.message);
    }
};

getUsers();
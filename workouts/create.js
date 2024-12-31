// Insert a new user into the database.

const User = require("./models/User");

const createUser = async () => {
    try {
        const newUser = await User.create({
            name: "Ashif",
            email: "ashif@example.com",
            age: 28,
        });

        console.log("User created:", newUser);
    } catch (error) {
        console.error("Error creating user:", error.message);
    }
};

createUser();
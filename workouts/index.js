// Improve query performance by adding an index.

const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
        },
        email: {
            type: String,
            required: true,
            unique: true,
        },
    },
    {
        timestamps: true,
    },
);

userSchema.index({ email: 1 }); // Unique index on email

const User = mongoose.model("User", userSchema);


// Test query with the indexed field
const findUserByEmail = async (req) => {
    const email = req.session.user.email;

    try {
        const user = await User.findOne({ email })
            .select("name email")
            .lean();

        console.log("User found:", user);
    } catch (error) {
        console.error("Error fetching user:", error.message);
    }
};

findUserByEmail();
// Enforce data validation rules directly in the schema.

const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: [true, "Name is required"],
        },
        email: {
            type: String,
            required: [true, "Email is required"],
            unique: true,
            match: [/.+@.+\..+/, "Please enter a valid email"],
        },
        age: {
            type: Number,
            min: [18, "Age must be at least 18"],
            max: 100,
        },
        isActive: {
            type: Boolean,
            default: true,
        },
    },
    {
        timestamps: true,
    },
);

const User = mongoose.model("User", userSchema);

module.exports = User;
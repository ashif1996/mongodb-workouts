// Create a Post schema that references a User.

const mongoose = require("mongoose");

const postSchema = new mongoose.Schema(
    {
        title: {
            type: String,
            required: true
        },
        content: {
            type: String,
            required: true
        },
        author: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User",
            required: true,
        },
    },
    {
        timestamps: true,
    }
);

const Post = mongoose.model("Post", postSchema);


// Create a post with a user reference

const createPost = async () => {
    const userId = req.session.user._id;

    try {
        const newPost = await Post.create({
            title: "Introduction to MongoDB",
            content: "This is a basic guide to MongoDB relationships.",
            author: userId,
        });

        console.log("Post created:", newPost);
    } catch (error) {
        console.error("Error creating post:", error.message);
    }
};

createPost();
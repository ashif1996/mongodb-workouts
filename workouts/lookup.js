// Join two collections using the aggregation pipeline.

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

const postSchema = new mongoose.Schema(
    {
        title: {
            type: String,
            required: true,
        },
        content: {
            type: String,
            required: true,
        },
        author: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User",
            required: true,
        },
    },
    {
        timestamps: true,
    },
);

const User = mongoose.model("User", userSchema);
const Post = mongoose.model("Post", postSchema);


const getPostsWithAuthors = async () => {
    try {
        const posts = await Post.aggregate([
            {
                $lookup: {
                    from: "users",
                    localField: "author",
                    foreignField: "_id",
                    as: "authorDetails",
                },
            },
            { $unwind: "$authorDetails" },
            { 
                $project: {
                    title: 1,
                    content: 1,
                    "authorDetails.name": 1,
                    "authorDetails.email": 1,
                },
            },
        ]);

        console.log("Posts with authors:", posts);
    } catch (error) {
        console.error("Error fetching posts with authors:", error.message);
    }
};

getPostsWithAuthors();
// Perform advanced queries using the aggregation pipeline.

const User = require("./models/User");

const aggregateUsers = async () => {
    try {
        const result = await User.aggregate([
            { $match: { age: { $gte: 20 } } },
            { $group: { _id: null, averageAge: { $avg: "$age" } } },
        ]);
        
        console.log("Aggregation Result:", result);
    } catch (error) {
        console.error("Error in aggregation:", error.message);
    }
};

aggregateUsers();
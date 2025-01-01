// Create a Student and Course schema to model a many-to-many relationship.

const mongoose = require("mongoose");

const studentSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
        },
        courses: [
            {
                type: mongoose.Schema.Types.ObjectId,
                ref: "Course",
            },
        ],
    },
    {
        timestamps: true,
    },
);

const courseSchema = new mongoose.Schema(
    {
        title: {
            type: String,
            required: true,
        },
        students: [
            {
                type: mongoose.Schema.Types.ObjectId,
                ref: "Student",
            },
        ],
    },
    {
        timestamps: true,
    },
);

const Student = mongoose.model("Student", studentSchema);
const Course = mongoose.model("Course", courseSchema);


// Enroll a student in a course
const enrollStudent = async () => {
    try {
        const course = await Course.create({ title: "Node.js Advanced" });
        const student = await Student.create({ name: "John Doe", courses: [course._id] });

        await Course.updateOne(
            { _id: course._id }, 
            { $push: { students: student._id } }
        );

        console.log("Student enrolled:", student);
    } catch (error) {
        console.error("Error enrolling student:", error.message);
    }
};

enrollStudent();
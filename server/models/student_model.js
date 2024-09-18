import mongoose from 'mongoose';

const studentSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
        },

        roll_no: {
            type: String,
            required: true,
            unique: true,
        },

        email: {
            type: String,
            required: true,
            unique: true,
        },

        gender: {
            type: String,
            enum: ['Male', 'Female', 'Other'],
            required: true,
        },

        password: {
            type: String,
            required: true,
        },

        cgpa: {
            type: Number,
            required: true,
        },

        branch: {
            type: String,
            enum: ['DSAI', 'CSE', 'ECE'],
            required: true,
        },

        phone_no: {
            type: String,
            required: true,
        },

        address: {
            type: String,
            required: true,
        },

        linkedin_url: {
            type: String,
            default: "",
        },

        passout_year: {
            type: Number,

        },

        applications: [
            {
                company: {
                    type: mongoose.Schema.Types.ObjectId,
                    ref: "jobs",
                },

                status: {
                    type: String,
                    enum: ["Applied", "Pending", "Accepted", "Rejected"],
                    default: "Applied",
                },
            }
        ],

        bookmarks: [
            {
                type: mongoose.Schema.Types.ObjectId,
                ref: "jobs",
            }
        ],

        profile_pic: {
            type: String,
            default: "",
        },

        resume: {
            type: String,
            default: "",
        },

        github_url: {
            type: String,
            default: "",
        },

        portfolio_url: {
            type: String,
            default: "",
        },

    }, { timestamps: true }
);

const Student = mongoose.model("student", studentSchema)

export default Student;
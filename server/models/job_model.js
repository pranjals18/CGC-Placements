import mongoose from 'mongoose';

const jobSchema = new mongoose.Schema(
    {

        company: {

            name: {
                type: String,
                required: true,
            },
            image: {
                type: String,
                default: "",
            },
            email: {
                type: String,
                required: true,
            },
            address: {
                type: String,
                required: true,
            },
            contact: {
                type: Number,
                required: true,
            },
            website: {
                type: String,
                default: "",
            },

        },

        roles: [
            {
                title: {
                    type: String,
                    required: true,
                },
                description: {
                    type: String,
                    required: true,
                },
                application_deadline: {
                    type: Date,
                    required: true,
                },
                eligibility: {
                    type: Number,
                    default: 0,
                },
                min_experience: {
                    type: Number,
                    default: 0,
                },
                salary: {
                    type: Number,
                    required: true,
                },
                employment_type: {
                    type: String,
                    enum: ['Full Time', 'Part Time', 'Contract', 'Internship', 'Work From Home'],
                    required: true,
                },
                location: {
                    type: String,
                    required: true,
                },
            },
        ],


        status: {
            type: String,
            enum: ['open', 'closed', 'filled'],
            default: 'open',
        },

        applications: [
            {
                type: mongoose.Schema.Types.ObjectId,
                ref: "student",
            }
        ],


    }, { timestamps: true }
);

const Job = mongoose.model("job", jobSchema)

export default Job;

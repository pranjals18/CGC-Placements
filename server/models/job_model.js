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


// Sample data for Google and Amazon

// {
//     "company": {
//         "name": "Google",
//         "image": "https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg",
//         "email": "p5Nl7@example.com",
//         "address": "1600 Amphitheatre Parkway, Mountain View, CA 94043",
//         "contact": 1234567890,
//         "website": "https://www.google.com"
//     },
//     "roles": [
//         {
//             "title": "Software Engineer",
//             "description": "Design, develop, and maintain software applications.",
//             "application_deadline": "2022-06-30",
//             "eligibility": 80,
//             "min_experience": 2,
//             "salary": 100000,
//             "employment_type": "Full Time",
//             "location": "Mountain View, CA"
//         }
//     ],
//     "status": "open",
//     "applications": [],
// }

// {
//     "company": {
//         "name": "Amazon",
//         "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/9/93/Amazon_Web_Services_Logo.svg/800px-Amazon_Web_Services_Logo.svg.png",
//         "email": "p5Nl7@example.com",
//         "address": "1600 Amphitheatre Parkway, Mountain View, CA 94043",
//         "contact": 1234567890,
//         "website": "https://www.google.com"
//     },
//     "roles": [
//         {
//             "title": "Software Engineer",
//             "description": "Design, develop, and maintain software applications.",
//             "application_deadline": "2022-06-30",
//             "eligibility": 80,
//             "min_experience": 2,
//             "salary": 100000,
//             "employment_type": "Full Time",
//             "location": "Mountain View, CA"
//         }
//     ],
//     "status": "open",
//     "applications": [],
// }

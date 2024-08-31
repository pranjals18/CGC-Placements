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

        address_details: {

            address: {
                type: String,
                required: true,
            },

            state: {
                type: String,
                required: true,
            },

            city: {
                type: String,
                required: true,
            },

            pincode: {
                type: Number,
                required: true,
            },

            country: {
                type: String,
                required: true,
            },

        },

        linkedin_url: {
            type: String,
            default: "",
        },

        passout_year: {
            type: Number,
            required: true,
        },

        applications: [
            {
                company: {
                    type: mongoose.Schema.Types.ObjectId,
                    ref: "jobs",
                },

                status: {
                    type: String,
                    enum: ["pending", "accepted", "rejected"],
                    default: "pending",
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

    }, { timestamps: true }
);

const Student = mongoose.model("student", studentSchema)

export default Student;


// Create a example json data for above model with names Pranjal, Milind, Saksham, Rahul and Chinmay

// {
//     "name": "Pranjal",
//     "roll_no": "21bds062",
//     "email": "21bds062@iiitdwd.ac.in",
//     "gender": "Male",
//     "password": "12345",
//     "cgpa": 8.5,
//     "branch": "DSAI",
//     "phone_no": "1234567890",
//     "passout_year": 2025,
//     "address_details": {
//         "address": "123 Main St",
//         "state": "CA",
//         "city": "San Francisco",
//         "pincode": 94105,
//         "country": "USA"
//     },
//     "linkedin_url": "https://www.linkedin.com/in/pranjal/"
// }

//  {
//     "name": "Milind",
//     "roll_no": "21bds038",
//     "email": "21bds038@iiitdwd.ac.in",
//     "gender": "Male",
//     "password": "12345",
//     "cgpa": 8.5,
//     "branch": "DSAI",
//     "phone_no": "1234567890",
//     "passout_year": 2025,
//     "address_details": {
//         "address": "123 Main St",
//         "state": "CA",
//         "city": "San Francisco",
//         "pincode": 94105,
//         "country": "USA"
//     },
//     "linkedin_url": "https://www.linkedin.com/in/milind/"
// }

//  {
//     "name": "Saksham",
//     "roll_no": "21bds058",
//     "email": "21bds058@iiitdwd.ac.in",
//     "gender": "Male",
//     "password": "12345",
//     "cgpa": 8.5,
//     "branch": "DSAI",
//     "phone_no": "1234567890",
//     "passout_year": 2025,
//     "address_details": {
//         "address": "123 Main St",
//         "state": "CA",
//         "city": "San Francisco",
//         "pincode": 94105,
//         "country": "USA"
//     },
//     "linkedin_url": "https://www.linkedin.com/in/saksham/"
// }

// {
//     "name": "Rahul",
//     "roll_no": "21bds054",
//     "email": "21bds054@iiitdwd.ac.in",
//     "gender": "Male",
//     "password": "12345",
//     "cgpa": 8.5,
//     "branch": "DSAI",
//     "phone_no": "1234567890",
//     "passout_year": 2025,
//     "address_details": {
//         "address": "123 Main St",
//         "state": "CA",
//         "city": "San Francisco",
//         "pincode": 94105,
//         "country": "USA"
//     },
//     "linkedin_url": "https://www.linkedin.com/in/rahul/"
// }

// {
//     "name": "Chinmay",
//     "roll_no": "21bds014",
//     "email": "21bds014@iiitdwd.ac.in",
//     "gender": "Male",
//     "password": "12345",
//     "cgpa": 8.5,
//     "branch": "DSAI",
//     "phone_no": "1234567890",
//     "passout_year": 2025,
//     "address_details": {
//         "address": "123 Main St",
//         "state": "CA",
//         "city": "San Francisco",
//         "pincode": 94105,
//         "country": "USA"
//     },
//     "linkedin_url": "https://www.linkedin.com/in/chinmay/"
// }   
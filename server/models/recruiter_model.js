// import mongoose from 'mongoose';

// const recruiterSchema = new mongoose.Schema(
//     {
//         name: {
//             type: String,
//             required: true,
//         },

//         email: {
//             type: String,
//             required: true,
//             unique: true,
//         },

//         password: {
//             type: String,
//             required: true,
//         },

//         company_name: {
//             type: String,
//             required: true,
//         },

//         job_postings: [
//             {
//                 type: mongoose.Schema.Types.ObjectId,
//                 ref: "job",
//             }
//         ],

//     }, { timestamps: true }
// );

// const Recruiter = mongoose.model("recruiter", recruiterSchema)

// export default Recruiter;


// // Sapmle data for recruiters named Pranjal Recruiter, Milind Recruiter, Saksham Recruiter, Rahul Recruiter and Chinmay Recruiter

// // {
// //     "name": "Pranjal",
// //     "email": "21bds062@iiitdwd.ac.in",
// //     "password": "12345",
// //     "company_name": "IIITDWD"
// // }

// // {
// //     "name": "Milind",
// //     "email": "21bds038@iiitdwd.ac.in",
// //     "password": "12345",
// //     "company_name": "IIITDWD"
// // }

// // {
// //     "name": "Saksham",
// //     "email": "21bds058@iiitdwd.ac.in",
// //     "password": "12345",
// //     "company_name": "IIITDWD"
// // }

// // {
// //     "name": "Rahul",
// //     "email": "21bds054@iiitdwd.ac.in",
// //     "password": "12345",
// //     "company_name": "IIITDWD"
// // }

// // {
// //     "name": "Chinmay",
// //     "email": "21bds014@iiitdwd.ac.in",
// //     "password": "12345",
// //     "company_name": "IIITDWD"
// // }
// // import Recruiter from '../models/recruiters_model.js';
// // import bcrypt from 'bcrypt';


// // export const handleCreateRecruiter = async (req, res) => {

// //     try {

// //         const { name, email, password, company_name } = req.body;

// //         if (!name || !email || !password || !company_name) {
// //             return res.status(400).json({ message: 'All fields are required' });
// //         }

// //         const hashedPassword = await bcrypt.hash(password, 10);
// //         const recruiter = new Recruiter({
// //             name,
// //             email,
// //             password: hashedPassword,
// //             company_name,

// //         });

// //         await recruiter.save();
// //         res.status(201).json({ message: 'Recruiter created successfully' });

// //     } catch (error) {
// //         res.status(400).json({ message: error.message });
// //     }
// // }

// // export const handleGetRecruiter = async (req, res) => {
// //     try {
// //         const recruiters = await Recruiter.find();
// //         res.status(200).json(recruiters);
// //     } catch (error) {
// //         res.status(404).json({ message: error.message });
// //     }

// // }

// // export const handleGetRecruiterById = async (req, res) => {
// //     try {
// //         const { id } = req.params;
// //         const recruiter = await Recruiter.findById(id);
// //         if (!recruiter) {
// //             return res.status(404).json({ message: 'Recruiter not found' });
// //         }
// //         res.status(200).json(recruiter);
// //     } catch (error) {
// //         res.status(400).json({ message: error.message });
// //     }

// // }

// // export const handleUpdateRecruiter = async (req, res) => {
// //     try {
// //         const { id } = req.params;

// //         let updateData = { ...req.body };

// //         // Check if password is being updated
// //         if (updateData.password) {
// //             const salt = await bcrypt.genSalt(10);
// //             updateData.password = await bcrypt.hash(updateData.password, salt);
// //         }

// //         const updatedRecruiter = await Recruiter.findByIdAndUpdate(id, updateData, { new: true });
// //         if (!updatedRecruiter) {
// //             return res.status(404).json({ message: 'Recruiter not found' });
// //         }

// //         res.status(200).json({ message: 'Recruiter updated successfully' });
// //     } catch (error) {
// //         res.status(400).json({ message: error.message });
// //     }

// // }


// // export const handleDeleteRecruiter = async (req, res) => {
// //     try {
// //         const { id } = req.params;
// //         const deletedRecruiter = await Recruiter.findByIdAndDelete(id);
// //         if (!deletedRecruiter) {
// //             return res.status(404).json({ message: 'Recruiter not found' });
// //         }
// //         res.status(200).json({ message: 'Recruiter deleted successfully' });
// //     } catch (error) {
// //         res.status(400).json({ message: error.message });
// //     }
// // }



// import Recruiter from '../models/recruiter_model.js';
// import Job from '../models/job_model.js';  // Assuming you have this model
// import bcrypt from 'bcrypt';
// import jwt from 'jsonwebtoken';

// // CREATE Recruiter
// export const handleCreateRecruiter = async (req, res) => {
//     try {
//         const { name, email, password, company_name } = req.body;

//         if (!name || !email || !password || !company_name) {
//             return res.status(400).json({ message: 'All fields are required' });
//         }

//         const hashedPassword = await bcrypt.hash(password, 10);
//         const recruiter = new Recruiter({
//             name,
//             email,
//             password: hashedPassword,
//             company_name,
//         });

//         await recruiter.save();
//         res.status(201).json({ message: 'Recruiter created successfully' });

//     } catch (error) {
//         res.status(400).json({ message: error.message });
//     }
// };

// // GET all Recruiters
// export const handleGetRecruiter = async (req, res) => {
//     try {
//         const recruiters = await Recruiter.find();
//         res.status(200).json(recruiters);
//     } catch (error) {
//         res.status(404).json({ message: error.message });
//     }
// };

// // GET Recruiter by ID
// export const handleGetRecruiterById = async (req, res) => {
//     try {
//         const { id } = req.params;
//         const recruiter = await Recruiter.findById(id);
//         if (!recruiter) {
//             return res.status(404).json({ message: 'Recruiter not found' });
//         }
//         res.status(200).json(recruiter);
//     } catch (error) {
//         res.status(400).json({ message: error.message });
//     }
// };

// // UPDATE Recruiter
// export const handleUpdateRecruiter = async (req, res) => {
//     try {
//         const { id } = req.params;

//         let updateData = { ...req.body };

//         // Check if password is being updated
//         if (updateData.password) {
//             const salt = await bcrypt.genSalt(10);
//             updateData.password = await bcrypt.hash(updateData.password, salt);
//         }

//         const updatedRecruiter = await Recruiter.findByIdAndUpdate(id, updateData, { new: true });
//         if (!updatedRecruiter) {
//             return res.status(404).json({ message: 'Recruiter not found' });
//         }

//         res.status(200).json({ message: 'Recruiter updated successfully' });
//     } catch (error) {
//         res.status(400).json({ message: error.message });
//     }
// };

// // DELETE Recruiter
// export const handleDeleteRecruiter = async (req, res) => {
//     try {
//         const { id } = req.params;
//         const deletedRecruiter = await Recruiter.findByIdAndDelete(id);
//         if (!deletedRecruiter) {
//             return res.status(404).json({ message: 'Recruiter not found' });
//         }
//         res.status(200).json({ message: 'Recruiter deleted successfully' });
//     } catch (error) {
//         res.status(400).json({ message: error.message });
//     }
// };

// // LOGIN Recruiter
// export const handleRecruiterLogin = async (req, res) => {
//     try {
//         const { email, password } = req.body;

//         if (!email || !password) {
//             return res.status(400).json({ message: 'Email and password are required' });
//         }

//         const recruiter = await Recruiter.findOne({ email });
//         if (!recruiter) {
//             return res.status(404).json({ message: 'Recruiter not found' });
//         }

//         const isMatch = await bcrypt.compare(password, recruiter.password);
//         if (!isMatch) {
//             return res.status(400).json({ message: 'Invalid credentials' });
//         }

//         const token = jwt.sign({ id: recruiter._id }, process.env.JWT_SECRET, { expiresIn: '1h' });
//         res.status(200).json({ token });

//     } catch (error) {
//         res.status(400).json({ message: error.message });
//     }
// };

// // GET Jobs Posted by Recruiter
// export const handleGetRecruiterJobs = async (req, res) => {
//     try {
//         const { id } = req.params;
//         const recruiter = await Recruiter.findById(id).populate('job_postings');
//         if (!recruiter) {
//             return res.status(404).json({ message: 'Recruiter not found' });
//         }
//         res.status(200).json(recruiter.job_postings);
//     } catch (error) {
//         res.status(400).json({ message: error.message });
//     }
// };

// // GET Applications for a Job Posted by Recruiter
// export const handleGetRecruiterJobApplications = async (req, res) => {
//     try {
//         const { id, jobId } = req.params;
//         const job = await Job.findOne({ _id: jobId, recruiter: id }).populate('applications');
//         if (!job) {
//             return res.status(404).json({ message: 'Job not found' });
//         }
//         res.status(200).json(job.applications);
//     } catch (error) {
//         res.status(400).json({ message: error.message });
//     }
// };

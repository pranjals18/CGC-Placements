import Student from '../models/student_model.js';
import Job from '../models/job_model.js';
import bcrypt from 'bcrypt';
import multer from 'multer';
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
import upload from '../middleware/uploadProfileMiddleware.js';
dotenv.config();


export const handleSignUpStudent = async (req, res) => {
    upload(req, res, async function (err) {
        if (err instanceof multer.MulterError) {
            return res.status(400).json({ message: err.message });
        } else if (err) {
            return res.status(400).json({ message: err.message });
        }

        try {
            const { name, roll_no, email, password, gender, cgpa, branch, phone_no, linkedin_url, passout_year, address } = req.body;

            if (!name || !roll_no || !email || !password || !gender || !cgpa || !branch || !phone_no || !address) {
                return res.status(400).json({ message: 'All fields are required' });
            }

            const hashedPassword = await bcrypt.hash(password, 10);

            const profilePicPath = req.files?.profile_pic ? req.files.profile_pic[0].path : '';
            const resumePath = req.files?.resume ? req.files.resume[0].path : '';

            const student = new Student({
                name,
                roll_no,
                email,
                password: hashedPassword,
                gender,
                cgpa,
                branch,
                phone_no,
                address,
                linkedin_url,
                passout_year,
                profile_pic: profilePicPath,
                resume: resumePath,

            });

            await student.save();

            // Create a JWT token for the newly created student
            const token = jwt.sign({ studentId: student._id }, process.env.JWT_SECRET, { expiresIn: '1h' });

            // Send token in HttpOnly cookie
            res.cookie("jwt", token, {
                maxAge: 10 * 24 * 60 * 60 * 1000,
                httpOnly: true,
                sameSite: "none",
                secure: true,
                path: "/",
            });

            res.status(201).json({
                name: student.name,
                roll_no: student.roll_no,
                email: student.email,
                gender: student.gender,
                cgpa: student.cgpa,
                branch: student.branch,
                phone_no: student.phone_no,
                address: student.address,
                linkedin_url: student.linkedin_url,
                passout_year: student.passout_year,
                profile_pic: student.profile_pic,
                resume: student.resume,
                bookmarks: student.bookmarks,
                applications: student.applications,
                github_url: student.github_url,
                portfolio_url: student.portfolio_url,
            });

        } catch (error) {
            console.error(error);
            res.status(500).json({ message: 'Server error' });
        }
    });
};




export const handleSignInStudent = async (req, res) => {
    const { roll_no, password } = req.body;

    try {
        const student = await Student.findOne({ roll_no });
        if (!student) return res.status(400).json({ message: 'Invalid credentials' });

        const isMatch = await bcrypt.compare(password, student.password);
        if (!isMatch) return res.status(400).json({ message: 'Invalid credentials' });

        const token = jwt.sign({ studentId: student._id }, process.env.JWT_SECRET, { expiresIn: '10d' });


        res.cookie("jwt", token, {
            maxAge: 10 * 24 * 60 * 60 * 1000,
            httpOnly: true,
            sameSite: "none",
            secure: true,
            path: "/",
        });


        const data = {
            name: student.name,
            roll_no: student.roll_no,
            email: student.email,
            gender: student.gender,
            cgpa: student.cgpa,
            branch: student.branch,
            phone_no: student.phone_no,
            address: student.address,
            linkedin_url: student.linkedin_url,
            passout_year: student.passout_year,
            profile_pic: student.profile_pic,
            resume: student.resume,
            bookmarks: student.bookmarks,
            bookmarks: student.bookmarks,
            applications: student.applications,
            github_url: student.github_url,
            portfolio_url: student.portfolio_url,
        };

        console.log(data);

        res.json({
            name: student.name,
            roll_no: student.roll_no,
            email: student.email,
            gender: student.gender,
            cgpa: student.cgpa,
            branch: student.branch,
            phone_no: student.phone_no,
            address: student.address,
            linkedin_url: student.linkedin_url,
            passout_year: student.passout_year,
            profile_pic: student.profile_pic,
            resume: student.resume,
            bookmarks: student.bookmarks,
            applications: student.applications,
            github_url: student.github_url,
            portfolio_url: student.portfolio_url,
        });
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Server error' });
    }
}


export const handleGetStudents = async (req, res) => {
    try {
        const students = await Student.find();
        res.status(200).json(students);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
};

export const handleGetStudentById = async (req, res) => {
    try {
        const { id } = req.params;
        const student = await Student.findById(id);
        if (!student) {
            return res.status(404).json({ message: 'Student not found' });
        }

        const data = {
            name: student.name,
            roll_no: student.roll_no,
            email: student.email,
            gender: student.gender,
            cgpa: student.cgpa,
            branch: student.branch,
            phone_no: student.phone_no,
            address: student.address,
            linkedin_url: student.linkedin_url,
            passout_year: student.passout_year,
            profile_pic: student.profile_pic,
            resume: student.resume,
            bookmarks: student.bookmarks,
            bookmarks: student.bookmarks,
            applications: student.applications,
            github_url: student.github_url,
            portfolio_url: student.portfolio_url,
        };

        console.log(data);

        res.json({
            name: student.name,
            roll_no: student.roll_no,
            email: student.email,
            gender: student.gender,
            cgpa: student.cgpa,
            branch: student.branch,
            phone_no: student.phone_no,
            address: student.address,
            linkedin_url: student.linkedin_url,
            passout_year: student.passout_year,
            profile_pic: student.profile_pic,
            resume: student.resume,
            bookmarks: student.bookmarks,
            applications: student.applications,
            github_url: student.github_url,
            portfolio_url: student.portfolio_url,
        });
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

export const handleUpdateStudent = async (req, res) => {
    try {
        const userId = req.user;

        let updateData = { ...req.body };

        // Check if password is being updated
        if (updateData.password) {
            const salt = await bcrypt.genSalt(10);
            updateData.password = await bcrypt.hash(updateData.password, salt);
        }

        const student = await Student.findByIdAndUpdate(userId, updateData, { new: true });

        if (!student) {
            return res.status(404).json({ message: 'Student not found' });
        }

        console.log(student);


        const data = {
            name: student.name,
            roll_no: student.roll_no,
            email: student.email,
            gender: student.gender,
            cgpa: student.cgpa,
            branch: student.branch,
            phone_no: student.phone_no,
            address: student.address,
            linkedin_url: student.linkedin_url,
            passout_year: student.passout_year,
            profile_pic: student.profile_pic,
            resume: student.resume,
            bookmarks: student.bookmarks,
            bookmarks: student.bookmarks,
            applications: student.applications,
            github_url: student.github_url,
            portfolio_url: student.portfolio_url,
        };

        console.log(data);

        res.json({
            name: student.name,
            roll_no: student.roll_no,
            email: student.email,
            gender: student.gender,
            cgpa: student.cgpa,
            branch: student.branch,
            phone_no: student.phone_no,
            address: student.address,
            linkedin_url: student.linkedin_url,
            passout_year: student.passout_year,
            profile_pic: student.profile_pic,
            resume: student.resume,
            bookmarks: student.bookmarks,
            applications: student.applications,
            github_url: student.github_url,
            portfolio_url: student.portfolio_url,
        });
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

export const handleDeleteStudent = async (req, res) => {
    try {
        const { id } = req.params;
        const student = await Student.findByIdAndDelete(id);
        if (!student) {
            return res.status(404).json({ message: 'Student not found' });
        }
        res.status(200).json({ message: 'Student deleted successfully' });
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// Add application to a job
export const handleAddApplication = async (req, res) => {
    try {
        const { jobId } = req.params;

        const userId = req.user;

        const student = await Student.findById(userId);
        const job = await Job.findById(jobId);
        if (!student) {
            return res.status(404).json({ message: 'Student not found' });
        }

        if (student.applications.some(app => app.company.toString() === jobId)) {
            return res.status(400).json({ message: 'Application already exists' });
        }

        student.applications.push({ company: jobId });
        await student.save();

        job.applications.push(userId);
        await job.save();

        res.status(200).json({ message: 'Application added successfully' });
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// Remove application from a job
export const handleRemoveApplication = async (req, res) => {
    try {
        const { studentId } = req.params;
        const { jobId } = req.body;

        const student = await Student.findById(studentId);
        const job = await Job.findById(jobId);
        if (!student) {
            return res.status(404).json({ message: 'Student not found' });
        }

        student.applications = student.applications.filter(app => app.company.toString() !== jobId);
        await student.save();

        job.applications = job.applications.filter(app => app.toString() !== studentId);
        await job.save();

        res.status(200).json({ message: 'Application removed successfully' });
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};


export const handleAddBookmark = async (req, res) => {
    try {
        const { jobId } = req.params;

        // Ensure `req.user` contains the logged-in user's ID
        const userId = req.user;
        if (!userId) {
            return res.status(401).json({ message: 'Unauthorized: User not authenticated' });
        }

        // Find the student by userId
        const student = await Student.findById(userId); // Use userId instead of studentId
        if (!student) {
            return res.status(404).json({ message: 'Student not found' });
        }

        // Check if the job is already bookmarked
        if (student.bookmarks.includes(jobId)) {
            return res.status(400).json({ message: 'Job already bookmarked' });
        }

        // Add the jobId to the bookmarks
        student.bookmarks.push(jobId);
        await student.save();

        res.status(200).json({ message: 'Job bookmarked successfully' });
    } catch (error) {
        // Send a more detailed error message
        res.status(400).json({ message: error.message });
    }
};


export const handleDeleteBookmark = async (req, res) => {
    try {
        // Extract bookmarkId from request parameters
        const { bookmarkId } = req.params;

        // The userId should be set by authMiddleware
        const userId = req.user;

        // Find the student by ID
        const student = await Student.findById(userId);
        if (!student) {
            return res.status(404).json({ message: 'Student not found' });
        }

        if (!student.bookmarks.includes(bookmarkId)) {
            return res.status(400).json({ message: 'Bookmark not found' });
        }

        // Remove bookmark
        student.bookmarks = student.bookmarks.filter(bookmark => bookmark.toString() !== bookmarkId);
        await student.save();

        res.status(200).json({ message: 'Bookmark removed successfully' });
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

export const handleGetAllApplications = async (req, res) => {
    try {
        const { studentId } = req.params;
        const student = await Student.findById(studentId).populate('applications.company');
        if (!student) {
            return res.status(404).json({ message: 'Student not found' });
        }
        res.status(200).json(student.applications);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// Get all bookmarks of a student
export const handleGetAllBookmarks = async (req, res) => {
    try {
        const { studentId } = req.params;
        const student = await Student.findById(studentId).populate('bookmarks');
        if (!student) {
            return res.status(404).json({ message: 'Student not found' });
        }
        res.status(200).json(student.bookmarks);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};


export const handleGetApplicationById = async (req, res) => {
    try {
        const { studentId, applicationId } = req.params;

        const student = await Student.findById(studentId);
        if (!student) {
            return res.status(404).json({ message: 'Student not found' });
        }

        const application = student.applications.id(applicationId);
        if (!application) {
            return res.status(404).json({ message: 'Application not found' });
        }

        res.status(200).json(application);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};


export const handleGetBookmarkById = async (req, res) => {
    try {
        const { studentId, bookmarkId } = req.params;

        const student = await Student.findById(studentId);
        if (!student) {
            return res.status(404).json({ message: 'Student not found' });
        }

        const bookmark = student.bookmarks.id(bookmarkId);
        if (!bookmark) {
            return res.status(404).json({ message: 'Bookmark not found' });
        }

        res.status(200).json(bookmark);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};



export const uploadProfilePic = upload.single('profile_pic');

// Route handler
export const handleUploadProfilePic = async (req, res) => {
    try {
        // Check if file is uploaded
        if (!req.file) {
            return res.status(400).json({ message: 'No file uploaded' });
        }

        const userId = req.user;

        // Update student profile picture URL in the database
        const student = await Student.findById(userId);
        if (!student) {
            return res.status(404).json({ message: 'Student not found' });
        }

        student.profile_pic = req.file.path; // Cloudinary URL
        await student.save();

        res.status(200).json({ profile_pic: req.file.path }); // Send Cloudinary URL back to client
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};



export const handleUploadResume = async (req, res) => {
    try {
        if (!req.file) {
            return res.status(400).json({ message: 'No file uploaded' });
        }
        const userId = req.user;
        const student = await Student.findById(userId);
        if (!student) {
            return res.status(404).json({ message: 'Student not found' });
        }

        student.resume = req.file.path;
        await student.save();

        res.status(200).json({ resume: req.file.path });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
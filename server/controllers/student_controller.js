import Student from '../models/student_model.js';
import Job from '../models/job_model.js';
import bcrypt from 'bcrypt';
import multer from 'multer';
import jwt from 'jsonwebtoken';

// Set up multer for file uploads
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'uploads/'); // Directory where files will be saved
    },
    filename: function (req, file, cb) {
        cb(null, `${Date.now()}_${file.originalname}`);
    }
});

const upload = multer({ storage: storage }).fields([
    { name: 'profile_pic', maxCount: 1 },
    { name: 'resume', maxCount: 1 }
]);

// export const handleSignUpStudent = async (req, res) => {
//     upload(req, res, async function (err) {
//         if (err instanceof multer.MulterError) {
//             return res.status(400).json({ message: err.message });
//         } else if (err) {
//             return res.status(400).json({ message: err.message });
//         }

//         try {
//             const { name, roll_no, email, password, gender, cgpa, branch, phone_no, linkedin_url, passout_year, address } = req.body;

//             if (!name || !roll_no || !email || !password || !gender || !cgpa || !branch || !phone_no || !address) {
//                 return res.status(400).json({ message: 'All fields are required' });
//             }

//             const hashedPassword = await bcrypt.hash(password, 10);

//             const profilePicPath = req.files?.profile_pic ? req.files.profile_pic[0].path : '';
//             const resumePath = req.files?.resume ? req.files.resume[0].path : '';

//             const student = new Student({
//                 name,
//                 roll_no,
//                 email,
//                 password: hashedPassword,
//                 gender,
//                 cgpa,
//                 branch,
//                 phone_no,
//                 address,
//                 linkedin_url,
//                 passout_year,
//                 profile_pic: profilePicPath,
//                 resume: resumePath,
//             });

//             await student.save();
//             res.status(201).json({ message: 'Student created successfully' });

//         } catch (error) {
//             res.status(400).json({ message: error.message });
//         }
//     });
// };

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
            const token = jwt.sign({ studentId: student._id }, 'shindept111', { expiresIn: '1h' });

            // Send token in HttpOnly cookie
            res.cookie('token', token, {
                httpOnly: true,
                secure: process.env.NODE_ENV === 'shindept18092003', // Use secure cookies in production
                maxAge: 3600000, // 1 hour
            });

            res.status(201).json({ message: 'Student created successfully' });

        } catch (error) {
            console.error(error);
            res.status(500).json({ message: 'Server error' });
        }
    });
};




export const handleSignInStudent = async (req, res) => {
    const { email, password } = req.body;

    try {
        const student = await Student.findOne({ email });
        if (!student) return res.status(400).json({ message: 'Invalid credentials' });

        const isMatch = await bcrypt.compare(password, student.password);
        if (!isMatch) return res.status(400).json({ message: 'Invalid credentials' });

        const token = jwt.sign({ studentId: student._id }, 'shindept111', { expiresIn: '1h' });

        // Send token in HttpOnly cookie
        res.cookie('token', token, {
            httpOnly: true,
            secure: process.env.NODE_ENV === 'shindept18092003',
            maxAge: 3600000, // 1 hour
        });

        res.json({ message: 'Login successful' });
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
        res.status(200).json(student);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

export const handleUpdateStudent = async (req, res) => {
    try {
        const { id } = req.params;

        let updateData = { ...req.body };

        // Check if password is being updated
        if (updateData.password) {
            const salt = await bcrypt.genSalt(10);
            updateData.password = await bcrypt.hash(updateData.password, salt);
        }

        const student = await Student.findByIdAndUpdate(id, updateData, { new: true });

        if (!student) {
            return res.status(404).json({ message: 'Student not found' });
        }

        res.status(200).json({ message: 'Student updated successfully' });
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
        const { studentId } = req.params;
        const { jobId } = req.body;

        const student = await Student.findById(studentId);
        const job = await Job.findById(jobId);
        if (!student) {
            return res.status(404).json({ message: 'Student not found' });
        }

        if (student.applications.some(app => app.company.toString() === jobId)) {
            return res.status(400).json({ message: 'Application already exists' });
        }

        student.applications.push({ company: jobId });
        await student.save();

        job.applications.push(studentId);
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

// Add job to bookmarks
export const handleAddBookmark = async (req, res) => {
    try {
        const { studentId } = req.params;
        const { jobId } = req.body;

        const student = await Student.findById(studentId);
        if (!student) {
            return res.status(404).json({ message: 'Student not found' });
        }

        if (student.bookmarks.includes(jobId)) {
            return res.status(400).json({ message: 'Job already bookmarked' });
        }

        student.bookmarks.push(jobId);
        await student.save();

        res.status(200).json({ message: 'Job bookmarked successfully' });
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// Remove job from bookmarks
export const handleRemoveBookmark = async (req, res) => {
    try {
        const { studentId } = req.params;
        const { jobId } = req.body;

        const student = await Student.findById(studentId);
        if (!student) {
            return res.status(404).json({ message: 'Student not found' });
        }

        student.bookmarks = student.bookmarks.filter(bookmark => bookmark.toString() !== jobId);
        await student.save();

        res.status(200).json({ message: 'Job removed from bookmarks' });
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

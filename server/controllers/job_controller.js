import Job from '../models/job_model.js';
import Student from '../models/student_model.js';  // Assuming you have this model

// CREATE Job
export const handleCreateJob = async (req, res) => {
    try {
        const { company, roles } = req.body;

        if (!company || !roles) {
            return res.status(400).json({ message: 'All fields are required' });
        }

        const job = new Job({
            company,
            roles,
        });

        await job.save();
        res.status(201).json({ message: 'Job created successfully' });

    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// GET all Jobs
export const handleGetJobs = async (req, res) => {
    try {
        const jobs = await Job.find();
        res.status(200).json(jobs);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
};

// GET Job by ID
export const handleGetJobById = async (req, res) => {
    try {
        const { id } = req.params;
        const job = await Job.findById(id);
        if (!job) {
            return res.status(404).json({ message: 'Job not found' });
        }
        res.status(200).json(job);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// UPDATE Job
export const handleUpdateJob = async (req, res) => {
    try {
        const { id } = req.params;

        const job = await Job.findByIdAndUpdate(id, req.body, { new: true });
        if (!job) {
            return res.status(404).json({ message: 'Job not found' });
        }
        res.status(200).json({ message: 'Job updated successfully' });
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// DELETE Job
export const handleDeleteJob = async (req, res) => {
    try {
        const { id } = req.params;
        const job = await Job.findByIdAndDelete(id);
        if (!job) {
            return res.status(404).json({ message: 'Job not found' });
        }
        res.status(200).json({ message: 'Job deleted successfully' });
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// APPLY for Job
export const handleApplyForJob = async (req, res) => {
    try {
        const { id } = req.params;
        const { studentId } = req.body;

        if (!studentId) {
            return res.status(400).json({ message: 'Student ID is required' });
        }

        const job = await Job.findById(id);
        if (!job) {
            return res.status(404).json({ message: 'Job not found' });
        }

        const student = await Student.findById(studentId);
        if (!student) {
            return res.status(404).json({ message: 'Student not found' });
        }

        if (job.applications.includes(studentId)) {
            return res.status(400).json({ message: 'Student has already applied for this job' });
        }

        job.applications.push(studentId);
        await job.save();
        res.status(200).json({ message: 'Application submitted successfully' });

    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// GET Applications for a Job
export const handleGetJobApplications = async (req, res) => {
    try {
        const { id } = req.params;
        const job = await Job.findById(id).populate('applications');
        if (!job) {
            return res.status(404).json({ message: 'Job not found' });
        }
        res.status(200).json(job.applications);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

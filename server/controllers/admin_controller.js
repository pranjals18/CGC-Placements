import Admin from '../models/admin_model.js';
import Job from '../models/job_model.js';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

export const handleCreateAdmin = async (req, res) => {

    try {

        const { name, email, password, } = req.body;

        if (!name || !email || !password) {
            return res.status(400).json({ message: 'All fields are required' });
        }

        const hashedPassword = await bcrypt.hash(password, 10);
        const admin = new Admin({
            name,

            email,
            password: hashedPassword,

        });

        await admin.save();
        res.status(201).json({ message: 'Admin created successfully' });

    } catch (error) {
        res.status(400).json({ message: error.message });
    }
}

export const handleGetAdmins = async (req, res) => {
    try {
        const admins = await Admin.find();
        res.status(200).json(admins);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}

export const handleGetAdminById = async (req, res) => {
    try {
        const { id } = req.params;
        const admin = await Admin.findById(id);
        if (!admin) {
            return res.status(404).json({ message: 'Admin not found' });
        }
        res.status(200).json(admin);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
}

export const handleUpdateAdmin = async (req, res) => {
    try {
        const { id } = req.params;

        let updateData = { ...req.body };

        // Check if password is being updated
        if (updateData.password) {
            const salt = await bcrypt.genSalt(10);
            updateData.password = await bcrypt.hash(updateData.password, salt);
        }

        const admin = await Admin.findByIdAndUpdate(id, updateData, { new: true });

        if (!admin) {
            return res.status(404).json({ message: 'Admin not found' });
        }
        res.status(200).json({ message: 'Admin updated successfully' });
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
}

export const handleDeleteAdmin = async (req, res) => {
    try {
        const { id } = req.params;
        const admin = await Admin.findByIdAndDelete(id);
        if (!admin) {
            return res.status(404).json({ message: 'Admin not found' });
        }
        res.status(200).json({ message: 'Admin deleted successfully' });
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
}

export const handleAdminLogin = async (req, res) => {
    try {
        const { email, password } = req.body;

        if (!email || !password) {
            return res.status(400).json({ message: 'Email and password are required' });
        }

        const admin = await Admin.findOne({ email });
        if (!admin) {
            return res.status(404).json({ message: 'Admin not found' });
        }

        const isMatch = await bcrypt.compare(password, admin.password);
        if (!isMatch) {
            return res.status(400).json({ message: 'Invalid credentials' });
        }

        const token = jwt.sign({ id: admin._id }, process.env.JWT_SECRET, { expiresIn: '1h' });
        res.status(200).json({ token });

    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};


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

export const handleDeleteJob = async (req, res) => {
    try {
        const { id } = req.params;

        // Find and delete the job
        const deletedJob = await Job.findByIdAndDelete(id);

        if (!deletedJob) {
            return res.status(404).json({ message: 'Job not found' });
        }

        res.status(200).json({ message: 'Job deleted successfully' });
    } catch (error) {
        res.status(500).json({ message: 'Failed to delete job', error: error.message });
    }
};


export const handleUpdateJob = async (req, res) => {
    try {
        const { id } = req.params;
        const updatedData = req.body;

        // Find and update the job
        const updatedJob = await Job.findByIdAndUpdate(id, updatedData, { new: true });

        if (!updatedJob) {
            return res.status(404).json({ message: 'Job not found' });
        }

        res.status(200).json({ message: 'Job updated successfully', job: updatedJob });
    } catch (error) {
        res.status(500).json({ message: 'Failed to update job', error: error.message });
    }
};
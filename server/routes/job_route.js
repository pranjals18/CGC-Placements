import express from "express";
import { 
    handleCreateJob, 
    handleGetJobs, 
    handleGetJobById, 
    handleUpdateJob, 
    handleDeleteJob,
    handleApplyForJob,
    handleGetJobApplications
} from '../controllers/job_controller.js';
import authMiddleware from "../middleware/authMiddleware.js";

const router = express.Router()

// CREATE
router.post('/create', handleCreateJob)

// READ
router.get('/get', handleGetJobs)
router.get('/get/:id', handleGetJobById)

// UPDATE
router.patch('/update/:id', handleUpdateJob)

// DELETE
router.delete('/delete/:id', handleDeleteJob)


// APPLY for Job
router.post('/:id/apply', handleApplyForJob)


// // GET Applications for a Job
// router.get('/:id/applications', handleGetJobApplications)


export default router;
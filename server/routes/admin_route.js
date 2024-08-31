import express from "express";

import {
    handleCreateAdmin,
    handleGetAdmins,
    handleGetAdminById,
    handleUpdateAdmin,
    handleDeleteAdmin,
    handleAdminLogin,
    handleCreateJob,
    handleDeleteJob,
    handleUpdateJob
} from '../controllers/admin_controller.js';

const router = express.Router()

// CREATE
router.post('/create', handleCreateAdmin)

// READ
router.get('/get', handleGetAdmins)
router.get('/get/:id', handleGetAdminById)

// UPDATE
router.patch('/update/:id', handleUpdateAdmin)

// DELETE
router.delete('/delete/:id', handleDeleteAdmin)


// LOGIN
router.post('/login', handleAdminLogin)

// CREATE JOB
router.post('/jobs/create', handleCreateJob)

// DELETE JOB
router.delete('/jobs/delete/:id', handleDeleteJob)

// UPDATE JOB
router.patch('/jobs/update/:id', handleUpdateJob)



export default router;
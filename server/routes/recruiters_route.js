// // import express from "express";

// // import { handleCreateRecruiter, handleGetRecruiter, handleGetRecruiterById, handleUpdateRecruiter, handleDeleteRecruiter } from '../controllers/recruiters_controller.js';

// // const router = express.Router()

// // // CREATE
// // router.post('/create', handleCreateRecruiter)

// // // READ
// // router.get('/get', handleGetRecruiter)
// // router.get('/get/:id', handleGetRecruiterById)

// // // UPDATE
// // router.patch('/update/:id', handleUpdateRecruiter)

// // // DELETE
// // router.delete('/delete/:id', handleDeleteRecruiter)

// // export default router;


// import express from "express";

// import { 
//     handleCreateRecruiter, 
//     handleGetRecruiter, 
//     handleGetRecruiterById, 
//     handleUpdateRecruiter, 
//     handleDeleteRecruiter,
//     handleRecruiterLogin,
//     handleGetRecruiterJobs,
//     handleGetRecruiterJobApplications
// } from '../controllers/recruiters_controller.js';

// const router = express.Router()

// // CREATE
// router.post('/create', handleCreateRecruiter)

// // READ
// router.get('/get', handleGetRecruiter)
// router.get('/get/:id', handleGetRecruiterById)

// // UPDATE
// router.patch('/update/:id', handleUpdateRecruiter)

// // DELETE
// router.delete('/delete/:id', handleDeleteRecruiter)

// // LOGIN
// router.post('/login', handleRecruiterLogin)

// // GET Jobs Posted by Recruiter
// router.get('/:id/jobs', handleGetRecruiterJobs)

// // GET Applications for a Job Posted by Recruiter
// router.get('/:id/jobs/:jobId/applications', handleGetRecruiterJobApplications)

// export default router;
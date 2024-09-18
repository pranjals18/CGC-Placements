import express from "express";
import {
    handleSignUpStudent,
    handleSignInStudent,
    handleGetStudents,
    handleGetStudentById,
    handleUpdateStudent,
    handleDeleteStudent,
    handleAddApplication,
    handleRemoveApplication,
    handleAddBookmark,
    handleDeleteBookmark,
    handleGetAllApplications,
    handleGetApplicationById,
    handleUploadProfilePic,
    handleUploadResume,
} from '../controllers/student_controller.js';
import authMiddleware from '../middleware/authMiddleware.js';
import uploadProfileImage from '../middleware/uploadProfileMiddleware.js';
import uploadResume from '../middleware/uploadResumeMiddleware.js';

const router = express.Router();

// SignUp (Public)
router.post('/signup', handleSignUpStudent);

// SignIn (Public)
router.post('/signin', handleSignInStudent);

// READ (Protected)
router.get('/get', authMiddleware, handleGetStudents);
router.get('/get/:id', authMiddleware, handleGetStudentById);

// UPDATE (Protected)
router.patch('/updateProfile', authMiddleware, handleUpdateStudent);

// DELETE (Protected)
router.delete('/delete/:id', authMiddleware, handleDeleteStudent);


// Applications (Protected)
router.post('/applications/create/:jobId', authMiddleware, handleAddApplication);
router.delete('/applications/delete/:studentId', authMiddleware, handleRemoveApplication);
router.get('/applications', authMiddleware, handleGetAllApplications);
router.get('/applications/:applicationId', authMiddleware, handleGetApplicationById);

// Bookmarks (Protected)
router.post('/bookmarks/create/:jobId', authMiddleware, handleAddBookmark);
router.delete('/bookmarks/delete/:bookmarkId', authMiddleware, handleDeleteBookmark);


router.put('/uploadProfilePic', authMiddleware, uploadProfileImage.single('profile_pic'), handleUploadProfilePic);

router.put('/uploadResume', authMiddleware, uploadResume.single('resume'), handleUploadResume);





export default router;
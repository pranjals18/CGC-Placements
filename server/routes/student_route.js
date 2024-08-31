import express from "express";
import { 
    handleCreateStudent, 
    handleGetStudents, 
    handleGetStudentById, 
    handleUpdateStudent, 
    handleDeleteStudent, 
    handleAddApplication, 
    handleRemoveApplication, 
    handleAddBookmark, 
    handleRemoveBookmark, 
    handleGetAllApplications, 
    handleGetAllBookmarks,
    handleGetApplicationById,
    handleGetBookmarkById
} from '../controllers/student_controller.js';

const router = express.Router();

// CREATE
router.post('/create', handleCreateStudent);

// READ
router.get('/get', handleGetStudents);
router.get('/get/:id', handleGetStudentById);

// UPDATE
router.patch('/update/:id', handleUpdateStudent);

// DELETE
router.delete('/delete/:id', handleDeleteStudent);

// Applications

router.post('/applications/create/:studentId', handleAddApplication);

router.delete('/applications/delete/:studentId', handleRemoveApplication);

router.get('/applications', handleGetAllApplications);

router.get('/applications/:applicationId', handleGetApplicationById);


// Bookmarks

router.post('/bookmarks/create', handleAddBookmark);

router.delete('/bookmarks/delete/:bookmarkId', handleRemoveBookmark);

router.get('/bookmarks', handleGetAllBookmarks);

router.get('/bookmarks/:bookmarkId', handleGetBookmarkById);



export default router;
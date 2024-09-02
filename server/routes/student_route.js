// import express from "express";
// import { 
//     handleSignUpStudent, 
//     handleSignInStudent,
//     handleGetStudents, 
//     handleGetStudentById, 
//     handleUpdateStudent, 
//     handleDeleteStudent, 
//     handleAddApplication, 
//     handleRemoveApplication, 
//     handleAddBookmark, 
//     handleRemoveBookmark, 
//     handleGetAllApplications, 
//     handleGetAllBookmarks,
//     handleGetApplicationById,
//     handleGetBookmarkById,
// } from '../controllers/student_controller.js';

// const router = express.Router();

// // SignUp
// router.post('/signup', handleSignUpStudent);

// //SignIn
// router.post('/signin', handleSignInStudent);

// // READ
// router.get('/get', handleGetStudents);
// router.get('/get/:id', handleGetStudentById);

// // UPDATE
// router.patch('/update/:id', handleUpdateStudent);

// // DELETE
// router.delete('/delete/:id', handleDeleteStudent);

// // Applications

// router.post('/applications/create/:studentId', handleAddApplication);

// router.delete('/applications/delete/:studentId', handleRemoveApplication);

// router.get('/applications', handleGetAllApplications);

// router.get('/applications/:applicationId', handleGetApplicationById);


// // Bookmarks

// router.post('/bookmarks/create', handleAddBookmark);

// router.delete('/bookmarks/delete/:bookmarkId', handleRemoveBookmark);

// router.get('/bookmarks', handleGetAllBookmarks);

// router.get('/bookmarks/:bookmarkId', handleGetBookmarkById);



// export default router;













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
    handleRemoveBookmark, 
    handleGetAllApplications, 
    handleGetAllBookmarks,
    handleGetApplicationById,
    handleGetBookmarkById,
} from '../controllers/student_controller.js';
import authMiddleware from '../middleware/authMiddleware.js';

const router = express.Router();




// SignUp (Public)
router.post('/signup', handleSignUpStudent);

// SignIn (Public)
router.post('/signin', handleSignInStudent);

// READ (Protected)
router.get('/get', authMiddleware, handleGetStudents);
router.get('/get/:id', authMiddleware, handleGetStudentById);

// UPDATE (Protected)
router.patch('/update/:id', authMiddleware, handleUpdateStudent);

// DELETE (Protected)
router.delete('/delete/:id', authMiddleware, handleDeleteStudent);

// Applications (Protected)
router.post('/applications/create/:studentId', authMiddleware, handleAddApplication);
router.delete('/applications/delete/:studentId', authMiddleware, handleRemoveApplication);
router.get('/applications', authMiddleware, handleGetAllApplications);
router.get('/applications/:applicationId', authMiddleware, handleGetApplicationById);

// Bookmarks (Protected)
router.post('/bookmarks/create', authMiddleware, handleAddBookmark);
router.delete('/bookmarks/delete/:bookmarkId', authMiddleware, handleRemoveBookmark);
router.get('/bookmarks', authMiddleware, handleGetAllBookmarks);
router.get('/bookmarks/:bookmarkId', authMiddleware, handleGetBookmarkById);

export default router;

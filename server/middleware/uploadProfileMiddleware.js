import { v2 as cloudinary } from 'cloudinary';
import { CloudinaryStorage } from 'multer-storage-cloudinary';
import multer from 'multer';
import dotenv from 'dotenv';

dotenv.config();

// Configure Cloudinary
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

// Set up Cloudinary storage
const storage = new CloudinaryStorage({
  cloudinary: cloudinary,
  params: {
    folder: 'Profile',
    format: async (req, file) => 'jpg',
    public_id: (req, file) => `${Date.now()}_${file.originalname}`, 
  },
});

const uploadProfileImage = multer({ storage });

export default uploadProfileImage;






// import { v2 as cloudinary } from 'cloudinary';
// import { CloudinaryStorage } from 'multer-storage-cloudinary';
// import multer from 'multer';
// import dotenv from 'dotenv';

// dotenv.config();

// // Configure Cloudinary
// cloudinary.config({
//   cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
//   api_key: process.env.CLOUDINARY_API_KEY,
//   api_secret: process.env.CLOUDINARY_API_SECRET,
// });

// // Set up Cloudinary storage for images
// const imageStorage = new CloudinaryStorage({
//   cloudinary: cloudinary,
//   params: {
//     folder: 'profile_images', // Folder for profile images
//     format: async (req, file) => 'jpg', // Image format (optional: you can use 'png' or other formats)
//     public_id: (req, file) => `profile_${Date.now()}_${file.originalname}`, // Customize image filename
//   },
// });

// // Set up Cloudinary storage for PDFs
// const pdfStorage = new CloudinaryStorage({
//   cloudinary: cloudinary,
//   params: {
//     folder: 'resumes', // Folder for resumes
//     format: async (req, file) => 'pdf', // Resume format
//     public_id: (req, file) => `resume_${Date.now()}_${file.originalname}`, // Customize resume filename
//   },
// });

// // File filter function to allow only PDFs or images
// const fileFilter = (req, file, cb) => {
//   const allowedMimeTypes = ['image/jpeg', 'image/png', 'application/pdf'];
//   if (allowedMimeTypes.includes(file.mimetype)) {
//     cb(null, true); // Accept the file
//   } else {
//     cb(new Error('Invalid file type. Only JPEG, PNG, and PDF are allowed.'), false); // Reject the file
//   }
// };

// // Multer upload setup for images
// const uploadImage = multer({ 
//   storage: imageStorage, 
//   limits: { fileSize: 5 * 1024 * 1024 }, // Limit size to 5MB
//   fileFilter,
// });

// // Multer upload setup for PDFs
// const uploadPdf = multer({ 
//   storage: pdfStorage, 
//   limits: { fileSize: 5 * 1024 * 1024 }, // Limit size to 5MB
//   fileFilter,
// });

// export { uploadImage, uploadPdf };

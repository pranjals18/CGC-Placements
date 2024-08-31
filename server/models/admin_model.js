import mongoose from 'mongoose';

const adminSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
        },

        email: {
            type: String,
            required: true,
            unique: true,
        },

        password: {
            type: String,
            required: true,
        },

        

    },  { timestamps: true }
);

const Admin = mongoose.model("admin", adminSchema)

export default Admin;


// Sample data
// {
//     "name": "John Doe",
//     "email": "ZtPp5@example.com",
//     "password": "password123"
// }
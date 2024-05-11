// Resume Showcase Page Model (resumeModel.js)
// Import Mongoose
import mongoose from "mongoose";

// Define the schema for the Resume Showcase Page
const resumeSchema = new mongoose.Schema({
    // Define the fields for the Resume Showcase Page
    // You can add more fields as needed
    resumeLink: { type: String }, // Link to the resume or file path
    // Add more fields here
}, { timestamps: true });

// Create the Resume Showcase Page model
const Resume = mongoose.model('Resume', resumeSchema);

// Export the Resume Showcase Page model
export default Resume;

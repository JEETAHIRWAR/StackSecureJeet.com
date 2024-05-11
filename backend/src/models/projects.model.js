// Import Mongoose
import mongoose from "mongoose";

// Define the schema for the Projects Page
const projectSchema = new mongoose.Schema({
    // Define the fields for the Projects Page
    // You can add more fields as needed
    title: { type: String, required: true },
    image: { type: String }, // URL or file path for project image
    techStacks: { type: [String] },
    projectLink: { type: String },
    // Add more fields here
}, { timestamps: true });

// Create the Projects Page model
const Project = mongoose.model('Project', projectSchema);

// Export the Projects Page model
export default Project;

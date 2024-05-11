// Import Mongoose
import mongoose from "mongoose";

// Define the schema for the Skills Page
const skillsSchema = new mongoose.Schema({
    // Define the fields for the Skills Page
    // You can add more fields as needed
    proficientIn: { type: [String] },
    technicalSkills: { type: [String] },
    softSkills: { type: [String] },
    toolsAndFrameworks: { type: [String] },
    // Add more fields here
}, { timestamps: true });

// Create the Skills Page model
const Skills = mongoose.model('Skills', skillsSchema);

// Export the Skills Page model
export default Skills;

// Import Mongoose
import mongoose from "mongoose";

// Define the schema for the My Learnings Page
const learningsSchema = new mongoose.Schema({
    // Define the fields for the My Learnings Page
    // You can add more fields as needed
    title: { type: String },
    heading: { type: String },
    summary: { type: String },
    description: { type: String },
    images: { type: [String] }, // URLs or file paths for images
    // Add more fields here
}, { timestamps: true });

// Create the My Learnings Page model
const Learnings = mongoose.model('Learnings', learningsSchema);

// Export the My Learnings Page model
export default Learnings;

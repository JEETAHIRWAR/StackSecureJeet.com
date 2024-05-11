// Import Mongoose
import mongoose from "mongoose";

// Define the schema for the Education Page
const educationSchema = new mongoose.Schema({
    // Define the fields for the Education Page
    // You can add more fields as needed
    collegeName: { type: String },
    location: { type: String },
    degreeName: { type: String },
    percentage: { type: String },
    startDate: { type: Date },
    endDate: { type: Date },
    fieldOfStudy: { type: String },
    description: { type: String },
    // Add more fields here
}, { timestamps: true });

// Create the Education Page model
const Education = mongoose.model('Education', educationSchema);

// Export the Education Page model
export default Education;

// Import Mongoose
import mongoose from "mongoose";

// Define the schema for the Experience Page
const experienceSchema = new mongoose.Schema({
    // Define the fields for the Experience Page
    // You can add more fields as needed
    jobTitle: { type: String },
    companyName: { type: String },
    startDate: { type: Date },
    endDate: { type: Date },
    location: { type: String },
    description: { type: String },
    // Add more fields here
}, { timestamps: true });

// Create the Experience Page model
const Experience = mongoose.model('Experience', experienceSchema);

// Export the Experience Page model
export default Experience;

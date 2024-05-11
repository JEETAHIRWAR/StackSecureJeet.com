// Import Mongoose
import mongoose from "mongoose";

// Define the schema for the Achievements & Certificates Page
const achievementsSchema = new mongoose.Schema({
    // Define the fields for the Achievements & Certificates Page
    // You can add more fields as needed
    certificateName: { type: String },
    issueDate: { type: Date },
    organizationName: { type: String },
    description: { type: String },
    gainedSkills: { type: [String] },
    // Add more fields here
}, { timestamps: true });

// Create the Achievements & Certificates Page model
const Achievements = mongoose.model('Achievements', achievementsSchema);

// Export the Achievements & Certificates Page model
export default Achievements;

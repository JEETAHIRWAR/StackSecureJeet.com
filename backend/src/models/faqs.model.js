// FAQs Page Model (faqsModel.js)
// Import Mongoose
import mongoose from "mongoose";

// Define the schema for the FAQs Page
const faqsSchema = new mongoose.Schema({
    // Define the fields for the FAQs Page
    // You can add more fields as needed
    question: { type: String },
    answer: { type: String },
    // Add more fields here
}, { timestamps: true });

// Create the FAQs Page model
const FAQs = mongoose.model('FAQs', faqsSchema);

// Export the FAQs Page model
export default FAQs;

// Import Mongoose
import mongoose from "mongoose";

// Define the schema for the Services Page
const servicesSchema = new mongoose.Schema({
    // Define the fields for the Services Page
    // You can add more fields as needed
    serviceName: { type: String },
    coverImage: { type: String }, // URL or file path for cover image
    description: { type: String },
    // Add more fields here
}, { timestamps: true });

// Create the Services Page model
const Services = mongoose.model('Services', servicesSchema);

// Export the Services Page model
export default Services;

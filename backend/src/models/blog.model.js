// Import Mongoose
import mongoose from "mongoose";

// Define the schema for the Blog Posts Page
const blogSchema = new mongoose.Schema({
    // Define the fields for the Blog Posts Page
    // You can add more fields as needed
    thumbnailImage: { type: String }, // URL or file path for thumbnail image
    title: { type: String },
    postDate: { type: Date },
    postSummary: { type: String },
    // Add more fields here
}, { timestamps: true });

// Create the Blog Posts Page model
const Blog = mongoose.model('Blog', blogSchema);

// Export the Blog Posts Page model
export default Blog;

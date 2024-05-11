// Import Mongoose
import mongoose from "mongoose";

// Define the schema for the Sticky Notes Page
const stickyNotesSchema = new mongoose.Schema({
    // Define the fields for the Sticky Notes Page
    // You can add more fields as needed
    content: { type: String },
    // Add more fields here
}, { timestamps: true });

// Create the Sticky Notes Page model
const StickyNotes = mongoose.model('StickyNotes', stickyNotesSchema);

// Export the Sticky Notes Page model
export default StickyNotes;

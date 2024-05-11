// Todo Page Model (todoModel.js)
// Import Mongoose
import mongoose from "mongoose";

// Define the schema for the Todo Page
const todoSchema = new mongoose.Schema({
    // Define the fields for the Todo Page
    // You can add more fields as needed
    task: { type: String },
    completed: { type: Boolean, default: false },
    // Add more fields here
}, { timestamps: true });

// Create the Todo Page model
const Todo = mongoose.model('Todo', todoSchema);

// Export the Todo Page model
export default Todo;

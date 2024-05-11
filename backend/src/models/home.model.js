// Import Mongoose
import mongoose from "mongoose";

const homeSchema = new mongoose.Schema({
    welcomeMessage: { type: String },
    introImage: { type: String },
    featuredProjects: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Project' }],
}, { timestamps: true });

const Home = mongoose.model('Home', homeSchema);

export default Home;

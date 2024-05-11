// Import Mongoose
import mongoose from "mongoose";

const aboutSchema = new mongoose.Schema({
    shortDescription: { type: String },
    name: { type: String },
    mobileNumber: { type: String },
    email: { type: String },
    address: { type: String },
    digitalSignature: { type: String },
}, { timestamps: true });

const About = mongoose.model('About', aboutSchema);

export default About;

import bcrypt from 'bcrypt';
import { User } from '../models/user.model.js';
import { ApiError } from '../utils/ApiError.js';

// Controller function for user registration
export const registerUser = async (req, res, next) =>
{
    try
    {
        const { username, email, fullName, password } = req.body;

        // Check if user already exists
        const existingUser = await User.findOne({ email });
        if (existingUser)
        {
            throw new ApiError(400, 'User already exists');
        }

        // Hash password
        const hashedPassword = await bcrypt.hash(password, 10);

        // Create new user
        const newUser = new User({
            username,
            email,
            fullName,
            password: hashedPassword
        });

        // Save user to database
        await newUser.save();

        res.status(201).json({ message: 'User registered successfully' });
    } catch (error)
    {
        next(error);
    }
};

// Controller function for updating user profile
export const updateUserProfile = async (req, res, next) =>
{
    try
    {
        const { fullName } = req.body;
        const userId = req.user._id; // Assuming userId is available in request object after authentication

        // Find user by ID and update profile
        await User.findByIdAndUpdate(userId, { fullName });

        res.status(200).json({ message: 'Profile updated successfully' });
    } catch (error)
    {
        next(error);
    }
};

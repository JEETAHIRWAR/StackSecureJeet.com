import bcrypt from 'bcrypt';
import { User } from '../models/user.model.js';
import { ApiError } from '../utils/ApiError.js';
import { asyncHandler } from "../utils/asyncHandler.js";


// Controller function for user registration
export const registerUser = asyncHandler(async (req, res, next) =>
{
    try
    {
        const { username, email, fullName, password } = req.body;
        const userIP = req.ip;

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
            email,
            fullName,
            username,
            password: hashedPassword,
            userIP // Add userIP to user document
        });

        // Save user to database
        await newUser.save();

        res.status(201).json({ message: 'User registered successfully' });
    } catch (error)
    {
        console.error('Error occurred during password hashing:', error);
        throw new Error('Error occurred during password hashing');
        // next(error);
    }
});


export const getUserData = async (req, res) =>
{
    try
    {
        // Access user data from the request object
        const userData = req.userData;

        res.status(200).json(userData);
    } catch (error)
    {
        console.error('Error fetching user data:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
};




// // Controller function for updating user profile
// export const updateUserProfile = asyncHandler(async (req, res, next) =>
// {
//     try
//     {
//         const { fullName } = req.body;
//         const userId = req.user._id; // Assuming userId is available in request object after authentication

//         // Find user by ID and update profile
//         await User.findByIdAndUpdate(userId, { fullName });

//         res.status(200).json({ message: 'Profile updated successfully' });
//     } catch (error)
//     {
//         next(error);
//     }
// });

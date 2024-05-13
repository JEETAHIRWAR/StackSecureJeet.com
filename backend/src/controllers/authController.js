import bcrypt from 'bcrypt';
import jwt from "jsonwebtoken";
import { User } from '../models/user.model.js';
import { ApiError } from '../utils/ApiError.js';
import { asyncHandler } from "../utils/asyncHandler.js";




export const loginUser = asyncHandler(async (req, res, next) =>
{
    try
    {
        const { email, password } = req.body;

        // Check if user exists
        const user = await User.findOne({ email });
        if (!user)
        {
            throw new ApiError(401, 'Invalid email or password');
        }

        // Validate password
        const isPasswordValid = await user.isPasswordCorrect(password);
        if (!isPasswordValid)
        {
            throw new ApiError(401, 'Invalid email or password');
        }

        // Generate JWT token
        const accessToken = user.generateAccessToken();

        res.status(200).json({ accessToken });
    } catch (error)
    {
        next(error);
    }
});


// Controller function for user logout
export const logoutUser = asyncHandler(async (req, res, next) =>
{
    try
    {
        // Implement logout logic if needed
        res.sendStatus(204);
    } catch (error)
    {
        next(error);
    }
});

// export default { loginUser, logoutUser };














// // Controller function for user login
// export const loginUser = asyncHandler(async (req, res, next) =>
// {
//     try
//     {
//         const { email, password } = req.body;

//         // Check if user exists
//         const user = await User.findOne({ email });
//         if (!user)
//         {
//             throw new ApiError(401, 'Invalid email or password');
//         }

//         // Validate password
//         const isPasswordValid = await bcrypt.compare(password, user.password);
//         if (!isPasswordValid)
//         {
//             throw new ApiError(401, 'Invalid email or password');
//         }

//         // Generate JWT token
//         const accessToken = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, { expiresIn: '1h' });

//         res.status(200).json({ accessToken });
//     } catch (error)
//     {
//         next(error);
//     }
// });

// // Controller function for user logout
// export const logoutUser = asyncHandler(async (req, res, next) =>
// {
//     try
//     {
//         // Implement logout logic if needed
//         res.sendStatus(204);
//     } catch (error)
//     {
//         next(error);
//     }
// });

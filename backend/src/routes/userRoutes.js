// userRoutes.js
import express from 'express';
import { registerUser } from '../controllers/userController.js';

const router = express.Router();

// POST /users/register - User registration route
router.post('/register', registerUser);

export default router;

// // Example route to fetch user data based on IP address
// router.get('/api/v1/user-data', captureUserIP, async (req, res) =>
// {
//     try
//     {
//         const userIP = req.userIP;
//         // Use user IP to query database and fetch user data
//         const userData = await UserData.findOne({ ipAddress: userIP });
//         res.json(userData);
//     } catch (error)
//     {
//         console.error('Error fetching user data:', error);
//         res.status(500).json({ message: 'Internal server error' });
//     }
// });


// export default router;



// // POST /users/register - User registration route
// router.post('/register', (req, res) =>
// {
//     const userData = req.body;
//     const userIP = req.body.userIP; // Extract userIP from the request body

//     // You can add logic here to save user data including userIP to the database
//     // Example: User.create({ ...userData, userIP })

//     // Call the registerUser controller function if needed
//     // registerUser(userData);

//     res.status(201).json({ message: 'User registered successfully' });
// });

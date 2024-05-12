// userRoutes.js
import express from 'express';
import { registerUser, updateUserProfile } from '../controllers/userController.js';

const router = express.Router();

// POST /users/register - User registration route
router.post('/register', registerUser);

// PUT /users/profile - Update user profile route
router.put('/profile', updateUserProfile);

export default router;

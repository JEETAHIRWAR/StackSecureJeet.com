// authRoutes.js
import express from 'express';
import { loginUser, logoutUser } from '../controllers/authController.js';

const router = express.Router();

// POST /auth/login - User login route
router.post('/login', loginUser);

// POST /auth/logout - User logout route
router.post('/logout', logoutUser);

export default router;

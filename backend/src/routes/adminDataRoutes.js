import express from "express";
import isAdminAuthenticated from "../middlewares/admin.middleware.js";
import { createAdminData } from '../controllers/adminDataController.js';
const router = express.Router();

// Middleware to authenticate admin requests
router.use(isAdminAuthenticated);

// GET route to fetch admin data
router.get("/:id", (req, res) =>
{
    const adminId = req.params.id;
    // Add logic to fetch admin data from the database using adminId
    // Respond with the fetched admin data
    res.status(200).json({ message: "Admin data fetched successfully", adminId });
});

// POST route to create admin data
router.post("/", createAdminData);

// PUT route to update admin data
router.put("/:id", (req, res) =>
{
    const adminId = req.params.id;
    // Add logic to update admin data for the given adminId using the request body
    // Respond with a success message or appropriate response
});

// DELETE route to delete admin data
router.delete("/:id", (req, res) =>
{
    const adminId = req.params.id;
    // Add logic to delete admin data for the given adminId
    // Respond with a success message or appropriate response
});

export default router;

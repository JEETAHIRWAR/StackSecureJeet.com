// import asyncHandler from 'express-async-handler';
import { asyncHandler } from '../utils/asyncHandler.js';
import AdminData from '../models/adminDataModel.js';
import { uploadOnCloudinary } from "../utils/cloudinary.js";
import { ApiError } from '../utils/ApiError.js';


// @desc    Create admin data
// @route   POST /api/v1/admin/data
// @access  Private (admin only)
export const createAdminData = asyncHandler(async (req, res) =>
{
    const {
        userId,
        about,
        skills,
        projects,
        education,
        experience,
        achievements,
        learnings,
        services,
        blog,
        stickyNotes,
        todo,
        resume,
        faqs
    } = req.body;

    const adminData = await AdminData.create({
        userId,
        about,
        skills,
        projects,
        education,
        experience,
        achievements,
        learnings,
        services,
        blog,
        stickyNotes,
        todo,
        resume,
        faqs
    });

    res.status(201).json(adminData);
});

// @desc    Get admin data by ID
// @route   GET /api/v1/admin/data/:id
// @access  Private (admin only)
export const getAdminDataById = asyncHandler(async (req, res) =>
{
    const adminData = await AdminData.findById(req.params.id);

    if (adminData)
    {
        res.json(adminData);
    } else
    {
        res.status(404);
        throw new Error('Admin data not found');
    }
});

// @desc    Update admin data
// @route   PUT /api/v1/admin/data/:id
// @access  Private (admin only)
export const updateAdminData = asyncHandler(async (req, res) =>
{
    const adminData = await AdminData.findById(req.params.id);

    if (adminData)
    {
        adminData.about = req.body.about || adminData.about;
        adminData.skills = req.body.skills || adminData.skills;
        adminData.projects = req.body.projects || adminData.projects;
        adminData.education = req.body.education || adminData.education;
        adminData.experience = req.body.experience || adminData.experience;
        adminData.achievements = req.body.achievements || adminData.achievements;
        adminData.learnings = req.body.learnings || adminData.learnings;
        adminData.services = req.body.services || adminData.services;
        adminData.blog = req.body.blog || adminData.blog;
        adminData.stickyNotes = req.body.stickyNotes || adminData.stickyNotes;
        adminData.todo = req.body.todo || adminData.todo;
        adminData.resume = req.body.resume || adminData.resume;
        adminData.faqs = req.body.faqs || adminData.faqs;

        const updatedAdminData = await adminData.save();
        res.json(updatedAdminData);
    } else
    {
        res.status(404);
        throw new Error('Admin data not found');
    }
});

// @desc    Delete admin data
// @route   DELETE /api/v1/admin/data/:id
// @access  Private (admin only)
export const deleteAdminData = asyncHandler(async (req, res) =>
{
    const adminData = await AdminData.findById(req.params.id);

    if (adminData)
    {
        await adminData.remove();
        res.json({ message: 'Admin data removed' });
    } else
    {
        res.status(404);
        throw new Error('Admin data not found');
    }
});



// Controller function to update admin user's project image
const updateUserAvatar = asyncHandler(async (req, res) =>
{
    // Check if avatar file exists in request
    if (!req.file)
    {
        throw new ApiError(400, "Avatar file is missing");
    }

    // Upload avatar to Cloudinary
    const avatar = await uploadOnCloudinary(req.file.path);

    // Check if avatar upload was successful
    if (!avatar.url)
    {
        throw new ApiError(500, "Error uploading avatar");
    }

    // Update user's avatar field with the Cloudinary URL
    const adminData = await User.findByIdAndUpdate(
        req.adminData._id,
        { avatar: avatar.url },
        { new: true }
    );

    // Return success response with updated user object
    res.status(200).json(new ApiResponse(200, adminData, "Avatar updated successfully"));
});


// Controller function to update user's cover image
const updateUserCoverImage = asyncHandler(async (req, res) =>
{
    // Check if cover image file exists in request
    if (!req.file)
    {
        throw new ApiError(400, "Cover image file is missing");
    }

    // Upload cover image to Cloudinary
    const coverImage = await uploadOnCloudinary(req.file.path);

    // Check if cover image upload was successful
    if (!coverImage.url)
    {
        throw new ApiError(500, "Error uploading cover image");
    }

    // Update user's cover image field with the Cloudinary URL
    const adminData = await adminData.findByIdAndUpdate(
        req.adminData._id,
        { coverImage: coverImage.url },
        { new: true }
    );

    // Return success response with updated user object
    res.status(200).json(new ApiResponse(200, adminData, "Cover image updated successfully"));
});





const updateProjectImage = asyncHandler(async (req, res) =>
{
    if (!req.file)
    {
        throw new ApiError(400, "Project image file is missing");
    }

    const projectImage = await uploadOnCloudinary(req.file.path);

    if (!projectImage.url)
    {
        throw new ApiError(500, "Error uploading project image");
    }

    const adminData = await AdminData.findByIdAndUpdate(
        req.params.id,
        { $set: { "projects.$[].image": projectImage.url } },
        { new: true }
    );

    res.status(200).json({ success: true, data: adminData });
});

// Controller function to update admin user's learning images
const updateLearningImages = asyncHandler(async (req, res) =>
{
    if (!req.files || req.files.length === 0)
    {
        throw new ApiError(400, "Learning image files are missing");
    }

    const learningImages = [];
    for (const file of req.files)
    {
        const uploadedImage = await uploadOnCloudinary(file.path);
        if (!uploadedImage.url)
        {
            throw new ApiError(500, "Error uploading learning image");
        }
        learningImages.push(uploadedImage.url);
    }

    const adminData = await AdminData.findByIdAndUpdate(
        req.params.id,
        { $set: { "learnings.$[].images": learningImages } },
        { new: true }
    );

    res.status(200).json({ success: true, data: adminData });
});

// Controller function to update admin user's service cover image
const updateServiceCoverImage = asyncHandler(async (req, res) =>
{
    if (!req.file)
    {
        throw new ApiError(400, "Service cover image file is missing");
    }

    const serviceCoverImage = await uploadOnCloudinary(req.file.path);

    if (!serviceCoverImage.url)
    {
        throw new ApiError(500, "Error uploading service cover image");
    }

    const adminData = await AdminData.findByIdAndUpdate(
        req.params.id,
        { $set: { "services.$[].coverImage": serviceCoverImage.url } },
        { new: true }
    );

    res.status(200).json({ success: true, data: adminData });
});

// Controller function to update admin user's thumbnail image
const updateThumbnailImage = asyncHandler(async (req, res) =>
{
    if (!req.file)
    {
        throw new ApiError(400, "Thumbnail image file is missing");
    }

    const thumbnailImage = await uploadOnCloudinary(req.file.path);

    if (!thumbnailImage.url)
    {
        throw new ApiError(500, "Error uploading thumbnail image");
    }

    const adminData = await AdminData.findByIdAndUpdate(
        req.params.id,
        { $set: { "blog.$[].thumbnailImage": thumbnailImage.url } },
        { new: true }
    );

    res.status(200).json({ success: true, data: adminData });
});

// Add similar controller functions for other image fields as needed

// Export the controller functions
export { updateUserAvatar, updateUserCoverImage, updateProjectImage, updateLearningImages, updateServiceCoverImage, updateThumbnailImage };

// Add your other controller functions below...
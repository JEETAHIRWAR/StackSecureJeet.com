// admin.middleware.js

// Example function to check if user is authenticated as an admin
const isAdminAuthenticated = (req, res, next) =>
{
    // Check if user is authenticated and if they have admin privileges
    // You can implement your authentication logic here
    // For example, check if the user is logged in and has admin role
    const isAuthenticated = req.user && req.user.role === 'User';

    // const isAuthenticated = "true";

    if (isAuthenticated)
    {
        // If user is authenticated as admin, call next() to proceed to the next middleware or route handler
        next();
    } else
    {
        // If user is not authenticated or does not have admin privileges, send a 403 Forbidden response
        res.status(403).json({ message: 'Unauthorized access' });
    }
};

export default isAdminAuthenticated;

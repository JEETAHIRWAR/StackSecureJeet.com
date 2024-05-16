
// userData.middleware.js

import { User } from '../models/user.model.js';

const getUserData = async (req, res, next) =>
{
    try
    {
        // Retrieve user data based on IP address or any other identifier
        const userIP = req.ip; // Assuming IP address is used as the identifier
        req.userIP = userIP;
        const userData = await User.findOne({ userIP });

        // Attach user data to the request object
        req.userData = userData;

        next();
    } catch (error)
    {
        console.error('Error retrieving user data:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
};

export default getUserData;


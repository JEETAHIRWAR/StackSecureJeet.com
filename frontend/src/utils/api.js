
// api.js

import axios from 'axios';

// const API_URL = 'http://localhost:8000/api/v1'; 

export const signUp = async (userData) =>
{
    try
    {
        const response = await axios.post("/api/v1/users/register", userData);
        return response.data;
    } catch (error)
    {
        throw new Error(error.response?.data || error.message);
    }
};

export const signIn = async (userData) =>
{
    try
    {
        const response = await axios.post("/api/v1/auth/login", userData);
        return response.data;
    } catch (error)
    {
        throw new Error(error.response?.data || error.message);
    }
};

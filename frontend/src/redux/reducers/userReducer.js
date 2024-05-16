import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { registerUserApi, loginUserApi, fetchAdminDataApi } from '../../utils/api';

// Define async thunk action to register user
export const registerUser = createAsyncThunk(
    'user/registerUser',
    async (userData) =>
    {
        const response = await registerUserApi(userData);
        return response.data;
    }
);

// Define async thunk action to login user
export const loginUser = createAsyncThunk(
    'user/loginUser',
    async (credentials) =>
    {
        const response = await loginUserApi(credentials);
        return response.data;
    }
);

// Define async thunk action to fetch admin data
export const fetchAdminData = createAsyncThunk(
    'user/fetchAdminData',
    async (userId) =>
    {
        const response = await fetchAdminDataApi(userId);
        return response.data;
    }
);

const initialState = {
    user: null,
    isLoggedIn: false,
    adminData: null,
};

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setUser: (state, action) =>
        {
            state.user = action.payload;
            state.isLoggedIn = true;
        },
        logoutUser: (state) =>
        {
            state.user = null;
            state.isLoggedIn = false;
        },
    },
    extraReducers: (builder) =>
    {
        builder.addCase(registerUser.fulfilled, (state, action) =>
        {
            // Handle successful user registration
            state.user = action.payload;
            state.isLoggedIn = true;
        });
        builder.addCase(loginUser.fulfilled, (state, action) =>
        {
            // Handle successful user login
            state.user = action.payload;
            state.isLoggedIn = true;
        });
        builder.addCase(fetchAdminData.fulfilled, (state, action) =>
        {
            // Handle successful admin data fetch
            // Check if admin data belongs to the logged-in user based on IP address
            // Logic to filter admin data based on IP address here
            state.adminData = action.payload;
        });
    },
});

export const { setUser, logoutUser } = userSlice.actions;
export default userSlice.reducer;

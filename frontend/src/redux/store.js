// src/redux/store.js

import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import rootReducer from './reducers';
import logger from 'redux-logger'; // Import middleware if needed

const middleware = [...getDefaultMiddleware()]; // Get default middleware

import formDataReducer from "./formDataReducer";

const initialFormData = {
    About: {},
    Skills: {},
    Projects: {},
    AcademicBackground: {},
    WorkExperience: {},
    AchievementCertificates: {},
    MyLearnings: {},
    ProvideServices: {},
    BlogPosts: {},
    MyTodos: {},
    ResumeCenter: {},
    Faqs: {},
    CaseStudies: {},
};



// Add additional middleware here
middleware.push(logger); // For example, add redux-logger

const store = configureStore({
    reducer: {
        formData: formDataReducer,
    },
    preloadedState: {
        formData: initialFormData,
    },
    middleware,
});


export default store;





// // store.js

// import { configureStore } from '@reduxjs/toolkit';
// import thunk from 'redux-thunk';
// import rootReducer from '../reducers';

// // Create the Redux store with middleware
// const store = configureStore({
//     reducer: rootReducer,
//     middleware: [thunk],
// });

// export default store;

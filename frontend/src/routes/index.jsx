import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
// import { Provider } from "react-redux";
// import store from "../redux/store";

// import {
//   HomeContainer,
//   AboutContainer,
//   // Other container components
// } from "../containers/index";

import {
  Home,
  About,
  Skills,
  Projects,
  AcademicBg,
  Experience,
  Achieve_Certi,
  MyLearnings,
  Services,
  Blog_Post,
  Sticky_Notes,
  MyTodo,
  Resume,
  Faqs,
  Case_Studies,
} from "../pages/Users/index";

import { SignInForm, SignUpForm } from "../components/index";

import Background from "../Layout/Background/Background";
import AdminPanel from "../pages/Admin/AdminPanel";

const AppRoutes = () => {
  return (
    // <Provider store={store}>
    <Router>
      <Background />
      <Routes>
        <Route path="" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/academicBg" element={<AcademicBg />} />
        <Route path="/experience" element={<Experience />} />
        <Route path="/achieve_Certi" element={<Achieve_Certi />} />
        <Route path="/myLearnings" element={<MyLearnings />} />
        <Route path="/services" element={<Services />} />
        <Route path="/blog_Post" element={<Blog_Post />} />
        <Route path="/sticky_Notes" element={<Sticky_Notes />} />
        <Route path="/myTodo" element={<MyTodo />} />
        <Route path="/resume" element={<Resume />} />
        <Route path="/faqs" element={<Faqs />} />
        <Route path="/case_Studies" element={<Case_Studies />} />
        <Route path="/signUp" element={<SignUpForm />} />
        <Route path="/signIn" element={<SignInForm />} />
        <Route path="/adminPanel" element={<AdminPanel />} />
        <Route path="/home" element={<Navigate to="/" />} />
      </Routes>
    </Router>
    // </Provider>
  );
};

export default AppRoutes;

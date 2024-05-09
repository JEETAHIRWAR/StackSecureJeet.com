import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import
  {
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
    Case_Studies
  } from './pages/Users/index.js'
import Layout from './Layout.jsx'
import Background from './components/Background/Background.jsx'






const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route path="home" element={<Home/>} />
      <Route path="about" element={<About />} />
      <Route path="skills" element={<Skills />} />
      <Route path="projects" element={<Projects />} />
      <Route path="academicBg" element={<AcademicBg />} />
      <Route path="experience" element={<Experience />} />
      <Route path="achieve_Certi" element={<Achieve_Certi />} />
      <Route path="myLearnings" element={<MyLearnings />} />
      <Route path="services" element={<Services />} />
      <Route path="blog_Post" element={<Blog_Post />} />
      <Route path="sticky_Notes" element={<Sticky_Notes />} />
      <Route path="myTodo" element={<MyTodo />} />
      <Route path="resume" element={<Resume />} />
      <Route path="faqs" element={<Faqs />} />
      <Route path="case_Studies" element={<Case_Studies />} />
    </Route>
  )
)




ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Background>
      <RouterProvider router={router}  />
    </Background>
  </React.StrictMode>,
)

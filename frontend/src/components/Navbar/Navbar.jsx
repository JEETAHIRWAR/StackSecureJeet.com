import React from 'react'
import './Navbar.scss'
import { Link, NavLink } from 'react-router-dom'
import { FaHouseChimneyUser } from "react-icons/fa6";
import { FaUserShield } from "react-icons/fa";
import { BsIncognito } from "react-icons/bs";

// import { BsUnity } from "react-icons/bs";
// import { BsSlack } from "react-icons/bs";
import { BsFillTerminalFill } from "react-icons/bs";






function Navbar()
{
  return (
    <>
      <div className="navbarContainer">
        <nav className="navbar">
          <ul className="navbar-links">
            <li>
              <NavLink
                to="Home"
                className={({ isActive }) =>
                  `navLink block py-2 pr-4 pl-3 duration-200 ${isActive ? "text-green-900" : "text-gray-700"} border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-green-900 lg:p-0`
                }
              >
                <FaHouseChimneyUser style={{ fontSize: '2.50rem' }}/>
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/about"
                className={({ isActive }) =>
                  `navLink block py-2 pr-4 pl-3 duration-200 ${isActive ? "text-orange-700" : "text-gray-700"} border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                }
              >
                {/* <FaUserShield style={{ fontSize: '2.50rem' }}/> */}
                <BsIncognito style={{ fontSize: '2.50rem' }}/>
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/skills"
                className={({ isActive }) =>
                  `navLink block py-2 pr-4 pl-3 duration-200 ${isActive ? "text-orange-700" : "text-gray-700"} border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                }
              >
                {/* <BsUnity style={{ fontSize: '2.50rem' }}/> */}
                {/* <BsSlack style={{ fontSize: '2.50rem' }}/> */}
                <BsFillTerminalFill style={{ fontSize: '2.50rem' }}/>
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/projects"
                className={({ isActive }) =>
                  `navLink block py-2 pr-4 pl-3 duration-200 ${isActive ? "text-orange-700" : "text-gray-700"} border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                }
              >
                Projects
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/academicBg"
                className={({ isActive }) =>
                  `navLink block py-2 pr-4 pl-3 duration-200 ${isActive ? "text-orange-700" : "text-gray-700"} border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                }
              >
                AcademicBg
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/experience"
                className={({ isActive }) =>
                  `navLink block py-2 pr-4 pl-3 duration-200 ${isActive ? "text-orange-700" : "text-gray-700"} border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                }
              >
                Experience
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/achieve_Certi"
                className={({ isActive }) =>
                  `navLink block py-2 pr-4 pl-3 duration-200 ${isActive ? "text-orange-700" : "text-gray-700"} border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                }
              >
                Achieve_Certi
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/myLearnings"
                className={({ isActive }) =>
                  `navLink block py-2 pr-4 pl-3 duration-200 ${isActive ? "text-orange-700" : "text-gray-700"} border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                }
              >
                MyLearnings
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/services"
                className={({ isActive }) =>
                  `navLink block py-2 pr-4 pl-3 duration-200 ${isActive ? "text-orange-700" : "text-gray-700"} border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                }
              >
                Services
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/blog_Post"
                className={({ isActive }) =>
                  `navLink block py-2 pr-4 pl-3 duration-200 ${isActive ? "text-orange-700" : "text-gray-700"} border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                }
              >
                Blog_Post
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/sticky_Notes"
                className={({ isActive }) =>
                  `navLink block py-2 pr-4 pl-3 duration-200 ${isActive ? "text-orange-700" : "text-gray-700"} border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                }
              >
                Sticky_Notes
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/myTodo"
                className={({ isActive }) =>
                  `navLink block py-2 pr-4 pl-3 duration-200 ${isActive ? "text-orange-700" : "text-gray-700"} border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                }
              >
                MyTodo
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/resume"
                className={({ isActive }) =>
                  `navLink block py-2 pr-4 pl-3 duration-200 ${isActive ? "text-orange-700" : "text-gray-700"} border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                }
              >
                Resume
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/faqs"
                className={({ isActive }) =>
                  `navLink block py-2 pr-4 pl-3 duration-200 ${isActive ? "text-orange-700" : "text-gray-700"} border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                }
              >
                Faqs
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/case_Studies"
                className={({ isActive }) =>
                  `navLink block py-2 pr-4 pl-3 duration-200 ${isActive ? "text-orange-700" : "text-gray-700"} border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                }
              >
                Case_Studies
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </>
  )
}

export default Navbar

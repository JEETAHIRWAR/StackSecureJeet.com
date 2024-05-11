import React from "react";
import "./NavigationBar.scss";
import { Link, NavLink } from "react-router-dom";
import {
  FaHouseChimneyUser,
  FaBriefcase,
  FaMedal,
  FaUserGear,
  FaUsersGear,
  FaBlog,
  FaFileZipper,
  FaFileLines,
  FaClipboardQuestion,
  FaFileCircleQuestion,
  FaShieldCat,
  FaShieldHalved,
} from "react-icons/fa6";
import { FaUserShield, FaUsersCog } from "react-icons/fa";
import { BsIncognito } from "react-icons/bs";

// import { BsUnity } from "react-icons/bs";
import { BsSlack, BsUiChecks } from "react-icons/bs";
// import { BsFillTerminalFill } from "react-icons/bs";

// import { FaFileCode } from "react-icons/fa";
// import { FaFolder } from "react-icons/fa";
// import { FaFolderOpen } from "react-icons/fa";
import {
  FaFolderOpen,
  FaFolder,
  FaUniversity,
  FaUserGraduate,
  FaBookOpen,
} from "react-icons/fa";

import { MdMenuBook, MdStickyNote2 } from "react-icons/md";
import { GiRead } from "react-icons/gi";

function NavigationBar() {
  return (
    <>
      {/* <div className="navbarContainer"> */}
      <nav className="navbarContainer">
        <ul className="navbar-links">
          <li>
            {/* <div className="tooltip .tooltip-home">Home</div> */}
            <NavLink
              to="/"
              className={({ isActive }) =>
                `navLink block py-2 pr-4 pl-3 duration-200 ${isActive ? "text-violet-500 transform scale-125" : "text-green-500"} border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-violet-500 lg:p-0`
              }
            >
              <FaHouseChimneyUser style={{ fontSize: "2.50rem" }} />
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/about"
              className={({ isActive }) =>
                `navLink block py-2 pr-4 pl-3 duration-200 ${isActive ? "text-violet-500 transform scale-125" : "text-green-500"} border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-violet-500 lg:p-0`
              }
            >
              <FaUserShield style={{ fontSize: "2.50rem" }} />
              {/* <BsIncognito style={{ fontSize: '2.50rem' }} /> */}
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/skills"
              className={({ isActive }) =>
                `navLink block py-2 pr-4 pl-3 duration-200 ${isActive ? "text-violet-500 transform rotate-45 scale-110" : "text-green-500"} border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-violet-500`
              }
            >
              {/* <BsUnity style={{ fontSize: '2.50rem' }}/> */}
              <BsSlack style={{ fontSize: "2.50rem" }} />
              {/* <BsFillTerminalFill style={{ fontSize: '2.50rem' }}/> */}
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/projects"
              className={({ isActive }) =>
                `navLink block py-2 pr-4 pl-3 duration-200 ${isActive ? "text-violet-500 transform scale-125" : "text-green-500"} border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-violet-500 lg:p-0`
              }
            >
              {/* <FaFileCode style={{ fontSize: '2.50rem' }}/> */}
              {/* <FaFolderOpen style={{ fontSize: '2.50rem' }}/> */}
              {/* <FaFolder style={{ fontSize: '2.50rem' }}/> */}
              {({ isActive }) =>
                isActive ? (
                  <FaFolderOpen style={{ fontSize: "2.50rem" }} />
                ) : (
                  <FaFolder style={{ fontSize: "2.50rem" }} />
                )
              }
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/academicBg"
              className={({ isActive }) =>
                `navLink block py-2 pr-4 pl-3 duration-200 ${isActive ? "text-violet-500 transform scale-125" : "text-green-500"} border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-violet-500 lg:p-0`
              }
            >
              {/* <FaUniversity style={{ fontSize: '2.50rem' }}/> */}
              <FaUserGraduate style={{ fontSize: "2.50rem" }} />
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/experience"
              className={({ isActive }) =>
                `navLink block py-2 pr-4 pl-3 duration-200 ${isActive ? "text-violet-500 transform scale-125" : "text-green-500"} border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-violet-500 lg:p-0`
              }
            >
              <FaBriefcase style={{ fontSize: "2.50rem" }} />
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/achieve_Certi"
              className={({ isActive }) =>
                `navLink block py-2 pr-4 pl-3 duration-200 ${isActive ? "text-violet-500 transform scale-125" : "text-green-500"} border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-violet-500 lg:p-0`
              }
            >
              <FaMedal style={{ fontSize: "2.50rem" }} />
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/myLearnings"
              className={({ isActive }) =>
                `navLink block py-2 pr-4 pl-3 duration-200 ${isActive ? "text-violet-500 transform scale-125" : "text-green-500"} border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-violet-500 lg:p-0`
              }
            >
              {({ isActive }) =>
                isActive ? (
                  <MdMenuBook style={{ fontSize: "2.50rem" }} />
                ) : (
                  <FaBookOpen style={{ fontSize: "2.50rem" }} />
                )
              }
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/services"
              className={({ isActive }) =>
                `navLink block py-2 pr-4 pl-3 duration-200 ${isActive ? "text-violet-500 transform scale-125" : "text-green-500"} border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-violet-500 lg:p-0`
              }
            >
              {/* <FaUserGear style={{ fontSize: '2.50rem' }}/> */}
              {/* <FaUsersGear style={{ fontSize: '2.50rem' }}/> */}
              <FaUsersCog style={{ fontSize: "2.50rem" }} />
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/blog_Post"
              className={({ isActive }) =>
                `navLink block py-2 pr-4 pl-3 duration-200 ${isActive ? "text-violet-500 transform scale-125" : "text-green-500"} border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-violet-500 lg:p-0`
              }
            >
              <FaBlog style={{ fontSize: "2.50rem" }} />
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/sticky_Notes"
              className={({ isActive }) =>
                `navLink block py-2 pr-4 pl-3 duration-200 ${isActive ? "text-violet-500 transform scale-125" : "text-green-500"} border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-violet-500 lg:p-0`
              }
            >
              <MdStickyNote2 style={{ fontSize: "2.50rem" }} />
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/myTodo"
              className={({ isActive }) =>
                `navLink block py-2 pr-4 pl-3 duration-200 ${isActive ? "text-violet-500 transform scale-125" : "text-green-500"} border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-violet-500 lg:p-0`
              }
            >
              <BsUiChecks style={{ fontSize: "2.50rem" }} />
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/resume"
              className={({ isActive }) =>
                `navLink block py-2 pr-4 pl-3 duration-200 ${isActive ? "text-violet-500 transform scale-125" : "text-green-500"} border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-violet-500 lg:p-0`
              }
            >
              {/* <FaFileZipper style={{ fontSize: '2.50rem' }}/> */}
              {/* <FaFileLines style={{ fontSize: '2.50rem' }}/> */}
              {({ isActive }) =>
                isActive ? (
                  <FaFileLines style={{ fontSize: "2.50rem" }} />
                ) : (
                  <FaFileZipper style={{ fontSize: "2.50rem" }} />
                )
              }
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/faqs"
              className={({ isActive }) =>
                `navLink block py-2 pr-4 pl-3 duration-200 ${isActive ? "text-violet-500 transform scale-125" : "text-green-500"} border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-violet-500 lg:p-0`
              }
            >
              {/* <FaClipboardQuestion style={{ fontSize: '2.50rem' }}/> */}
              {({ isActive }) =>
                isActive ? (
                  <FaFileCircleQuestion style={{ fontSize: "2.50rem" }} />
                ) : (
                  <FaClipboardQuestion style={{ fontSize: "2.50rem" }} />
                )
              }
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/case_Studies"
              className={({ isActive }) =>
                `navLink block py-2 pr-4 pl-3 duration-200 ${isActive ? "text-violet-500 transform scale-125" : "text-green-500"} border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-violet-500 lg:p-0`
              }
            >
              {/* <GiRead style={{ fontSize: '2.50rem' }}/> */}
              {({ isActive }) =>
                isActive ? (
                  <FaShieldHalved style={{ fontSize: "2.50rem" }} />
                ) : (
                  <FaShieldCat style={{ fontSize: "2.50rem" }} />
                )
              }
            </NavLink>
          </li>
        </ul>
      </nav>
      {/* </div> */}
    </>
  );
}

export default NavigationBar;

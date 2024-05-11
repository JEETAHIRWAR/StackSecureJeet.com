import React, { useState, useEffect } from "react";
import "./UserProfile.scss";
import { Link, NavLink } from "react-router-dom";
import { MdVerified, MdEmail } from "react-icons/md";
import { SiGooglemaps, SiLinkedin } from "react-icons/si";
import { RxLinkedinLogo } from "react-icons/rx";
import {
  FaPhone,
  FaCalendarDays,
  FaSquareGithub,
  FaYoutube,
  FaSquareXTwitter,
} from "react-icons/fa6";

function UserProfile() {
  const [count, setCount] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [showCursor, setShowCursor] = useState(true);
  const professions = ["Full Stack Developer", "Cyber Security Analyst"];

  useEffect(() => {
    if (count < professions.length) {
      const typingTimeout = setTimeout(() => {
        if (charIndex < professions[count].length) {
          setDisplayText(displayText + professions[count][charIndex]);
          setCharIndex(charIndex + 1);
        } else {
          // Move to the next profession after 2 seconds delay
          setTimeout(() => {
            setCharIndex(0);
            setCount(count + 1);
            setDisplayText("");
          }, 1000);
        }
      }, 200);

      // Toggle cursor visibility every 300ms
      const cursorInterval = setInterval(() => {
        setShowCursor((prevShowCursor) => !prevShowCursor);
      }, 200);

      return () => {
        clearTimeout(typingTimeout);
        clearInterval(cursorInterval);
      };
    } else {
      // Reset to the beginning of the array
      setCount(0);
    }
  }, [count, charIndex, displayText, professions]);

  return (
    <>
      <div className="profileContainer">
        <div className="profileImageCon">
          <div>🤑</div>
        </div>
        <div>
          <div>
            <h1>Jeet Ahirwar</h1>
            <MdVerified className="text-violet-500 text-xl" />
          </div>
          <p>
            {displayText}
            <span className="cursor">{showCursor ? "|" : ""}</span>
          </p>
        </div>
        <div className="resumeBtn">
          <NavLink
            to="/resume"
            className={({ isActive }) =>
              `cta ${isActive ? "text-violet-500" : "text-green-500"}`
            }
          >
            <span>Resume</span>
            <svg width="15px" height="10px" viewBox="0 0 13 10">
              <path d="M1,5 L11,5"></path>
              <polyline points="8 1 12 5 8 9"></polyline>
            </svg>
          </NavLink>
        </div>
        <div className="personalInfo">
          <ul style={{ margin: 0, padding: 0 }}>
            <li>
              <span>
                <SiGooglemaps />
              </span>
              <NavLink
                to="https://github.com/JEETAHIRWAR"
                className={({ isActive }) =>
                  `sLinks ${isActive ? "text-violet-500 " : "text-green-500 text-base"} hover:text-violet-500`
                }
              >
                A-153 Danish Nagar Bhopal M.P. 464886
              </NavLink>
            </li>
            <li>
              <span>
                <FaPhone />
              </span>
              <NavLink
                to="https://github.com/JEETAHIRWAR"
                className={({ isActive }) =>
                  `sLinks ${isActive ? "text-violet-500 " : "text-green-500 text-base"} hover:text-violet-500`
                }
              >
                (+91) 6264516309
              </NavLink>
            </li>
            <li>
              <span>
                <MdEmail />
              </span>
              <NavLink
                to="https://github.com/JEETAHIRWAR"
                className={({ isActive }) =>
                  `sLinks ${isActive ? "text-violet-500 " : "text-green-500 text-base"} hover:text-violet-500`
                }
              >
                jeetahirwar664@gmail.com
              </NavLink>
            </li>
            <li>
              <span>
                <FaCalendarDays />
              </span>
              <NavLink
                to="https://github.com/JEETAHIRWAR"
                className={({ isActive }) =>
                  `sLinks ${isActive ? "text-violet-500 " : "text-green-500"} hover:text-violet-500`
                }
              >
                26-June-2002
              </NavLink>
            </li>
          </ul>
        </div>

        <div className="socialMLinks">
          <button class="Btn">
            <span class="svgContainer">
              <NavLink
                to="https://github.com/JEETAHIRWAR"
                className={({ isActive }) =>
                  `smLinks ${isActive ? "text-violet-500 " : "text-green-500"} hover:text-violet-500`
                }
              >
                <FaSquareGithub />
              </NavLink>
            </span>
            <span class="BG"></span>
          </button>
          <button class="Btn">
            <span class="svgContainer">
              <NavLink
                to="https://github.com/JEETAHIRWAR"
                className={({ isActive }) =>
                  `smLinks ${isActive ? "text-violet-500 " : "text-green-500"} hover:text-violet-500`
                }
              >
                <RxLinkedinLogo />
              </NavLink>
            </span>
            <span class="BG"></span>
          </button>
          <button class="Btn">
            <span class="svgContainer">
              <NavLink
                to="https://github.com/JEETAHIRWAR"
                className={({ isActive }) =>
                  `smLinks ${isActive ? "text-violet-500 " : "text-green-500"} hover:text-violet-500`
                }
              >
                <FaSquareXTwitter />
              </NavLink>
            </span>
            <span class="BG"></span>
          </button>
          <button class="Btn">
            <span class="svgContainer">
              <NavLink
                to="https://github.com/JEETAHIRWAR"
                className={({ isActive }) =>
                  `smLinks ${isActive ? "text-violet-500 " : "text-green-500"} hover:text-violet-500`
                }
              >
                <FaYoutube />
              </NavLink>
            </span>
            <span class="BG"></span>
          </button>
        </div>
        <div className="themesContainer"></div>
      </div>
    </>
  );
}

export default UserProfile;

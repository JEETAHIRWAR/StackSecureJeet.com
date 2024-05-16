import React from "react";
import {
  FaHouseChimneyUser,
  FaBriefcase,
  FaMedal,
  FaAward,
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

import { BsSlack, BsUiChecks } from "react-icons/bs";
import {
  FaFolderOpen,
  FaFolder,
  FaUniversity,
  FaUserGraduate,
  FaBookOpen,
} from "react-icons/fa";

import { MdMenuBook, MdStickyNote2 } from "react-icons/md";

const SidebarItem = ({ formName, icon, active, onClick }) => {
  const getIcon = () => {
    switch (icon) {
      case "About":
        return (
          <FaUserShield
            className={`text-xl mr-2 ${active ? "text-white" : "text-gray-400"}`}
          />
        );
      case "Skills":
        return (
          <BsSlack
            className={`text-xl mr-2 ${active ? "text-white" : "text-gray-400"}`}
          />
        );
      case "Projects":
        return active ? (
          <FaFolderOpen className="text-xl mr-2 text-white" />
        ) : (
          <FaFolder className="text-xl mr-2 text-gray-400" />
        );
      case "Academic Background":
        return (
          <FaUserGraduate
            className={`text-xl mr-2 ${active ? "text-white" : "text-gray-400"}`}
          />
        );
      case "Work Experience":
        return (
          <FaBriefcase
            className={`text-xl mr-2 ${active ? "text-white" : "text-gray-400"}`}
          />
        );
      case "Achievement & Certificates":
        return (
          <FaAward
            className={`text-xl mr-2 ${active ? "text-white" : "text-gray-400"}`}
          />
        );
      case "My Learnings":
        return active ? (
          <MdMenuBook className="text-xl mr-2 text-white" />
        ) : (
          <FaBookOpen className="text-xl mr-2 text-gray-400" />
        );

      case "Provide Services":
        return (
          <FaUsersCog
            className={`text-xl mr-2 ${active ? "text-white" : "text-gray-400"}`}
          />
        );
      case "Blog Posts":
        return (
          <FaBlog
            className={`text-xl mr-2 ${active ? "text-white" : "text-gray-400"}`}
          />
        );
      case "Sticky Notes":
        return (
          <MdStickyNote2
            className={`text-xl mr-2 ${active ? "text-white" : "text-gray-400"}`}
          />
        );
      case "My Todo's":
        return (
          <BsUiChecks
            className={`text-xl mr-2 ${active ? "text-white" : "text-gray-400"}`}
          />
        );
      case "Resume Center":
        return active ? (
          <FaFileLines className="text-xl mr-2 text-white" />
        ) : (
          <FaFileZipper className="text-xl mr-2 text-gray-400" />
        );

      case "Faqs":
        return active ? (
          <FaFileCircleQuestion className="text-xl mr-2 text-white" />
        ) : (
          <FaClipboardQuestion className="text-xl mr-2 text-gray-400" />
        );
      case "Case Studies":
        return active ? (
          <FaShieldHalved className="text-xl mr-2 text-white" />
        ) : (
          <FaShieldCat className="text-xl mr-2 text-gray-400" />
        );
      default:
        return (
          <FaCircle
            className={`text-xl mr-2 ${active ? "text-white" : "text-gray-400"}`}
          />
        );
    }
  };

  return (
    <div
      className={`sidebarItem cursor-pointer p-2 flex items-center ${
        active ? "bg-blue-500" : ""
      }`}
      onClick={() => onClick(formName)} // Pass formName to the onClick handler
    >
      {getIcon()}
      <span>{formName}</span>
    </div>
  );
};

export default SidebarItem;

import React from "react";
import { FaUserShield } from "react-icons/fa";
import { BsSlack } from "react-icons/bs";
import {
  FaFolder,
  FaUniversity,
  FaBriefcase,
  FaMedal,
  FaQuestionCircle,
  FaBlog,
  //   FaClipboardQuestion,
  //   FaFileZipper,
  //   FaFileLines,
} from "react-icons/fa";
import { MdMenuBook } from "react-icons/md";
import SidebarItem from "./SidebarItem";

const iconMap = {
  About: FaUserShield,
  Skills: BsSlack,
  Projects: FaFolder,
  AcademicBackground: FaUniversity,
  WorkExperience: FaBriefcase,
  AchievementCertificates: FaMedal,
  MyLearnings: MdMenuBook,
  ProvideServices: FaBlog,
  BlogPosts: FaBlog,
  MyTodos: FaMedal,
  ResumeCenter: FaMedal,
  Faqs: FaQuestionCircle,
  CaseStudies: FaMedal,
};

function Sidebar({ forms, activeForm, onChange }) {
  return (
    <div className="sidebar">
      {forms.map((form, index) => (
        <SidebarItem
          key={form.name}
          formName={form.name}
          icon={iconMap[form.name]}
          active={activeForm === form.name}
          onClick={() => onChange(form.name)}
        />
      ))}
    </div>
  );
}

export default Sidebar;

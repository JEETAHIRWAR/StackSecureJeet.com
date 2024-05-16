import React, { useState, useEffect, useReducer } from "react";
import axios from "axios";
import Sidebar from "./Sidebar";
import FormContainer from "./FormContainer";
import ProgressBar from "./Progressbar";
import {
  AboutForm,
  SkillsForm,
  ProjectsForm,
  AcademicForm,
  WorkExperienceForm,
  AchievementForm,
  MyLearningsForm,
  ServicesForm,
  BlogForm,
  TodoForm,
  ResumeForm,
  FaqsForm,
  CaseStudiesForm,
} from "./index";

import {
  FirstContainer,
  SecondContainer,
  ThirdContainer,
} from "../../Layout/index";

import { FaChessRook } from "react-icons/fa6";

import "./AdminPanel.scss";
import formDataReducer from "../../redux/reducers/formDataReducer";

const initialFormData = {
  AboutForm: {
    name: "",
    email: "",
    mobile: "",
    profileImage: "",
    details: {
      bio: "",
      website: "",
      address: "",
      digitalSignature: "",
      social_media: {
        twitter: "",
        linkedin: "",
        github: "",
        instagram: "",
        facebook: "",
        other: "",
      },
    },
    description: "",
  },
  SkillsForm: {
    skill1: "",
    skill2: "",
  },
  ProjectsForm: {
    //...
  },
  AcademicForm: {
    //...
  },
  WorkExperienceForm: {
    //...
  },
  AchievementForm: {
    //...
  },
  MyLearningsForm: {
    //...
  },
  ServicesForm: {
    //...
  },
  BlogForm: {
    //...
  },
  TodoForm: {
    //...
  },
  ResumeForm: {
    //...
  },
  FaqsForm: {
    //...
  },
  CaseStudiesForm: {
    //...
  },
};

const forms = [
  {
    name: "About",
    icon: "FaUserShield",
    component: AboutForm,
  },
  {
    name: "Skills",
    icon: "BsSlack",
    component: SkillsForm,
  },
  {
    name: "Projects",
    icon: "FaFolder",
    component: ProjectsForm,
  },
  {
    name: "Academic Background",
    icon: "FaUniversity",
    component: AcademicForm,
  },
  {
    name: "Work Experience",
    icon: "FaBriefcase",
    component: WorkExperienceForm,
  },
  {
    name: "Achievement & Certificates",
    icon: "FaMedal",
    component: AchievementForm,
  },
  {
    name: "My Learnings",
    icon: "MdMenuBook",
    component: MyLearningsForm,
  },
  {
    name: "Provide Services",
    icon: "FaUserGear",
    component: ServicesForm,
  },
  {
    name: "Blog Posts",
    icon: "FaBlog",
    component: BlogForm,
  },
  {
    name: "My Todo's",
    icon: "FaClipboardQuestion",
    component: TodoForm,
  },
  {
    name: "Resume Center",
    icon: "FaFileZipper",
    component: ResumeForm,
  },
  {
    name: "Faqs",
    icon: "FaQuestionCircle",
    component: FaqsForm,
  },
  {
    name: "Case Studies",
    icon: "FaFileLines",
    component: CaseStudiesForm,
  },
];

function AdminPanel() {
  const [activeForm, setActiveForm] = useState("AboutForm");
  const [completedForms, setCompletedForms] = useState(0);
  const [formData, dispatch] = useReducer(formDataReducer, initialFormData);

  useEffect(() => {
    const activeIndex = forms.indexOf(activeForm);
    setCompletedForms(activeIndex + 1);
  }, [activeForm]);

  const progress = (completedForms / forms.length) * 100;

  const handleSaveAndNext = () => {
    const nextFormIndex = activeForm + 1;
    if (nextFormIndex < forms.length) {
      setActiveForm(nextFormIndex);
    } else {
      handleSubmit();
    }
  };

  const handleSubmit = async () => {
    try {
      const response = await axios.post("/api/submitFormData", formData);
      console.log("Form data submitted:", response.data);
      dispatch({ type: "RESET_FORM_DATA" });
    } catch (error) {
      console.error("Error submitting form data:", error);
    }
  };

  return (
    <div className="layoutContainer">
      <div className="con1">
        <SecondContainer>
          <div className="sidebar text-white p-4">
            <Sidebar
              forms={forms}
              activeForm={activeForm}
              onChange={setActiveForm}
            />
          </div>
        </SecondContainer>
      </div>
      <div className="con2">
        <FirstContainer>
          <div className="topHeading">
            <div className="topBar top-progressbar ">
              <ProgressBar progress={progress} />
            </div>
          </div>
        </FirstContainer>
      </div>
      <div className="con3">
        <ThirdContainer>
          <div className="formContainer p-4">
            <FormContainer
              formData={formData[activeForm]}
              updateFormData={(data) =>
                dispatch({ type: "UPDATE_FORM_DATA", data })
              }
              onSaveAndNext={handleSaveAndNext}
            />
          </div>
        </ThirdContainer>
      </div>
    </div>
  );
}

export default AdminPanel;

import React, { useState, useEffect } from "react";
import axios from "axios";

import {
  FirstContainer,
  SecondContainer,
  ThirdContainer,
} from "../../Layout/index";

import { FaChessRook } from "react-icons/fa6";

import "./AdminPanel.scss";

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
  StickyNotesForm,
  TodoForm,
  ResumeForm,
  FaqsForm,
  CaseStudiesForm,
  SidebarItem,
} from "./index";

import {
  initialAboutFormData,
  initialSkillsFormData,
  initialProjectsFormData,
  initialAcademicFormData,
  initialWorkExperienceFormData,
  initialAchievementFormData,
  initialMyLearningsFormData,
  initialServicesFormData,
  initialBlogFormData,
  initialStickyNotesFormData,
  initialTodoFormData,
  initialResumeFormData,
  initialFaqsFormData,
  initialCaseStudiesFormData,
} from "./initialFormData";

function AdminPanel() {
  const [activeForm, setActiveForm] = useState(0);
  const [completedForms, setCompletedForms] = useState(0);
  const [formData, setFormData] = useState({
    AboutForm: { ...initialAboutFormData },
    SkillsForm: { ...initialSkillsFormData },
    ProjectsForm: { ...initialProjectsFormData },
    AcademicForm: { ...initialAcademicFormData },
    WorkExperienceForm: { ...initialWorkExperienceFormData },
    AchievementForm: { ...initialAchievementFormData },
    MyLearningsForm: { ...initialMyLearningsFormData },
    ServicesForm: { ...initialServicesFormData },
    BlogForm: { ...initialStickyNotesFormData },
    BlogForm: { ...initialBlogFormData },
    TodoForm: { ...initialTodoFormData },
    ResumeForm: { ...initialResumeFormData },
    FaqsForm: { ...initialFaqsFormData },
    CaseStudiesForm: { ...initialCaseStudiesFormData },
  });

  const forms = [
    {
      name: "About",
      icon: "About",
      component: AboutForm,
    },
    {
      name: "Skills",
      icon: "Skills",
      component: SkillsForm,
    },
    {
      name: "Projects",
      icon: "Projects",
      component: ProjectsForm,
    },
    {
      name: "Academic Background",
      icon: "Academic Background",
      component: AcademicForm,
    },
    {
      name: "Work Experience",
      icon: "Work Experience",
      component: WorkExperienceForm,
    },
    {
      name: "Achievement & Certificates",
      icon: "Achievement & Certificates",
      component: AchievementForm,
    },
    {
      name: "My Learnings",
      icon: "My Learnings",
      component: MyLearningsForm,
    },
    {
      name: "Provide Services",
      icon: "Provide Services",
      component: ServicesForm,
    },
    {
      name: "Sticky Notes",
      icon: "Sticky Notes",
      component: StickyNotesForm,
    },
    {
      name: "Blog Posts",
      icon: "Blog Posts",
      component: BlogForm,
    },
    {
      name: "My Todo's",
      icon: "My Todo's",
      component: TodoForm,
    },
    {
      name: "Resume Center",
      icon: "Resume Center",
      component: ResumeForm,
    },
    {
      name: "Faqs",
      icon: "Faqs",
      component: FaqsForm,
    },
    {
      name: "Case Studies",
      icon: "Case Studies",
      component: CaseStudiesForm,
    },
  ];

  // console.log("Forms Array:", forms[0].component);

  useEffect(() => {
    setCompletedForms(activeForm + 1);
  }, [activeForm]);

  const handleSaveAndNext = () => {
    const nextFormIndex = activeForm + 1;
    if (nextFormIndex < forms.length) {
      setActiveForm(nextFormIndex);
    } else {
      // Last form reached
      handleSubmit();
    }
  };

  const handleSubmit = async () => {
    try {
      // Make API call to send formData to the backend
      const response = await axios.post("/api/v1/admin/data/:id", formData);
      console.log("Form data submitted:", response.data);
      // Optionally, you can reset the form data state after successful submission
      setFormData({
        AboutForm: { ...initialAboutFormData },
        SkillsForm: { ...initialSkillsFormData },
        ProjectsForm: { ...initialProjectsFormData },
        AcademicForm: { ...initialAcademicFormData },
        WorkExperienceForm: { ...initialWorkExperienceFormData },
        AchievementForm: { ...initialAchievementFormData },
        MyLearningsForm: { ...initialMyLearningsFormData },
        ServicesForm: { ...initialServicesFormData },
        BlogForm: { ...initialBlogFormData },
        TodoForm: { ...initialTodoFormData },
        ResumeForm: { ...initialResumeFormData },
        FaqsForm: { ...initialFaqsFormData },
        CaseStudiesForm: { ...initialCaseStudiesFormData },
      });
    } catch (error) {
      console.error("Error submitting form data:", error);
    }
  };

  const handleFormChange = (index) => {
    setActiveForm(index);
  };

  const updateFormData = (formName, newData) => {
    setFormData({
      ...formData,
      [formName]: {
        ...formData[formName],
        ...newData,
      },
    });
  };

  const ActiveFormComponent = forms[activeForm].component;

  return (
    <>
      <div className="layoutContainer">
        <div className="con1">
          <SecondContainer>
            <div className="sidebar text-white p-4">
              <h1 className="p-1 mb-2 mt-2 flex text-xl font-bold uppercase font">
                <FaChessRook className="mr-3 ml-2 text-2xl" />
                Admin Panel
              </h1>
              {forms.map((form, index) => (
                <SidebarItem
                  key={index}
                  formName={form.name}
                  icon={form.icon}
                  active={activeForm === index}
                  onClick={() => handleFormChange(index)}
                />
              ))}
            </div>
          </SecondContainer>
        </div>

        <div className="con2">
          <FirstContainer>
            <div className="topHeading">
              <div className="topBar top-progressbar ">
                <h1>Active Form Name :</h1>
              </div>
            </div>
          </FirstContainer>
        </div>
        <div className="con3">
          <ThirdContainer>
            <div className="formContainer p-4">
              <ActiveFormComponent
                formData={formData[forms[activeForm].name]}
                updateFormData={(data) =>
                  updateFormData(forms[activeForm].name, data)
                }
                onSaveAndNext={handleSaveAndNext}
              />
            </div>
          </ThirdContainer>
        </div>
      </div>
    </>
  );
}

export default AdminPanel;

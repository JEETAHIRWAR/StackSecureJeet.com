import React from "react";
import {
  FirstContainer,
  SecondContainer,
  ThirdContainer,
} from "../../../Layout/index";
import { NavigationBar, UserProfile } from "../../../components/index";
import "./Skills.scss";
import "../../../global.scss";

import { FaHtml5, FaCss3Alt, FaJsSquare } from "react-icons/fa"; // Import icons
import axios from "axios";

function Skills() {
  // Define the list of skills
  const skillsList = [
    { id: "1", name: "HTML", icon: <FaHtml5 /> },
    { id: "2", name: "CSS", icon: <FaCss3Alt /> },
    { id: "3", name: "JavaScript", icon: <FaJsSquare /> },
    // Add more skills as needed
  ];

  const [selectedSkills, setSelectedSkills] = useState([]);

  const handleSkillChange = (event) => {
    const { value } = event.target;
    setSelectedSkills((prevSelectedSkills) => {
      if (prevSelectedSkills.includes(value)) {
        // If the skill is already selected, remove it
        return prevSelectedSkills.filter((skill) => skill !== value);
      } else {
        // If the skill is not selected, add it
        return [...prevSelectedSkills, value];
      }
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Send selected skills to the server to store in the database
    axios
      .post("/api/user/skills", { skills: selectedSkills })
      .then((response) => {
        console.log("Skills stored successfully:", response.data);
        // Optionally, reset the selectedSkills state after successful storage
        setSelectedSkills([]);
      })
      .catch((error) => {
        console.error("Error storing skills:", error);
      });
  };

  return (
    <>
      <div className="layoutContainer">
        <div className="con1">
          <SecondContainer>
            <UserProfile />
          </SecondContainer>
        </div>
        <div className="con2">
          <FirstContainer>
            <NavigationBar />
          </FirstContainer>
        </div>
        <div className="con3">
          <ThirdContainer>
            <div>
              <form onSubmit={handleSubmit}>
                <label>Select your skills:</label>
                <div>
                  {skillsList.map((skill) => (
                    <div key={skill.id}>
                      <input
                        type="checkbox"
                        id={skill.id}
                        value={skill.id}
                        checked={selectedSkills.includes(skill.id)}
                        onChange={handleSkillChange}
                      />
                      <label htmlFor={skill.id}>
                        {skill.icon} {/* Render the icon */}
                        {skill.name}
                      </label>
                    </div>
                  ))}
                </div>
                <button type="submit">Save</button>
              </form>
            </div>
          </ThirdContainer>
        </div>
      </div>
    </>
  );
}

export default Skills;

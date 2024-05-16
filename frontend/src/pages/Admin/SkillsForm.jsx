import React from "react";
import "../../global.scss";

const SkillsForm = ({
  formData = { skills: [] },
  updateFormData,
  onSaveAndNext,
}) => {
  const handleInputChange = (index, field, value) => {
    const updatedSkills = [...formData.skills];
    updatedSkills[index][field] = value;
    updateFormData({
      ...formData,
      skills: updatedSkills,
    });
  };

  const addSkill = () => {
    updateFormData({
      ...formData,
      skills: [...formData.skills, {}],
    });
  };

  const removeSkill = (index) => {
    const updatedSkills = formData.skills.filter((_, i) => i !== index);
    updateFormData({
      ...formData,
      skills: updatedSkills,
    });
  };

  return (
    <div className="space-y-4 p-4 overflow-auto h-[500px] custom-scrollbar">
      {formData.skills.map((skill, index) => (
        <div key={index} className="space-y-2">
          <input
            type="text"
            value={skill.proficientIn || ""}
            onChange={(e) =>
              handleInputChange(index, "proficientIn", e.target.value)
            }
            placeholder="Proficient In"
            className="bg-black text-green-400  mr-5 border-green-400 border-2 rounded-b-md px-4 py-2 focus:outline-none focus:border-green-500"
          />
          <input
            type="text"
            value={skill.technicalSkills || ""}
            onChange={(e) =>
              handleInputChange(index, "technicalSkills", e.target.value)
            }
            placeholder="Technical Skills"
            className="bg-black text-green-400  mr-5 border-green-400 border-2 rounded-b-md px-4 py-2 focus:outline-none focus:border-green-500"
          />
          <input
            type="text"
            value={skill.softSkills || ""}
            onChange={(e) =>
              handleInputChange(index, "softSkills", e.target.value)
            }
            placeholder="Soft Skills"
            className="bg-black text-green-400  mr-5 border-green-400 border-2 rounded-b-md px-4 py-2 focus:outline-none focus:border-green-500"
          />
          <input
            type="text"
            value={skill.toolsAndFrameworks || ""}
            onChange={(e) =>
              handleInputChange(index, "toolsAndFrameworks", e.target.value)
            }
            placeholder="Tools and Frameworks"
            className="bg-black text-green-400  mr-5 border-green-400 border-2 rounded-b-md px-4 py-2 focus:outline-none focus:border-green-500"
          />
          {index > 0 && (
            <button
              onClick={() => removeSkill(index)}
              className="bg-black mt-5 hover:bg-red-700 mr-5 text-red-400 font-semibold py-2 px-4 rounded-md border-red-400 border-2 focus:outline-none focus:border-red-500 transition duration-300 ease-in-out"
            >
              Remove Skill
            </button>
          )}
        </div>
      ))}
      <button
        onClick={addSkill}
        className="bg-black hover:bg-violet-700 mr-5 text-violet-400 font-semibold py-2 px-4 rounded-md border-violet-400 border-2 focus:outline-none focus:border-violet-500 transition duration-300 ease-in-out"
      >
        Add Skill
      </button>
      <button
        onClick={onSaveAndNext}
        className="bg-black hover:bg-green-700 text-green-400 font-semibold py-2 px-4 rounded-md border-green-400 border-2 focus:outline-none focus:border-green-500 transition duration-300 ease-in-out"
      >
        Save and Next
      </button>
    </div>
  );
};

export default SkillsForm;

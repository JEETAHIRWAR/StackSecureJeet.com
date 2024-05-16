import React from "react";

const AchievementForm = ({
  formData = { achievements: [{}] },
  updateFormData,
  onSaveAndNext,
}) => {
  const handleInputChange = (index, field, value) => {
    const updatedAchievements = [...formData.achievements]; // Create a copy of the achievements array
    updatedAchievements[index][field] = value; // Update the specific field of the achievement entry at the given index
    updateFormData({
      ...formData,
      achievements: updatedAchievements, // Update the achievements array in the formData
    });
  };

  const addAchievement = () => {
    updateFormData({
      ...formData,
      achievements: [...formData.achievements, {}], // Add an empty achievement entry object to the achievements array
    });
  };

  const removeAchievement = (index) => {
    const updatedAchievements = [...formData.achievements]; // Create a copy of the achievements array
    updatedAchievements.splice(index, 1); // Remove the achievement entry at the given index
    updateFormData({
      ...formData,
      achievements: updatedAchievements, // Update the achievements array in the formData
    });
  };

  return (
    <div className="space-y-4 p-4 overflow-auto h-[500px] custom-scrollbar">
      {formData.achievements.map((achievementEntry, index) => (
        <div key={index} className="space-y-2">
          <input
            className="bg-black text-green-400  mr-5 border-green-400 border-2 rounded-b-md px-4 py-2 focus:outline-none focus:border-green-500"
            type="text"
            value={achievementEntry.certificateName || ""}
            onChange={(e) =>
              handleInputChange(index, "certificateName", e.target.value)
            }
            placeholder="Certificate Name"
          />
          <input
            className="bg-black text-green-400 w-[215px] mr-5 border-green-400 border-2 rounded-b-md px-4 py-2 focus:outline-none focus:border-green-500"
            type="date"
            value={
              achievementEntry.issueDate
                ? achievementEntry.issueDate.toISOString().substring(0, 10)
                : ""
            }
            onChange={(e) =>
              handleInputChange(index, "issueDate", new Date(e.target.value))
            }
            placeholder="Issue Date"
          />
          <input
            className="bg-black text-green-400  mr-5 border-green-400 border-2 rounded-b-md px-4 py-2 focus:outline-none focus:border-green-500"
            type="text"
            value={achievementEntry.organizationName || ""}
            onChange={(e) =>
              handleInputChange(index, "organizationName", e.target.value)
            }
            placeholder="Organization Name"
          />
          <input
            className="bg-black text-green-400  mr-5 border-green-400 border-2 rounded-b-md px-4 py-2 focus:outline-none focus:border-green-500"
            type="text"
            value={achievementEntry.description || ""}
            onChange={(e) =>
              handleInputChange(index, "description", e.target.value)
            }
            placeholder="Description"
          />
          <input
            className="bg-black text-green-400  mr-5 border-green-400 border-2 rounded-b-md px-4 py-2 focus:outline-none focus:border-green-500"
            type="text"
            value={
              achievementEntry.gainedSkills
                ? achievementEntry.gainedSkills.join(", ")
                : ""
            }
            onChange={(e) =>
              handleInputChange(
                index,
                "gainedSkills",
                e.target.value.split(", ")
              )
            }
            placeholder="Gained Skills (comma-separated)"
          />
          <input
            className="bg-black text-green-400  mr-5 border-green-400 border-2 rounded-b-md px-4 py-2 focus:outline-none focus:border-green-500"
            type="text"
            value={achievementEntry.liveLink || ""}
            onChange={(e) =>
              handleInputChange(index, "liveLink", e.target.value)
            }
            placeholder="Live Link"
          />
          {index > 0 && (
            <button
              className="bg-black mt-5 hover:bg-red-700 mr-5 text-red-400 font-semibold py-2 px-4 rounded-md border-red-400 border-2 focus:outline-none focus:border-red-500 transition duration-300 ease-in-out"
              onClick={() => removeAchievement(index)}
            >
              Remove Achievement
            </button>
          )}
        </div>
      ))}
      <button
        className="bg-black hover:bg-violet-700 mr-5 text-violet-400 font-semibold py-2 px-4 rounded-md border-violet-400 border-2 focus:outline-none focus:border-violet-500 transition duration-300 ease-in-out"
        onClick={addAchievement}
      >
        Add Achievement
      </button>
      <button
        className="bg-black hover:bg-green-700 text-green-400 font-semibold py-2 px-4 rounded-md border-green-400 border-2 focus:outline-none focus:border-green-500 transition duration-300 ease-in-out"
        onClick={onSaveAndNext}
      >
        Save and Next
      </button>
    </div>
  );
};

export default AchievementForm;

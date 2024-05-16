import React from "react";

const WorkExperienceForm = ({
  formData = { experience: [{}] },
  updateFormData,
  onSaveAndNext,
}) => {
  const handleInputChange = (index, field, value) => {
    const updatedExperience = [...formData.experience]; // Create a copy of the experience array
    updatedExperience[index][field] = value; // Update the specific field of the experience entry at the given index
    updateFormData({
      ...formData,
      experience: updatedExperience, // Update the experience array in the formData
    });
  };

  const addExperience = () => {
    updateFormData({
      ...formData,
      experience: [...formData.experience, {}], // Add an empty experience entry object to the experience array
    });
  };

  const removeExperience = (index) => {
    const updatedExperience = [...formData.experience]; // Create a copy of the experience array
    updatedExperience.splice(index, 1); // Remove the experience entry at the given index
    updateFormData({
      ...formData,
      experience: updatedExperience, // Update the experience array in the formData
    });
  };

  return (
    <div className="space-y-4 p-4 overflow-auto h-[500px] custom-scrollbar">
      {formData.experience.map((experienceEntry, index) => (
        <div key={index} className="space-y-2">
          <input
            className="bg-black text-green-400  mr-5 border-green-400 border-2 rounded-b-md px-4 py-2 focus:outline-none focus:border-green-500"
            type="text"
            value={experienceEntry.jobTitle || ""}
            onChange={(e) =>
              handleInputChange(index, "jobTitle", e.target.value)
            }
            placeholder="Job Title"
          />
          <input
            className="bg-black text-green-400  mr-5 border-green-400 border-2 rounded-b-md px-4 py-2 focus:outline-none focus:border-green-500"
            type="text"
            value={experienceEntry.companyName || ""}
            onChange={(e) =>
              handleInputChange(index, "companyName", e.target.value)
            }
            placeholder="Company Name"
          />
          <input
            className="bg-black text-green-400 w-[215px] mr-5 border-green-400 border-2 rounded-b-md px-4 py-2 focus:outline-none focus:border-green-500"
            type="date"
            value={
              experienceEntry.startDate
                ? experienceEntry.startDate.toISOString().substring(0, 10)
                : ""
            }
            onChange={(e) =>
              handleInputChange(index, "startDate", new Date(e.target.value))
            }
            placeholder="Start Date"
          />
          <input
            className="bg-black text-green-400 w-[215px] mr-5 border-green-400 border-2 rounded-b-md px-4 py-2 focus:outline-none focus:border-green-500"
            type="date"
            value={
              experienceEntry.endDate
                ? experienceEntry.endDate.toISOString().substring(0, 10)
                : ""
            }
            onChange={(e) =>
              handleInputChange(index, "endDate", new Date(e.target.value))
            }
            placeholder="End Date"
          />
          <input
            className="bg-black text-green-400  mr-5 border-green-400 border-2 rounded-b-md px-4 py-2 focus:outline-none focus:border-green-500"
            type="text"
            value={experienceEntry.location || ""}
            onChange={(e) =>
              handleInputChange(index, "location", e.target.value)
            }
            placeholder="Location"
          />
          <input
            className="bg-black text-green-400  mr-5 border-green-400 border-2 rounded-b-md px-4 py-2 focus:outline-none focus:border-green-500"
            type="text"
            value={experienceEntry.description || ""}
            onChange={(e) =>
              handleInputChange(index, "description", e.target.value)
            }
            placeholder="Description"
          />
          {index > 0 && (
            <button
              className="bg-black mt-5 hover:bg-red-700 mr-5 text-red-400 font-semibold py-2 px-4 rounded-md border-red-400 border-2 focus:outline-none focus:border-red-500 transition duration-300 ease-in-out"
              onClick={() => removeExperience(index)}
            >
              Remove Experience
            </button>
          )}
        </div>
      ))}
      <button
        className="bg-black hover:bg-violet-700 mr-5 text-violet-400 font-semibold py-2 px-4 rounded-md border-violet-400 border-2 focus:outline-none focus:border-violet-500 transition duration-300 ease-in-out"
        onClick={addExperience}
      >
        Add Experience
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

export default WorkExperienceForm;

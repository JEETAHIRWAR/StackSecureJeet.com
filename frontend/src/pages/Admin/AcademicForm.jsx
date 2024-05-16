import React from "react";

const AcademicForm = ({
  formData = { education: [] },
  updateFormData,
  onSaveAndNext,
}) => {
  const handleInputChange = (index, field, value) => {
    const updatedEducation = [...formData.education]; // Create a copy of the education array
    updatedEducation[index][field] = value; // Update the specific field of the education entry at the given index
    updateFormData({
      ...formData,
      education: updatedEducation, // Update the education array in the formData
    });
  };

  const addEducation = () => {
    updateFormData({
      ...formData,
      education: [...formData.education, {}], // Add an empty education entry object to the education array
    });
  };

  const removeEducation = (index) => {
    const updatedEducation = [...formData.education]; // Create a copy of the education array
    updatedEducation.splice(index, 1); // Remove the education entry at the given index
    updateFormData({
      ...formData,
      education: updatedEducation, // Update the education array in the formData
    });
  };

  return (
    <div className="space-y-4 p-4 overflow-auto h-[500px] custom-scrollbar">
      {formData.education.map((educationEntry, index) => (
        <div key={index} className="space-y-2">
          <input
            className="bg-black text-green-400  mr-5 border-green-400 border-2 rounded-b-md px-4 py-2 focus:outline-none focus:border-green-500"
            type="text"
            value={educationEntry.collegeName || ""}
            onChange={(e) =>
              handleInputChange(index, "collegeName", e.target.value)
            }
            placeholder="College Name"
          />
          <input
            className="bg-black text-green-400  mr-5 border-green-400 border-2 rounded-b-md px-4 py-2 focus:outline-none focus:border-green-500"
            type="text"
            value={educationEntry.location || ""}
            onChange={(e) =>
              handleInputChange(index, "location", e.target.value)
            }
            placeholder="Location"
          />
          <input
            className="bg-black text-green-400  mr-5 border-green-400 border-2 rounded-b-md px-4 py-2 focus:outline-none focus:border-green-500"
            type="text"
            value={educationEntry.degreeName || ""}
            onChange={(e) =>
              handleInputChange(index, "degreeName", e.target.value)
            }
            placeholder="Degree Name"
          />
          <input
            className="bg-black text-green-400  mr-5 border-green-400 border-2 rounded-b-md px-4 py-2 focus:outline-none focus:border-green-500"
            type="text"
            value={educationEntry.percentage || ""}
            onChange={(e) =>
              handleInputChange(index, "percentage", e.target.value)
            }
            placeholder="Percentage"
          />
          <input
            className="bg-black text-green-400 w-[215px] mr-5 border-green-400 border-2 rounded-b-md px-4 py-2 focus:outline-none focus:border-green-500"
            type="date"
            value={
              educationEntry.startDate
                ? educationEntry.startDate.toISOString().substring(0, 10)
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
              educationEntry.endDate
                ? educationEntry.endDate.toISOString().substring(0, 10)
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
            value={educationEntry.fieldOfStudy || ""}
            onChange={(e) =>
              handleInputChange(index, "fieldOfStudy", e.target.value)
            }
            placeholder="Field of Study"
          />
          <input
            className="bg-black text-green-400  mr-5 border-green-400 border-2 rounded-b-md px-4 py-2 focus:outline-none focus:border-green-500"
            type="text"
            value={educationEntry.description || ""}
            onChange={(e) =>
              handleInputChange(index, "description", e.target.value)
            }
            placeholder="Description"
          />
          {index > 0 && (
            <button
              className="bg-black mt-5 hover:bg-red-700 mr-5 text-red-400 font-semibold py-2 px-4 rounded-md border-red-400 border-2 focus:outline-none focus:border-red-500 transition duration-300 ease-in-out"
              onClick={() => removeEducation(index)}
            >
              Remove Education
            </button>
          )}
        </div>
      ))}
      <button
        className="bg-black hover:bg-violet-700 mr-5 text-violet-400 font-semibold py-2 px-4 rounded-md border-violet-400 border-2 focus:outline-none focus:border-violet-500 transition duration-300 ease-in-out"
        onClick={addEducation}
      >
        Add Education
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

export default AcademicForm;

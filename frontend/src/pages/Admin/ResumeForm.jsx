import React from "react";

const ResumeForm = ({
  formData = { resumeShowcase: [] },
  updateFormData,
  onSaveAndNext,
}) => {
  const handleInputChange = (index, field, value) => {
    const updatedResumeShowcase = [...formData.resumeShowcase]; // Create a copy of the resumeShowcase array
    updatedResumeShowcase[index][field] = value; // Update the specific field of the resume entry at the given index
    updateFormData({
      ...formData,
      resumeShowcase: updatedResumeShowcase, // Update the resumeShowcase array in the formData
    });
  };

  const addResumeEntry = () => {
    updateFormData({
      ...formData,
      resumeShowcase: [...formData.resumeShowcase, { resumeLink: "" }], // Add an empty resume entry object to the resumeShowcase array
    });
  };

  const removeResumeEntry = (index) => {
    const updatedResumeShowcase = [...formData.resumeShowcase]; // Create a copy of the resumeShowcase array
    updatedResumeShowcase.splice(index, 1); // Remove the resume entry at the given index
    updateFormData({
      ...formData,
      resumeShowcase: updatedResumeShowcase, // Update the resumeShowcase array in the formData
    });
  };

  return (
    <div>
      {formData.resumeShowcase.map((resumeEntry, index) => (
        <div key={index}>
          <input
            type="text"
            value={resumeEntry.resumeLink || ""}
            onChange={(e) =>
              handleInputChange(index, "resumeLink", e.target.value)
            }
            placeholder="Resume Link"
          />
          {index > 0 && (
            <button onClick={() => removeResumeEntry(index)}>
              Remove Resume Entry
            </button>
          )}
        </div>
      ))}
      <button onClick={addResumeEntry}>Add Resume Entry</button>
      <button onClick={onSaveAndNext}>Save and Next</button>
    </div>
  );
};

export default ResumeForm;

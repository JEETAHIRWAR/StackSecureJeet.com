import React from "react";

const CaseStudiesForm = ({
  formData = { caseStudies: [] },
  updateFormData,
  onSaveAndNext,
}) => {
  // Function to handle input changes
  const handleInputChange = (index, field, value) => {
    const updatedCaseStudies = [...formData.caseStudies]; // Create a copy of the caseStudies array
    updatedCaseStudies[index][field] = value; // Update the specific field of the case study entry at the given index
    updateFormData({
      ...formData,
      caseStudies: updatedCaseStudies, // Update the caseStudies array in the formData
    });
  };

  // Function to add a new case study entry
  const addCaseStudy = () => {
    updateFormData({
      ...formData,
      caseStudies: [
        ...formData.caseStudies,
        { title: "", description: "", imageUrl: "" },
      ], // Add an empty case study object to the caseStudies array
    });
  };

  // Function to remove a case study entry
  const removeCaseStudy = (index) => {
    const updatedCaseStudies = [...formData.caseStudies]; // Create a copy of the caseStudies array
    updatedCaseStudies.splice(index, 1); // Remove the case study entry at the given index
    updateFormData({
      ...formData,
      caseStudies: updatedCaseStudies, // Update the caseStudies array in the formData
    });
  };

  return (
    <div>
      {formData.caseStudies.map((caseStudy, index) => (
        <div key={index}>
          <input
            type="text"
            value={caseStudy.title || ""}
            onChange={(e) => handleInputChange(index, "title", e.target.value)}
            placeholder="Title"
          />
          <textarea
            value={caseStudy.description || ""}
            onChange={(e) =>
              handleInputChange(index, "description", e.target.value)
            }
            placeholder="Description"
          />
          <input
            type="text"
            value={caseStudy.imageUrl || ""}
            onChange={(e) =>
              handleInputChange(index, "imageUrl", e.target.value)
            }
            placeholder="Image URL"
          />
          {index > 0 && (
            <button onClick={() => removeCaseStudy(index)}>
              Remove Case Study
            </button>
          )}
        </div>
      ))}
      <button onClick={addCaseStudy}>Add Case Study</button>
      <button onClick={onSaveAndNext}>Save and Next</button>
    </div>
  );
};

export default CaseStudiesForm;

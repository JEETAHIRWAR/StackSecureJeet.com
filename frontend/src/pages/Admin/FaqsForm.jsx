import React from "react";

const FaqsForm = ({
  formData = { faqs: [] },
  updateFormData,
  onSaveAndNext,
}) => {
  const handleInputChange = (index, field, value) => {
    const updatedFaqs = [...formData.faqs]; // Create a copy of the faqs array
    updatedFaqs[index][field] = value; // Update the specific field of the FAQ entry at the given index
    updateFormData({
      ...formData,
      faqs: updatedFaqs, // Update the faqs array in the formData
    });
  };

  const addFaqsEntry = () => {
    updateFormData({
      ...formData,
      faqs: [...formData.faqs, { question: "", answer: "" }], // Add an empty FAQ entry object to the faqs array
    });
  };

  const removeFaqsEntry = (index) => {
    const updatedFaqs = [...formData.faqs]; // Create a copy of the faqs array
    updatedFaqs.splice(index, 1); // Remove the FAQ entry at the given index
    updateFormData({
      ...formData,
      faqs: updatedFaqs, // Update the faqs array in the formData
    });
  };

  return (
    <div>
      {formData.faqs.map((faq, index) => (
        <div key={index}>
          <input
            type="text"
            value={faq.question || ""}
            onChange={(e) =>
              handleInputChange(index, "question", e.target.value)
            }
            placeholder="Question"
          />
          <textarea
            value={faq.answer || ""}
            onChange={(e) => handleInputChange(index, "answer", e.target.value)}
            placeholder="Answer"
          />
          {index > 0 && (
            <button onClick={() => removeFaqsEntry(index)}>
              Remove FAQ Entry
            </button>
          )}
        </div>
      ))}
      <button onClick={addFaqsEntry}>Add FAQ Entry</button>
      <button onClick={onSaveAndNext}>Save and Next</button>
    </div>
  );
};

export default FaqsForm;

import React from "react";

const StickyNotesForm = ({
  formData = { stickyNotes: [] },
  updateFormData,
  onSaveAndNext,
}) => {
  const handleInputChange = (index, field, value) => {
    const updatedStickyNotes = [...formData.stickyNotes]; // Create a copy of the stickyNotes array
    updatedStickyNotes[index][field] = value; // Update the specific field of the sticky note at the given index
    updateFormData({
      ...formData,
      stickyNotes: updatedStickyNotes, // Update the stickyNotes array in the formData
    });
  };

  const addStickyNote = () => {
    updateFormData({
      ...formData,
      stickyNotes: [...formData.stickyNotes, { title: "", content: "" }], // Add an empty sticky note object to the stickyNotes array
    });
  };

  const removeStickyNote = (index) => {
    const updatedStickyNotes = [...formData.stickyNotes]; // Create a copy of the stickyNotes array
    updatedStickyNotes.splice(index, 1); // Remove the sticky note at the given index
    updateFormData({
      ...formData,
      stickyNotes: updatedStickyNotes, // Update the stickyNotes array in the formData
    });
  };

  return (
    <div>
      {formData.stickyNotes.map((stickyNote, index) => (
        <div key={index}>
          <input
            type="text"
            value={stickyNote.title || ""}
            onChange={(e) => handleInputChange(index, "title", e.target.value)}
            placeholder="Title"
          />
          <textarea
            value={stickyNote.content || ""}
            onChange={(e) =>
              handleInputChange(index, "content", e.target.value)
            }
            placeholder="Content"
          />
          {index > 0 && (
            <button onClick={() => removeStickyNote(index)}>
              Remove Sticky Note
            </button>
          )}
        </div>
      ))}
      <button onClick={addStickyNote}>Add Sticky Note</button>
      <button onClick={onSaveAndNext}>Save and Next</button>
    </div>
  );
};

export default StickyNotesForm;

import React from "react";

const MyLearningsForm = ({
  formData = { learnings: [{}] },
  updateFormData,
  onSaveAndNext,
}) => {
  const handleInputChange = (index, field, value) => {
    const updatedLearnings = [...formData.learnings]; // Create a copy of the learnings array
    updatedLearnings[index][field] = value; // Update the specific field of the learning entry at the given index
    updateFormData({
      ...formData,
      learnings: updatedLearnings, // Update the learnings array in the formData
    });
  };

  const addLearning = () => {
    updateFormData({
      ...formData,
      learnings: [...formData.learnings, {}], // Add an empty learning entry object to the learnings array
    });
  };

  const removeLearning = (index) => {
    const updatedLearnings = [...formData.learnings]; // Create a copy of the learnings array
    updatedLearnings.splice(index, 1); // Remove the learning entry at the given index
    updateFormData({
      ...formData,
      learnings: updatedLearnings, // Update the learnings array in the formData
    });
  };

  return (
    <div className="space-y-4 p-4 overflow-auto h-[500px] custom-scrollbar">
      {formData.learnings.map((learningEntry, index) => (
        <div key={index} className="space-y-2">
          <input
            className="bg-black text-green-400  mr-5 border-green-400 border-2 rounded-b-md px-4 py-2 focus:outline-none focus:border-green-500"
            type="text"
            value={learningEntry.title || ""}
            onChange={(e) => handleInputChange(index, "title", e.target.value)}
            placeholder="Title"
          />
          <input
            className="bg-black text-green-400  mr-5 border-green-400 border-2 rounded-b-md px-4 py-2 focus:outline-none focus:border-green-500"
            type="text"
            value={learningEntry.heading || ""}
            onChange={(e) =>
              handleInputChange(index, "heading", e.target.value)
            }
            placeholder="Heading"
          />
          <textarea
            className="bg-black text-green-400 h-[50px]  w-[215px] mr-5 border-green-400 border-2 rounded-b-md px-4 py-2 focus:outline-none focus:border-green-500"
            value={learningEntry.summary || ""}
            onChange={(e) =>
              handleInputChange(index, "summary", e.target.value)
            }
            placeholder="Summary"
          />
          <textarea
            className="bg-black text-green-400 h-[50px] w-[215px] mr-5 border-green-400 border-2 rounded-b-md px-4 py-2 focus:outline-none focus:border-green-500"
            value={learningEntry.description || ""}
            onChange={(e) =>
              handleInputChange(index, "description", e.target.value)
            }
            placeholder="Description"
          />
          <input
            className="bg-black text-green-400  mr-5 border-green-400 border-2 rounded-b-md px-4 py-2 focus:outline-none focus:border-green-500"
            type="text"
            value={
              learningEntry.learningsImages
                ? learningEntry.learningsImages.join(", ")
                : ""
            }
            onChange={(e) =>
              handleInputChange(
                index,
                "learningsImages",
                e.target.value.split(", ")
              )
            }
            placeholder="Learning Images (comma-separated URLs)"
          />
          {index > 0 && (
            <button
              className="bg-black mt-5 hover:bg-red-700 mr-5 text-red-400 font-semibold py-2 px-4 rounded-md border-red-400 border-2 focus:outline-none focus:border-red-500 transition duration-300 ease-in-out"
              onClick={() => removeLearning(index)}
            >
              Remove Learning
            </button>
          )}
        </div>
      ))}
      <button
        className="bg-black hover:bg-violet-700 mr-5 text-violet-400 font-semibold py-2 px-4 rounded-md border-violet-400 border-2 focus:outline-none focus:border-violet-500 transition duration-300 ease-in-out"
        onClick={addLearning}
      >
        Add Learning
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

export default MyLearningsForm;

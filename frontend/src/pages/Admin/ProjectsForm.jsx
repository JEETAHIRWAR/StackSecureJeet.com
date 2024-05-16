import React from "react";

const ProjectsForm = ({
  formData = { projects: [] },
  updateFormData,
  onSaveAndNext,
}) => {
  const handleInputChange = (index, field, value) => {
    const updatedProjects = [...formData.projects]; // Create a copy of the projects array
    updatedProjects[index][field] = value; // Update the specific field of the project at the given index
    updateFormData({
      ...formData,
      projects: updatedProjects, // Update the projects array in the formData
    });
  };

  const addProject = () => {
    updateFormData({
      ...formData,
      projects: [...formData.projects, {}], // Add an empty project object to the projects array
    });
  };

  const removeProject = (index) => {
    const updatedProjects = [...formData.projects]; // Create a copy of the projects array
    updatedProjects.splice(index, 1); // Remove the project at the given index
    updateFormData({
      ...formData,
      projects: updatedProjects, // Update the projects array in the formData
    });
  };

  return (
    <div className="space-y-4 p-4 overflow-auto h-[500px] custom-scrollbar">
      {formData.projects.map((project, index) => (
        <div key={index} className="space-y-2">
          <input
            className="bg-black text-green-400  mr-5 border-green-400 border-2 rounded-b-md px-4 py-2 focus:outline-none focus:border-green-500"
            type="text"
            value={project.title || ""}
            onChange={(e) => handleInputChange(index, "title", e.target.value)}
            placeholder="Title"
          />
          <input
            className="bg-black text-green-400  mr-5 border-green-400 border-2 rounded-b-md px-4 py-2 focus:outline-none focus:border-green-500"
            type="text"
            value={project.projectImage || ""}
            onChange={(e) =>
              handleInputChange(index, "projectImage", e.target.value)
            }
            placeholder="Project Image"
          />
          <input
            className="bg-black text-green-400  mr-5 border-green-400 border-2 rounded-b-md px-4 py-2 focus:outline-none focus:border-green-500"
            type="text"
            value={project.techStacks ? project.techStacks.join(", ") : ""}
            onChange={(e) =>
              handleInputChange(index, "techStacks", e.target.value.split(","))
            }
            placeholder="Tech Stacks (Separated by comma)"
          />
          <input
            className="bg-black text-green-400  mr-5 border-green-400 border-2 rounded-b-md px-4 py-2 focus:outline-none focus:border-green-500"
            type="text"
            value={project.projectLink || ""}
            onChange={(e) =>
              handleInputChange(index, "projectLink", e.target.value)
            }
            placeholder="Project Link"
          />
          {index > 0 && (
            <button
              className="bg-black mt-5 hover:bg-red-700 mr-5 text-red-400 font-semibold py-2 px-4 rounded-md border-red-400 border-2 focus:outline-none focus:border-red-500 transition duration-300 ease-in-out"
              onClick={() => removeProject(index)}
            >
              Remove Project
            </button>
          )}
        </div>
      ))}
      <button
        className="bg-black hover:bg-violet-700 mr-5 text-violet-400 font-semibold py-2 px-4 rounded-md border-violet-400 border-2 focus:outline-none focus:border-violet-500 transition duration-300 ease-in-out"
        onClick={addProject}
      >
        Add Project
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

export default ProjectsForm;

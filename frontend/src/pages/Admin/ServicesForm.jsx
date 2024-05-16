import React from "react";

const ServicesForm = ({
  formData = { serviceName: [] },
  updateFormData,
  onSaveAndNext,
}) => {
  const handleInputChange = (index, field, value) => {
    const updatedServices = [...formData.serviceName]; // Create a copy of the serviceName array
    updatedServices[index][field] = value; // Update the specific field of the service entry at the given index
    updateFormData({
      ...formData,
      serviceName: updatedServices, // Update the serviceName array in the formData
    });
  };

  const addService = () => {
    updateFormData({
      ...formData,
      serviceName: [...formData.serviceName, {}], // Add an empty service entry object to the serviceName array
    });
  };

  const removeService = (index) => {
    const updatedServices = [...formData.serviceName]; // Create a copy of the serviceName array
    updatedServices.splice(index, 1); // Remove the service entry at the given index
    updateFormData({
      ...formData,
      serviceName: updatedServices, // Update the serviceName array in the formData
    });
  };

  return (
    <div>
      {formData.serviceName.map((service, index) => (
        <div key={index}>
          <input
            type="text"
            value={service.serviceName || ""}
            onChange={(e) =>
              handleInputChange(index, "serviceName", e.target.value)
            }
            placeholder="Service Name"
          />
          <textarea
            value={service.description || ""}
            onChange={(e) =>
              handleInputChange(index, "description", e.target.value)
            }
            placeholder="Description"
          />
          <input
            type="text"
            value={service.serviceCoverImage || ""}
            onChange={(e) =>
              handleInputChange(index, "serviceCoverImage", e.target.value)
            }
            placeholder="Service Cover Image URL"
          />
          {index > 0 && (
            <button onClick={() => removeService(index)}>Remove Service</button>
          )}
        </div>
      ))}
      <button onClick={addService}>Add Service</button>
      <button onClick={onSaveAndNext}>Save and Next</button>
    </div>
  );
};
export default ServicesForm;

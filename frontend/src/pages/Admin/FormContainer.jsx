import React from "react";

function FormContainer({ formData, updateFormData, onSaveAndNext }) {
  // Define a function to handle input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    updateFormData({ ...formData, [name]: value });
  };

  // Define a function to render form fields based on formData
  const renderFormFields = () => {
    return Object.entries(formData).map(([fieldName, fieldValue]) => (
      <div key={fieldName} className="mb-4">
        <label
          className="block text-gray-700 text-sm font-bold mb-2"
          htmlFor={fieldName}
        >
          {fieldName}
        </label>
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id={fieldName}
          type="text"
          name={fieldName}
          value={fieldValue}
          onChange={handleInputChange}
        />
      </div>
    ));
  };

  return (
    <div className="formContainer">
      {/* Render form fields based on formData */}
      {renderFormFields()}
      {/* Save and Next Button */}
      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        onClick={onSaveAndNext}
      >
        Save and Next
      </button>
    </div>
  );
}

export default FormContainer;

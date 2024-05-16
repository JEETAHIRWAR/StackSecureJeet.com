import React from "react";

const TodoForm = ({
  formData = { todo: [] },
  updateFormData,
  onSaveAndNext,
}) => {
  const handleInputChange = (index, field, value) => {
    const updatedTodos = [...formData.todo]; // Create a copy of the todo array
    updatedTodos[index][field] = value; // Update the specific field of the todo entry at the given index
    updateFormData({
      ...formData,
      todo: updatedTodos, // Update the todo array in the formData
    });
  };

  const addTodo = () => {
    updateFormData({
      ...formData,
      todo: [
        ...formData.todo,
        {
          title: "",
          description: "",
          completed: false,
          createdAt: new Date().toISOString(),
        },
      ], // Add an empty todo entry object to the todo array
    });
  };

  const removeTodo = (index) => {
    const updatedTodos = [...formData.todo]; // Create a copy of the todo array
    updatedTodos.splice(index, 1); // Remove the todo entry at the given index
    updateFormData({
      ...formData,
      todo: updatedTodos, // Update the todo array in the formData
    });
  };

  return (
    <div>
      {formData.todo.map((todoItem, index) => (
        <div key={index}>
          <input
            type="text"
            value={todoItem.title || ""}
            onChange={(e) => handleInputChange(index, "title", e.target.value)}
            placeholder="Title"
          />
          <textarea
            value={todoItem.description || ""}
            onChange={(e) =>
              handleInputChange(index, "description", e.target.value)
            }
            placeholder="Description"
          />
          <input
            type="checkbox"
            checked={todoItem.completed}
            onChange={(e) =>
              handleInputChange(index, "completed", e.target.checked)
            }
          />
          <button onClick={() => removeTodo(index)}>Remove Todo</button>
        </div>
      ))}
      <button onClick={addTodo}>Add Todo</button>
      <button onClick={onSaveAndNext}>Save and Next</button>
    </div>
  );
};
export default TodoForm;

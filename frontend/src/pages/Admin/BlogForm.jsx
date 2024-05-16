import React from "react";

const BlogForm = ({
  formData = { blog: [] },
  updateFormData,
  onSaveAndNext,
}) => {
  const handleInputChange = (index, field, value) => {
    const updatedBlog = [...formData.blog]; // Create a copy of the blog array
    updatedBlog[index][field] = value; // Update the specific field of the blog entry at the given index
    updateFormData({
      ...formData,
      blog: updatedBlog, // Update the blog array in the formData
    });
  };

  const addBlogEntry = () => {
    updateFormData({
      ...formData,
      blog: [...formData.blog, {}], // Add an empty blog entry object to the blog array
    });
  };

  const removeBlogEntry = (index) => {
    const updatedBlog = [...formData.blog]; // Create a copy of the blog array
    updatedBlog.splice(index, 1); // Remove the blog entry at the given index
    updateFormData({
      ...formData,
      blog: updatedBlog, // Update the blog array in the formData
    });
  };

  return (
    <div>
      {formData.blog.map((blogEntry, index) => (
        <div key={index}>
          <input
            type="text"
            value={blogEntry.thumbnailImage || ""}
            onChange={(e) =>
              handleInputChange(index, "thumbnailImage", e.target.value)
            }
            placeholder="Thumbnail Image URL"
          />
          <input
            type="text"
            value={blogEntry.title || ""}
            onChange={(e) => handleInputChange(index, "title", e.target.value)}
            placeholder="Title"
          />
          <input
            type="date"
            value={blogEntry.postDate || ""}
            onChange={(e) =>
              handleInputChange(index, "postDate", e.target.value)
            }
            placeholder="Post Date"
          />
          <textarea
            value={blogEntry.blogSummary || ""}
            onChange={(e) =>
              handleInputChange(index, "blogSummary", e.target.value)
            }
            placeholder="Blog Summary"
          />
          {index > 0 && (
            <button onClick={() => removeBlogEntry(index)}>
              Remove Blog Entry
            </button>
          )}
        </div>
      ))}
      <button onClick={addBlogEntry}>Add Blog Entry</button>
      <button onClick={onSaveAndNext}>Save and Next</button>
    </div>
  );
};

export default BlogForm;

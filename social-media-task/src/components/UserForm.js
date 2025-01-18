import React, { useState } from "react";

const UserForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    socialMediaHandle: "",
    images: [],
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFileChange = (e) => {
    setFormData({ ...formData, images: e.target.files });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Create a FormData object to send files and data
    const submissionData = new FormData();
    submissionData.append("name", formData.name);
    submissionData.append("socialMediaHandle", formData.socialMediaHandle);

    Array.from(formData.images).forEach((image) => {
      submissionData.append("images", image);
    });

    // Replace with your API call
    fetch("http://localhost:5000/api/users", {
      method: "POST",
      body: submissionData,
    })
      .then((res) => res.json())
      .then((data) => {
        alert("Form submitted successfully!");
        console.log(data);
      })
      .catch((err) => console.error("Error submitting form:", err));
  };

  return (
    <div className="max-w-lg mx-auto mt-10 p-6 border rounded shadow">
      <h1 className="text-2xl font-bold mb-4">User Submission Form</h1>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block font-medium mb-2" htmlFor="name">
            Name:
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            placeholder="Enter your name"
            className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block font-medium mb-2" htmlFor="socialMediaHandle">
            Social Media Handle:
          </label>
          <input
            type="text"
            id="socialMediaHandle"
            name="socialMediaHandle"
            value={formData.socialMediaHandle}
            onChange={handleInputChange}
            placeholder="Enter your social media handle"
            className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block font-medium mb-2" htmlFor="images">
            Upload Images:
          </label>
          <input
            type="file"
            id="images"
            name="images"
            multiple
            onChange={handleFileChange}
            className="block w-full text-gray-700"
          />
        </div>
        <button
          type="submit"
          className="px-4 py-2 bg-blue-500 text-white font-bold rounded hover:bg-blue-600"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default UserForm;

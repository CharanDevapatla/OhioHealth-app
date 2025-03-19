import React, { useState } from "react";
import "./UserForm.css"; // Import the CSS file for styling

const UserForm = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    city: "",
    yearOfJoining: "",
  });

  const [users, setUsers] = useState([]);
  const [apiKey] = useState("Test12345"); // API Key should match backend

  // Handle form input changes
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle form submission (POST request)
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("https://localhost:7257/api/users/save", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "x-api-key": apiKey,
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error(`Error: ${response.statusText}`);
      }

      alert("User saved successfully!");
      setFormData({ firstName: "", city: "", yearOfJoining: "" });
    } catch (error) {
      console.error("Failed to save user:", error);
    }
  };

  // Retrieve saved users (GET request)
  const retrieveUsers = async () => {
    try {
      const response = await fetch("https://localhost:7257/api/users/retrieve", {
        method: "GET",
        headers: {
          "x-api-key": apiKey,
          "Content-Type": "application/json",
        },
      });

      if (!response.ok) {
        throw new Error(`Error: ${response.statusText}`);
      }

      const data = await response.json();
      setUsers(data);
    } catch (error) {
      console.error("Failed to fetch users:", error);
    }
  };

  return (
    <div className="form-container">
      <h2>First Page</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>First Name:</label>
          <input
            type="text"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label>City Name:</label>
          <input
            type="text"
            name="city"
            value={formData.city}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Year of Joining:</label>
          <input
            type="number"
            name="yearOfJoining"
            value={formData.yearOfJoining}
            onChange={handleChange}
            required
          />
        </div>
        <div className="button-group">
          <button type="submit" className="save-btn">Save</button>
          <button type="button" className="retrieve-btn" onClick={retrieveUsers}>
            Retrieve
          </button>
        </div>
      </form>

      {/* Display retrieved users */}
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            {user.firstName} - {user.city} - {user.yearOfJoining}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UserForm;

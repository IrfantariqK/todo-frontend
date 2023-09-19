import React, { useState } from 'react';
import axios from 'axios';
import Header from './components/hearder';

const AdminPanel = () => {
  const [formData, setFormData] = useState({
    name: '',
    title: '',       // Added title field
    image: '',       // Added image field
    age: '',         // Added age field
    feedback: '',    // Added feedback field
    email: '',       // Added email field
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://localhost:8080/api/feedback', formData);

      if (response.status === 201) {
        // Handle success, e.g., show a success message or clear the form
        alert('Feedback submitted successfully!');
        setFormData({
          name: '',
          title: '',
          image: '',
          age: '',
          feedback: '',
          email: '',
        });
      } else {
        // Handle errors, e.g., show an error message
        alert('Failed to submit feedback. Please try again.');
      }
    } catch (error) {
      console.error('Error submitting data:', error);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  return (
    
    <div className="container mx-auto mt-5 flex justify-center items-center h-screen">
      
      <div className="w-full max-w-md">
        <h1 className="text-3xl font-semibold mb-4 text-gray-800 text-center">Admin Panel</h1>
        <form onSubmit={handleSubmit} className="bg-gray-200 p-6 rounded-lg shadow-lg">
          <div className="mb-4">
            <label htmlFor="name" className="block text-gray-600 mb-2">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full bg-gray-100 rounded-lg p-2"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="title" className="block text-gray-600 mb-2">
              Title
            </label>
            <input
              type="text"
              id="title"
              name="title"
              value={formData.title}
              onChange={handleChange}
              className="w-full bg-gray-100 rounded-lg p-2"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="image" className="block text-gray-600 mb-2">
              Image URL
            </label>
            <input
              type="url"
              id="image"
              name="image"
              value={formData.image}
              onChange={handleChange}
              className="w-full bg-gray-100 rounded-lg p-2"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="age" className="block text-gray-600 mb-2">
              Age
            </label>
            <input
              type="number"
              id="age"
              name="age"
              value={formData.age}
              onChange={handleChange}
              className="w-full bg-gray-100 rounded-lg p-2"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="feedback" className="block text-gray-600 mb-2">
              Feedback
            </label>
            <textarea
              id="feedback"
              name="feedback"
              value={formData.feedback}
              onChange={handleChange}
              className="w-full bg-gray-100 rounded-lg p-2"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-600 mb-2">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full bg-gray-100 rounded-lg p-2"
              required
            />
          </div>
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded w-full"
          >
            Submit Feedback
          </button>
        </form>
      </div>
    </div>
  );
};

export default AdminPanel;

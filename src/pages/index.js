// index.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import FeedbackCard from './components/FeedbackCard';
import Header from './components/hearder';

const Home = () => {
  const [feedbackData, setFeedbackData] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.get('http://localhost:8080/api/feedback'); // Use relative path
        setFeedbackData(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    }

    fetchData();
  }, []);

  return (
    <div>
      <Header/> {/* Include the TopHeader component */}
      <div className="container mx-auto mt-14"> {/* Add some top margin to create space for the fixed header */}
        <h1 className="text-3xl font-semibold mb-4">Feedback Cards</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {feedbackData.map((feedback) => (
            <FeedbackCard key={feedback.id} feedback={feedback} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;

import React, { useState } from 'react';

const FeedbackCard = ({ feedback, onDeleteClick, onUpdateClick }) => {
  const [expanded, setExpanded] = useState(false);

  const toggleExpand = () => {
    setExpanded(!expanded);
  };

  return (
    <div
      className={`bg-white shadow-md rounded-lg overflow-hidden transition-all duration-300 ${
        expanded ? 'h-auto' : 'h-32'
      } border border-black`}
    >
      <div className="flex items-center justify-between p-4">
        <div>
          <h2 className="text-xl font-semibold">{feedback.name}</h2>
          <p>{feedback.title}</p>
        </div>
        <button onClick={toggleExpand} className="text-blue-500 hover:underline">
          {expanded ? 'Close' : 'Open'}
        </button>
      </div>
      {expanded && (
        <div className="p-4">
          <div className="flex items-center justify-center mb-4">
            <img
              src={feedback.image}
              alt={`${feedback.name}'s Image`}
              className="w-48 h-auto" // Adjust the width (e.g., w-48) to your desired size
            />
          </div>
          <p>
            <strong>Age:</strong> {feedback.age}
          </p>
          <p>
            <strong>Email:</strong> {feedback.email}
          </p>
          <p>
            <strong>Feedback:</strong> {feedback.feedback}
          </p>
          <div className="flex justify-end mt-4">
            <button
              onClick={() => onDeleteClick(feedback)} // Replace 'feedback.id' with your unique identifier
              className="bg-red-500 text-white px-4 py-2 rounded-md mr-2 hover:bg-red-600"
            >
              Delete
            </button>
            <button
              onClick={() => onUpdateClick(feedback)} // Replace 'feedback.id' with your unique identifier
              className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
            >
              Update
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default FeedbackCard;

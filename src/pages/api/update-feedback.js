// pages/api/update-feedback.js
import { updateFeedback } from 'http://localhost:8080/api/feedback/'; // Replace with your actual update function

export default async function handler(req, res) {
  if (req.method !== 'PUT') {
    return res.status(405).end(); // Method Not Allowed
  }

  const { id } = req.query; // Get the feedback ID from the URL query

  try {
    // Perform the update operation
    const updatedFeedback = await updateFeedback(id, req.body); // You'll need to define your update function
    return res.status(200).json(updatedFeedback);
  } catch (error) {
    console.error('Error updating feedback:', error);
    return res.status(500).json({ error: 'Internal Server Error' });
  }
}

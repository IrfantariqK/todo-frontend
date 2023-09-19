// pages/api/delete-feedback.js
import { deleteFeedback } from 'http://localhost:8080/api/feedback/'; // Replace with your actual delete function

export default async function handler(req, res) {
  if (req.method !== 'DELETE') {
    return res.status(405).end(); // Method Not Allowed
  }

  const { id } = req.query; // Get the feedback ID from the URL query

  try {
    // Perform the delete operation
    await deleteFeedback(id); // You'll need to define your delete function
    return res.status(204).end(); // No Content
  } catch (error) {
    console.error('Error deleting feedback:', error);
    return res.status(500).json({ error: 'Internal Server Error' });
  }
}

import { contactService } from '../../../lib/contactService.js';

export default async function handler(req, res) {
  // Simple authentication check - in production, use proper auth
  const { authorization } = req.headers;
  if (!authorization || authorization !== `Bearer ${process.env.ADMIN_API_KEY}`) {
    return res.status(401).json({ message: 'Unauthorized' });
  }

  try {
    switch (req.method) {
      case 'GET':
        return await handleGetSubmissions(req, res);
      case 'PUT':
        return await handleUpdateSubmission(req, res);
      default:
        return res.status(405).json({ message: 'Method not allowed' });
    }
  } catch (error) {
    console.error('❌ Admin API error:', error);
    res.status(500).json({ 
      message: 'Internal server error',
      error: process.env.NODE_ENV === 'development' ? error.message : 'Server error'
    });
  }
}

async function handleGetSubmissions(req, res) {
  const { page = 1, limit = 20, status } = req.query;
  
  try {
    const result = await contactService.getSubmissions(
      parseInt(page),
      parseInt(limit)
    );

    res.status(200).json(result);
  } catch (error) {
    throw error;
  }
}

async function handleUpdateSubmission(req, res) {
  const { submissionId, status } = req.body;

  if (!submissionId || !status) {
    return res.status(400).json({ 
      message: 'Missing required fields: submissionId, status' 
    });
  }

  const validStatuses = ['new', 'read', 'replied', 'archived'];
  if (!validStatuses.includes(status)) {
    return res.status(400).json({ 
      message: 'Invalid status. Must be one of: ' + validStatuses.join(', ')
    });
  }

  try {
    const result = await contactService.updateSubmissionStatus(submissionId, status);
    res.status(200).json(result);
  } catch (error) {
    throw error;
  }
}

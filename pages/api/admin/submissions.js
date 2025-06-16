import fs from 'fs';
import path from 'path';

export default async function handler(req, res) {
  if (req.method !== 'GET') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  // Basic security check - in production use proper authentication
  const authHeader = req.headers.authorization;
  const adminPassword = 'docuweave2024'; // Should be in environment variables

  if (!authHeader || authHeader !== `Bearer ${adminPassword}`) {
    return res.status(401).json({ message: 'Unauthorized' });
  }

  try {
    const submissionsFile = './contact-submissions.json';
    
    if (!fs.existsSync(submissionsFile)) {
      return res.status(200).json([]);
    }

    const data = fs.readFileSync(submissionsFile, 'utf8');
    const submissions = JSON.parse(data);
    
    // Sort by timestamp, newest first
    submissions.sort((a, b) => new Date(b.timestamp) - new Date(a.timestamp));
    
    res.status(200).json(submissions);
  } catch (error) {
    console.error('Error fetching submissions:', error);
    res.status(500).json({ message: 'Failed to fetch submissions' });
  }
}

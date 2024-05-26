import fs from 'fs';
import path from 'path';

export default function handler(req, res) {
  if (req.method === 'POST') {
    const { name, email, message } = req.body;

    const logMessage = `Name: ${name}\nEmail: ${email}\nMessage: ${message}\n\n`;
    
    // Define the path to the messages.txt file
    const filePath = path.join(process.cwd(), 'messages.txt');

    // Append the message to the file
    fs.appendFile(filePath, logMessage, (err) => {
      if (err) {
        console.error('Failed to save message:', err);
        return res.status(500).json({ error: 'Failed to save message' });
      }
      
      console.log('Message saved successfully');
      res.status(200).json({ message: 'Message saved successfully' });
    });
  } else {
    res.setHeader('Allow', ['POST']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
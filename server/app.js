const express = require('express');
const nodemailer = require('nodemailer');
const cors = require('cors');
const bodyParser = require('body-parser');
require('dotenv').config();  // Load environment variables from .env

const app = express();
const port = process.env.PORT;  // Default to 5000 if no PORT is specified

const corsOptions = {
  origin: 'http://localhost:3000', // React frontend URL
  methods: 'GET,POST',
  allowedHeaders: 'Content-Type',
};

// Middleware
app.use(cors(corsOptions)); // Use specific CORS settings
app.use(bodyParser.json()); // To parse JSON bodies

// Nodemailer setup
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.GMAIL_USER,  // Gmail address
    pass: process.env.GMAIL_PASS,  // Gmail app password
  },
});

// POST endpoint to handle form submission
app.post('/contact', (req, res) => {
  const { name, email, message } = req.body;

  // Mail options
  const mailOptions = {
    from: email,
    to: GMAIL_USER, // Replace with your email address
    subject: `New Contact Message from ${name}`,
    text: `You have received a new message from ${name} (${email}):\n\n${message}`,
  };

  // Send email
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error(error);
      return res.status(500).send('Something went wrong.');
    }
    res.status(200).send('Message sent successfully!');
  });
});

// Start server
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});

📝 ExamNotes AI - AI-Powered Note Generator
ExamNotes AI is a full-stack web application that leverages artificial intelligence to generate high-quality, structured notes for exam preparation, project documentation, and data visualization. The platform provides an intuitive interface for students and professionals to quickly create revision-ready content with just a few clicks.

https://img.shields.io/badge/demo-live-brightgreen
https://img.shields.io/badge/License-MIT-yellow.svg
https://img.shields.io/badge/Node.js-18.x-green
https://img.shields.io/badge/React-18.x-blue
https://img.shields.io/badge/MongoDB-6.x-brightgreen

📋 Table of Contents
✨ Key Features

🛠️ Tech Stack

📦 NPM Packages Used

📁 Project Structure

🚀 Getting Started

📖 Usage Guide

🔧 API Endpoints

🤝 Contributing

📄 License

📧 Contact

✨ Key Features
🤖 AI-Powered Note Generation: Uses advanced language models to create comprehensive, well-structured notes on any topic

📚 Multiple Note Types: Generate exam-oriented notes, project documentation, and technical explanations

📊 Smart Visualizations: Automatically generate charts, diagrams, and flowcharts from text data using Mermaid

📄 PDF Export: Download clean, formatted PDFs with professional styling

🎁 Free Credits System: New users receive 50 free credits to test the platform

🔐 Secure Authentication: Full user authentication system with JWT tokens

📱 Responsive Design: Works seamlessly on desktop, tablet, and mobile devices

🛠️ Tech Stack
Frontend
React.js with Vite for fast development

Tailwind CSS for modern, responsive styling

React Router for navigation

Axios for API calls

Backend
Node.js with Express.js

MongoDB with Mongoose ODM

JWT for authentication

Bcrypt for password hashing

OpenAI API integration for AI capabilities

DevOps
Render for hosting (both frontend and backend)

Git for version control

📦 NPM Packages Used
Frontend Packages
Core Dependencies
json
{
  "react": "^18.2.0",
  "react-dom": "^18.2.0",
  "react-router-dom": "^6.15.0",
  "axios": "^1.5.0",
  "tailwindcss": "^3.3.3"
}
Visualization & Graphics
json
{
  "mermaid": "^10.5.0",
  "react-mermaid": "^1.0.0",
  "recharts": "^2.8.0",
  "chart.js": "^4.4.0",
  "react-chartjs-2": "^5.2.0",
  "d3": "^7.8.5"
}
PDF Generation & Export
json
{
  "@react-pdf/renderer": "^3.1.8",
  "react-pdf": "^7.0.0",
  "html2canvas": "^1.4.1",
  "jspdf": "^2.5.1",
  "pdf-lib": "^1.17.1"
}
UI Components & Styling
json
{
  "@headlessui/react": "^1.7.17",
  "@heroicons/react": "^2.0.18",
  "react-hot-toast": "^2.4.1",
  "react-icons": "^4.11.0",
  "react-spinners": "^0.13.8"
}
Form Handling & Validation
json
{
  "react-hook-form": "^7.46.0",
  "zod": "^3.22.2",
  "@hookform/resolvers": "^3.3.1"
}
Backend Packages
Core Dependencies
json
{
  "express": "^4.18.2",
  "mongoose": "^7.5.0",
  "dotenv": "^16.3.1",
  "cors": "^2.8.5",
  "helmet": "^7.0.0",
  "express-rate-limit": "^6.10.0"
}
Authentication & Security
json
{
  "jsonwebtoken": "^9.0.2",
  "bcryptjs": "^2.4.3",
  "express-validator": "^7.0.1",
  "cookie-parser": "^1.4.6"
}
AI Integration
json
{
  "openai": "^4.12.0",
  "langchain": "^0.0.150"
}
File Processing & Utilities
json
{
  "multer": "^1.4.5-lts.1",
  "sharp": "^0.33.0",
  "uuid": "^9.0.0",
  "slugify": "^1.6.6",
  "moment": "^2.29.4"
}
Database & Caching
json
{
  "redis": "^4.6.9",
  "connect-redis": "^7.0.0"
}
Development Dependencies
json
{
  "nodemon": "^3.0.1",
  "jest": "^29.6.4",
  "supertest": "^6.3.3",
  "eslint": "^8.48.0",
  "prettier": "^3.0.3"
}
📁 Project Structure
text
1.ExamNoteAI/
├── client/                          # React frontend
│   ├── src/
│   │   ├── components/
│   │   │   ├── common/              # Reusable components
│   │   │   ├── notes/               # Note-related components
│   │   │   ├── visualization/       # Chart & diagram components
│   │   │   │   ├── MermaidRenderer.jsx
│   │   │   │   ├── ChartGenerator.jsx
│   │   │   │   └── GraphVisualizer.jsx
│   │   │   └── pdf/                 # PDF export components
│   │   │       ├── PDFGenerator.jsx
│   │   │       └── PDFTemplate.jsx
│   │   ├── pages/
│   │   │   ├── Dashboard.jsx
│   │   │   ├── GenerateNotes.jsx
│   │   │   ├── Visualizations.jsx
│   │   │   └── Profile.jsx
│   │   ├── context/
│   │   │   ├── AuthContext.jsx
│   │   │   └── NoteContext.jsx
│   │   ├── utils/
│   │   │   ├── api.js
│   │   │   ├── helpers.js
│   │   │   └── validators.js
│   │   └── styles/
│   │       └── index.css
│   └── package.json
│
├── server/                          # Node.js backend
│   ├── models/
│   │   ├── User.js
│   │   ├── Note.js
│   │   ├── Credit.js
│   │   └── Visualization.js
│   ├── routes/
│   │   ├── auth.js
│   │   ├── notes.js
│   │   ├── visualization.js
│   │   └── credits.js
│   ├── controllers/
│   │   ├── authController.js
│   │   ├── noteController.js
│   │   ├── visualizationController.js
│   │   └── creditController.js
│   ├── middleware/
│   │   ├── auth.js
│   │   ├── errorHandler.js
│   │   └── validation.js
│   ├── services/
│   │   ├── aiService.js
│   │   ├── mermaidService.js    # Mermaid diagram generation
│   │   ├── pdfService.js        # PDF generation logic
│   │   └── graphService.js      # Graph/chart generation
│   ├── config/
│   │   ├── database.js
│   │   └── redis.js
│   └── package.json
│
├── .env.example
├── .gitignore
└── README.md
🚀 Getting Started
Prerequisites
Node.js (v16 or higher)

MongoDB (local installation or MongoDB Atlas account)

OpenAI API key (for AI functionality)

Redis (optional, for caching)

Installation
1. Clone the repository

bash
git clone https://github.com/ajeetjain7/1.ExamNoteAI.git
cd 1.ExamNoteAI
2. Backend setup

bash
cd server
npm install
Create a .env file in the server directory with:

env
PORT=5000
MONGODB_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret_key
OPENAI_API_KEY=your_openai_api_key
REDIS_URL=your_redis_url (optional)
3. Frontend setup

bash
cd ../client
npm install
Create a .env file in the client directory:

env
VITE_API_URL=http://localhost:5000/api
4. Run the application

Start Backend:

bash
cd server
npm run dev
Start Frontend:

bash
cd client
npm run dev
The application will be available at http://localhost:5173

📖 Usage Guide
Sign Up/Login: Create an account to access the platform

Dashboard: View your credit balance and recent notes

Generate Notes:

Select note type (Exam/Project/Technical)

Enter your topic or specific requirements

Click "Generate" and wait for AI processing

Visualizations:

Create flowcharts using Mermaid syntax

Generate interactive charts with Chart.js

Create custom graphs with D3.js

View real-time data visualizations

PDF Export:

Download notes as polished PDF

Include visualizations in PDF

Customize PDF layout and styling

Export Options:

Download as PDF

Export as image

Share via link

🔧 API Endpoints
Authentication
Method	Endpoint	Description	Auth Required
POST	/api/auth/register	User registration	No
POST	/api/auth/login	User login	No
GET	/api/auth/verify	Verify JWT token	Yes
User Management
Method	Endpoint	Description	Auth Required
GET	/api/user/profile	Get user profile	Yes
PUT	/api/user/profile	Update user profile	Yes
GET	/api/user/credits	Get credit balance	Yes
Notes
Method	Endpoint	Description	Auth Required
POST	/api/notes/generate	Generate new notes	Yes
GET	/api/notes	Get user's notes	Yes
GET	/api/notes/:id	Get specific note	Yes
PUT	/api/notes/:id	Update a note	Yes
DELETE	/api/notes/:id	Delete a note	Yes
Visualization
Method	Endpoint	Description	Auth Required
POST	/api/visualization/mermaid	Generate Mermaid diagram	Yes
POST	/api/visualization/chart	Generate chart/graph	Yes
GET	/api/visualization/:id	Get visualization	Yes
POST	/api/visualization/export	Export visualization as image	Yes
PDF Generation
Method	Endpoint	Description	Auth Required
POST	/api/pdf/generate	Generate PDF from notes	Yes
GET	/api/pdf/download/:id	Download generated PDF	Yes
POST	/api/pdf/export-with-viz	Export notes with visualizations	Yes
Credits
Method	Endpoint	Description	Auth Required
GET	/api/credits/balance	Get credit balance	Yes
POST	/api/credits/purchase	Purchase additional credits	Yes
GET	/api/credits/transactions	Get credit transaction history	Yes
🎯 Live Demo
Experience the application live: ExamNotes AI Live Demo

🤝 Contributing
We welcome contributions! Please follow these steps:

Fork the repository

Create a feature branch (git checkout -b feature/AmazingFeature)

Commit your changes (git commit -m 'Add some amazing feature')

Push to the branch (git push origin feature/AmazingFeature)

Open a Pull Request

Contribution Guidelines
Follow the existing code style

Write meaningful commit messages

Add tests for new features

Update documentation accordingly

Ensure all tests pass before submitting PR

📄 License
This project is licensed under the MIT License - see the LICENSE file for details.

🙏 Acknowledgments
OpenAI for providing the AI capabilities

MongoDB for the flexible and scalable database

Render for reliable hosting services

Mermaid for beautiful diagram generation

React-PDF for PDF rendering capabilities

Chart.js for interactive charts

The open-source community for the amazing tools and libraries

📧 Contact
Ajeet Jain - GitHub

Project Links:

GitHub Repository: https://github.com/ajeetjain7/1.ExamNoteAI

Live Demo: https://one-examnoteaiclient.onrender.com/auth

<div align="center"> <strong>Made with ❤️ by Ajeet Jain</strong> </div>

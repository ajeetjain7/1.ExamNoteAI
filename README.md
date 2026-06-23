📝 ExamNotes AI - AI-Powered Note Generator
ExamNotes AI is a full-stack web application that leverages artificial intelligence to generate high-quality, structured notes for exam preparation, project documentation, and data visualization. The platform provides an intuitive interface for students and professionals to quickly create revision-ready content with just a few clicks.

✨ Key Features
🤖 AI-Powered Note Generation: Uses advanced language models to create comprehensive, well-structured notes on any topic

📚 Multiple Note Types: Generate exam-oriented notes, project documentation, and technical explanations

📊 Smart Visualizations: Automatically generate charts, diagrams, and flowcharts from text data

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

React PDF for PDF generation

Backend
Node.js with Express.js

MongoDB with Mongoose ODM

JWT for authentication

Bcrypt for password hashing

OpenAI API integration for AI capabilities

DevOps
Render for hosting (both frontend and backend)

Git for version control

📁 Project Structure
text
1.ExamNoteAI/
├── client/                 # React frontend
│   ├── src/
│   │   ├── components/     # Reusable UI components
│   │   ├── pages/          # Page components
│   │   ├── context/        # React context (auth, etc.)
│   │   ├── utils/          # Helper functions
│   │   └── styles/         # CSS/Tailwind styles
│   └── package.json
├── server/                 # Node.js backend
│   ├── models/             # Database models
│   ├── routes/             # API routes
│   ├── controllers/        # Request handlers
│   ├── middleware/         # Auth middleware
│   ├── services/           # Business logic (AI, PDF, etc.)
│   └── package.json
├── .env.example            # Environment variables template
└── README.md
🚀 Getting Started
Prerequisites
Node.js (v16 or higher)

MongoDB (local installation or MongoDB Atlas account)

OpenAI API key (for AI functionality)

Installation
Clone the repository

bash
git clone https://github.com/ajeetjain7/1.ExamNoteAI.git
cd 1.ExamNoteAI
Backend setup

bash
cd server
npm install
Create a .env file in the server directory with:

env
PORT=5000
MONGODB_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret_key
OPENAI_API_KEY=your_openai_api_key
Frontend setup

bash
cd ../client
npm install
Create a .env file in the client directory:

env
VITE_API_URL=http://localhost:5000/api
Run the application

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

Visualizations: For data-heavy topics, request charts or diagrams

Export: Download your notes as a polished PDF

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

The open-source community for the amazing tools and libraries

📧 Contact
Ajeet Jain - GitHub

Project Links:

GitHub Repository: https://github.com/ajeetjain7/1.ExamNoteAI

Live Demo: https://one-examnoteaiclient.onrender.com/auth

#📝 ExamNotes AI - AI-Powered Note Generator

ExamNotes AI is a full-stack web application that leverages artificial intelligence to generate high-quality, structured notes for exam preparation, project documentation, and data visualization.

The platform provides an intuitive interface for students and professionals to quickly create revision-ready content with just a few clicks.

---

## 🚀 Live Demo

👉 https://one-examnoteaiclient.onrender.com/auth

---

## 🏷️ Badges

![Demo](https://img.shields.io/badge/demo-live-brightgreen)
![License](https://img.shields.io/badge/License-MIT-yellow.svg)
![Node](https://img.shields.io/badge/Node.js-18.x-green)
![React](https://img.shields.io/badge/React-18.x-blue)
![MongoDB](https://img.shields.io/badge/MongoDB-6.x-brightgreen)

---

## 📋 Table of Contents

- ✨ Key Features  
- 🛠️ Tech Stack  
- 📁 Project Structure  
- 🚀 Getting Started  
- 📖 Usage Guide  
- 🔧 API Endpoints  
- 🤝 Contributing  
- 📄 License  
- 📧 Contact  

---

## ✨ Key Features

- 🤖 AI-powered note generation using LLMs  
- 📚 Multiple note types (Exam / Project / Technical)  
- 📊 Smart visualizations (charts, graphs, Mermaid diagrams)  
- 📄 PDF export with clean formatting  
- 🎁 Free credits system for new users  
- 🔐 Secure JWT authentication  
- 📱 Fully responsive UI  

---

## 🛠️ Tech Stack

### Frontend
- React.js (Vite)
- Tailwind CSS
- React Router
- Axios

### Backend
- Node.js
- Express.js
- MongoDB + Mongoose
- JWT Authentication
- Bcrypt

### AI Integration
- OpenAI API
- LangChain

### Deployment
- Render

---

## 📁 Project Structure


<img width="568" height="617" alt="image" src="https://github.com/user-attachments/assets/41b85e0f-ce8f-46cc-9b3a-88498def2997" />




---

## 🚀 Getting Started

### Prerequisites
- Node.js (v16+)
- MongoDB
- OpenAI API Key

---

### 1️⃣ Clone the repository
```bash
git clone https://github.com/ajeetjain7/1.ExamNoteAI.git
cd 1.ExamNoteAI
2️⃣ Backend Setup
cd server
npm install

Create .env file:

PORT=5000
MONGODB_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
OPENAI_API_KEY=your_openai_key
3️⃣ Frontend Setup
cd ../client
npm install

Create .env:

VITE_API_URL=http://localhost:5000/api
4️⃣ Run Project

Backend:

cd server
npm run dev

Frontend:

cd client
npm run dev

App runs at:

http://localhost:5173
📖 Usage Guide
Sign up / login
Go to dashboard
Enter topic
Generate AI notes
Export as PDF
View visualizations (charts / diagrams)


🤝 Contributing
Fork repo
Create branch
Commit changes
Push branch
Create PR
📄 License

This project is licensed under the MIT License.

📧 Contact

Ajeet Jain
GitHub: https://github.com/ajeetjain7

# 🚀 RozgarSetu
### Connecting Skilled Workers with Local Employers

RozgarSetu is a full-stack MERN-based job portal designed to bridge the gap between local skilled workers and employers. The platform allows employers to post jobs, workers to apply for jobs, and both parties to communicate through a real-time chat system.

This project focuses on simplifying blue-collar and local hiring by providing an easy-to-use, modern, and responsive web application.

---

# 📌 Features

## 👷 Worker Features

- Secure Registration & Login
- JWT Authentication
- Create & Update Worker Profile
- Search Nearby Jobs
- Apply for Jobs
- Withdraw Applications
- View Applied Jobs
- Real-Time Chat with Employers
- Online / Offline Status
- Typing Indicator

---

## 🏢 Employer Features

- Secure Registration & Login
- Employer Dashboard
- Post New Jobs
- Manage Posted Jobs
- View Applicants
- Accept / Reject Applications
- View Worker Profile
- Real-Time Chat with Workers

---

## 💬 Real-Time Chat

- One-to-One Messaging
- Socket.IO Integration
- Online User Detection
- Typing Indicator
- Conversation List

---

## 🔐 Authentication

- JWT Token Authentication
- Protected Routes
- Role-Based Authorization
- Worker & Employer Roles

---

## 🎨 User Interface

- Responsive Dashboard
- Modern Sidebar Navigation
- Clean Card-Based Layout
- Premium Chat Interface
- Mobile Friendly Design

---

# 🛠 Tech Stack

## Frontend

- React.js
- React Router DOM
- Axios
- Tailwind CSS
- Socket.IO Client

---

## Backend

- Node.js
- Express.js
- MongoDB
- Mongoose
- JWT
- bcrypt.js
- Socket.IO

---

## Database

- MongoDB Atlas

---

# 📂 Project Structure

```
RozgarSetu
│
├── client
│   ├── components
│   ├── pages
│   ├── services
│   ├── utils
│   └── App.jsx
│
├── server
│   ├── controllers
│   ├── middleware
│   ├── models
│   ├── routes
│   ├── socket
│   └── server.js
│
└── README.md
```

---

# 🚀 Installation

## 1 Clone Repository

```bash
git clone https://github.com/YourUsername/RozgarSetu.git
```

```bash
cd RozgarSetu
```

---

## 2 Install Frontend Dependencies

```bash
cd client
npm install
```

---

## 3 Install Backend Dependencies

```bash
cd ../server
npm install
```

---

# ⚙ Environment Variables

Create a `.env` file inside the **server** folder.

```env
PORT=5000

MONGO_URI=Your_MongoDB_Connection_String

JWT_SECRET=Your_JWT_Secret
```

---

# ▶ Running the Project

## Backend

```bash
cd server
npm run dev
```

or

```bash
npm run dev
```

---

## Frontend

```bash
cd client
npm run dev
```

---

# 🌐 Application URLs

Frontend

```
http://localhost:5173
```

Backend

```
http://localhost:5000
```

---

# 👨‍💻 User Roles

## Worker

- Create Profile
- Search Jobs
- Apply Jobs
- Withdraw Applications
- Chat with Employers

---

## Employer

- Post Jobs
- Manage Jobs
- View Applicants
- Accept / Reject Applications
- Chat with Workers

---

# 💬 Real-Time Communication

RozgarSetu uses **Socket.IO** to provide:

- Instant Messaging
- Typing Indicator
- Online Status
- Live Chat Experience

---

# 📷 Screenshots

> Add screenshots here after deployment.

Example:

```
Home Page

Worker Dashboard

Employer Dashboard

Chat Page

Applicants Page

Worker Profile
```

---

# 🔮 Future Enhancements

- Profile Photo Upload
- Resume Upload
- Search by Skill
- Search by Location
- Google Maps Integration
- Push Notifications
- Ratings & Reviews
- Company Profiles
- AI Job Recommendation
- AI Resume Matching
- Email Notifications
- Last Seen
- Read Receipts
- Dark Mode

---

# 🎯 Learning Outcomes

This project helped in understanding:

- MERN Stack Development
- REST API Design
- JWT Authentication
- Role-Based Access Control
- MongoDB Data Modeling
- Socket.IO Real-Time Communication
- Responsive UI Design
- State Management
- CRUD Operations
- Full Stack Deployment

---

# 📄 License

This project is developed for educational and portfolio purposes.

---

# 👨‍💻 Developer

**Shubham Kurhade**

B.Tech Computer Engineering Student

### Skills

- MERN Stack
- React.js
- Node.js
- Express.js
- MongoDB
- Socket.IO
- REST API Development
- JavaScript
- Tailwind CSS

---

# ⭐ Support

If you like this project, please consider giving it a ⭐ on GitHub.

It helps support the project and motivates future improvements.

---

## 📌 Project Status

🟢 Active Development

New features and improvements are continuously being added to make RozgarSetu a production-ready hiring platform.

# Task Manager (MERN Stack)

A full-stack **Task Manager** application built with **MongoDB, Express.js, React, and Node.js**.  
This app allows users to create, update, and delete tasks with detailed information such as title, description, category, and due date. Designed with a clean architecture, it’s portfolio-ready and demonstrates professional full-stack development practices.

---

## Features

- Add, edit, and delete tasks
- Track task details: title, description, category, due date
- Responsive React frontend with clean UI
- Backend with Express.js and MongoDB for persistent storage
- Professional project structure (Models → Controllers → Routes → Config → Middleware → Frontend)

---

## Project Structure

### Backend
backend/
├── config/
│ └── db.js # MongoDB connection
├── controllers/
│ └── taskController.js
├── middleware/
│ └── errorMiddleware.js
├── models/
│ └── Task.js
├── routes/
│ └── taskRoutes.js
├── server.js
└── .env

shell
Copy code

### Frontend
frontend/src/
├── components/
│ ├── TaskForm.js
│ └── TaskList.js
├── services/
│ └── taskService.js
├── App.js
└── index.js

yaml
Copy code

---

## Installation

1. Clone the repository:
```bash
git clone https://github.com/Onna03/Task_Manager.git
Backend setup:

bash
Copy code
cd Task_Manager/backend
npm install
Create a .env file with:

ini
Copy code
MONGO_URI=your_mongodb_connection_string
PORT=5000
Frontend setup:

bash
Copy code
cd ../frontend
npm install
npm start
Run backend:

bash
Copy code
cd ../backend
npm run dev
Usage
Open http://localhost:3000 in your browser.

Add a task by filling out the form on the left panel.

Tasks appear on the right panel with due date and category.

Delete tasks with the “Completed” button.

Tech Stack
Frontend: React.js, CSS

Backend: Node.js, Express.js

Database: MongoDB

HTTP Client: Axios

Version Control: Git/GitHub


License
This project is open-source and available under the MIT License.

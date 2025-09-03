import React, { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";

function App() {
  const [tasks, setTasks] = useState([]);
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    category: "",
    dueDate: "",
  });

  // Fetch tasks
  useEffect(() => {
    loadTasks();
  }, []);

  const loadTasks = async () => {
    try {
      const res = await axios.get("http://localhost:5000/api/tasks");
      setTasks(res.data);
    } catch (err) {
      console.error(err);
    }
  };

  // Handle input changes
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Add task
  const handleAdd = async () => {
    if (!formData.title) return alert("Title is required");
    try {
      const res = await axios.post("http://localhost:5000/api/tasks", formData);
      setTasks([...tasks, res.data]);
      setFormData({ title: "", description: "", category: "", dueDate: "" });
    } catch (err) {
      console.error(err);
    }
  };

  // Delete task
  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/api/tasks/${id}`);
      setTasks(tasks.filter((task) => task._id !== id));
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="app-container">
      <h1>Task Manager</h1>

      <div className="main-layout">
        {/* Left side - Form */}
        <div className="left-panel">
          <div className="task-input">
            <label>Title:</label>
            <input
              type="text"
              name="title"
              placeholder="Enter task title"
              value={formData.title}
              onChange={handleChange}
            />
            <label>Description:</label>
            <textarea
              name="description"
              placeholder="Enter task description"
              value={formData.description}
              onChange={handleChange}
            />
            <label>Category:</label>
            <input
              type="text"
              name="category"
              placeholder="Enter category (e.g., Work, Personal)"
              value={formData.category}
              onChange={handleChange}
            />
            <label>Due Date:</label>
            <input
              type="date"
              name="dueDate"
              value={formData.dueDate || ""}
              onChange={handleChange}
            />
            <button onClick={handleAdd}>Add Task</button>
          </div>
        </div>

        {/* Right side - Tasks */}
        <div className="right-panel">
          {tasks.length > 0 ? (
            <div className="tasks-container">
              {tasks.map((task) => (
                <div className="task-card" key={task._id}>
                  <h3>{task.title}</h3>
                  <p>
                    <strong>Description:</strong> {task.description || "—"}
                  </p>
                  <p>
                    <strong>Category:</strong> {task.category || "—"}
                  </p>
                  <p>
                    <strong>Due:</strong>{" "}
                    {task.dueDate
                      ? new Date(task.dueDate).toLocaleDateString('en-US', {
                          year: 'numeric',
                          month: 'long',
                          day: 'numeric'
                        })
                      : "No deadline"}
                  </p>
                  <button onClick={() => handleDelete(task._id)}>Mark Complete</button>
                </div>
              ))}
            </div>
          ) : (
            <p className="no-tasks">No tasks yet. Create your first task to get started!</p>
          )}
        </div>
      </div>
    </div>
  );
}

export default App;

import React from "react";

const TaskList = ({ tasks, onDelete }) => {
  return (
    <div className="task-grid">
      {tasks.map((task) => (
        <div key={task._id} className="task-card">
          <h2>{task.title}</h2>
          <p><strong>Description:</strong> {task.description}</p>
          <p><strong>Category:</strong> {task.category}</p>
          <p><strong>Due:</strong> {task.dueDate ? new Date(task.dueDate).toLocaleDateString() : "No deadline"}</p>
          <p>
            <strong>Status:</strong>{" "}
            {task.isCompleted ? "✅ Completed" : "⏳ Pending"}
          </p>
          <button className="delete-btn" onClick={() => onDelete(task._id)}>
            Delete
          </button>
        </div>
      ))}
    </div>
  );
};

export default TaskList;

import react from "react";
import { FiTrash } from "react-icons/fi";
import { FaRegEdit } from "react-icons/fa";

import "./Task.css";

const Task = ({ task, handleRemoveTask, handleTaskClick }) => {
  return (
    <div
      className="task-container"
      style={{ borderLeft: task.completed ? "6px solid aqua" : "none" }}
    >
      <div
        className="task-tittle"
        onClick={() => handleTaskClick(task.id)}
        style={{
          textDecoration: task.completed ? "line-through" : "none",
        }}
      >
        {task.tittle}
      </div>

      <div className="task-buttons">
        <button>
          <FaRegEdit />
        </button>
        <button onClick={() => handleRemoveTask(task.id)}>
          <FiTrash />
        </button>
      </div>
    </div>
  );
};

export default Task;

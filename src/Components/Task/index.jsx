import { useState } from "react";
import { FiTrash } from "react-icons/fi";
import { FaRegEdit } from "react-icons/fa";
import TaskDecription from "../TaskDescription";
import "./Task.css";

const Task = ({ task, handleRemoveTask, handleTaskClick }) => {
  const [open, setOpen] = useState(false);

  return (
    <div>
      <div
        className="task-container"
        style={{
          borderLeft: task.completed ? "6px solid aqua" : "none",
          borderRadius: open ? "10px 10px 0 0" : "10px",
        }}
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
          <button onClick={() => setOpen(!open)}>
            <FaRegEdit />
          </button>
          <button onClick={() => handleRemoveTask(task.id)}>
            <FiTrash />
          </button>
        </div>
      </div>
      {open && <TaskDecription />}
    </div>
  );
};

export default Task;

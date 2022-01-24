import react from "react";
import { FiTrash } from "react-icons/fi";
import { FaRegEdit } from "react-icons/fa";

import "./Task.css";

const Task = ({ task, handleRemoveTask }) => {
  return (
    <div className="task-container">
      <div className="task-tittle"> {task.tittle}</div>

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

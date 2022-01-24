import react from "react";
import "./Task.css";

const Task = ({ task }) => {
  return <div className="task-container">{task.tittle}</div>;
};

export default Task;

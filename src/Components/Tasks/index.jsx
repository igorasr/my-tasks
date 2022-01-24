import react from "react";
import "./Tasks.css";
import Task from "../Task";

const Tasks = ({ tasks }) => {
  return (
    <div className="tasks-container">
      {tasks.map((task) => {
        return <Task key={task.id} task={task} />;
      })}
    </div>
  );
};

export default Tasks;

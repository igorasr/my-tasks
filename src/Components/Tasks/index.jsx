import react from "react";
import "./Tasks.css";
import Task from "../Task";

const Tasks = ({ tasks, handleRemoveTask }) => {
  return (
    <div className="tasks-container">
      {tasks.map((task) => {
        return (
          <Task key={task.id} task={task} handleRemoveTask={handleRemoveTask} />
        );
      })}
    </div>
  );
};

export default Tasks;

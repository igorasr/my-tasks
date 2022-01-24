import react from "react";
import "./Tasks.css";
import Task from "../Task";

const Tasks = ({ tasks, handleRemoveTask, handleTaskClick }) => {
  return (
    <div className="tasks-container">
      {tasks.map((task) => {
        return (
          <Task
            key={task.id}
            task={task}
            handleRemoveTask={handleRemoveTask}
            handleTaskClick={handleTaskClick}
          />
        );
      })}
    </div>
  );
};

export default Tasks;

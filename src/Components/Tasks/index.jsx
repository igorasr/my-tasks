import "./Tasks.css";
import Task from "../Task";
import { useContext } from "react";
import { TaskContext } from "../../Context/TaskContext";

const Tasks = () => {
  const { tasks } = useContext(TaskContext);

  return (
    <div className="tasks-container">
      {tasks.map((task) => (
        <Task key={task.id} task={task} />
      ))}
    </div>
  );
};

export default Tasks;

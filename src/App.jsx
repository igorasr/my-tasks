import react, { useEffect, useState } from "react";
import "./App.css";
import Tasks from "./Components/Tasks";
import AddInput from "./Components/AddInput";
import { v4 as uuidv4 } from "uuid";

function App() {
  const [tasks, setTasks] = useState(
    JSON.parse(localStorage.getItem("Tarefas"))
  );

  useEffect(() => {
    localStorage.setItem("Tarefas", JSON.stringify(tasks));
  }, [tasks]);

  const handleTaskClick = (taskid) => {
    const newtasks = tasks.map((task) => {
      if (task.id === taskid) return { ...task, completed: !task.completed };

      return task;
    });
    setTasks(newtasks);
  };

  function handleSetTask(newtask) {
    const newtasks = [
      ...tasks,
      {
        id: uuidv4(),
        tittle: newtask,
        completed: false,
      },
    ];
    setTasks(newtasks);
  }

  function handleRemoveTask(taskid) {
    const newtasks = tasks.filter((task) => task.id !== taskid);
    setTasks(newtasks);
  }

  return (
    <div className="container">
      <h1>Minhas tarefas</h1>
      <AddInput handleSetTask={handleSetTask}></AddInput>

      <Tasks
        tasks={tasks}
        handleRemoveTask={handleRemoveTask}
        handleTaskClick={handleTaskClick}
      />
    </div>
  );
}

export default App;

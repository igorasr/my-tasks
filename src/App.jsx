import react, { useState } from "react";
import "./App.css";
import Tasks from "./Components/Tasks";
import AddInput from "./Components/AddInput";
import { v4 as uuidv4 } from "uuid";

function App() {
  const [tasks, setTasks] = useState([
    {
      id: "1",
      tittle: "Ler",
      completed: false,
    },
    {
      id: "2",
      tittle: "Estudar",
      completed: false,
    },
  ]);

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

      <Tasks tasks={tasks} handleRemoveTask={handleRemoveTask} />
    </div>
  );
}

export default App;

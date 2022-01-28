import { TaskPovider } from "./Context/TaskContext";
import "./App.css";
import Tasks from "./Components/Tasks";
import AddInput from "./Components/AddInput";

function App() {
  return (
    <div className="container">
      <h1>Minhas tarefas</h1>
      <TaskPovider>
        <AddInput />
        <Tasks />
      </TaskPovider>
    </div>
  );
}

export default App;

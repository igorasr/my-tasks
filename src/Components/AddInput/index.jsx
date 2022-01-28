import { useContext, useState } from "react";
import { TaskContext } from "../../Context/TaskContext";

import Button from "../Button";
import "./AddInput.css";

const AddInput = () => {
  const [inputData, setInputData] = useState("");

  const { handleSetTask } = useContext(TaskContext);

  function handleKeyUp(e) {
    if (e.code === "Enter" && inputData !== "") {
      handleAddTaskClick();
    }
  }

  // Seta o state do input toda vez que ele é alterado
  function handleInputChange(e) {
    setInputData(e.target.value);
  }

  // Funcao para adicionar as tarefas ao click do usuario
  function handleAddTaskClick() {
    if (inputData !== "" || inputData === null) {
      handleSetTask(inputData);
      setInputData("");
    } else {
      alert("Informe uma tarefa");
    }
  }

  return (
    <>
      <div className="addinput-container">
        <input
          onChange={handleInputChange}
          onKeyUp={handleKeyUp}
          value={inputData}
          type="text"
          placeholder="Adcione uma tarefa..."
          className="add-input"
        ></input>
        <Button onClick={handleAddTaskClick}>Adicionar</Button>
      </div>
    </>
  );
};

export default AddInput;

import { useState } from "react";
import Button from "../Button";
import "./AddInput.css";

const AddInput = ({ handleSetTask }) => {
  const [inputData, setInputData] = useState("");

  // Seta o state do input toda vez que ele é alterado
  function handleInputChange(e) {
    setInputData(e.target.value);
  }

  // Funcao para adicionar as tarefas ao click do usuario
  function handleAddTaskClick() {
    handleSetTask(inputData);
    setInputData("");
  }

  return (
    <>
      <div className="addinput-container">
        <input
          onChange={handleInputChange}
          value={inputData}
          type="text"
          placeholder="Adcione uma tarefa..."
          className="add-input"
        />
        <Button onClick={handleAddTaskClick}>Adicionar</Button>
      </div>
    </>
  );
};

export default AddInput;

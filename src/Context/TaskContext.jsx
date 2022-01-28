import React, { createContext, useState } from "react";
import { v4 as uuidv4 } from "uuid";

export const TaskContext = createContext();

export const TaskPovider = ({ children }) => {
  const [tasks, setTasks] = useState([
    {
      id: uuidv4(),
      tittle: "Estudar",
      completed: false,
      description: "Estudar react",
    },
    {
      id: uuidv4(),
      tittle: "ler",
      completed: false,
      description: "Ler livros",
    },
  ]);

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
    <TaskContext.Provider
      value={{ tasks, handleTaskClick, handleSetTask, handleRemoveTask }}
    >
      {children}
    </TaskContext.Provider>
  );
};

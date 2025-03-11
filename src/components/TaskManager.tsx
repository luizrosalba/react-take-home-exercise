import React, { useState } from "react";

import TaskItem from "./TaskItem";
import { getInitialTasksFromLocalStorage, storeOnLocalStorage } from "../utils/localStorage";

export type Task = { id: number, title: string, completed: boolean };
const TaskManager = () => {

  const [tasks, setTasks] = useState<Task[]>(getInitialTasksFromLocalStorage());
  const [filter, setFilter] = useState("all");
  const [newTask, setNewTask] = useState<string>("");

  // Intentional bug: The filter conditions are reversed.
  const filteredTasks = tasks.filter((task) => {
    if (filter === "completed") return task.completed === true;
    if (filter === "pending") return task.completed === false;
    return true;
  });

  const handleAddTask = (e: React.FormEvent) => {
    e.preventDefault();
    if (newTask) {
    if (newTask!.trim() === "") return;

      const newTaskObj = {
        id: tasks.length + 1,
        title: newTask,
        completed: false,
      };
      const updatedTasks = [...tasks, newTaskObj]
      storeOnLocalStorage({id: "storedTasks", value: updatedTasks})
      setTasks(updatedTasks);
      setNewTask("");
    }
  };

  // Intentional bug: Directly mutating the tasks array when deleting.
  const handleDeleteTask = (id: number) => {
      const updatedTasks = tasks.filter(task => task.id !== id )
      setTasks(updatedTasks);
      storeOnLocalStorage({id: "storedTasks", value: updatedTasks})
  };

  const toggleTaskCompletion = (id: number) => {
    const toggledTasks = tasks.map((task) => {
      if (task.id === id ) return {
        ...task, completed: !task.completed
      } 
      return task 
    });
    setTasks(toggledTasks)
  };

  return (
    <div className="container mx-auto bg-white p-4 rounded shadow">
      <form onSubmit={handleAddTask} className="mb-4 flex">
        <input
          type="text"
          placeholder="New task..."
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
          className="flex-grow border rounded-l py-2 px-3"
        />
        <button type="submit" className="bg-blue-500 text-white px-4 rounded-r">
          Add
        </button>
      </form>
      <div className="flex justify-around mb-4">
        <button onClick={() => setFilter("all")} className="text-gray-700">
          All
        </button>
        <button
          onClick={() => setFilter("completed")}
          className="text-gray-700"
        >
          Completed
        </button>
        <button onClick={() => setFilter("pending")} className="text-gray-700">
          Pending
        </button>
      </div>
      <ul>
        {filteredTasks.map((task) => (
          <TaskItem
            key={task.id}
            task={task}
            onDelete={handleDeleteTask}
            onToggle={toggleTaskCompletion}
          />
        ))}
      </ul>
    </div>
  );
};

export default TaskManager;

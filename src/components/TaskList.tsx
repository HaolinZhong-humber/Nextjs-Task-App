'use client'
import { useState } from "react";
import { Task } from "@/types/Task";
import Header from "./Header";
import TaskItem from "./TaskItem";
import AddTask from "./AddTask";

export default function TaskList() {
  const initialTasklist: Task[] = [
    { id: 1, task: "Buy groceries", completed: false },
    { id: 2, task: "Do laundry", completed: true },
    { id: 3, task: "Complete assignment", completed: false },
    { id: 4, task: "Go for a walk", completed: true },
  ];
  
  const [tasklist, setTasklist] = useState<Task[]>(initialTasklist);
  const [searchVal, setSearchVal] = useState<string>("");

  const handleDelete = (id: number) => {
    setTasklist(tasklist.filter((t) => t.id !== id));
  };

  const handleAdd = (task: string) => {
    const newTask: Task = {
      id: Math.floor(Math.random() * 10000) + 1,
      task,
      completed: false,
    };
    setTasklist([...tasklist, newTask]);
  };

  const filteredTasklist = tasklist.filter((t) =>
    t.task.toLowerCase().includes(searchVal.toLowerCase())
  );

  return (
    <div className="task-list">
      <AddTask addTask={handleAdd} />
      <input
        type="text"
        placeholder="Search tasks..."
        value={searchVal}
        onChange={(e) => setSearchVal(e.target.value)}
        className="search-input"
      />
      {filteredTasklist.map((t) => (
        <TaskItem key={t.id} task={t} handleDelete={handleDelete} />
      ))}
    </div>
  );
}
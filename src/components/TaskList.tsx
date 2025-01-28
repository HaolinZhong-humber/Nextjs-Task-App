'use client'
import { useState } from "react";
import { Task } from "@/types/Task";
import Header from "./Header";
import TaskItem from "./TaskItem";



export default function TaskList() {
  const initialTasklist:Task[] = [ { id: 1, task: "Buy groceries", completed: false }, { id: 2, task: "Do laundry", completed: true }, { id: 3, task: "Complete assignment", completed: false }, { id: 4, task: "Go for a walk", completed: true }, ];
  const [tasklist, setTasklist] = useState<Task[]>(initialTasklist);

  const handleDelete = (id: number) => {  
    const newTasklist = tasklist.filter((t) => t.id !== id);  
    setTasklist(newTasklist);
  };

  return (
    <div className="task-list">
      <Header title="Task List" total={tasklist.length} />
      {/* display tasks here */}
     
        {tasklist.map((t) => (
          <TaskItem key={t.id} task={t} handleDelete={handleDelete} />
        ))}
      
    </div>
  );
}

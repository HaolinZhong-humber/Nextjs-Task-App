import { useState } from 'react';

type AddTaskProps = {
  addTask: (title: string) => void;
}

const AddTask = ({ addTask }: AddTaskProps) => {
  const [title, setTitle] = useState('');

  const handleAddClick = () => {
    if (title) {
      addTask(title);
      setTitle('');
    }
  };

  return (
    <div className="add-task">
      <h1>Add New Task</h1>
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Add a new task"
      />
      <button onClick={handleAddClick}>Add Task</button>
    </div>
  );
};

export default AddTask;

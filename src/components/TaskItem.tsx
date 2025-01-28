import { Task } from "@/types/Task";

type TaskItemProps = {
    task: Task;
 
    handleDelete: (id: number) => void; 
}

export default function TaskItem({task, handleDelete }: TaskItemProps) {
    return (
        <div className='task'>
        <span className='task-name'>
            <button
              className='remove-task'
              onClick={() =>handleDelete(task.id)}
            >
              X
            </button>
            {task.task}
          </span>
        
        </div>
        
    );
}
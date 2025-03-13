import { Task } from "../TaskManager/TaskManager";

type TaskItemProps = {
  task: Task;
  onDelete: (id: number) => void;
  onToggle: (id: number) => void
}
const TaskItem = ({ task, onDelete, onToggle }: TaskItemProps) => {
  return (
    <li className="flex items-center justify-between border-b py-2">
      <span
        data-testid="toggle-button"
        onClick={() => onToggle(task.id)}
        className={`cursor-pointer ${task.completed ? "line-through text-green-500" : "text-black"
          }`}
      >
        {task.title}
      </span>

      <button
        onClick={() => onDelete(task.id)}
        data-testid="delete-button"
        style={{
          backgroundColor: "red",
          color: "white",
          padding: "4px 8px",
          borderRadius: "4px",
        }}
      >
        Delete
      </button>
    </li>
  );
};

export default TaskItem;

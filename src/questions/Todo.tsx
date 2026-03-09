import { useState } from "react";

let id = 0;

const INITIAL_TASKS = [
  { id: id++, label: "Walk the dog" },
  { id: id++, label: "Water the plants" },
  { id: id++, label: "Wash the dishes" },
];

export default function App() {
  const [tasks, setTasks] = useState(INITIAL_TASKS);
  const [newTask, setNewTask] = useState("");

  function onSubmit() {
    setTasks(
      tasks.concat({
        id: id++,
        label: newTask.trim(),
      }),
    );
    setNewTask("");
  }

  function onDelete(itemID: number) {
    const tempData = tasks.filter((tasks) => tasks.id != itemID);
    setTasks(tempData);
  }
  return (
    <div>
      <h1>Todo List</h1>
      <div>
        <input
          aria-label="Add new task"
          type="text"
          placeholder="Add your task"
          value={newTask}
          onChange={(event) => setNewTask(event.target.value)}
        />
        <div>
          <button
            onClick={() => {
              onSubmit();
            }}
          >
            Submit
          </button>
        </div>
      </div>

      <ul>
        {tasks?.map((item) => (
          <li>
            <span>{item.label}</span>
            <button onClick={() => onDelete(item?.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

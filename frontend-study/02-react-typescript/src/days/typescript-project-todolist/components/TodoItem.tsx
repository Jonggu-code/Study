import { useEffect, useState } from 'react';
import { TodoItemProps } from '../types/props';

function TodoItem({
  todo,
  toggleTodo,
  openConfirm,
  deleteTarget,
}: TodoItemProps) {
  const [removing, setRemoving] = useState(false);

  const btnStyle = 'p-2 transition duration-300 rounded-sm';

  useEffect(() => {
    if (deleteTarget === todo.id) {
      setRemoving(true);
    }
  }, [deleteTarget]);

  return (
    <li
      className={`flex items-center justify-center gap-2 py-4 mb-3 hover:shadow-sm rounded-md transition-all duration-200 ease-in-out cursor-pointer ${removing ? 'slide-out-left' : ''} ${
        todo.completed
          ? 'bg-lime-600 text-white font-bold'
          : 'bg-white hover:text-lime-600 bg-'
      }`}
      onClick={(e) => {
        toggleTodo(todo.id);
      }}
    >
      <input
        type="checkbox"
        checked={todo.completed}
        onChange={() => toggleTodo(todo.id)}
      />
      <span className="w-[80%]">{todo.text}</span>
      <button
        className={`${btnStyle} ${todo.completed ? 'hover:bg-lime-700' : 'hover:bg-green-100'}`}
        onClick={(e) => {
          e.stopPropagation();
          openConfirm(todo.id, todo.text);
        }}
      >
        🗑️
      </button>
    </li>
  );
}

export default TodoItem;

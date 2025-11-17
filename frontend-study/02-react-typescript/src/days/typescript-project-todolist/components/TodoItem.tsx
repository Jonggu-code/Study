import { useEffect, useState } from 'react';
import { TodoItemProps } from '../types/props';

function TodoItem({
  todo,
  toggleTodo,
  openConfirm,
  deleteTarget,
  updateTodo,
}: TodoItemProps) {
  const [removing, setRemoving] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [editText, setEditText] = useState(todo.text);

  const btnStyle = 'p-2 transition duration-300 rounded-sm hover:bg-lime-500';

  const handleSave = () => {
    const trimmed = editText.trim();
    if (!trimmed) return; // 필요하면 alert 사용 가능
    updateTodo(todo.id, trimmed);
    setIsEditing(false);
  };
  const cancelEdit = () => {
    setEditText(todo.text);
    setIsEditing(false);
  };

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
      onClick={() => {
        if (!isEditing) toggleTodo(todo.id);
      }}
    >
      <input
        type="checkbox"
        checked={todo.completed}
        onChange={() => toggleTodo(todo.id)}
      />
      {isEditing ? (
        <input
          className="w-[70%]"
          value={editText}
          onChange={(e) => setEditText(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === 'Enter') handleSave();
            if (e.key === 'Escape') cancelEdit();
          }}
        />
      ) : (
        <span className="w-[70%]">{todo.text} </span>
      )}
      {isEditing ? (
        <>
          <button
            className={`${btnStyle}`}
            onClick={(e) => {
              e.stopPropagation();
              handleSave;
            }}
          >
            ✅
          </button>
          <button
            className={`${btnStyle}`}
            onClick={(e) => {
              e.stopPropagation();
              cancelEdit;
            }}
          >
            ❌
          </button>
        </>
      ) : (
        <>
          <button
            className={`${btnStyle}`}
            onClick={(e) => {
              e.stopPropagation();
              setIsEditing(true);
            }}
          >
            📝
          </button>
          <button
            className={`${btnStyle}`}
            onClick={(e) => {
              e.stopPropagation();
              openConfirm(todo.id, todo.text);
            }}
          >
            🗑️
          </button>
        </>
      )}
    </li>
  );
}

export default TodoItem;

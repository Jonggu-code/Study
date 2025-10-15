import React from 'react';

const TodoItem = ({ todo, onToggle }) => {
  return (
    <li
      onClick={() => onToggle(todo.id)}
      className={`cursor-pointer mb-5 ${todo.done ? 'line-through text-gray-500 hover:text-gray-300' : 'hover:text-blue-600 hover:underline'}`}
    >
      {todo.number}. {todo.text}
    </li>
  );
};

export default TodoItem;

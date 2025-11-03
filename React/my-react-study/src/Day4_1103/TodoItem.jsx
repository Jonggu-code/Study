const TodoItem = ({ todo, onToggle, onDelete }) => {
  const btnStyle = 'p-2 hover:bg-green-200 transition duration-300';
  return (
    <li
      className={`font-bold cursor-pointer box-border p-2 py-4 mb-3 transition duration-300 flex justify-between hover:shadow-md ${
        todo.done ? 'bg-green-700 text-white' : 'bg-white hover:text-green-600'
      }`}
    >
      <p
        className={`w-[85%] flex items-center  ${
          todo.done ? 'line-through' : ''
        }`}
      >
        • {todo.text}
      </p>
      <div className="btnBox flex w-[15%] justify-between">
        <button className={`${btnStyle}`} onClick={() => onToggle(todo.id)}>
          {todo.done ? '✅' : '❌'}
        </button>
        <button className={`${btnStyle}`} onClick={() => onDelete(todo.id)}>
          🗑️
        </button>
      </div>
    </li>
  );
};

export default TodoItem;

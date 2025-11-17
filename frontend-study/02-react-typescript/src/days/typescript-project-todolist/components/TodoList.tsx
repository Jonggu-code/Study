import { TodoListProps } from '../types/props';
import TodoItem from './TodoItem';

function TodoList({
  todos,
  toggleTodo,
  openConfirm,
  deleteTarget,
  updateTodo,
}: TodoListProps) {
  if (todos.length === 0)
    return <p className="mt-3.5">항목이 비어있습니다 ✨</p>;

  return (
    <ul>
      {todos.map((todo) => (
        <TodoItem
          key={todo.id}
          todo={todo}
          toggleTodo={toggleTodo}
          openConfirm={openConfirm}
          deleteTarget={deleteTarget}
          updateTodo={updateTodo}
        />
      ))}
    </ul>
  );
}

export default TodoList;

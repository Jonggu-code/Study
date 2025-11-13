import { TodoListProps } from '../types/props';
import TodoItem from './TodoItem';

function TodoList({ todos, toggleTodo, deleteTodo }: TodoListProps) {
  if (todos.length === 0)
    return <p className="mt-3.5">항목이 비어있습니다 ✨</p>;

  return (
    <ul>
      {todos.map((todo) => (
        <TodoItem
          key={todo.id}
          todo={todo}
          toggleTodo={toggleTodo}
          deleteTodo={deleteTodo}
        />
      ))}
    </ul>
  );
}

export default TodoList;

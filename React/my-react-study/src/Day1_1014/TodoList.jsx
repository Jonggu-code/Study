import TodoItem from './TodoItem';

function TodoList({ todos }) {
  return (
    <ul>
      {/* todos 배열을 map()으로 순회하며 TodoItem을 반복 렌더링 */}
      {todos.map(todo => (
        <TodoItem key={todo.id} text={todo.text} />
      ))}
    </ul>
  );
}

export default TodoList;

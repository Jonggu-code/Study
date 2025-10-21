import TodoItem from './TodoItem';

function TodoList({ todos, onToggle }) {
  return (
    <ul style={{ listStyle: 'none', padding: 0 }}>
      {/* todos 배열을 map()으로 순회하며 TodoItem을 반복 렌더링 */}
      {todos.map(todo => (
        <TodoItem
          key={todo.id}
          todo={todo}
          onToggle={onToggle} // 상태 변경 이벤트 함수 전달
        />
      ))}
    </ul>
  );
}

export default TodoList;

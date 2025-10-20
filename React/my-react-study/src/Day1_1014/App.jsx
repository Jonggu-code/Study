import TodoList from './TodoList';

function App() {
  // 할 일 목록 데이터
  const todos = [
    { id: 1, text: '리액트 복습하기' },
    { id: 2, text: 'JSX 문법 다시 보기' },
    { id: 3, text: '컴포넌트 구조 이해하기' },
  ];

  return (
    <div>
      <h1>📋 오늘의 할 일</h1>
      {/* TodoList에 todos 데이터를 props로 전달 */}
      <TodoList todos={todos} />
    </div>
  );
}

export default App;

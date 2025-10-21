import { useState } from 'react';
import TodoList from './TodoList';

function App() {
  // 1. 할 일 목록을 상태(state)로 관리
  const [todos, setTodos] = useState([
    { id: 1, text: '리액트 복습', done: false },
    { id: 2, text: '할 일 추가 기능 구현', done: false },
  ]);

  // 2. 새 할일 입력창 상태 관리 => 실시간으로 변하는 input 박스 값을 저장하기 위함
  const [newTodo, setNewTodo] = useState('');

  // 3. 새 할일 추가 함수 (이벤트 핸들링)
  const handleAddTodo = () => {
    if (newTodo.trim() === '') {
      alert('오늘의 할 일은 빈칸일 수 없습니다 !');
    }

    const newItem = {
      id: Date.now(), // 고유 아이디는 입력된 시간값
      text: newTodo, // 2번에서 실시간으로 저장한 newTodo의 값
      done: false, // 방금 추가된 할 일은 진행해야 하니 false
    };

    setTodos([...todos, newItem]); // 원래 리스트에 있던 항목들 추가 후 새로운 항목 추가 (데이터 관리)
    setNewTodo(''); // 입력창 초기화
  };

  // 4. 할 일 클릭 시 완료 상태 변경
  const handleToggleTodo = id => {
    setTodos(
      todos.map(
        todo =>
          // map()을 이용해서 원래 배열을 돌며 클릭한 항목의 id값을 확인
          todo.id === id ? { ...todo, done: !todo.done } : todo // 해당 항목의 done 상태를 토글
      )
    );
  };

  return (
    // 기본적인 css 구성
    <div
      style={{
        padding: '20px',
        border: '1px solid black',
        textAlign: 'center',
      }}
    >
      <h1>📋 오늘의 할 일</h1>

      {/* 새 할일 입력 */}
      <input
        type="text"
        value={newTodo}
        onChange={e => setNewTodo(e.target.value)}
        placeholder="오늘의 할일은 무엇인가요?"
      />
      <button onClick={handleAddTodo}>추가</button>

      {/* TodoList로 상태와 할 일 클릭 시 상태변경 함수 전달 */}
      <TodoList todos={todos} onToggle={handleToggleTodo} />
    </div>
  );
}

export default App;

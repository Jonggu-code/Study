import { useState, useEffect } from 'react';
import TodoList from './TodoList';
import './App.css';

const App = () => {
  // ✅ 1. 상태 관리
  const [todos, setTodos] = useState(() => {
    const saved = localStorage.getItem('todos');
    return saved ? JSON.parse(saved) : [];
  });

  const [newTodo, setNewTodo] = useState('');
  const [filter, setFilter] = useState('all'); // all, active, done

  // ✅ 2. 새 할 일 추가
  const handleAddTodo = () => {
    // 유효성 검사 (빈칸 입력 방지)
    if (newTodo.trim() === '') {
      alert('필수로 입력값을 넣어야합니다.');
      return;
    }

    const newItem = {
      id: Date.now(),
      text: newTodo,
      done: false,
    };

    setTodos([...todos, newItem]);
    setNewTodo('');
  };

  // ✅ 3. 완료 상태 토글
  const handleToggleTodo = id => {
    setTodos(
      todos.map(todo => (todo.id === id ? { ...todo, done: !todo.done } : todo))
    );
  };

  // ✅ 4. 항목 삭제
  const handleDeleteTodo = id => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  // ✅ 5. 필터링된 목록 계산
  const filteredTodos = todos.filter(todo => {
    if (filter === 'active') return !todo.done;
    if (filter === 'done') return todo.done;
    return true;
  });

  // ✅ 6. useEffect로 로컬 스토리지에 저장
  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  // 버튼 공통 클래스
  const btnStyle = ' px-4 py-2 rounded cursor-pointer font-bold';

  return (
    <div className="text-gray-700 p-5 border-2 m-1 box-border w-xl h-max bg-green-50">
      <h1 className="text-3xl font-bold mb-8">🧩 To do List</h1>

      {/* 새 할 일 입력창*/}
      <div className="border-b-2 border-gray-300 box-border pb-8 mb-5 flex justify-center gap-3">
        <input
          className="w-[85%] border px-3 rounded bg-white"
          type="text"
          value={newTodo}
          onChange={e => setNewTodo(e.target.value)}
          onKeyDown={e => {
            if (e.key === 'Enter') {
              handleAddTodo();
            }
          }}
          placeholder="새 할 일을 입력하세요."
        />
        <button
          className="box-border rounded-sm p-3 bg-green-600 text-sm text-white font-bold cursor-pointer hover:bg-green-800"
          onClick={handleAddTodo}
        >
          추가
        </button>
      </div>

      {/* 리스트 상태 필터 버튼 */}
      <div className="mt-2.5 mb-5 flex gap-2 w-full justify-center text-white">
        <button
          className={`${btnStyle} ${
            filter === 'all' ? 'bg-green-600' : 'bg-green-200 text-gray-400'
          }`}
          onClick={() => setFilter('all')}
        >
          전체
        </button>
        <button
          className={`${btnStyle} ${
            filter === 'active' ? 'bg-green-600' : 'bg-green-200 text-gray-400'
          }`}
          onClick={() => setFilter('active')}
        >
          미완료
        </button>
        <button
          className={`${btnStyle} ${
            filter === 'done' ? 'bg-green-600' : 'bg-green-200 text-gray-400'
          }`}
          onClick={() => setFilter('done')}
        >
          완료
        </button>
      </div>

      {/* TodoList로 상태와 함수 전달 */}
      <TodoList
        todos={filteredTodos}
        onToggle={handleToggleTodo}
        onDelete={handleDeleteTodo}
      />
    </div>
  );
};

export default App;

import { useState } from 'react';
import TodoList from './TodoList';
import './App.css';

const App = () => {
  const [todos, setTodos] = useState([
    { id: 1, number: 1, text: '리액트 복습하기', done: false },
    { id: 2, number: 2, text: 'JSX 문법 다시 보기', done: false },
    { id: 3, number: 3, text: '컴포넌트 구조 이해하기', done: false },
    { id: 4, number: 4, text: '내일도 찾아와서 한 일과 안한 일 체크하기', done: false },
  ]);

  const [newTodo, setNewTodo] = useState('');

  const handleAddTodo = () => {
    if (newTodo.trim() === '') {
      alert('필수로 입력값을 넣어야합니다.');
      return;
    }

    const newItem = {
      id: Date.now(),
      number: todos.length + 1,
      text: newTodo,
      done: false,
    };

    setTodos([...todos, newItem]);
    setNewTodo('');
  };

  const handleToggleTodo = id => {
    setTodos(todos.map(todo => (todo.id === id ? { ...todo, done: !todo.done } : todo)));
  };
  return (
    <div className="p-5 border-2 m-1 box-border w-xl h-max bg-green-50 select-none ">
      <h1 className="text-3xl font-bold mb-8">🧩 To do List</h1>

      <div className="border-b-2 border-gray-300 box-border pb-8 mb-5 flex justify-center gap-3">
        {/* 새 할 일 입력 */}
        <input
          className="w-[85%] border px-3 bg-white"
          type="text"
          value={newTodo}
          onChange={e => setNewTodo(e.target.value)}
          onKeyDown={e => {
            if (e.key === 'Enter') {
              handleAddTodo();
            }
          }}
          placeholder="새 할 일을 입력하세요"
        />
        <button
          className="box-border rounded-sm p-3 bg-green-600 text-sm text-white font-bold cursor-pointer hover:bg-green-800"
          onClick={handleAddTodo}
        >
          추가
        </button>
      </div>

      {/* TodoList로 상태와 함수 전달 */}
      <TodoList todos={todos} onToggle={handleToggleTodo} />
    </div>
  );
};

export default App;

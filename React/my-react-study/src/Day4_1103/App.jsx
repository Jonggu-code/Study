import { useState } from 'react';
import { useTodos } from '../hooks/useTodos';
import TodoList from './components/TodoList';
import Header from './components/Header';
import ConfirmModal from './components/ConfirmModal';
import Filter from './Filter';
import './App.css';

const App = () => {
  // 상태 관리
  const { todos, newTodo, setNewTodo, addTodo, toggleTodo, deleteTodo } =
    useTodos();

  const [filter, setFilter] = useState('all'); // all, active, done

  // 필터링된 목록 계산
  const filteredTodos = todos.filter(todo => {
    if (filter === 'active') return !todo.done;
    if (filter === 'done') return todo.done;
    return true;
  });

  return (
    <div className="text-gray-700 p-5 border-2 m-1 box-border w-xl h-max bg-green-50">
      {/* 제목과 할 일 입력 담당 컴포넌트 */}
      <Header value={newTodo} onChange={setNewTodo} onAdd={addTodo} />

      {/* 할 일 목록 필터링 담당 컴포넌트 */}
      <Filter filter={filter} setFilter={setFilter} />

      {/* TodoList로 상태와 함수 전달 */}
      <TodoList
        todos={filteredTodos}
        onToggle={toggleTodo}
        onDelete={deleteTodo}
      />

      <ConfirmModal />
    </div>
  );
};

export default App;

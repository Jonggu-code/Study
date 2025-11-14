import TodoInput from './TodoInput';
import TodoList from './TodoList';
import FilterBtn from './FilterBtn';
import { useState } from 'react';
import { useLocalStorage } from '../hooks/useLocalStorage';
import { Todo } from '../types/todo';
import AlertModal from './AlertModal';
import ConfirmModal from './ConfirmModal';

function Index() {
  const [todos, setTodos] = useLocalStorage<Todo[]>('todos', []);
  const [filter, setFilter] = useState<'all' | 'done' | 'todo'>('all');
  const [alert, setAlert] = useState<string | null>(null);
  const [confirm, setConfirm] = useState<{
    id: number;
    text: string;
  } | null>(null);
  const [deleteTarget, setDeleteTarget] = useState<number | null>(null);

  const addTodo = (text: string) => {
    const newTodo: Todo = { id: Date.now(), text, completed: false };
    setTodos([...todos, newTodo]);
  };

  const toggleTodo = (id: number) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo,
      ),
    );
  };

  const deleteTodo = (id: number) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const openConfirm = (id: number, text: string) => {
    setConfirm({ id, text });
  };

  const handelConfirmDelete = () => {
    if (!confirm) return;

    setDeleteTarget(confirm.id); // todoIrem에게 "애니메이션 시작" 신호 보내기
    setConfirm(null); // 모달 닫기

    setTimeout(() => {
      deleteTodo(confirm.id);
      setDeleteTarget(null); // 상태 리셋
    }, 200); // slide-out 애니메이션 시간과 동일하게 세팅
  };

  const filteredTodos = todos.filter((todo) => {
    if (filter === 'done') return todo.completed;
    if (filter === 'todo') return !todo.completed;
    return true;
  });

  return (
    <div className="relative text-gray-700 p-5 border-2 border-lime-500 m-1 box-border w-xl h-max bg-lime-100">
      <h2 className="text-3xl font-bold mb-8">🧩 To do List</h2>
      <TodoInput addTodo={addTodo} setAlert={setAlert} />
      <FilterBtn filter={filter} setFilter={setFilter} />
      <TodoList
        todos={filteredTodos}
        toggleTodo={toggleTodo}
        openConfirm={openConfirm}
        deleteTarget={deleteTarget}
      />
      {alert && <AlertModal message={alert} />}
      {confirm && (
        <ConfirmModal
          text={confirm.text}
          onConfirm={handelConfirmDelete}
          onCancel={() => setConfirm(null)}
        />
      )}
    </div>
  );
}

export default Index;

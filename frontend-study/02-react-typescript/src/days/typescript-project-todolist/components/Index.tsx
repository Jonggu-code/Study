import TodoInput from './TodoInput';
import TodoList from './TodoList';
import FilterBtn from './FilterBtn';
import { useState } from 'react';
import { useLocalStorage } from '../hooks/useLocalStorage';
import { Todo } from '../types/todo';
import AlertModal from './AlertModal';
import ConfirmModal from './ConfirmModal';

function Index() {
  // 할 일 상태관리
  const [todos, setTodos] = useLocalStorage<Todo[]>('todos', []);
  // 할 일 필터링 관리
  const [filter, setFilter] = useState<'all' | 'done' | 'todo'>('all');
  // 모달창 상태 관리
  const [alert, setAlert] = useState<string | null>(null);
  const [isAlertActive, setIsAlertActive] = useState(false);
  // 삭제 모달창 확인 여부
  const [confirm, setConfirm] = useState<{
    id: number;
    text: string;
  } | null>(null);
  // 삭제할 할 일 타겟팅 관리
  const [deleteTarget, setDeleteTarget] = useState<number | null>(null);

  // 할 일 수정 기능
  const updateTodo = (id: number, text: string) => {
    setTodos(todos.map((todo) => (todo.id === id ? { ...todo, text } : todo)));
  };

  // 할 일 추가 기능
  const addTodo = (text: string) => {
    const newTodo: Todo = { id: Date.now(), text, completed: false };
    setTodos([...todos, newTodo]);
  };

  // 할 일 상태 (완료, 미완료) 토글 기능
  const toggleTodo = (id: number) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo,
      ),
    );
  };

  // 할 일 삭제 기능
  const deleteTodo = (id: number) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  // 할 일 삭제버튼 클릭 시 모달창 띄우는 기능
  const openConfirm = (id: number, text: string) => {
    setConfirm({ id, text });
  };

  // 모달창에서 삭제버튼 확인 클릭 시 항목 삭제 기능 (slide-out 애니메이션 추가 버전)
  const handelConfirmDelete = () => {
    if (!confirm) return;

    setDeleteTarget(confirm.id); // todoIrem에게 "애니메이션 시작" 신호 보내기
    setConfirm(null); // 모달 닫기

    setTimeout(() => {
      deleteTodo(confirm.id);
      setDeleteTarget(null); // 상태 리셋
    }, 200); // slide-out 애니메이션 시간과 동일하게 세팅
  };

  // 할 일 상태에 따른 필터링 여부
  const filteredTodos = todos.filter((todo) => {
    if (filter === 'done') return todo.completed;
    if (filter === 'todo') return !todo.completed;
    return true;
  });

  // 빈칸 입력 모달창 보여주는 함수
  const showAlert = (msg: string) => {
    if (isAlertActive) return;

    setIsAlertActive(true);
    setAlert(msg);

    setTimeout(() => {
      setAlert(null); // motion-framer exit 시작
      setTimeout(() => {
        setIsAlertActive(false); // exit 애니메이션 종료 후 다시 허용
      }, 400); // exit duration과 동일하게
    }, 1000);
  };

  return (
    <div className="relative text-gray-700 p-5 border-2 border-lime-500 m-1 box-border w-xl h-max bg-lime-100">
      <h2 className="text-3xl font-bold mb-8">🧩 To do List</h2>
      <TodoInput addTodo={addTodo} showAlert={showAlert} />
      <FilterBtn filter={filter} setFilter={setFilter} />
      <TodoList
        todos={filteredTodos}
        toggleTodo={toggleTodo}
        openConfirm={openConfirm}
        deleteTarget={deleteTarget}
        updateTodo={updateTodo}
      />
      <AlertModal message={alert} />
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

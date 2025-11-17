import { useState } from 'react';
import { useLocalStorage } from './useLocalStorage';
import { Todo } from '../types/todo';

export const useTodo = () => {
  const [todos, setTodos] = useLocalStorage<Todo[]>('todos', []);
  const [confirm, setConfirm] = useState<{
    id: number;
    text: string;
  } | null>(null);
  const [deleteTarget, setDeleteTarget] = useState<number | null>(null);
  const [filter, setFilter] = useState<'all' | 'done' | 'todo'>('all');
  // 할 일 검색용 상태 관리
  const [search, setSearch] = useState('');

  // 할 일 상태에 따른 필터링 여부
  const filteredTodos = todos.filter((todo) => {
    if (filter === 'done') return todo.completed;
    if (filter === 'todo') return !todo.completed;
    return true;
  });

  const addTodo = (text: string) => {
    const newTodo: Todo = { id: Date.now(), text, completed: false };
    setTodos([...todos, newTodo]);
  };

  const updateTodo = (id: number, text: string) => {
    setTodos(todos.map((todo) => (todo.id === id ? { ...todo, text } : todo)));
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

    setDeleteTarget(confirm.id); // todoItem에게 "애니메이션 시작" 신호 보내기
    setConfirm(null); // 모달 닫기

    setTimeout(() => {
      deleteTodo(confirm.id);
      setDeleteTarget(null); // 상태 리셋
    }, 200); // slide-out 애니메이션 시간과 동일하게 세팅
  };

  return {
    todos,
    setTodos,
    addTodo,
    updateTodo,
    toggleTodo,
    deleteTodo,

    filter,
    setFilter,

    filteredTodos,

    confirm,
    setConfirm,
    openConfirm,
    handelConfirmDelete,

    deleteTarget,
  };
};

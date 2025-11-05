import React, { useState, useEffect } from 'react';

export const useTodos = () => {
  // 상태 관리
  const [todos, setTodos] = useState(() => {
    const saved = localStorage.getItem('todos');
    return saved ? JSON.parse(saved) : [];
  });
  const [newTodo, setNewTodo] = useState('');

  // 새 할 일 추가 함수
  const addTodo = () => {
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

  // 완료 상태 토글 함수
  const toggleTodo = id => {
    setTodos(
      todos.map(todo => (todo.id === id ? { ...todo, done: !todo.done } : todo))
    );
  };

  // 항목 삭제 함수
  const deleteTodo = id => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  // 로컬 스토리지 저장 useEffect
  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  return {
    todos,
    setTodos,
    newTodo,
    setNewTodo,
    addTodo,
    toggleTodo,
    deleteTodo,
  };
};

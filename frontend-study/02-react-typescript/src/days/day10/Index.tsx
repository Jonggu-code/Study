import { useState } from 'react';
import useLocalStorage from './hooks/useLocalStorage';
import { Todo } from './types/todo';

const Index = () => {
  const [todos, setTodos] = useLocalStorage<Todo[]>('todos', []);
  const [inputValue, setInputValue] = useState('');

  const addTodo = (text: string) => {
    if (!text.trim()) return;
    const newTodo = { id: Date.now(), text, completed: false };
    setTodos([...todos, newTodo]);
    setInputValue('');
  };

  const toggleTodo = (id: number) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo,
      ),
    );
  };

  const handleKeypress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') addTodo(inputValue);
  };

  return (
    <div>
      <h2>로컬스토리지 To-Do 관리</h2>
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        onKeyDown={handleKeypress}
        placeholder="할 일을 입력하시오."
      />
      <button onClick={() => addTodo(inputValue)}>할 일 추가</button>
      <ul>
        {todos.map((todo) => (
          <li
            className={todo.completed ? 'line-through' : 'none'}
            key={todo.id}
            onClick={() => {
              toggleTodo(todo.id);
            }}
          >
            {todo.text}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Index;

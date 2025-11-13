import TodoInput from './TodoInput';
import TodoList from './TodoList';
import FilterBtn from './FilterBtn';
import { useState } from 'react';
import { useLocalStorage } from '../hooks/useLocalStorage';
import { Todo } from '../types/todo';

function Index() {
  const [todos, setTodos] = useLocalStorage<Todo[]>('todos', []);
  const [filter, setFilter] = useState<'all' | 'done' | 'todo'>('all');

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

  const filteredTodos = todos.filter((todo) => {
    if (filter === 'done') return todo.completed;
    if (filter === 'todo') return !todo.completed;
    return true;
  });

  return (
    <div className="text-gray-700 p-5 border-2 border-green-500 m-1 box-border w-xl h-max bg-green-50">
      <h2 className="text-3xl font-bold mb-8">🧩 To do List</h2>
      <TodoInput addTodo={addTodo} />
      <FilterBtn filter={filter} setFilter={setFilter} />
      <TodoList
        todos={filteredTodos}
        toggleTodo={toggleTodo}
        deleteTodo={deleteTodo}
      />
    </div>
  );
}

export default Index;

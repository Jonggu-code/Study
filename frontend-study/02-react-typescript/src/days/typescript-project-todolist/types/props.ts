import { Todo } from './todo';

export interface TodoInputProps {
  addTodo: (text: string) => void;
}

export interface TodoItemProps {
  todo: Todo;
  toggleTodo: (id: number) => void;
  deleteTodo: (id: number) => void;
}

export interface TodoListProps {
  todos: Todo[];
  toggleTodo: (id: number) => void;
  deleteTodo: (id: number) => void;
}

export interface FilterBtnProps {
  filter: 'all' | 'done' | 'todo';
  setFilter: React.Dispatch<React.SetStateAction<'all' | 'done' | 'todo'>>;
}

import { Todo } from './todo';

export interface TodoInputProps {
  addTodo: (text: string) => void;
  setAlert: React.Dispatch<React.SetStateAction<string | null>>;
}

export interface TodoItemProps {
  todo: Todo;
  toggleTodo: (id: number) => void;
  openConfirm: (id: number, text: string) => void;
  deleteTarget: number | null;
}

export interface TodoListProps {
  todos: Todo[];
  toggleTodo: (id: number) => void;
  openConfirm: (id: number, text: string) => void;
  deleteTarget: number | null;
}

export interface FilterBtnProps {
  filter: 'all' | 'done' | 'todo';
  setFilter: React.Dispatch<React.SetStateAction<'all' | 'done' | 'todo'>>;
}

export interface AlertModalProps {
  message: string;
}

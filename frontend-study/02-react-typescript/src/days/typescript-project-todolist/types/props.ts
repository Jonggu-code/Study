import { Todo } from './todo';

export interface TodoInputProps {
  addTodo: (text: string) => void;
  showAlert: (msg: string) => void;
}

export interface TodoItemProps {
  todo: Todo;
  toggleTodo: (id: number) => void;
  openConfirm: (id: number, text: string) => void;
  deleteTarget: number | null;
  updateTodo: (id: number, text: string) => void;
  dragging: boolean;
}

export interface TodoListProps {
  todos: Todo[];
  setTodos: (newOrder: Todo[]) => void;
  toggleTodo: (id: number) => void;
  openConfirm: (id: number, text: string) => void;
  deleteTarget: number | null;
  updateTodo: (id: number, text: string) => void;
}

export interface FilterBtnProps {
  filter: 'all' | 'done' | 'todo';
  setFilter: React.Dispatch<React.SetStateAction<'all' | 'done' | 'todo'>>;
}

export interface AlertModalProps {
  message: string | null;
}

export interface SearchProps {
  search: string;
  setSearch: (value: string) => void;
  searchOn: boolean;
  setSearchOn: (value: boolean) => void;
}

export interface UndoProps {
  lastDeleted: Todo | null;
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
  setLastDeleted: React.Dispatch<React.SetStateAction<Todo | null>>;
  showAlert: (msg: string) => void;
}

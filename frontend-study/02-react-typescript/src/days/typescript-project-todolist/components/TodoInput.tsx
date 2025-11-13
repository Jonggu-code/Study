import { useEffect, useRef, useState } from 'react';
import { TodoInputProps } from '../types/props';

function TodoInput({ addTodo }: TodoInputProps) {
  const [text, setText] = useState('');
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!text.trim()) {
      alert('할 일은 빈칸일 수 없습니다.');
      return;
    }
    addTodo(text);
    setText('');
    inputRef.current?.focus();
  };

  return (
    <form
      className="border-gray-300 box-border mb-5 flex justify-center gap-3"
      onSubmit={handleSubmit}
    >
      <input
        className="w-[90%] px-3 rounded bg-white transition-all duration-300 focus:outline-none focus:ring-green-600 focus:ring-2"
        ref={inputRef}
        type="text"
        placeholder="오늘의 할 일은 무엇인가요?"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button
        className='w-[10%] box-border rounded-sm p-3 bg-green-600 text-sm text-white font-bold cursor-pointer hover:bg-green-800"'
        type="submit"
      >
        추가
      </button>
    </form>
  );
}
export default TodoInput;

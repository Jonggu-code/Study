import React from 'react';

const Header = ({ value, onChange, onAdd }) => {
  const handleKeyDown = e => {
    if (e.isComposing) return;
    if (e.key === 'Enter') onAdd();
  };
  const disabled = !value?.trim();

  return (
    <div>
      <h1 className="text-3xl font-bold mb-8">🧩 To do List</h1>

      {/* 새 할 일 입력창*/}
      <div className="border-b-2 border-gray-300 box-border pb-8 mb-5 flex justify-center gap-3">
        <input
          className="w-[85%] border px-3 rounded bg-white"
          type="text"
          value={value}
          onChange={e => onChange(e.target.value)}
          onKeyDown={handleKeyDown}
          placeholder="새 할 일을 입력하세요."
          aria-label="새 할 일 입력"
          autoFocus
        />
        <button
          type="button"
          className="box-border rounded-sm p-3 bg-green-600 text-sm text-white font-bold cursor-pointer hover:bg-green-800"
          onClick={onAdd}
          disabled={disabled}
        >
          추가
        </button>
      </div>
    </div>
  );
};

export default Header;

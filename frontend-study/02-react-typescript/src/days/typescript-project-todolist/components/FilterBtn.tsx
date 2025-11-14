import { FilterBtnProps } from '../types/props';

export default function FilterBtn({ filter, setFilter }: FilterBtnProps) {
  const buttons: { type: 'all' | 'todo' | 'done'; label: string }[] = [
    { type: 'all', label: '전체' },
    { type: 'todo', label: '미완료' },
    { type: 'done', label: '완료' },
  ];

  const baseStyle =
    'px-4 py-2 rounded cursor-pointer font-bold transition duration-300';
  const activeStyle = 'bg-lime-600 text-white';
  const inactiveStyle = 'bg-lime-300 text-gray hover:bg-lime-400';

  return (
    <div className="mt-5 mb-5 flex gap-2 w-full justify-center text-gray-100">
      {buttons.map((btn) => {
        const isActive = filter === btn.type;

        return (
          <button
            key={btn.type}
            onClick={() => setFilter(btn.type)}
            className={`${baseStyle} ${isActive ? activeStyle : inactiveStyle}`}
          >
            {btn.label}
          </button>
        );
      })}
    </div>
  );
}

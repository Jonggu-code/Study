import React from 'react';

const Filter = (filter, setFilter) => {
  const btnStyle = 'px-4 py-2 rounded cursor-pointer font-bold';

  return (
    <div>
      <div className="mt-2.5 mb-5 flex gap-2 w-full justify-center text-white">
        <button
          className={`${btnStyle} ${
            filter === 'all' ? 'bg-green-600' : 'bg-green-200 text-gray-400'
          }`}
          onClick={() => setFilter('all')}
        >
          전체
        </button>
        <button
          className={`${btnStyle} ${
            filter === 'active' ? 'bg-green-600' : 'bg-green-200 text-gray-400'
          }`}
          onClick={() => setFilter('active')}
        >
          미완료
        </button>
        <button
          className={`${btnStyle} ${
            filter === 'done' ? 'bg-green-600' : 'bg-green-200 text-gray-400'
          }`}
          onClick={() => setFilter('done')}
        >
          완료
        </button>
      </div>
    </div>
  );
};

export default Filter;

import React, { useState } from 'react';

function Counter() {
  const [count, setCount] = useState<number>(0);

  const handlePlus = (e: React.MouseEvent<HTMLButtonElement>) => {
    setCount((prev) => prev + 1);
  };
  const handleMinus = (e: React.MouseEvent<HTMLButtonElement>) => {
    setCount((prev) => prev - 1);
  };

  return (
    <div>
      <button onClick={handlePlus}>+</button>
      <button onClick={handleMinus}>-</button>
      <p>카운트 : {count} </p>
    </div>
  );
}

export default Counter;

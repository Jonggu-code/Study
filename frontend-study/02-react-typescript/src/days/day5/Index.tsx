import axios from 'axios';
import { useEffect, useRef, useState } from 'react';

interface User {
  id: number;
  name: string;
  email: string;
}

const Index = () => {
  const [count, setCount] = useState<number>(0);

  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    axios
      .get<User>('https://jsonplaceholder.typicode.com/users/1')
      .then((res) => console.log('📦 User Name:', res.data.name));
  }, []);

  const btnBox = 'p-4 border';

  return (
    <div className="p-6">
      <h2>react 속 제네릭 테스트</h2>

      {/* useState */}
      <p>현재 카운트 : {count}</p>
      <button className={btnBox} onClick={() => setCount(count + 1)}>
        +
      </button>
      <button className={btnBox} onClick={() => setCount(count - 1)}>
        -
      </button>

      {/* useRef */}
      <div className="mt-4">
        <input ref={inputRef} placeholder="자동 포커스 input" />
      </div>
    </div>
  );
};

export default Index;

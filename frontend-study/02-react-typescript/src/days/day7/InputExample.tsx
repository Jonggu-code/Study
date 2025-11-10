import React, { useState } from 'react';

function InputExample() {
  const [text, setText] = useState<string>('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value);
  };

  return (
    <div>
      <input type="text" value={text} onChange={handleChange} />
      <p>입력값: {text} </p>
    </div>
  );
}

export default InputExample;

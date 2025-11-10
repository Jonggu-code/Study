import { useState } from 'react';

const Index = () => {
  const [form, setForm] = useState({
    name: '',
    age: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log('제출된 데이터', form);
  };

  const handleReset = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setForm({ name: '', age: '' });
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          name="name"
          value={form.name}
          onChange={handleChange}
          placeholder="이름"
        />
        <input
          name="age"
          value={form.age}
          onChange={handleChange}
          placeholder="나이"
        />
        <button type="submit">제출</button>
        <button onClick={handleReset}>초기화</button>
      </form>
    </div>
  );
};

export default Index;

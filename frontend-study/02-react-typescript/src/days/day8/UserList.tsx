import { useFetch } from './useFetch';

interface User {
  id: number;
  name: string;
  email: string;
}

const UserList = () => {
  const { data, loading, error } = useFetch<User[]>(
    'https://jsonplaceholder.typicode.com/users',
  );

  if (loading) return <p>로딩 중...</p>;
  if (error) return <p>에러 발생: {error}</p>;

  return (
    <div>
      <ul>
        {data?.slice(0, 3).map((user) => (
          <li key={user.id}>
            {user.name} ({user.email})
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UserList;

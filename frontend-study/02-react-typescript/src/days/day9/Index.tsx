import axios, { AxiosError } from 'axios';

interface Todo {
  id: number;
  title: string;
  completed: boolean;
}

interface ApiError {
  status: number;
  message: string;
}

function isApiError(error: any): error is ApiError {
  return (
    typeof error?.status === 'number' && typeof error?.message === 'number'
  );
}

async function fetchTodos() {
  try {
    const res = await axios.get<Todo[]>(
      'https://jsonplaceholder.typicode.com/todos?_limits=1',
    );
    console.log('데이터 요청 성공');
    console.log(res.data);
  } catch (error) {
    if (axios.isAxiosError(error)) {
      console.error('Axios 에러: ', error.message);
      console.error('상태 코드: ', error.response?.status);
    } else if (isApiError(error)) {
      console.error(`API 에러 (${error.status}): ${error.message}`);
    } else if (error instanceof Error) {
      console.error('일반 에러: ', error.message);
    } else {
      console.error('예상치 못한 에러: ', error);
    }
  }
}

fetchTodos();

const Index = () => {
  return <div>Index</div>;
};

export default Index;

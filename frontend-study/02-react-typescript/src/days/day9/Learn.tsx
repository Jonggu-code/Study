import axios from 'axios';

async function getData() {
  const res = await fetch('잘못된 주소');
  const data = await res.json(); // 런타임 오류 날 수 있음
  console.log(data);

  try {
    throw new Error('에러가 발생했습니다.');
  } catch (error) {
    if (error instanceof Error) {
      console.log('에러 메세지: ', error.message);
    } else {
      console.log('알 수 없는 에러');
    }
  }
}

interface Post {
  id: number;
  title: string;
}

async function fetchPost() {
  try {
    const res = await axios.get<Post>(
      'https://jsonplaceholder.typicode.com/posts/1',
    );
    console.log(res.data.title);
  } catch (error) {
    if (axios.isAxiosError(error)) {
      console.error('Axios 에러: ', error.message);
    } else {
      console.error('알 수 없는 에러: ', error);
    }
  }
}

interface ApiError {
  status: number;
  message: string;
  timestamp?: string;
}

function handleError(error: unknown) {
  if (isApiError(error)) {
    console.error(`API 에러 (${error.status}): $(error.message)`);
  } else {
    console.error('예상치 못한 에러: ', error);
  }
}

function isApiError(error: any): error is ApiError {
  return (
    error &&
    typeof error.status === 'number' &&
    typeof error.message === 'string'
  );
}

const Index = () => {
  return <div>Index</div>;
};

export default Index;

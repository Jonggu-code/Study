import axios from 'axios';
import { useEffect, useState } from 'react';

interface Post {
  id: number;
  title: string;
  body: string;
}

const PostViewer = () => {
  const [post, setPost] = useState<Post | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get<Post>('https://jsonplaceholder.typicode.com/posts/1')
      .then((res) => setPost(res.data))
      .finally(() => setLoading(false));
  }, []);

  if (loading) return <p>로딩 중...</p>;
  if (!post) return <p>데이터 없음</p>;

  return (
    <div>
      <h2>{post.title}</h2>
      <p>{post.body} </p>
    </div>
  );
};

export default PostViewer;

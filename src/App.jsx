import react, { useEffect, useState } from 'react';
import PostComponent from '../Component/PostComponent';

function App() {
  const [posts, setPosts] = useState([]);
  const [page, setPage] = useState(1);

  useEffect(() => {
    fetchPosts();
  }, []);

  const fetchPosts = async () => {
    const res = await fetch(
      `https://65d6e06627d9a3bc1d798639.mockapi.io/text/${page}`
    );
    const posts = await res.json();
    setPosts(posts);
  };

  const handleChange = (e) => {
    setPage(e.target.value);
  };

  const hanleSubmit = () => {
    fetchPosts();
  };
  return (
    <>
      <PostComponent
        data={posts}
        handleChange={handleChange}
        hanleSubmit={hanleSubmit}
        value={page}
      />
    </>
  );
}

export default App;

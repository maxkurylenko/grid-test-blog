import Link from 'next/link';
import axios from 'axios';
import PostCard from '../components/PostCard';
import { useEffect, useState } from 'react';
import { Box } from '@mui/material';

export default function Home() {
  const [posts, setPosts] = useState([]);

  const getPosts = async () => {
    try {
      const response = await axios.get('/post');
      setPosts(response.data);
    } catch (e) {
      setPosts([]);
    }
  }

  useEffect(() => {
    getPosts();
  }, []);

  return (
    <div>
      <Box>
        {posts.map((post) => (
          <PostCard
            key={post.id}
            id={post.id}
            author={post.author}
            title={post.title}
            description={post.description}
          />
        ))}
      </Box>
    </div>
  );
}

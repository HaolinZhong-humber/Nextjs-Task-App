'use client';
import React, { useState, useEffect } from 'react';

type PostType = {
  id: number;
  title: string;
  body: string;
};

const JsonApi = () => {
  const [posts, setPosts] = useState<PostType[]>([]);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then((response) => response.json())
      .then((responseData: PostType[]) => {
        setPosts(responseData);
        console.log(responseData);
      });
  }, []);

  return (
    <div>
      {posts.map((post) => (
        <Post post={post} key={post.id} />
      ))}
    </div>
  );
};

const Post = ({ post }: { post: PostType }) => {
  return (
    <div>
      <h1>{post.title}</h1>
      <p>{post.body}</p>
    </div>
  );
};

export default JsonApi;

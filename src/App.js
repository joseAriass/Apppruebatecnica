import './App.css';

import React, { useState, useEffect } from 'react';
import { fetchPosts, deletePost, createPost, updatePost } from './ApiService';
import PostForm from './components/PostForm';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const App = () => {
  const [posts, setPosts] = useState([]);
  const [page, setPage] = useState(1);

  useEffect(() => {
    fetchPosts(page).then((response) => {
      setPosts(response.data);
    });
  }, [page]);

  const handleDelete = (id) => {
    deletePost(id).then(() => {
      setPosts(posts.filter(post => post.id !== id));
      toast.success('Post eliminado con éxito');
    });
  };

  const handleCreate = (newPost) => {
    createPost(newPost).then((response) => {
      setPosts([response.data, ...posts]);
      toast.success('Post creado con éxito');
    });
  };

  const handleUpdate = (id, updatedPost) => {
    updatePost(id, updatedPost).then((response) => {
      setPosts(posts.map(post => (post.id === id ? response.data : post)));
      toast.success('Post actualizado con éxito');
    });
  };

  return (
    <div>
      <ToastContainer />
      <h1>Posts</h1>
      <PostForm onSubmit={handleCreate} />
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Title</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {posts.map((post) => (
            <tr key={post.id}>
              <td>{post.id}</td>
              <td>{post.title}</td>
              <td>
                <PostForm onSubmit={(updatedPost) => handleUpdate(post.id, updatedPost)} initialData={post} />
                <button onClick={() => handleDelete(post.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <button onClick={() => setPage(page - 1)}>Previous</button>
      <button onClick={() => setPage(page + 1)}>Next</button>
    </div>
  );
};

export default App;

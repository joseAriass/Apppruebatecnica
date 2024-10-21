import axios from 'axios';

const API_URL = 'https://jsonplaceholder.typicode.com';

export const fetchPosts = (page = 1) => {
    return axios.get(`${API_URL}/posts?_page=${page}`);
};

export const deletePost = (id) => {
    return axios.delete(`${API_URL}/posts/${id}`);
};

export const createPost = (post) => {
    return axios.post(`${API_URL}/posts`, post);
};

export const updatePost = (id, post) => {
    return axios.put(`${API_URL}/posts/${id}`, post);
};

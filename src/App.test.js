// import React from 'react';
// import { render, screen, fireEvent } from '@testing-library/react';
// import '@testing-library/jest-dom';
// import App from './App';

// test('renders Posts heading', () => {
//   render(<App />);
//   const headingElement = screen.getByText(/Posts/i);
//   expect(headingElement).toBeInTheDocument();
// });

// test('fetches and displays posts', async () => {
//   render(<App />);
//   const postTitle = await screen.findByText(/sunt aut facere repellat provident occaecati excepturi optio reprehenderit/i);
//   expect(postTitle).toBeInTheDocument();
// });

// test('can create a new post', () => {
//   render(<App />);
//   const titleInput = screen.getByLabelText(/Title/i);
//   const submitButton = screen.getByText(/Submit/i);

//   fireEvent.change(titleInput, { target: { value: 'New Post' } });
//   fireEvent.click(submitButton);

//   const newPost = screen.getByText(/New Post/i);
//   expect(newPost).toBeInTheDocument();
// });

// test('can delete a post', async () => {
//   render(<App />);
//   const deleteButton = await screen.findByText(/Delete/i);
//   fireEvent.click(deleteButton);

//   const deletedPost = screen.queryByText(/sunt aut facere repellat provident occaecati excepturi optio reprehenderit/i);
//   expect(deletedPost).not.toBeInTheDocument();
// });

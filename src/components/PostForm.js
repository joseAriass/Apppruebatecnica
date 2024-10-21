import React, { useState } from 'react';

const PostForm = ({ onSubmit, initialData = {} }) => {
    const [title, setTitle] = useState(initialData.title || '');

    const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ title });
    setTitle('');
    };

    return (
    <form onSubmit={handleSubmit}>
        <label>
        Title:
        <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
        />
        </label>
        <button type="submit">Submit</button>
    </form>
    );
};

export default PostForm;

import React from 'react';
import './postpane.css';
import AddPost from '../addPost/addPost'; // Correct import with PascalCase
import Post from '../posts/post'; // Correct import with PascalCase
export default function PostPane() { // Use PascalCase for the component name
  return (
    <div className='postpanebox'>
      <AddPost />
      <Post /> {/* Use PascalCase for the component */}
    </div>
  );
}

import React, { useState } from 'react';
import './LikeCommentShare.css'; 

export default function LikeCommentShare() {
  const [likes, setLikes] = useState(0);
  const [comments, setComments] = useState([]);
  const [comment, setComment] = useState('');

  const handleLike = () => {
    setLikes(likes + 1);
  };

  const handleCommentChange = (e) => {
    setComment(e.target.value);
  };

  const handleCommentSubmit = () => {
    setComments([...comments, comment]);
    setComment('');
  };

  return (
    <div className="likeCommentShare">
      <div className="actions">
        <button className="actionButton" onClick={handleLike}>👍 Like</button>
        <button className="actionButton">💬 Comment</button>
        <button className="actionButton">↗️ Share</button>
      </div>
      <div className="likeCount">{likes} Likes</div>
      <div className="commentsSection">
        {comments.map((c, index) => (
          <div key={index} className="comment">{c}</div>
        ))}
        <input
          type="text"
          value={comment}
          onChange={handleCommentChange}
          placeholder="Write a comment..."
          className="commentInput"
        />
        <button onClick={handleCommentSubmit} className="submitComment">Post</button>
      </div>
    </div>
  );
}

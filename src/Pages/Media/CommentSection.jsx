import React, { useState } from 'react';

const CommentSection = ({ comments, onComment }) => {
  const [newComment, setNewComment] = useState('');

  const handleCommentSubmit = () => {
    if (newComment.trim() !== '') {
      onComment(newComment);
      setNewComment('');
    }
  };

  return (
    <div className="p-4">
      <h3 className="text-lg font-semibold mb-2">Comments</h3>
      <div className="mb-4">
        <textarea
          value={newComment}
          onChange={(e) => setNewComment(e.target.value)}
          className="border rounded-md p-2 w-full"
          placeholder="Add a comment..."
        />
      </div>
      <button
        onClick={handleCommentSubmit}
        className="bg-blue-500 text-white px-4 py-2 rounded-md"
      >
        Post Comment
      </button>
      <div className="mt-4">
        {comments.map((comment, index) => (
          <p key={index} className="mb-2">
            {comment}
          </p>
        ))}
      </div>
    </div>
  );
};

export default CommentSection;

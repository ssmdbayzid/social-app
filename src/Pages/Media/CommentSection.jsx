 import React, { useState } from 'react';
import { usePostCommentMutation } from '../../services/api';
import Loading from '../../component/Loading';
import { calcLength } from 'framer-motion';
 
const CommentSection = ({ data, user }) => {
  const  [postComment, result, error, isLoading] = usePostCommentMutation()

  const [comment, setComment] = useState('');

      // Comment       
      if(error){
        return <p className="text-xl text-red-600">{error.message}</p>
      }
  
      if(isLoading){
        return <Loading />
      }

      const handleCommentSubmit = async () => {

        const newComment = {
          id: data._id,
          commenterName : "Bayzid",
          commenterImage: user.photoURL,
          comment : comment,
        }
        
        await postComment(newComment)
        
        if(result){
          if( result.isSuccess == true){            
            setComment('')
          }
          else if (result.isSuccess == false){
           console.log("error ")
          }          
        }

      };

  return (
    <>
    <div className="p-4 w-1/2 mx-auto">
      <h3 className="text-lg font-semibold mb-2">Comments</h3>
      <div className="mb-4">
        <textarea
          value={comment}
          onChange={(e) => setComment(e.target.value)}
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
      {/* <div className="mt-4">
        {comments.map((comment, index) => (
          <p key={index} className="mb-2">
            {comment}
          </p>
        ))}
      </div> */}
    </div>

    <div className="mt-4 w-1/2 mx-auto">
      <h3 className="text-lg font-semibold mb-2">Comments</h3>
      {data.comments?.map((comment, index) => (
        <div key={index} className="bg-white rounded-md p-4 mb-4 shadow-md">
          <div className="flex items-center mb-2">
            
            <img
              src={comment.commenterImage}
              alt={comment.commenterName}
              className="w-10 h-10 rounded-full mr-6"
            />
            <div>
           <p className="font-semibold">{comment.commenterName}</p>
          <p>{comment.comment}</p>
            </div>
          </div>
        </div>
      ))}
    </div> 
    </>
  );
};

export default CommentSection;

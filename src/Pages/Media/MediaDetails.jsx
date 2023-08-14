import React, { useState } from 'react'
import { useGetMediaQuery } from '../../services/api'
import Loading from '../../component/Loading'
import { useParams } from 'react-router-dom'

const MediaDetails = () => {
  const {id} = useParams()
  const {data, error, isLoading} = useGetMediaQuery(id)
  const [newComment, setNewComment] = useState('');

    if(data){
      console.log(data)      
    }
    if(error){
      console.log(error)
    }

    if(isLoading){
      return <Loading />
    }

    // Comment 
    
      const handleCommentSubmit = () => {
        // if (newComment.trim() !== '') {
        //   onComment(newComment);
        //   setNewComment('');
        // }

      };

  return (
    <section className="text-gray-600 body-font overflow-hidden ">
  {data && <div className="container mx-auto w-5/6 mt-5 ">
    <div className="w-full md:w-1/2 mx-auto border ">
      <div>
      <img alt="ecommerce" className=" w-[400px] max-w-[400px] mx-auto border-2 object-cover object-center rounded" src={data.image}/>
      </div>
      <div className=" mx-auto w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
        <h2 className="text-sm title-font text-gray-500 tracking-widest">BRAND NAME</h2>
        <div className="flex ">
        <h1 className="text-gray-900 text-xl title-font font-medium mb-1 mr-6">{data.name}</h1>       
        <button className="rounded-full w-10 h-10 bg-gray-200 p-0 border-0 inline-flex items-center justify-center text-gray-500 ml-4">
            <svg fill="red" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
              <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"></path>
            </svg>
          </button>
        </div>

      </div>
      
    </div>
  
  {/* // Comment section */}
    <div className="p-4 w-1/2 mx-auto">
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
  </div>}


  
</section>
  )
}

export default MediaDetails

/*

    */
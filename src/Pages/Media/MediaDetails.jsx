import React, { useEffect, useState } from 'react'
import { useGetMediaQuery,  } from '../../services/api'
import Loading from '../../component/Loading'
import { useParams } from 'react-router-dom'
import { useAuthState } from 'react-firebase-hooks/auth'
import auth from '../../firebase.init'
import CommentSection from './CommentSection'


const MediaDetails = () => {
  const {id} = useParams()
  const {data, error, isLoading} = useGetMediaQuery(id)

  const [user, loading] = useAuthState(auth)
  
useEffect(()=>{
  
},[data])
    if(error){
      console.log(error)
    }

    if(isLoading || loading){
      return <Loading />
    }

    if(user){
      console.log(user.photoURL)
    }


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
    <CommentSection data={data} user={user}  />
  </div>}


  
</section>
  )
}

export default MediaDetails

/*

    */
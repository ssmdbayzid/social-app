import React, { useEffect, useState } from 'react'

import Loading from '../../component/Loading'
import { useGetAllMediaQuery } from '../../services/api'
import { useNavigate } from 'react-router-dom'



const Media = () => {

  const {data, error, isLoading} = useGetAllMediaQuery()
 
  const [items, setItems] = useState([data && data?.media]);

  const navigate = useNavigate()
  
  
  const handleLikeClick = () => {
    const updatedItems = items.map((item) => {

      return  {...item, isLiked: false};
    });

    setItems(updatedItems)    

  }
  useEffect(()=>{

    handleLikeClick()
  
  },[])

  
  if(isLoading){
    return <Loading />
  }
  


 
  if(error){
    return <p>error.message</p>
  }

    if(data){
      // setItems(data.media)
      console.log(data)
    }

    if(items){
      console.log(items)
    }
 
const handleLoveClick = (isLike, id) => {

  // console.log(isLike, id)
   const updatedItems = items.map((item) => {
              if(item._id === id){
                item.isLiked = isLike
              }
              return {...item}
            });
    console.log(updatedItems)
    setItems(updatedItems)
  
};

  return (
    <div>
      Media
    
<div className="h-screen p-3 grid grid-cols-2 md:grid-cols-4 gap-4">

        {data && data.media.map((item, index) => <div className="relative pb-20">          
            <img className="h-auto max-w-full rounded-lg" src={item.image} alt="img" />
            <button onClick={()=> handleLoveClick(!item.isLiked, item._id)} type="button" className="absolute top-3 right-3 font-medium rounded-lg text-sm p-1.5 text-center inline-flex items-center mr-2 ">
            <svg xmlns="http://www.w3.org/2000/svg" fill={ item.isLiked ? "red" : "none"} viewBox="0 0 24 24" strokeWidth={1.5} stroke={item.isLiked ? "red" : "white"} className="w-6 h-6 ">
  <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
</svg>

  <span className="sr-only">Icon description</span>
</button>
            <div className="relative px-3 text-sm w-full  bottom-12 left-0">
           
            <div className="flex justify-between  items-center">
              <h1 className="text-white mr-2">{item.name}</h1> 
              <button onClick={()=> navigate(`/mediaDetails/${item._id}`)} type="button" className="text-white border border-white hover:bg-slate-100     hover:text-black focus:ring-4 focus:outline-none  font-medium rounded-md  px-3 py-2 text-xs text-center  ">Purple</button>
                </div>
            </div>
        </div>)}

</div>



    </div>
  )
}

export default Media
import React, { useEffect } from 'react'

import Loading from '../../component/Loading'
import { useGetMediaQuery } from '../../services/api'

const Media = () => {
  
  const {data, error, isLoading, isSucccess} = useGetMediaQuery()

  if(data){
      console.log(data)
  }

  if(isLoading){
    return <Loading />
  }

  if(error){
    return <p>error.message</p>
  }

  return (
    <div>
      Media
    
<div className="h-screen grid grid-cols-2 md:grid-cols-4 gap-4">
    <div className="grid gap-4">
        {data && data.media.map((item, index) => <div className="relative">          
            <img className="h-auto max-w-full rounded-lg" src={item.image} alt="img" />
            <div className="absolute bg-green-600 top-0 left-0">
              <h1>{item.name}</h1> 
            </div>
        </div>)}

       
        <div>
            <img className="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-1.jpg" alt="img" />
        </div>
        <div>
            <img className="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-2.jpg" alt="img" />
        </div>
    </div>
    <div className="grid gap-4">
        <div>
            <img className="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-3.jpg" alt="img" />
        </div>
        <div>
            <img className="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-4.jpg" alt="img" />
        </div>
        <div>
            <img className="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-5.jpg" alt="img" />
        </div>
    </div>
    <div className="grid gap-4">
        <div>
            <img className="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-6.jpg" alt="img" />
        </div>
        <div>
            <img className="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-7.jpg" alt="img" />
        </div>
        <div>
            <img className="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-8.jpg" alt="img" />
        </div>
    </div>
    <div className="grid gap-4">
        <div>
            <img className="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-9.jpg" alt="img" />
        </div>
        <div>
            <img className="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-10.jpg" alt="img" />
        </div>
        <div>
            <img className="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-11.jpg" alt="img" />
        </div>
    </div>
</div>

    </div>
  )
}

export default Media
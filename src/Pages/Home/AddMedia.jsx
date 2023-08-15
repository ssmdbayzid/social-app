import axios from 'axios';
import React, { useState } from 'react'
import { usePostMediaMutation } from '../../services/api';
import Loading from '../../component/Loading';
import auth from '../../firebase.init';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import { isFulfilled } from '@reduxjs/toolkit';

const 
AddMedia = () => {
 const  [postMedia, result, isLoading] = usePostMediaMutation()
    const [name, setName] = useState('');
      const [mediaImage, setMediaImage] = useState(null);

      const [user, loading] = useAuthState(auth)

      const navigate = useNavigate()

  const handleNameChange = (e) => {
    setName(e.target.value);
  };
  if(isLoading ||loading ){
    return <Loading/>
  }
  const handleImageChange = (e) => {
    setMediaImage(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if(!user){
      return navigate("/login")
    }
    
  try {
    const formData = new FormData();
    formData.append('key', '15abb5d6d10c5792735d187ebb3d95b0'); // Replace with your ImgBB API key
    formData.append('image', mediaImage);

    const response = await axios.post('https://api.imgbb.com/1/upload', formData);
    const image = response.data.data.url;

   

    if(image){
      const media = {
        name,
        image,
      }
      const newMedia = await postMedia(media)

        if(result?.status === "fulfilled"){
          if(result){
            console.log(newMedia)            
          }
        }
    }
    // You can add additional logic here, such as saving the media name and image URL to a database.
  } catch (error) {
    console.error('Error uploading image:', error.message);
  }
};
  return (
    <div className="max-w-md mx-auto p-6 border rounded shadow">
      <h2 className="text-lg font-semibold mb-4 text-center">Add Media Form</h2>
      {isLoading && <Loading />}
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="name" className="block text-sm font-medium text-gray-700">
            Media Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            className="mt-1 p-2 w-full border rounded"
            value={name}
            onChange={handleNameChange}
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="image" className="block text-sm font-medium text-gray-700">
            Upload Image
          </label>
          <input
            type="file"
            id="image"
            name="image"
            accept="image/*"
            className="mt-1"
            onChange={handleImageChange}
            required
          />
        </div>
        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded"
        >
          Submit
        </button>
      </form>
    </div>
  )
}


export default AddMedia;
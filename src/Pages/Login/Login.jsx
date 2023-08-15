import React from 'react'
import {useSignInWithEmailAndPassword, useSignInWithGoogle, useSignInWithGithub } from 'react-firebase-hooks/auth'
import auth from '../../firebase.init'
import { useLocation, useNavigate } from 'react-router'
import Loading from '../../component/Loading'





const LogIn = () => {

  const [signInWithEmailAndPassword, user, loading, error] = useSignInWithEmailAndPassword(auth)
  const [signInWithGoogle,user1, loading1, error1] = useSignInWithGoogle(auth)
  const [signInWithGithub, user2, loading2, error2] = useSignInWithGithub(auth)

  // const [user3] = useAuthState(auth)
  const navigate = useNavigate()
  const location = useLocation()

  let from = location.state?.from?.pathname || "/home"

  
  if(loading || loading1 || loading2){
   return  <p className="absolute top-1/2 left-1/2 text-xl"><Loading /> </p>
  }

  if(user || user1 || user2){
    navigate(from, {replace: true})
  }
  
  if(error || error1 || error2){
    error = <p className="text-red-500 my-1">Error: {error1.message}</p>
  }
  const handleLogIn = event => {

    event.preventDefault()
    const form = event.target;

    const email = form.email.value;
    const password = form.password.value;

     console.log(email, password)
     signInWithEmailAndPassword(email, password)    
    }

    // Log in with google
  const googleLogIn = e => {
    
    console.log("click on google link function")
    signInWithGoogle()
    // e.preventDefault()
  }

  // Login with github
  const GithubLogIn = e => {
    
    signInWithGithub()
    console.log("click on Github link function")
    // e.preventDefault()
  }
    
  
   

  
  return (
    <>
     <div className="min-h-screen bg-[url('https://wallpaperaccess.com/full/3275630.jpg')] bg-cover bg-center   flex items-center justify-center ">
      <div className="w-full h-screen mt-10 flex flex-col justify-center items-center backdrop-blur-sm">
    <div className="w-96 bg-white rounded-lg shadow-md p-8 transform hover:scale-105 transition-transform duration-300">
      <div className="h-16 bg-[url('https://plus.unsplash.com/premium_photo-1661376655396-5d527deab90b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=871&q=80')] bg-cover bg-center">
        <h2 className="text-4xl text-center text-secondary font-bold my-4 shadow-black">Log In</h2>
      </div>
        <form onSubmit={handleLogIn} className="space-y-4">
            <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
                <input required id="email" name="email" type="email" className="mt-1 p-2 w-full rounded-md border border-gray-300" />
            </div>
            <div>
                <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
                <input required id="password" name="password" type="password" className="mt-1 p-2 w-full rounded-md border border-gray-300 mb-2" />
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover ">Forgot password?</a>
                </label>
            </div>

            <button
                type="submit"
                className="w-full bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600 transition-colors duration-300"
            >
               Log In
            </button>
        </form>
        <p className="mt-4 text-sm text-gray-600">
            'Don't have an account?
            <a href='/signup'
                className="text-blue-500 ml-3 font-semibold cursor-pointer">
                Sign Up
            </a>
        </p>
                  {/* Third party authentication */}

                  <div className="flex justify-center gap-5 mt-5">
          <div onClick={()=>googleLogIn()} className=" cursor-pointer hover:scale-105 py-1 px-2 border border-white bg-secondary flex items-center gap-2 text-white">
          <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 488 512"><path fill='white' d="M488 261.8C488 403.3 391.1 504 248 504 110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 123 24.5 166.3 64.9l-67.5 64.9C258.5 52.6 94.3 116.6 94.3 256c0 86.5 69.1 156.6 153.7 156.6 98.2 0 135-70.4 140.8-106.9H248v-85.3h236.1c2.3 12.7 3.9 24.9 3.9 41.4z"/></svg>
            <p>Google</p> 
          </div>
          <div className=" cursor-pointer hover:scale-105 py-1 px-2 border border-white bg-secondary flex items-center gap-2 text-white">
          <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512"><path fill='white' d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z"/></svg>
            <p>LinkedIn</p> 
          </div>
          <div
           onClick={()=> GithubLogIn()}
          className=" cursor-pointer hover:scale-105 py-1 px-2 border border-white bg-secondary flex items-center gap-2 text-white">
          <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 480 512"><path fill='white' d="M186.1 328.7c0 20.9-10.9 55.1-36.7 55.1s-36.7-34.2-36.7-55.1 10.9-55.1 36.7-55.1 36.7 34.2 36.7 55.1zM480 278.2c0 31.9-3.2 65.7-17.5 95-37.9 76.6-142.1 74.8-216.7 74.8-75.8 0-186.2 2.7-225.6-74.8-14.6-29-20.2-63.1-20.2-95 0-41.9 13.9-81.5 41.5-113.6-5.2-15.8-7.7-32.4-7.7-48.8 0-21.5 4.9-32.3 14.6-51.8 45.3 0 74.3 9 108.8 36 29-6.9 58.8-10 88.7-10 27 0 54.2 2.9 80.4 9.2 34-26.7 63-35.2 107.8-35.2 9.8 19.5 14.6 30.3 14.6 51.8 0 16.4-2.6 32.7-7.7 48.2 27.5 32.4 39 72.3 39 114.2zm-64.3 50.5c0-43.9-26.7-82.6-73.5-82.6-18.9 0-37 3.4-56 6-14.9 2.3-29.8 3.2-45.1 3.2-15.2 0-30.1-.9-45.1-3.2-18.7-2.6-37-6-56-6-46.8 0-73.5 38.7-73.5 82.6 0 87.8 80.4 101.3 150.4 101.3h48.2c70.3 0 150.6-13.4 150.6-101.3zm-82.6-55.1c-25.8 0-36.7 34.2-36.7 55.1s10.9 55.1 36.7 55.1 36.7-34.2 36.7-55.1-10.9-55.1-36.7-55.1z"/></svg>
            <p>Github</p> 
          </div>
        </div>

    </div>

    </div>
</div>
      </>
  )
}

export default LogIn
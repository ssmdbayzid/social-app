import React from 'react'
import {useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth'
import auth from '../../firebase.init'
import { useLocation, useNavigate } from 'react-router'
import Loading from '../../component/Loading'





const LogIn = () => {

  const [signInWithEmailAndPassword, user, loading, error1] = useSignInWithEmailAndPassword(auth)

  // const [user3] = useAuthState(auth)
  const navigate = useNavigate()
  const location = useLocation()

  let from = location.state?.from?.pathname || "/home"

  
  if(loading){
   return  <p className="absolute top-1/2 left-1/2 text-xl"><Loading /> </p>
  }

  if(user){
    navigate(from, {replace: true})
  }

  const handleLogIn = event => {

    event.preventDefault()
    const form = event.target;

    const email = form.email.value;
    const password = form.password.value;

     console.log(email, password)
     signInWithEmailAndPassword(email, password)

     
       let error;
     
       if(error){
         error = <p className="text-red-500 my-1">Error: {error1.message}</p>
       }
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
    </div>
    </div>
</div>
      </>
  )
}

export default LogIn
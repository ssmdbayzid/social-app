import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import auth from '../firebase.init'
import { useAuthState, useSignOut } from 'react-firebase-hooks/auth'
import Loading from './Loading'


const Header = () => {
  const [user, loading] = useAuthState(auth)
  const [isProfileMenuToggle, setProfileMenuToggle] = useState(false)
  const [signOut, loading1, error1] = useSignOut(auth);

  if(loading || loading1){
    return <Loading/>
  }
  if(error1){
    return <p className="text-red-600">{error1.message}</p>
  }
  if(user){
    console.log(user)
  }
  const handSignOut = () =>{
    signOut()
  }
  return (
    
<nav className="bg-gray-900 border-gray-200 dark:bg-gray-900">
  <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
    <a href="https://flowbite.com/" className="flex items-center">
        <img src="https://flowbite.com/docs/images/logo.svg" className="h-8 mr-3" alt="Flowbite Logo" />
        <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Flowbite</span>
    </a>
    <button data-collapse-toggle="navbar-default" type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-default" aria-expanded="false">
        <span className="sr-only">Open main menu</span>
        <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15"/>
        </svg>
    </button>
    <div className="hidden w-full md:block md:w-auto" id="navbar-default">
      <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 dbg-white md:dark:bg-gray-900 dark:border-gray-700">

      <Link to={"/home"} className="block py-2 pl-3 pr-4 dark:text-white hover:text-blue-500" aria-current="page">Home</Link>
      <Link to={"/media"} className="block py-2 pl-3 pr-4 dark:text-white hover:text-blue-500" aria-current="page">Media</Link>
      <Link to={"/home"} className="block py-2 pl-3 pr-4 dark:text-white hover:text-blue-500" aria-current="page">Message</Link>
      <Link to={"/about"} className="block py-2 pl-3 pr-4 dark:text-white hover:text-blue-500" aria-current="page">About</Link>
      {!user && <Link to={"/login"} className="block py-2 pl-3 pr-4 dark:text-white hover:text-blue-500" aria-current="page">Login</Link>}
      {!user && <Link to={"/signup"} className="block py-2 pl-3 pr-4 dark:text-white hover:text-blue-500" aria-current="page">Signup</Link>}

      {user && <button type="button" onClick={() => setProfileMenuToggle(!isProfileMenuToggle)}
            className="flex mr-3 text-sm bg-gray-800 rounded-full md:mr-0 focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600" id="user-menu-button" aria-expanded="false" data-dropdown-toggle="user-dropdown" data-dropdown-placement="bottom">
            <span className="sr-only">Open user menu</span>
           <img className="w-10 h-10 rounded-full" src={user.photoURL} alt="userPhoto" />
          </button>}


      {isProfileMenuToggle && user && <div className="z-50 fixed top-12 w-2/6 right-3/9 md:right-2 bg-blue-200 bg-blur-lg my-4 text-base Linkst-none divide-y divide-gray-100 rounded-lg shadow dark:bg-gray-700 dark:divide-gray-600" id="user-dropdown">
            <div className="px-4 py-3">
              <span className="block text-sm text-gray-900 dark:text-white">{user.displayName}</span>
              <span className="block text-sm  text-gray-500 truncate dark:text-gray-400">{user.email}</span>
            </div>
            <ul className="py-2" aria-labelledby="user-menu-button">
             
              <Link onClick={()=> handSignOut()}>
                <a href="#" className="block px-4 py-2 text-sm text-primary hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Sign out</a>
              </Link>
            </ul>
          </div>} 
      
      </ul>
    </div>
  </div>
</nav>

  )
}

export default Header
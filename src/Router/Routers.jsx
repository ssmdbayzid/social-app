import React from 'react'
import { Home, Login, Media, MediaDetails, Signup } from '../Pages'
import { Route, Routes } from 'react-router-dom'
import PrivateRoute from './PrivateRoute'

const 
Routers = () => {
  return (
    <Routes>
             <Route path="/" element={< Home />} />
             <Route path="/home" element={< Home />} />
             <Route path="/login" element={< Login />} />
             <Route path="/signup" element={<Signup />} />
             
             <Route path="/media" element={
              <PrivateRoute>
             < Media />
             </PrivateRoute>
             } />
   
             <Route path="/mediaDetails/:id" element={
                <PrivateRoute>
                < MediaDetails />
                </PrivateRoute>
                } />

        </Routes>
  )
}

export default 
Routers
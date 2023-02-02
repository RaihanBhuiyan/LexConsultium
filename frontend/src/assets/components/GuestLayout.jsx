import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'
import { useStateConText } from '../../contexts/ContextProvider'
// import '../../index2.css'

export default function GuestLayout() {
  const {token} = useStateConText()
  
  if(token){
    return <Navigate to="/users" />
  }

  return (
    <div>
      <Outlet></Outlet>
    </div>
  )
}

import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'
import { useStateConText } from '../../contexts/ContextProvider'

export default function GuestLayout() {
  const {token} = useStateConText()
  
  if(token){
    return <Navigate to="/" />
  }

  return (
    <div>
      <Outlet></Outlet>
    </div>
  )
}

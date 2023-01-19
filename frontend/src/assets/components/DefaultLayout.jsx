import React from 'react'
import { Link, Navigate, Outlet } from 'react-router-dom'
import { useStateConText } from '../../contexts/ContextProvider'

export default function DefaultLayout() {
  const {user , token} = useStateConText()

  if(!token){
    return <Navigate to="/login" />
  }

  const onLogout = (ev) => {
    ev.preventDefault();
  }
  
  return (
    <div id="defaultLayout">
      <aside>
        <Link to="/dashboard" > Dashboard </Link>  
        <Link to="/users" > Users </Link>  
      </aside>
      <div className='content'>
        <header>
          <div>
            Header
          </div>
          <div>
            {user.name}
            <a href='#' onClick={onLogout} className="btn-logout">Logout</a>
          </div>
        </header>
        <main>
          <Outlet></Outlet>
        </main>
      </div>      
    </div>
  )
}

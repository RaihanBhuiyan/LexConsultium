import React, { useEffect } from 'react'
import { Link, Navigate, Outlet } from 'react-router-dom'
import axiosClient from '../../axios-client'
import { useStateConText } from '../../contexts/ContextProvider'

// import '../../index2.css'

export default function DefaultLayout() {
  const {user , token , notification , setUser ,setToken} = useStateConText()

  if(!token){
    return <Navigate to="/login" />
  }

  const onLogout = (ev) => {
    ev.preventDefault();
    axiosClient.post('/logout')
      .then(() =>{
        setUser({})
        setToken(null)        
      })
  }
  
  useEffect(() => {
    axiosClient.get('/user')
    .then((data)=>{
      setUser(data.data)
    })
  }, [])
  return (
    <div id="defaultLayout">
      <aside>
        <Link to="/dashboard" > Dashboard </Link>  
        {/* <Link to="/users" > New Documents Entry</Link>  
        <Link to="/dashboard" > Daily Transaction </Link>  
        <Link to="/dashboard" > Library </Link>   */}
        <Link to="/users" > Users </Link>  
        {/* <Link to="/users" > Business Type </Link>  
        <Link to="/users" > Ledger Entry</Link>  
        <Link to="/users" > Ledger Entry</Link>   */}
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
      {notification && 
        <div className='notification'>
          {notification}
        </div>       
      } 
    </div>
  )
}

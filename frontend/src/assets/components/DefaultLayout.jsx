import React, { useEffect } from 'react'
import { Link, Navigate, Outlet } from 'react-router-dom'
import axiosClient from '../../axios-client'
import { useStateConText } from '../../contexts/ContextProvider'
import "react-datepicker/dist/react-datepicker.css";
import '../../index2.css'
import { useState } from 'react';
export default function DefaultLayout() {
  const {user , token , notification , setUser ,setToken} = useStateConText()
  const [userData , setUserData] = useState({role :4 , name:'',id:1});
  useEffect(() => {
    if (!token) {
      return <Navigate to="/login" />;
    }

    // Fetch user data when the component mounts
    if (Object.keys(user).length === 0) {
      axiosClient.get('/user')
        .then((response) => {
          const data = response;
          // setUserData(data); // Update userData state
          console.log('user-----------', userData);
        })
        .catch((error) => {
          console.error('Error fetching user data:', error);
        });
    }
  }, [token, user]); 

  const onLogout = (ev) => {
    ev.preventDefault();
    axiosClient.post('/logout')
      .then(() => {
        setUser({});
        setToken(null);
      })
      .catch((error) => {
        console.error('Error logging out:', error);
      });
  };

  return (
    <div id="defaultLayout">
      <aside>
        {/* {userData.role==1 || userData.role==2  || userData.role==3 || userData.role==4 (
          <Link to="/dashboard">Dashboard</Link>
        )}   */}
        {/* <Link to="/users" > New Documents Entry</Link>  
        <Link to="/dashboard" > Daily Transaction </Link>  
        <Link to="/dashboard" > Library </Link>   */}
        <Link to="/documents" > Documents </Link>  
        <Link to="/daily_transaction" > Daily Transaction </Link>  
        <Link to="/workSchedule" > Work Schedule Entry </Link>  
        <Link to="/users" > Users </Link>  
        <Link to="/businessType" > Business Type </Link>  
        <Link to="/ledgerType" > Ledger Entry</Link> 
        <Link to="/workType" > Work Type Entry</Link>  
      </aside>
      <div className='content'>
        <header>
          <div>
            Header {}
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

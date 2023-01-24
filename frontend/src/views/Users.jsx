import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import axiosClient from '../axios-client';
export default function Users() {
  const [users , setUsers] = useState([]);
  const [loading , setLoading] = useState(false)
  
  useEffect(() =>{
    getUsers()
  } , [])

  const getUsers = () =>{
    setLoading(true)
    axiosClient.get('/users')
      .then(({data}) =>{
        setLoading(false)
        setUsers(data.data)
        // console.log(data);
      })
      .catch(() =>{
        setLoading(false)
      })

  }
  const onDelete = (u) => {
    if(!window.confirm("Are you sure want to delete this user?")){
      return
    }
  }
  return (
    <div>
      <div style={{display: 'flex' ,justifyContent: 'space-between' , alignItems: 'center'}}>
        <h1>Users</h1>
        <Link to='/users/new' className='btn-add'>Add New</Link>
      </div>
      <div className='card animated fadeinDown'>
        <table>
          <thead>
            <tr>
              <th>ID</th >
              <th>Name</th >
              <th>Email</th >
              <th>Create Date</th >
              <th>Actions</th >
            </tr>
          </thead>
          <tbody>
            {users.map(u =>(
              <tr>
                <td>{u.id}</td>
                <td>{u.name}</td>
                <td>{u.email}</td>
                <td>{u.created_at}</td>
                <td>
                  {/* <link to={'/users/'+u.id}>Edit</link>
                  &nbspl;
                  <button onClick={ev => onDelete(u)} className="btn-delete"></button> */}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

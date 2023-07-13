import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import axiosClient from '../../../../axios-client';
export default function WorkType() {
  const [users , setUsers] = useState([]);
  const [loading , setLoading] = useState(false)
  
  useEffect(() =>{
    getUsers()
  } , [])

  const getUsers = () =>{
    setLoading(true)
    axiosClient.get('/work-types')
      .then(({data}) =>{
        setLoading(false)
        setUsers(data.data)
        // console.log(users);
      })
      .catch(() =>{
        setLoading(false)
      })
  }
  
  const onDelete = (u) => {
    if(!window.confirm("Are you sure want to delete this user?")){
      return
    }
    axiosClient.delete(`/work-types/${u.id}`)
      .then(() => {
        getUsers()
      })
  }

  return (
    <div>
      <div style={{display: 'flex' ,justifyContent: 'space-between' , alignItems: 'center'}}>
        <h1>Work Types</h1>
        <Link to='/workType/new' className='btn-add'>Add New</Link>
      </div>
      <div className='card animated fadeinDown'>
        <table>
          <thead>
            <tr>
              <th>ID</th >
              <th>Name</th >
              <th>Actions</th >
            </tr>
          </thead>
          {loading && <tbody>
            <tr>
              <td colSpan='5' className='text-center'>Loading.....</td>
            </tr>
          </tbody>
          }
          {!loading && 
          <tbody>
            {users.map( u => ( 
              <tr key={u.id}>
                <td>{u.id}</td>
                <td>{u.name}</td>
                <td>
                  <Link className='btn-edit' to={'/workType/'+u.id}>Edit</Link>
                  &nbsp;
                  <button onClick={ev => onDelete(u)} className="btn-delete">Delete</button>
                </td>
              </tr>               
            ))}
          </tbody>
          }
        </table>
      </div>
    </div>
  )
}

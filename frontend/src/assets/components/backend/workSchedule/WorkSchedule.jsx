import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import axiosClient from '../../../../axios-client';
import { useStateConText } from '../../../../contexts/ContextProvider'
export default function WorkSchedule() {
  const [users , setUsers] = useState([]);
  const [loading , setLoading] = useState(false)
  const {user} = useStateConText()

  useEffect(() =>{
    // console.log('ddddd' , user);
    getUsers()
  } , [])

  const getUsers = () =>{
    setLoading(true)
    axiosClient.get('/work-schedules')
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
    axiosClient.delete(`/work-schedules/${u.id}`)
      .then(() => {
        getUsers()
      })
  }

  return (
    <div>
      <div style={{display: 'flex' ,justifyContent: 'space-between' , alignItems: 'center'}}>
        <h1>Work Schedule</h1>
        <Link to='/workSchedule/new' className='btn-add'>Add New</Link>
      </div>
      <div className='card animated fadeinDown'>
        <table>
          <thead>
            <tr>
              <th>ID</th >
              <th>Name</th >
              <th>Details</th >
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
                <td>{u.userJoin.name}</td>
                <td>
                  <span dangerouslySetInnerHTML={{__html: u.details}}></span>
                </td>
                <td>
                  <Link className='btn-edit' to={'/workSchedule/'+u.id}>Edit</Link>
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

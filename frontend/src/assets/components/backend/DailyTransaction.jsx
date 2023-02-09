import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import axiosClient from '../../../axios-client';
export default function DailyTransaction() {
  const [data , setData] = useState([]);
  const [loading , setLoading] = useState(false)
  
  useEffect(() =>{
    getUsers()
  } , [])

  const getUsers = () =>{
    setLoading(true)
    axiosClient.get('/daily-transactions')
      .then(({data}) =>{
        setLoading(false)
        setData(data.data)
        console.log(users);
      })
      .catch(() =>{
        setLoading(false)
      })
  }
  
  const onDelete = (u) => {
    if(!window.confirm("Are you sure want to delete this user?")){
      return
    }
    axiosClient.delete(`/daily-transactions/${u.id}`)
      .then(() => {
        getUsers()
      })
  }

  return (
    <div>
      <div style={{display: 'flex' ,justifyContent: 'space-between' , alignItems: 'center'}}>
        <h1>Daily Transaction</h1>
        <Link to='/daily_transaction/new' className='btn-add'>Add New</Link>
      </div>
      <div className='card animated fadeinDown'>
        <table>
          <thead>
            <tr>
              <th>ID</th >
              <th>Date</th >
              <th>Ledger</th >
              <th>Amount</th >
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
            {data.map( u => ( 
              
              <tr key={u.id}>
                <td>{u.id}</td>
                <td>{u.date}</td>
                <td>{u.ledger.name}</td>
                <td>{u.amount}</td>
                <td>
                  <Link className='btn-edit' to={'/daily_transaction/'+u.id}>Edit</Link>
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

import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import axiosClient from '../../../axios-client';
export default function Documents() {
  const [data , setData] = useState([]);
  const [loading , setLoading] = useState(false)
  
  useEffect(() =>{
    getUsers()
  } , [])

  const getUsers = () =>{
    setLoading(true)
    axiosClient.get('/documents')
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
    axiosClient.delete(`/documents/${u.id}`)
      .then(() => {
        getUsers()
      })
  }

  return (
    <div>
      <div style={{display: 'flex' ,justifyContent: 'space-between' , alignItems: 'center'}}>
        <h1>Documents</h1>
        <Link to='/documents/new' className='btn-add'>Add New</Link>
      </div>
      <div className='card animated fadeinDown'>
        <table className="table table-striped table-bordered">
          <thead>
            <tr>
              <th>ID</th >
              <th>Reference</th >
              <th>Entry Date</th >
              <th>Business Type</th >
              <th>Name of Bank</th >
              <th>Account Name</th >
              <th>Concern Lawyer</th >
              <th>Receive Date</th >
              <th>Delivery Date</th >
              <th>File collect by</th >
              <th>Type of works</th >
              <th>File Status</th >
              <th>Bill Send</th >
              <th>Bill Received </th >
              <th>Actual Cost</th >
              <th>Profit</th >
              <th>File Back</th >
              <th>Action</th >
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
                <td>{u.b_name}</td>
                <td>{u.e_date}</td>
                <td>{u.business_types.b_name}</td>
                <td>{u.bank}</td>
                <td>{u.b_name}</td>
                <td>{u.concern_lawyer.name}</td>
                <td>{u.r_date}</td>
                <td>{u.d_date}</td>
                <td>{u.collect_by.name}</td>
                <td>{u.work_type.name}</td>
                <td>{u.status}</td>
                <td>{u.bill_send}</td>
                <td>{u.bill_received}</td>
                <td>{u.actual_cost}</td>
                <td>{u.profite}</td>
                <td>{u.file_back}</td>
                <td>
                  <Link className='btn-edit' to={'/documents/'+u.id}>Edit</Link>
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

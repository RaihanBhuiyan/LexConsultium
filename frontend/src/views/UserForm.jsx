import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import axiosClient from '../axios-client'
import { useStateConText } from '../contexts/ContextProvider'

export default function UserForm() {
  const {id} = useParams()
  const navigate = useNavigate();
  const [loading , setLoading] = useState(false)
  const [errors , setErrors] = useState(null);  
  const {setNotification} = useStateConText()
  const [user, setUser] = useState({
    id: null,
    name: '',
    email: '',
    role : '',
    password: '',
    password_confirmation: '' 
  })
  if(id){
    useEffect( () =>{
      setLoading(true)
      axiosClient.get(`/users/${id}`)
        .then(({data})=>{
          setLoading(false)
          setUser(data.data)
          console.log(data);
        })
        .catch((err) => {
          setLoading(false)
          const response = err.response;
          if(response && response.status == 422){
            setErrors(response.data.errors)
          }
        })
    }, [])
  }  
  const onSubmit = (ev) =>{
    ev.preventDefault();
    if(user.id){
      axiosClient.put(`/users/{user.id}` ,user)
        .then(() => {
          setNotification('User was successfully updated')
          navigate('/users')
        })        
        .catch((err) => {
          setLoading(false)
          const response = err.response;
          if(response && response.status == 422){
            setErrors(response.data.errors)
          }
        })
    }else{
      axiosClient.post(`/users` ,user)
        .then(() => {
          setNotification('New user added successfully')
          navigate('/users')
        })        
        .catch((err) => {
          setLoading(false)
          const response = err.response;
          if(response && response.status == 422){
            setErrors(response.data.errors)
          }
        })
    }
  }
  return (
    <div>
      {user.id && <h1> Update User: {user.name}</h1>}
      {!user.id && <h1>New User</h1>}
      {errors && <div className='alert'>
        {Object.keys(errors).map(key => (
          <p key={key}>{errors[key][0]}</p>
        ))}
        </div>
      }
      <div className='card animated fadeInDown'>
        {loading && (
          <div className='text-center'>Loading....</div>
        )}
        {!loading && 
          <form onSubmit={onSubmit}>
            <label htmlFor="html">User Name</label>   
            <input onChange={ev => setUser({...user, name: ev.target.value})} value={user.name} placeholder='name' />
            <label htmlFor="html">Email</label>  
            <input onChange={ev => setUser({...user, email: ev.target.value})} value={user.email} placeholder='Email' />
            <label htmlFor="html">Role</label>  
            <select onChange={ev => setData({...getData, role: ev.target.value})} value={user.role} placeholder='role'>
              <option >-- Select Role --</option>
              <option value={0}>Admin</option>
              <option value={1}>Lawyer</option>
              <option value={2}>Employee</option>
              <option value={3}>Sales</option>
            </select>  
            <label htmlFor="html">Password</label>           
            <input onChange={ev => setUser({...user, password: ev.target.value})} placeholder='Password' />
            <label htmlFor="html">Confirmed Password</label>  
            <input onChange={ev => setUser({...user, password_confirmation: ev.target.value})} placeholder='Password Confirmation' />
            <button className='btn'>Save</button>          
          </form>
        }
      </div>
    </div>
  )
}

import React from 'react'
import { useState } from 'react';
import {useRef} from 'react'
import { Link } from 'react-router-dom'
import axiosClient from '../axios-client';
import { useStateConText } from '../contexts/ContextProvider';

export default function Signup() {
  const nameRef = useRef(); 
  const emailRef = useRef(); 
  const passwordRef = useRef(); 
  const passwordConfirmRef = useRef(); 
  const {setUser , setToken} = useStateConText();
  
  const {user , token} = useStateConText();
  const [errors , setErrors] = useState(null);
  const onSubmit = (ev) => {
    ev.preventDefault()
    const payload = {
      name : nameRef.current.value,
      email : emailRef.current.value,
      password : passwordRef.current.value,
      password_confirmation : passwordConfirmRef.current.value
    }
    axiosClient.post('/signup' , payload)
      .then(({data}) => {
        setUser(data.user)
        setToken(data.token)
      })
      .catch(err => {
        const response = err.response;
        if(response && response.status == 422){
          setErrors(response.data.errors)
        }
      })
  }  
  return (
    <div className='login-signup-form animated fadeInDown'>
      <div className='form'>
        <form onSubmit={onSubmit}>
          <h1 className='title'>Signup For Free</h1>
          {errors && <div className='alert'>
            {Object.keys(errors).map(key => (
              <p key={key}>{errors[key][0]}</p>
            ))}
            </div>
          }
          <input ref={nameRef} type='text' placeholder='Full Name' />
          <input ref={emailRef} type='email' placeholder='Email Address' />
          <input ref={passwordRef} type='password' placeholder='Password' />
          <input ref={passwordConfirmRef} type='password' placeholder='Password Confirmation' />
          <button className='btn btn-block' >Signup</button>
          <p className='message'> Already Registered? <Link to='/login'>Sign In</Link></p>
        </form>
      </div>
    </div>
  )
}

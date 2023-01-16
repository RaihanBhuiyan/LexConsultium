import React from 'react'
import {useRef} from 'react'
import { Link } from 'react-router-dom'
import axiosClient from '../axios-client';
import { useStateConText } from '../contexts/ContextProvider';

export default function Signup() {
  const nameRef = useRef(); 
  const emailRef = useRef(); 
  const passwordRef = useRef(); 
  const passwordConfirmRef = useRef(); 
  
  const {setUser , setToken} = useStateConText()

  const onSubmit = (ev) => {
    ev.preventDefault()
    const payload = {
      name : nameRef.current.value,
      email : emailRef.current.value,
      password : passwordRef.current.value,
      password_confirmation : passwordConfirmRef.current.value
    }
    axiosClient.post('/signup',payload)
      .then(({data}) => {
        setUser(data.user)
        setToken(data.setToken)
      })
      .catch(err => {
        const response = err.response;
        if(response && response.status == 422){
          console.log(response.data.errors);
        }
      })
    console.log(payload)
  }  
  return (
    <div className='login-signup-form animated fadeInDown'>
      <div className='form'>
        <form onSubmit={onSubmit}>
          <h1 className='title'>Signup For Free</h1>
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

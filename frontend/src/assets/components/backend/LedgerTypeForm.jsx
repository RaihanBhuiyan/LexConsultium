import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import axiosClient from '../../../axios-client';
import { useStateConText } from '../../../contexts/ContextProvider'

export default function LedgerTypeForm() {
  const {id} = useParams()
  const navigate = useNavigate();
  const [loading , setLoading] = useState(false)
  const [errors , setErrors] = useState(null);  
  const {setNotification} = useStateConText()
  const [getData, setData] = useState({
    id: null,
    name: '',
  })
  if(id){
    useEffect( () =>{
      setLoading(true)
      axiosClient.get(`/accounts-ledgers/${id}`)
        .then(({data})=>{
          setLoading(false)
          setData(data.data)
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
    if(getData.id){
      axiosClient.put(`/accounts-ledgers/${id}` ,getData)
        .then(() => {
          setNotification('User was successfully updated')
          navigate('/ledgerType')
        })        
        .catch((err) => {
          setLoading(false)
          const response = err.response;
          if(response && response.status == 422){
            setErrors(response.data.errors)
          }
        })
    }else{
      axiosClient.post(`/accounts-ledgers` ,getData)
        .then(() => {
          setNotification('New user added successfully')
          navigate('/ledgerType')
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
      {getData.id && <h1> Update Ledger </h1>}
      {!getData.id && <h1>New Ledger </h1>}
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
            <input onChange={ev => setData({...getData, name: ev.target.value})} value={getData.name} placeholder='name' />
            <button className='btn'>Save</button>          
          </form>
        }
      </div>
    </div>
  )
}

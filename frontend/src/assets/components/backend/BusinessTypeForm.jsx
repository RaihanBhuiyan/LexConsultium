import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import axiosClient from '../../../axios-client';
import { useStateConText } from '../../../contexts/ContextProvider'

export default function BusinessTypeForm() {
  const {id} = useParams()
  const navigate = useNavigate();
  const [loading , setLoading] = useState(false)
  const [errors , setErrors] = useState(null);  
  const {setNotification} = useStateConText()
  const [getData, setData] = useState({
    id: null,
    b_name: '',
  })
  if(id){
    useEffect( () =>{
      setLoading(true)
      axiosClient.get(`/business_types/${id}`)
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
      axiosClient.put(`/business_types/`+ getData.id ,getData)
        .then(() => {
          setNotification('Business Type was successfully updated')
          navigate('/businessType')
        })        
        .catch((err) => {
          setLoading(false)
          const response = err.response;
          if(response && response.status == 422){
            setErrors(response.data.errors)
          }
        })
    }else{
      axiosClient.post(`/business_types` ,getData)
        .then(() => {
          setNotification('New Business Type added successfully')
          navigate('/businessType')
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
      {getData.id && <h1> Update Business Type</h1>}
      {!getData.id && <h1>New Business Types</h1>}
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
            <input onChange={ev => setData({...getData, b_name: ev.target.value})} value={getData.b_name} placeholder='Business Type' />
           
            <button className='btn'>Save</button>          
          </form>
        }
      </div>
    </div>
  )
}

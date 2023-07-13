import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import axiosClient from '../../../../axios-client';
import { useStateConText } from '../../../../contexts/ContextProvider'

export default function WorkTypeForm() {
  const {id} = useParams()
  const navigate = useNavigate();
  const [loading , setLoading] = useState(false)
  const [errors , setErrors] = useState(null) 
  const {setNotification} = useStateConText()
  const [getData, setData] = useState({
    id: null,
    name: '',
  })
  if(id){
    // console.log("idddd", useParams());
    useEffect( () =>{
      setLoading(true)
      axiosClient.get(`/work-types/${id}`)
        .then(({data})=>{
          setLoading(false)
          setData(data.data)
          // console.log(data);
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
      axiosClient.put(`/work-types/${id}` ,getData)
        .then(() => {
          setNotification('Data was successfully updated')
          navigate('/workType')
        })        
        .catch((err) => {
          setLoading(false)
          const response = err.response;
          if(response && response.status == 422){
            setErrors(response.data.errors)
          }
        })
    }else{
      axiosClient.post(`/work-types` ,getData)
        .then(() => {
          setNotification('New Data added successfully')
          navigate('/workType')
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
      {getData.id && <h1> Update Work Type </h1>}
      {!getData.id && <h1>Work Type </h1>}
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

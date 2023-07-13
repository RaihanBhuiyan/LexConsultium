import React from 'react'
import { useEffect , useRef , useMemo } from 'react'
import { useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import axiosClient from '../../../../axios-client';
import { useStateConText } from '../../../../contexts/ContextProvider'
import DatePicker from "react-datepicker";
import Select from 'react-select'
import JoditEditor from 'jodit-react';
export default function WorkScheduleForm() {
  const {id} = useParams()
  const navigate = useNavigate();
  const [loading , setLoading] = useState(false)
  const [errors , setErrors] = useState(null) 
  const {user , setNotification} = useStateConText()
  const [startDate, setStartDate] = useState(new Date()) 
  const [userList, setUserList] = useState() 
  const [getData, setData] = useState({
    id: null,
    user_id: '',
    date: new Date().getFullYear()+'-'+new Date().getMonth()+'-'+new Date().getDate(),
    details: '',
  })
  const [getEdiotContent, setEdiotContent] = useState('');
  useEffect( () =>{

    const options = [];
    options.push({ value: '', label: '--Select--' });
    options.push({ value: user.id, label: user.name });
    setUserList(options)

    if(id){      
      setLoading(true)
      axiosClient.get(`/work-schedules/${id}`)
        .then(({data})=>{
          setLoading(false)
          setData(data.data)
          setStartDate(new Date(data.data.date));
          setEdiotContent(data.data.details)
          // console.log( 'StartDate' , data.data.date);
        })
        .catch((err) => {
          setLoading(false)
          const response = err.response;
          if(response && response.status == 422){
            setErrors(response.data.errors)
          }
        })
    }        
  }, [])



  const changeJeditor  = (e) => {
    setData({...getData, details: e})
  }

  const changeHandler = (e) => {
    setStartDate(e) 
    let dateCus = new Date(e);
    dateCus = dateCus.getFullYear()+'-'+
    (dateCus.getMonth()<10 ? ('0'+(dateCus.getMonth()+1)):dateCus.getMonth())+
    '-'+(dateCus.getDate()< 10 ? '0'+dateCus.getDate():dateCus.getDate());

    setData({...getData, date: dateCus}); 
  }

  const changeSelect = (e) => {
    setData({...getData, user_id: e.value})    
  }

  const onSubmit = (ev) =>{
    ev.preventDefault();
    if(getData.id){
      axiosClient.put(`/work-schedules/${id}` ,getData)
        .then(() => {
          setNotification('Data was successfully updated')
          navigate('/workSchedule')
        })        
        .catch((err) => {
          setLoading(false)
          const response = err.response;
          if(response && response.status == 422){
            setErrors(response.data.errors)
          }
        })
    }else{
      axiosClient.post(`/work-schedules` ,getData)
        .then(() => {
          setNotification('New Data added successfully')
          navigate('/workSchedule')
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
      {getData.id && <h1> Update Schedule </h1>}
      {!getData.id && <h1>Work Schedule </h1>}
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
            <label htmlFor="html">Date</label> 
            <DatePicker
              showIcon
              selected={startDate}
              onChange={ changeHandler}
              // onCalendarClose={changeHandler}             
            />  
            <label htmlFor="html">User</label> 
            <Select 
              options={userList}
              onChange={changeSelect}           
            />  
            <label htmlFor="html">Details</label>   
            {/* <input onChange={ev => setData({...getData, name: ev.target.value})} value={getData.name} placeholder='name' />                      */}
            <JoditEditor
              
              value={getEdiotContent}
              // config={config}
              tabIndex={1} // tabIndex of textarea
              onBlur={newContent => setContent(newContent)} // preferred to use only this option to update the content for performance reasons
              onChange={changeJeditor}
            />
            <button className='btn'>Save</button>          
          </form>
        }
      </div>
    </div>
  )
}

import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import axiosClient from '../../../axios-client';
import { useStateConText } from '../../../contexts/ContextProvider'

export default function DocumentsForm() {
  const {id} = useParams()
  const navigate = useNavigate();
  const [loading , setLoading] = useState(false)
  const [errors , setErrors] = useState(null);  
  const {setNotification} = useStateConText()
  const [getData, setData] = useState({
    id: null,
    reference :'',
    e_date :'',
    business_types_id :'',
    bank :'',
    b_name :'',
    user_id :'',
    r_date :'',
    d_date :'',
    collect_by :'',
    work_type :'',
    status :'',
    bill_send :'',
    bill_received :'',
    actual_cost :'',
    profite :'',
    file_back : ''   
  })
  const [getUser, setUser] = useState([])
  const [getBtype, setBtype] = useState([])
  useEffect( () =>{
    if(id){
      documentItem()
    } 
    userItem()
    businessItem()
  }, [])
   
  const documentItem = (ev) =>{
    setLoading(true)
    axiosClient.get(`/documents/${id}`)
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
  }
  const userItem = (ev) =>{
    axiosClient.get(`/users`)
      .then(({data})=>{
        setUser(data.data)
        console.log(data);
      })
      .catch((err) => {
        const response = err.response;
        if(response && response.status == 422){
          setErrors(response.data.errors)
        }
      })    
  }
  const businessItem = (ev) =>{
    axiosClient.get(`/business_types`)
      .then(({data})=>{
        setBtype(data.data)
        console.log(data);
      })
      .catch((err) => {
        const response = err.response;
        if(response && response.status == 422){
          setErrors(response.data.errors)
        }
      })    
  }  
  const onSubmit = (ev) =>{
    ev.preventDefault();
    if(getData.id){
      axiosClient.put(`/documents/{getData.id}` ,getData)
        .then(() => {
          setNotification('Documents was successfully updated')
          navigate('/documents')
        })        
        .catch((err) => {
          setLoading(false)
          const response = err.response;
          if(response && response.status == 422){
            setErrors(response.data.errors)
          }
        })
    }else{
      axiosClient.post(`/documents` ,getData)
        .then(() => {
          setNotification('New Documents added successfully')
          navigate('/documents')
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
      {getData.id && <h1> Update Documents</h1>}
      {!getData.id && <h1>New Documents</h1>}
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
            <label for="html">Reference</label><br></br>
            <input onChange={ev => setData({...getData, reference: ev.target.value})} value={getData.reference} placeholder='reference' />
            <label for="html">Entry Date</label><br></br>
            <input onChange={ev => setData({...getData, e_date: ev.target.value})} value={getData.e_date} placeholder='Entry Date'  type='date'  />
            <label for="html">Business Type</label>
            <select onChange={ev => setData({...getData, business_types_id: ev.target.value})} value={getData.business_types_id} placeholder='business types'>
              <option >Select Business Type</option>
              {getBtype.map( u => (   
                <option value={u.id}> {u.b_name}</option>
              ))}
            </select> <br></br><br></br>  
            <label for="html">Bank Name</label>         
            <input onChange={ev => setData({...getData, bank: ev.target.value})} value={getData.bank} placeholder='bank' />
            <label for="html">Account Name</label>    
            <input onChange={ev => setData({...getData, b_name: ev.target.value})} value={getData.b_name} placeholder='Account Name' />
            <label for="html">Select Lawyer</label>    
            <select onChange={ev => setData({...getData, user_id: ev.target.value})} value={getData.user_id} placeholder='Assign Lawyer'>
              <option >Select Lawyer</option>
              {getUser.map( u => (   
                <option value={u.id}> {u.name}</option>
              ))}
            </select> <br></br><br></br>
            <label for="html">Received Date</label>                 
            <input onChange={ev => setData({...getData, r_date: ev.target.value})} value={getData.r_date} placeholder='Receive Date' type='date' />
            <label for="html">Delivery Date</label>  
            <input onChange={ev => setData({...getData, d_date: ev.target.value})} value={getData.d_date} placeholder='Delivery Date' type='date' />
            <label for="html">Collect By</label>  
            <select onChange={ev => setData({...getData, collect_by: ev.target.value})} value={getData.collect_by} placeholder='Collect By'>
              <option >Collect By</option>
              {getUser.map( u => (   
                <option value={u.id}> {u.name}</option>
              ))}
            </select> <br></br><br></br>    
            <label for="html">Type Of Work</label>           
            <input onChange={ev => setData({...getData, work_type: ev.target.value})} value={getData.work_type} placeholder='Type of works' />
            <label for="html"> Work Status</label> 
            <input onChange={ev => setData({...getData, status: ev.target.value})} value={getData.status} placeholder='Status' />
            <label for="html">Bill Send</label> 
            <input onChange={ev => setData({...getData, bill_send: ev.target.value})} value={getData.bill_send} placeholder='Bill Send' />            
            <label for="html">Bill Received</label> 
            <input onChange={ev => setData({...getData, bill_received: ev.target.value})} value={getData.bill_received} placeholder='Bill Received' />

            <label for="html">Actual Cost</label> 
            <input onChange={ev => setData({...getData, actual_cost: ev.target.value})} value={getData.actual_cost} placeholder='Actual Cost' />
            <label for="html">Profite</label> 
            <input onChange={ev => setData({...getData, profite: ev.target.value})} value={getData.profite} placeholder='Profite' />
            <label for="html">File Back</label> 
            <input onChange={ev => setData({...getData, file_back: ev.target.value})} value={getData.file_back} placeholder='File Back' />            <button className='btn'>Save</button>          
          </form>
        }
      </div>
    </div>
  )
}

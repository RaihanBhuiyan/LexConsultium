import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import axiosClient from '../../../axios-client';
import { useStateConText } from '../../../contexts/ContextProvider'

export default function DailyTransactionForm() {
  const {id} = useParams()
  const navigate = useNavigate();
  const [loading , setLoading] = useState(false)
  const [errors , setErrors] = useState(null);  
  const {setNotification} = useStateConText();
  const [getLedger, setLedger] = useState([]);  
  const [getData, setData] = useState({
    id: null,
    date: '',
    accounts_ledger_id: '',
    amount: '',
  });
  useEffect( () =>{
    if(id){
      getItem();
    } 
    getLedgerItem();    
  }, [])
  const getLedgerItem = (ev) =>{
    axiosClient.get(`/accounts-ledgers`)
      .then(({data})=>{
        setLedger(data.data)
        console.log('ssssssssssss',getLedger);
      })
      .catch((err) => {
        const response = err.response;
        if(response && response.status == 422){
          setErrors(response.data.errors)
        }
      })   
  }
  const getItem = (ev) =>{
    setLoading(true)
    axiosClient.get(`/daily-transactions/${id}`)
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

  const onSubmit = (ev) =>{
    ev.preventDefault();
    if(getData.id){
      axiosClient.put(`/daily-transactions/{user.id}` ,getData)
        .then(() => {
          setNotification('User was successfully updated')
          navigate('/daily_transaction')
        })        
        .catch((err) => {
          setLoading(false)
          const response = err.response;
          if(response && response.status == 422){
            setErrors(response.data.errors)
          }
        })
    }else{
      axiosClient.post(`/daily-transactions` ,getData)
        .then(() => {
          setNotification('New user added successfully')
          navigate('/daily_transaction')
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
      {getData.id && <h1> Update Daily Transaction</h1>}
      {!getData.id && <h1>New Transaction</h1>}
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
            <input onChange={ev => setData({...getData, date: ev.target.value})} value={getData.date} placeholder='Date' type='date' />
            
            <select onChange={ev => setData({...getData, accounts_ledger_id: ev.target.value})} value={getData.accounts_ledger_id} placeholder='Select Ledger'>
            <option value=''> Select Ledger Type</option>
            {getLedger.map( u => (   
              <option value={u.id}> {u.name}</option>
            ))}
            </select> 
            
            <br></br> 
            <input onChange={ev => setData({...getData, amount: ev.target.value})} value={getData.amount}  placeholder='amount'  />
            <button className='btn'>Save</button>          
          </form>
        }
      </div>
    </div>
  )
}

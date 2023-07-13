import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import axiosClient from '../../../axios-client';
import { useStateConText } from '../../../contexts/ContextProvider'
import DatePicker from "react-datepicker";
import Select from 'react-select'
export default function DocumentsForm() {
  const { id } = useParams()
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false)
  const [errors, setErrors] = useState(null);
  const { setNotification } = useStateConText()
  const [getData, setData] = useState({
    id: null,
    reference: '',
    e_date: '',
    business_types_id: '',
    bank: '',
    b_name: '',
    user_id: '',
    r_date: '',
    d_date: '',
    collect_by: '',
    work_type_id: '',
    status: '',
    bill_send: '',
    bill_received: '',
    actual_cost: '',
    profite: '',
    file_back: '',
    file: ''
  })
  const [getUser, setUser] = useState([])
  const [getBtype, setBtype] = useState([])
  const [getWtype, setWtype] = useState([])
  const [startDate, setStartDate] = useState(new Date())
  useEffect(() => {
    if (id) {
      documentItem()
    }
    userItem()
    businessItem()
    workTypes()
  }, [])

  const documentItem = (ev) => {
    setLoading(true)
    axiosClient.get(`/documents/${id}`)
      .then(({ data }) => {
        setLoading(false)
        setData(data.data)
        console.log(data);
      })
      .catch((err) => {
        setLoading(false)
        const response = err.response;
        if (response && response.status == 422) {
          setErrors(response.data.errors)
        }
      })
  }

  const userItem = (ev) => {
    axiosClient.get(`/users`)
      .then(({ data }) => {
        const options = [];
        data.data.filter(function (item, index) {
          options[index] = { value: item.id, label: item.name };
        })
        setUser(options)
        // console.log(data);
      })
      .catch((err) => {
        const response = err.response;
        if (response && response.status == 422) {
          setErrors(response.data.errors)
        }
      })
  }

  const businessItem = (ev) => {
    axiosClient.get(`/business_types`)
      .then(({ data }) => {
        const options = [];
        data.data.filter(function (item, index) {
          options[index] = { value: item.id, label: item.b_name };
        })
        setBtype(options)
      })
      .catch((err) => {
        const response = err.response;
        if (response && response.status == 422) {
          setErrors(response.data.errors)
        }
      })
  }

  const workTypes = (ev) => {
    axiosClient.get(`/work-types`)
      .then(({ data }) => {
        const options = [];
        data.data.filter(function (item, index) {
          options[index] = { value: item.id, label: item.name };
        })
        setWtype(options)
        // console.log('options',options)
      })
      .catch((err) => {
        const response = err.response;
        if (response && response.status == 422) {
          setErrors(response.data.errors)
        }
      })
  }

  const onSubmit = (ev) => {
    ev.preventDefault();
    if (getData.id) {
      axiosClient.put(`/documents/{getData.id}`, getData)
        .then(() => {
          setNotification('Documents was successfully updated')
          navigate('/documents')
        })
        .catch((err) => {
          setLoading(false)
          const response = err.response;
          if (response && response.status == 422) {
            setErrors(response.data.errors)
          }
        })
    } else {
      axiosClient.post(`/documents`, getData)
        .then(() => {
          setNotification('New Documents added successfully')
          navigate('/documents')
        })
        .catch((err) => {
          setLoading(false)
          const response = err.response;
          if (response && response.status == 422) {
            setErrors(response.data.errors)
          }
        })
    }
  }

  const changeHandler = (e) => {
    setStartDate(e)
    let date = new Date(e);
    date = date.getFullYear() + '-' +
      (date.getMonth() < 10 ? ('0' + date.getMonth()) : date.getMonth()) +
      '-' + (date.getDate() < 10 ? '0' + date.getDate() : date.getDate());

    setData({ ...getData, e_date: date });
    console.log('getData', getData.e_date)
  }

  const changeBSelect = (e) => {
    setData({ ...getData, business_types_id: e.value })
  }

  const changeUSelect = (e) => {
    setData({ ...getData, user_id: e.value })
  }

  const changeCllctBySelect = (e) => {
    setData({ ...getData, collect_by: e.value })
  }

  const changeWrkTypeSelect = (e) => {
    setData({ ...getData, work_type_id: e.value })
  }

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();
  
    reader.onload = (event) => {
      const base64String = event.target.result;
      // base64String is the base64-encoded file content
      // You can now send it to the backend via API call
    };
  
    reader.readAsDataURL(file);
  };

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
          <form onSubmit={onSubmit} enctype="multipart/form-data">
            <label htmlFor="html">Reference</label><br></br>
            <input onChange={ev => setData({ ...getData, reference: ev.target.value })}
              value={getData.reference}
              placeholder='reference' />

            <label htmlFor="html">Entry Date</label><br></br>
            <DatePicker
              showIcon
              selected={startDate}
              onChange={changeHandler}
            // onCalendarClose={changeHandler}             
            />
            {/* <input onChange={ev => setData({...getData, e_date: ev.target.value}) } value={getData.e_date} placeholder='Entry Date'  type='date'  /> */}
            <label htmlFor="html">Business Type</label>
            {/* <select onChange={ev => setData({...getData, business_types_id: ev.target.value})} value={getData.business_types_id} placeholder='business types'>
              <option >Select Business Type</option>
              {getBtype.map( u => (   
                <option value={u.id}> {u.b_name}</option>
              ))}
            </select>  */}
            <Select
              options={getBtype}
              onChange={changeBSelect}
            />

            <label htmlFor="html">Bank Name</label>
            <input onChange={ev => setData({ ...getData, bank: ev.target.value })} value={getData.bank} placeholder='bank' />
            <label htmlFor="html">Account Name</label>
            <input onChange={ev => setData({ ...getData, b_name: ev.target.value })} value={getData.b_name} placeholder='Account Name' />
            <label htmlFor="html">Select Lawyer</label>
            {/* <select onChange={ev => setData({...getData, user_id: ev.target.value})} value={getData.user_id} placeholder='Assign Lawyer'>
              <option >Select Lawyer</option>
              {getUser.map( u => (   
                <option value={u.id}> {u.name}</option>
              ))}                
            </select>  */}

            <Select
              options={getUser}
              onChange={changeUSelect}
            />

            <label htmlFor="html">Received Date</label>
            <input onChange={ev => setData({ ...getData, r_date: ev.target.value })} value={getData.r_date} placeholder='Receive Date' type='date' />
            <label htmlFor="html">Delivery Date</label>
            <input onChange={ev => setData({ ...getData, d_date: ev.target.value })} value={getData.d_date} placeholder='Delivery Date' type='date' />
            <label htmlFor="html">Collect By</label>

            {/* <select onChange={ev => setData({...getData, collect_by: ev.target.value})} value={getData.collect_by} placeholder='Collect By'>
              <option >Collect By</option>
              {getUser.map( u => (   
                <option value={u.id}> {u.name}</option>
              ))}
            </select> */}

            <Select
              options={getUser}
              onChange={changeCllctBySelect}
            />

            <label htmlFor="html">Type Of Work</label>
            {/* <input onChange={ev => setData({...getData, work_type_id: ev.target.value})} value={getData.work_type_id} placeholder='Type of works' /> */}
            <Select
              options={getWtype}
              onChange={changeWrkTypeSelect}
            />

            <label htmlFor="html"> Work Status</label>
            <select onChange={ev => setData({ ...getData, status: ev.target.value })}
              value={getData.status}
              placeholder='business types'>
              <option >Select Status</option>
              <option value='Pending'>Pending</option>
              <option value='Ongoing'>Ongoing</option>
              <option value='Done'>Done</option>
            </select>

            <label htmlFor="html">Bill Send</label>
            <input type='number'
              onChange={ev => setData({ ...getData, bill_send: ev.target.value })}
              value={getData.bill_send}
              placeholder='Bill Send' />
            <label htmlFor="html">Bill Received</label>
            <input
              type='number'
              onChange={ev => setData({ ...getData, bill_received: ev.target.value })}
              value={getData.bill_received}
              placeholder='Bill Received' />

            <label htmlFor="html">Actual Cost</label>
            <input type='number'
              onChange={ev => setData({ ...getData, actual_cost: ev.target.value })}
              value={getData.actual_cost}
              placeholder='Actual Cost' />
            <label htmlFor="html">Profite</label>
            <input type='number'
              onChange={ev => setData({ ...getData, profite: ev.target.value })}
              value={getData.profite} placeholder='Profite'
            />
            <label htmlFor="html">File Back</label>
            <input
              onChange={ev => setData({ ...getData, file_back: ev.target.value })}
              value={getData.file_back} placeholder='File Back' />

            <label htmlFor="html">Attach File</label>
            <input
              type="file"
              id="docpicker"
              accept=".pdf"
              // onChange={ev => {
              //   const file = ev.target.files[0];
              //   setData({...getData, file: file});
              // }} 
              onChange={handleFileChange}
            />

            <button className='btn'>Save</button>
          </form>
        }
      </div>
    </div>
  )
}

import React, { useState, useEffect, useRef } from 'react'
import Select from 'react-select'
import Breadcrumb from '../components/common/breadcrumb/Breadcrumb';

// This is Style for Select Box 
const customStyles = {
  control: (provided, state) => ({
    ...provided,
    border: state.isFocused ? '1px solid #b5b5c3' : '1px solid #e4e6ef',
    borderRadius: '4px',
    boxShadow: 'none',
    '&:hover': {
      border: '1px solid #b5b5c3',
    },
  }),
  option: (provided, state) => ({
    ...provided,
    backgroundColor: state.isFocused ? '#ffffff' : '#ffffff',
    color: state.isFocused ? '#000000' : '#000000',
    '&:hover': {
      backgroundColor: '#f4fde5',
      color: '#9fc55e',
    },
  }),
};


const PushNotification = () => {
  const [value, setValue] = useState(null);
  const [LinkTo,setLinkTo] = useState(null)

  const [UserType, setUserType] = useState(null)
  const [GrupName, setGrupName] = useState(null)    
  const UserTypeoptions = [
    { value: 'Rahul', label: 'Rahul' },
    { value: 'Ramesh', label: 'Ramesh' },
    { value: 'Suresh', label: 'Suresh' },
    { value: 'Aftab', label: 'Aftab' },
    { value: 'Asif', label: 'Asif' },
    { value: 'Devendra', label: 'Devendra' },];
    

    const GrupNameoptions = [
        { value: 'Group 1', label: 'Group 1' },
        { value: 'Group 2', label: 'Group 2' },
      ];
  return (
    <>
     <main>
    <Breadcrumb data={"alert-message"}/>
    <div className="page-content">
      <div className='main-form'>
        <div className='card'>
        <div className='card-body'>
        <div className='prdt-inr'>
          <div className="form-heading">
            <h3>Notfication Details</h3>
          </div>
          <div className='row'>
            <div className='col-md-12'>
              <div className="mb-3 fv-row">
                <label className="form-label">Title<i>*</i></label>
                <input type="text" name="Date" className="form-control" placeholder="Enter Title" />
              </div>
            </div>
            <div className='col-md-12'>
              <div className="mb-3 fv-row">
                <label className="form-label">Notification Text<i>*</i></label>
                <textarea class="form-control" rows="4" name="address" placeholder="Enter Notification Text"></textarea>
              </div>
            </div>

            <div className='col-md-6'>
              <div className="mb-3 fv-row">
                <label className="form-label">Link <i>*</i></label>
                <div className="mp-flex">
                  <div className="map-inerflx mpwdth-50">
                    <div className="rdobtn-card">
                      <label>
                        <input onChange={()=>{setLinkTo('GroupUsers')}} type="radio" name="Activity" />
                          <span>
                            <em></em>
                            <i>Grouped Users</i>
                            </span>
                            </label>
                            </div>
                            </div>
                            <div className="map-inerflx mpwdth-50">
                              <div className="rdobtn-card">
                                <label>
                                  <input onChange={()=>{setLinkTo('Selectedusers')}} type="radio" name="Activity" />
                                    <span>
                                      <em></em>
                                      <i>Selected Users</i>
                                      </span>
                                      </label>
                                      </div>
                                      </div>
                                      </div>
              </div>
            </div>
            {LinkTo === 'Selectedusers' && <div className='col-md-6'>
              <div className="mb-3 fv-row">
                <label className="form-label">Select Users <i>*</i></label>
                <div className='slectbx-singel'>
                <Select styles={customStyles} placeholder={'Select Type'} onChange={(e) => { setUserType(e.value) }} options={UserTypeoptions} />
                </div>
              </div>
            </div>}
            {LinkTo === 'GroupUsers' &&  <div className='col-md-6'>
              <div className="mb-3 fv-row">
                <label className="form-label">Select Group <i>*</i></label>
                <div className='slectbx-singel'>
                
                <Select styles={customStyles} placeholder={'Select Group'} onChange={(e) => { setGrupName(e.value) }} options={GrupNameoptions} />
                </div>
              </div>
            </div>}
          </div>
          <div className="d-flex justify-content-end mt-3 mb-3">
          <button type="button" className="btn btn-shadow btn-secondary me-2">Clear</button>
              <button type="button" className="btn btn-shadow btn-primary">Send</button>
            </div>
        </div>
      </div>
      </div>
      </div>
        </div>
      </main>

    </>
  )
}


export default PushNotification
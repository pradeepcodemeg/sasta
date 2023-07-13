import React, { useState, useEffect, useRef } from 'react'
import Select from 'react-select'

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


const PushNotificationForm = () => {
  const [value, setValue] = useState(null);

  const [CouponType, setCouponType] = useState(null)

  const CouponTypeoptions = [
    { value: 'Rahul', label: 'Rahul' },
    { value: 'Ramesh', label: 'Ramesh' },];
  return (
    <>
      <div className='main-form'>
        <div className='prdt-inr'>
          <div className="form-heading">
            <h3>Notfication Details</h3>
          </div>
          <div className='row'>
            <div className='col-md-6'>
              <div className="mb-3 fv-row">
                <label className="form-label">Title<i>*</i></label>
                <input type="text" name="Date" className="form-control" placeholder="Enter Offer Name" />
              </div>
            </div>
            <div className='col-md-6'>
              <div className="mb-3 fv-row">
                <label className="form-label">Select Client <i>*</i></label>
                <div className='slectbx-singel'>
                  <Select styles={customStyles} placeholder={'Select Client'} onChange={(e) => { setCouponType(e.value) }} options={CouponTypeoptions} />
                </div>
              </div>
            </div>
            <div className='col-md-12'>
              <div className="mb-3 fv-row">
                <label className="form-label">Notification Text<i>*</i></label>
                <textarea class="form-control" rows="4" name="address" placeholder="Enter Notification Text"></textarea>
              </div>
            </div>
            <div className='col-md-12'>
              <div className="mb-3 fv-row">
              <div className="cstmall-chkmain d-flex align-items-center">
                      <div className="slect-allchk me-2">
                        <label>
                          <input type="checkbox" />
                          <span></span>
                        </label>
                      </div>
                      <p>Notification Text</p>
                    </div>
              </div>
            </div>
          </div>
          <div className="d-flex justify-content-end mt-3 mb-3">
          <button type="button" className="btn btn-shadow btn-secondary me-2">Clear</button>
              <button type="button" className="btn btn-shadow btn-primary">Send</button>
            </div>
        </div>
      </div>
    </>
  )
}

export default PushNotificationForm
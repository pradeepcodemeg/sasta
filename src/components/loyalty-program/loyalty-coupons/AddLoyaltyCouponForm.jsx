

import  React, { useState, useEffect, useRef }  from 'react'
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


function AddLoyaltyCouponForm({ toggleAddLoyaltyCouponsModal, setToggleAddLoyaltyCouponsModal }) {
  console.log(toggleAddLoyaltyCouponsModal);
  const [value, setValue] = useState(null);
  const [StatusType, setStatusType] = useState(null)
  const StatusTypeoptions = [
    { value: 'Active', label: 'Active' },
    { value: 'In Active', label: 'In Active' },
];
  return (
    <>
      <div className={`main-popup adduser-popup ${toggleAddLoyaltyCouponsModal ? 'pop-open' : 'pop-close'}`}>
        <div className="lm-outer">
          <div className="lm-inner">
            <div className="popup-inner">
              <div className='popup-header'>
                <div className='popup-heading'>
                  <h3>Add Loyalty Coupons</h3>
                </div>
              </div>
              <div className='popup-body'>
                  <div className='form-main'>
                  <div className="mb-3 fv-row">
                    <label className="form-label">Amount off<i>*</i></label>
                    <input type="text" name="Date" value="" className="form-control" placeholder="Enter Amount Off" />
                </div>
                  <div className="mb-3 fv-row ">
                    <label className="form-label">Loyalty Point <i>*</i></label>
                    <input type="text" name="phone" value="" className="form-control" placeholder="Enter Loyalty Point" />
                </div>
                <div className="mb-3 fv-row ">
                    <label className="form-label">Status <i>*</i></label>
                    <Select styles={customStyles} placeholder={'Select Status'} onChange={(e) => { setStatusType(e.value) }} options={StatusTypeoptions} />
                </div>
                <div className="d-flex justify-content-end mt-4">
                    <button type="button" className="btn btn-shadow btn-primary me-2">Save</button>
                <button type="button" className="btn btn-shadow btn-secondary" onClick={() => { setToggleAddLoyaltyCouponsModal(p=> !p) }}>Cancel</button></div>
                 </div>
                  </div>
              </div>
              
          </div>
        </div>
        <div className="overlay" onClick={() => { setToggleAddLoyaltyCouponsModal(p=> !p) }}></div>
      </div>
    </>
  )
}




export default AddLoyaltyCouponForm
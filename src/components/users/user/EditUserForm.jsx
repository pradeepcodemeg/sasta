import React, { useState } from 'react'
import Select from 'react-select'
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

function EditUserForm({ toggleEditUserModal, setToggleEditUserModal }) {
  console.log(toggleEditUserModal);

  const [value, setValue] = useState(null);

  const [usertype, setUserType] = useState(null) 

  const UserTypeoptions = [
    { value: 'Individual', label: 'Individual' },
    { value: 'Business', label: 'Business' },
  ];
  return (
    <>
      <div className={`main-popup adduser-popup ${toggleEditUserModal ? 'pop-open' : 'pop-close'}`}>
        <div className="lm-outer">
          <div className="lm-inner">
            <div className="popup-inner">
              <div className='popup-header'>
                <div className='popup-heading'>
                  <h3>Edit User</h3>
                </div>
              </div>
              <div className='popup-body'>
                  <div className='form-main'>
                  <div className="mb-3 fv-row">
                    <label className="form-label">Full Name <i>*</i></label>
                    <input type="text" name="Date" value="" className="form-control" placeholder="Enter Full Name" />
                </div>
                  <div className="mb-3 fv-row ">
                    <label className="form-label">Phone Number <i>*</i></label>
                    <input type="text" name="phone" value="" className="form-control" placeholder="Enter Phone Number" />
                </div>
                <div className="mb-3 fv-row ">
                    <label className="form-label">Email <i>*</i></label>
                    <input type="email" name="email" value="" className="form-control" placeholder="Enter Email Address" />
                </div>
                <div className="mb-3 fv-row ">
                    <label className="form-label">Address <i>*</i></label>
                    <textarea className="form-control" rows="1" name="address" placeholder="Enter Your Address"></textarea>
                </div>
                <div className="mb-3 fv-row">
                <label className="form-label">Select User Type <i>*</i></label>
                <div className='slectbx-singel'>
                  <Select styles={customStyles} placeholder={'Select User Type'} onChange={(e) => { setUserType(e.value) }} options={UserTypeoptions} />
                </div>
              </div>
                <div className="d-flex justify-content-end mt-4">
                    <button type="button" className="btn btn-shadow btn-primary me-2">Save</button>
                <button type="button" className="btn btn-shadow btn-secondary" onClick={() => { setToggleEditUserModal(p=> !p) }}>Cancel</button></div>
                 </div>
                  </div>
              </div>
              
          </div>
        </div>
        <div className="overlay" onClick={() => { setToggleEditUserModal(p=> !p) }}></div>
      </div>
    </>
  )
}


export default EditUserForm
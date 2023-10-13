import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';

import Select from 'react-select'
import { addNewUser, clearAddUser } from '../../../store/slices/UsersSlice';

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


   function AddUserForm({ toggleUserModal, setToggleUserModal }) {
    

   const dispatch = useDispatch()

   const actions = useSelector(state=>state.users.addNewUser)

  const [newUserCredential,setNewUserCredential] = useState({
    action:'register_user',
    fullname:'',
    email:'',
    mobile:'',
    password:'',
    profile_pic:'',
  })

  const handleChange = (e) => {
    const {name,value} = e.target
    setNewUserCredential((p)=>({
      ...p,
      [name]:value,
    }))
  }
  const handleAddNewUserButton = (e) => {
    e.preventDefault()
    
    const formData = new FormData();
    for (const key in newUserCredential) {
    formData.append(key, newUserCredential[key]);
    }
    dispatch(addNewUser(formData))
  }

  useEffect(()=>{
    if(actions.success){
      console.log('correct')
    setToggleUserModal(p=>!p)
    dispatch(clearAddUser())
    setNewUserCredential({
      action:'register_user',
      fullname:'',
      email:'',
      mobile:'',
      password:'',
      profile_pic:'',
    })
    }
  },[actions.success])
  
  
  
  console.log(`===>>> success status ${actions.success}`)
  console.log(`===>>> success error ${actions.error}`)

  const [usertype, setUserType] = useState(null) 

  const UserTypeoptions = [
    { value: 'Individual', label: 'Individual' },
    { value: 'Business', label: 'Business' },
  ];
  return (
    <>
      <div className={`main-popup adduser-popup ${toggleUserModal ? 'pop-open' : 'pop-close'}`}>
        <div className="lm-outer">
          <div className="lm-inner">
            <div className="popup-inner">
              <div className='popup-header'>
                <div className='popup-heading'>
                  <h3>Add User</h3>
                </div>
              </div>
              <div className='popup-body'>
                  <div className='form-main'>
                  <div className="mb-3 fv-row">
                    <label className="form-label">Full Name <i>*</i></label>
                    <input type="text"  name='fullname' onChange={handleChange} value={newUserCredential.fullname} className="form-control" placeholder="Enter Full Name" />
                </div>
                  <div className="mb-3 fv-row ">
                    <label className="form-label">Phone Number <i>*</i></label>
                    <input type="number" name='mobile' onChange={handleChange} value={newUserCredential.mobile} className="form-control" placeholder="Enter Phone Number" />
                </div>
                <div className="mb-3 fv-row ">
                    <label className="form-label">Email <i>*</i></label>
                    <input type="email" name='email' onChange={handleChange} value={newUserCredential.email} className="form-control" placeholder="Enter Email Address" />
                </div>
                <div className="mb-3 fv-row ">
                    <label className="form-label">Password <i>*</i></label>
                    <input className="form-control" name='password' onChange={handleChange} value={newUserCredential.password} rows="1" placeholder="Enter Password"></input>
                </div>
              {/* <div className="mb-3 fv-row">
                <label className="form-label">Select User Type <i>*</i></label>
                <div className='slectbx-singel'>
                  <Select styles={customStyles} placeholder={'Select User Type'} onChange={(e) => { setUserType(e.value) }} options={UserTypeoptions} />
                </div>
              </div> */}
              <p>{actions.error}</p>
                <div className="d-flex justify-content-end mt-4">
                    <button onClick={handleAddNewUserButton} type="button" className="btn btn-shadow btn-primary me-2">Save</button>
                <button type="button" className="btn btn-shadow btn-secondary" onClick={() => { setToggleUserModal(p=> !p) }}>Cancel</button></div>
                 </div>
                  </div>
              </div>
              
          </div>
        </div>
        <div className="overlay" onClick={() => { setToggleUserModal(p=> !p) }}></div>
      </div>
    </>
  )
}

export default AddUserForm
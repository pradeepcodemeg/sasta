import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';

function  EditCreditForm({ toggleEditCreditModal, setToggleEditCreditModal }) {

  const { pending, user, error } = useSelector((state) => state.users.editUser);

  // Initialize userCredential with null
  const [userCredential, setUserCredentials] = useState(null);

  // Use a useEffect to set userCredential when user data is available
  useEffect(() => {
    if (user && toggleEditCreditModal) {
      setToggleEditCreditModal(true)
      setUserCredentials(user[0]);
    }
  }, [user]);

  // Use another useEffect to toggle the form when userCredential is available
  useEffect(() => {
    if (userCredential && toggleEditCreditModal) {
      setToggleEditCreditModal(true);
    } else {
      setToggleEditCreditModal(false);
    }
  }, [userCredential]);

  const handleChange = () => {
    const {name,value} = e.target
    setUserCredentials((p)=>({
      ...p,
      [name]:value
    }))
  }
  return (
    <>
      <div className={`main-popup categry-popup ${toggleEditCreditModal ? 'pop-open' : 'pop-close'}`}>
        <div className="lm-outer">
          <div className="lm-inner">
            <div className="popup-inner">
              <div className='popup-header'>
                <div className='popup-heading'>
                  <h3>Due Balance: <span className='dueblnc'>Rs.20000</span></h3>
                </div>
              </div>
              <div className='popup-body'>
                  <div className='form-main'>
                <div className="mb-3 fv-row">
                    <input type="text" onChange={handleChange} name='credit_balance' 
                      value={userCredential ? userCredential.credit_balance : ''}className="form-control" placeholder="Enter amount here" />
                </div>
                <div className="d-flex justify-content-end mt-4">
                <button type="button" className="btn btn-shadow btn-secondary me-2" onClick={() => { setToggleEditCreditModal(p=> !p) }}>Cancel</button>
                <button type="button" className="btn btn-shadow btn-primary" onClick={() => { setToggleEditCreditModal(p=> !p) }}>Received</button>
                </div>
                 </div>
                  </div>
              </div>
              
          </div>
        </div>
        <div className="overlay" onClick={() => { setToggleEditCreditModal(p=> !p) }}></div>
      </div>
    </>
  )
}

export default EditCreditForm
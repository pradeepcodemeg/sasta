import React from 'react'

function AddCreditForm({ toggleAddCreditModal, setToggleAddCreditModal }) {

  return (
    <>
      <div className={`main-popup categry-popup ${toggleAddCreditModal ? 'pop-open' : 'pop-close'}`}>
        <div className="lm-outer">
          <div className="lm-inner">
            <div className="popup-inner">
              <div className='popup-header'>
                <div className='popup-heading'>
                  <h3>Add Credit</h3>
                </div>
              </div>
              <div className='popup-body'>
                  <div className='form-main'>
                  <div className="mb-3 fv-row">
                    <label className="form-label">User Id/Name <i>*</i></label>
                    <input type="text" name="Date" value="" className="form-control" placeholder="Enter User Id/Name" />
                </div>
                <div className="mb-3 fv-row">
                    <label className="form-label">Credit Points <i>*</i></label>
                    <input type="text" name="Date" value="" className="form-control" placeholder="Enter Credit Points" />
                </div>
                <div className="d-flex justify-content-end mt-4">
                    <button type="button" className="btn btn-shadow btn-primary me-2">Save</button>
                <button type="button" className="btn btn-shadow btn-secondary" onClick={() => { setToggleAddCreditModal(p=> !p) }}>Cancel</button></div>
                 </div>
                  </div>
              </div>
              
          </div>
        </div>
        <div className="overlay" onClick={() => { setToggleAddCreditModal(p=> !p) }}></div>
      </div>
    </>
  )
}


export default AddCreditForm
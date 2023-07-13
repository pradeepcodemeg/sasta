import React from 'react'

export const OrderRejectionForm = ({newStatus,setNewStatus}) => {
    console.log(newStatus)
  return (
    <>
      <div className={`main-popup adduser-popup ${newStatus === 'Rejected' ? 'pop-open' : 'pop-close'}`}>
        <div className="lm-outer">
          <div className="lm-inner">
            <div className="popup-inner">
              <div className='popup-header'>
                <div className='popup-heading'>
                  <h3>Add/Update Rejection Note</h3>
                </div>
              </div>
              <div className='popup-body'>
                  <div className='form-main'>
                <div className="mb-3 fv-row ">
                    <label className="form-label">Add/Update Order Rejection Note <i>*</i></label>
                    <textarea className="form-control" rows="1" name="address" placeholder="Enter Your Address"></textarea>
                </div>
                <div className="d-flex justify-content-end mt-4">
                    <button type="button" className="btn btn-shadow btn-primary me-2">Save</button>
                <button type="button" className="btn btn-shadow btn-secondary" onClick={() => { setNewStatus(p=> !p) }}>Cancel</button></div>
                 </div>
                  </div>
              </div>
              
          </div>
        </div>
        <div className="overlay" onClick={() => { settoggelRejectionModal(p=> !p) }}></div>
      </div>
    </>
  )
}

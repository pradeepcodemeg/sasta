import React from 'react'


const UpdateProfileForm = () => {
  return (
    <>
      <div className='main-form'>
        <div className='prdt-inr'>
          <div className="form-heading">
            <h3>Profile Update</h3>
          </div>
          <div className='row'>
            <div className='col-md-6'>
              <div className="mb-3 fv-row">
                <label className="form-label">Name</label>
                <input type="text" name="name" className="form-control" placeholder="Enter your name" />
              </div>
            </div>
            <div className='col-md-6'>
              <div className="mb-3 fv-row">
                <label className="form-label">Email</label>
                <input type="email" name="email" className="form-control" placeholder="Enter your email" />
              </div>
            </div>
            <div className='col-md-6'>
              <div className="mb-3 fv-row">
                <label className="form-label">Phone</label>
                <input type="tel" name="phone" className="form-control" placeholder="Enter your phone" />
              </div>
            </div>
            <div className='col-md-6'>
              <div className="mb-3 fv-row">
                <label className="form-label">Password</label>
                <input type="password" name="password" className="form-control" placeholder="********" />
              </div>
            </div>
          </div>
        </div>
        <div className="d-flex justify-content-end mt-3 mb-3">
          <button type="button" className="btn btn-shadow btn-secondary me-2">Cancel</button>
          <button type="button" className="btn btn-shadow btn-primary">Update</button>
        </div>
      </div>
    </>
  )
}



export default UpdateProfileForm





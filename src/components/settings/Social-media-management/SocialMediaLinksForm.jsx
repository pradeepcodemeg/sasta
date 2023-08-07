import React from 'react'

const SocialMediaLinksForm = () => {
  return (
    <>
    <div className='main-form'>
        <div className='prdt-inr'>
          <div className="form-heading">
            <h3>Banner Description</h3>
          </div>
          <div className='row'>
            <div className='col-md-6'>
              <div className="mb-3 fv-row">
                <label className="form-label">Store's Facebook Link <i>*</i></label>
                <input type="text" name="name" className="form-control" placeholder="Enter Store's Facebook Link" />
              </div>
            </div>
            <div className='col-md-6'>
              <div className="mb-3 fv-row">
                <label className="form-label">Store's Twitter Link <i>*</i></label>
                <input type="text" name="name" className="form-control" placeholder="Enter Store's Twitter Link" />
              </div>
            </div>
            <div className='col-md-6'>
              <div className="mb-3 fv-row">
                <label className="form-label">Store's Instagram Link <i>*</i></label>
                <input type="text" name="name" className="form-control" placeholder="Enter Store's Instagram Link" />
              </div>
            </div>
            <div className='col-md-6'>
              <div className="mb-3 fv-row">
                <label className="form-label">Store's Linkedin Link <i>*</i></label>
                <input type="text" name="name" className="form-control" placeholder="Enter Store's Linkedin Link" />
              </div>
            </div>
            <div className='col-md-6'>
              <div className="mb-3 fv-row">
                <label className="form-label">Store's Youtube Link <i>*</i></label>
                <input type="text" name="name" className="form-control" placeholder="Enter Store's Youtube Link" />
              </div>
            </div>
           
          

          </div>
        </div>


       

        <div className="d-flex justify-content-end mt-3 mb-3">
          <button type="button" className="btn btn-shadow btn-secondary me-2">Cancel</button>
          <button type="button" className="btn btn-shadow btn-primary">Save</button>
        </div>
      </div>
    </>
  )
}

export default SocialMediaLinksForm
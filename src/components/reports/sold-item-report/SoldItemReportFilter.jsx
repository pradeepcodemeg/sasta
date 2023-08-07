import React from 'react'

const SoldItemReportFilter = () => {
  return (
    <>
     <div className="card">
                <div className='filter-header'>
                  <div className='filter-title'>
                    <h3>Filter</h3>
                  </div>
                </div>
                <div className="card-body">
                 <div className='row'>
                 <div className="mb-3 fv-row fv-plugins-icon-container">
                    <label className="required form-label">Product Id</label>
                    <input type="text" name="Date" value="" className="form-control" placeholder="Search by product id" />
                  </div>
                 <div className="mb-3 fv-row fv-plugins-icon-container">
                    <label className="form-label">Product Name</label>
                    <input type="text" name="Date" value="" className="form-control" placeholder="Search by product name" />
                </div>
                <div className="mb-3 fv-row fv-plugins-icon-container">
                    <label className="form-label">Form Date</label>
                    <input type="text" name="Date" value="" className="form-control" placeholder="DD/MM/YYYY" />
                </div>
                <div className="mb-3 fv-row fv-plugins-icon-container">
                    <label className="form-label">To Date</label>
                    <input type="text" name="Date" value="" className="form-control" placeholder="DD/MM/YYYY" />
                </div>
                <div className="d-flex justify-content-end mt-2">
                    <button type="button" className="btn btn-shadow btn-primary me-2">Filter</button>
                <button type="button" className="btn btn-shadow btn-secondary">Reset</button></div>
                 </div>
                </div>
              </div>
    </>
  )
}

export default SoldItemReportFilter
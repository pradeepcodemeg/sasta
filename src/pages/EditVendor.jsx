import React from 'react'
import Breadcrumb from '../components/common/breadcrumb/Breadcrumb'
import EditVendorForm from '../components/vendors/vendor/EditVendorForm'

const EditVendor = () => {
  return (
    <>
    <main>
    <Breadcrumb data={"edit-vendor"}/>
    <div className="page-content">
    <div className="card">
    <div className="card-body">
   <EditVendorForm />
       </div>
       </div>
       </div>
    </main>
    </>
  )
}


export default EditVendor
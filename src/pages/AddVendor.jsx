import React from 'react'
import Breadcrumb from '../components/common/breadcrumb/Breadcrumb'
import AddvendorForm from '../components/vendors/vendor/AddvendorForm'

const AddVendor = () => {
  return (
    <>
    <main>
    <Breadcrumb data={"add-vendor"}/>
    <div className="page-content">
    <div className="card">
    <div className="card-body">
      <AddvendorForm />
       </div>
       </div>
       </div>
    </main>
    </>
  )
}

export default AddVendor
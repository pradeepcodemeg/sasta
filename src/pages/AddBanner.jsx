import React from 'react'
import Breadcrumb from '../components/common/breadcrumb/Breadcrumb'
import AddBannerForm from '../components/content-management/banner/AddBannerForm'

const AddBanner = () => {
  return (
    <>
    <main>
    <Breadcrumb data={"add-banner"}/>
    <div className="page-content">
    <div className="card">
    <div className="card-body">
       <AddBannerForm />
       </div>
       </div>
       </div>
    </main>
    </>
  )
}

export default AddBanner
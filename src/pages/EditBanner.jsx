import React from 'react'
import Breadcrumb from '../components/common/breadcrumb/Breadcrumb'
import EditBannerForm from '../components/content-management/banner/EditBannerForm'

const EditBanner = () => {
  return (
    <>
    <main>
    <Breadcrumb data={"edit-banner"}/>
    <div className="page-content">
    <div className="card">
    <div className="card-body">
       <EditBannerForm />
       </div>
       </div>
       </div>
    </main>
    </>
  )
}

export default EditBanner
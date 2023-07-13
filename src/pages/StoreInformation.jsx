import React from 'react'
import Breadcrumb from '../components/common/breadcrumb/Breadcrumb'
import StoreInformationForm from '../components/settings/store-information/StoreInformationForm'

const StoreInformation = () => {
  return (
    <>
    <main>
    <Breadcrumb data={"store-information"}/>
    <div className="page-content">
    <div className="card">
    <div className="card-body">
     <StoreInformationForm />
       </div>
       </div>
       </div>
    </main>
    </>
  )
}

export default StoreInformation
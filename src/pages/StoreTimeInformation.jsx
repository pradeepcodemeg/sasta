import React from 'react'
import Breadcrumb from '../components/common/breadcrumb/Breadcrumb'
import StoreTimeInformationForm from '../components/settings/store-time-information/StoreTimeInformationForm'

const StoreTimeInformation = () => {
  return (
    <>
    <main>
    <Breadcrumb data={"store-time-information"}/>
    <div className="page-content">
    <StoreTimeInformationForm />
       </div>
    </main>
    </>
  )
}

export default StoreTimeInformation
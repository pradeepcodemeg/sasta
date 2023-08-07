import React from 'react'
import Breadcrumb from '../components/common/breadcrumb/Breadcrumb'
import OnlinePaymentStoreForm from '../components/settings/online-payment-store/OnlinePaymentStoreForm'
const  OnlinePyamentStore = () => {
  return (
    <>
    <main>
    <Breadcrumb data={"online-payment-store"}/>
    <div className="page-content">
   <OnlinePaymentStoreForm />
       </div>
    </main>
    </>
  )
}

export default OnlinePyamentStore
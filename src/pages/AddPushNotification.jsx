import React from 'react'
import Breadcrumb from '../components/common/breadcrumb/Breadcrumb'
import PushNotificationForm from '../components/marketing-promotion/alert-message/PushNotificationForm'

const AddPushNotification = () => {
  return (
    <>
    <main>
    <Breadcrumb data={"add-discount-coupon"}/>
    <div className="page-content">
    <div className="card">
    <div className="card-body">
      <PushNotificationForm />
       </div>
       </div>
       </div>
    </main>
    </>
  )
}

export default AddPushNotification
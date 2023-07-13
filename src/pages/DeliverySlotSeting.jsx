import React from 'react'
import Breadcrumb from '../components/common/breadcrumb/Breadcrumb'
import DeliverySlotForm from '../components/settings/delivery-slot-settings/DeliverySlotForm'

const DeliverySlotSeting = () => {
  return (
    <>
    <main>
    <Breadcrumb data={"delivery-slot-setings"}/>
    <div className="page-content">
    <DeliverySlotForm />
       </div>
    </main>
    </>
  )
}


export default DeliverySlotSeting
import React from 'react'
import Breadcrumb from '../components/common/breadcrumb/Breadcrumb'
import EditCouponForm from '../components/marketing-promotion/coupon/EditCouponForm'

const EditDiscountCoupon = () => {
  return (
    <>
    <main>
    <Breadcrumb data={"add-discount-coupon"}/>
    <div className="page-content">
    <div className="card">
    <div className="card-body">
       <EditCouponForm />
       </div>
       </div>
       </div>
    </main>
    </>
  )
}
export default EditDiscountCoupon
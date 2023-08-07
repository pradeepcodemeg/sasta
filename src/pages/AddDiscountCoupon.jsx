import React from 'react'
import Breadcrumb from '../components/common/breadcrumb/Breadcrumb'
import AddCouponForm from '../components/marketing-promotion/coupon/AddCouponForm'

const AddDiscountCoupon = () => {
  return (
    <>
    <main>
    <Breadcrumb data={"add-discount-coupon"}/>
    <div className="page-content">
    <div className="card">
    <div className="card-body">
      <AddCouponForm />
       </div>
       </div>
       </div>
    </main>
    </>
  )
}


export default AddDiscountCoupon
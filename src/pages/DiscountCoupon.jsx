import React from 'react'
import DiscountCouponTable from '../components/marketing-promotion/coupon/DiscountCouponTable'
import Breadcrumb from '../components/common/breadcrumb/Breadcrumb'

const DiscountCoupon = () => {
  return (
    <>
    <main>
   <Breadcrumb  data={"discount-coupon"}/>
     <div className="page-content">
     <div className="card">
     <div className="card-body">
        <DiscountCouponTable />
         </div>
         </div>
       </div>
       </main>
   
   </>
  )
}

export default DiscountCoupon
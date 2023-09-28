import React from 'react'
import DiscountCouponTable from '../components/marketing-promotion/coupon/DiscountCouponTable'
import Breadcrumb from '../components/common/breadcrumb/Breadcrumb'
import Pagination from '../components/pagination/Pagination'

const DiscountCoupon = () => {
  return (
    <>
    <main>
   <Breadcrumb  data={"discount-coupon"}/>
     <div className="page-content">
     <div className="card">
     <div className="card-body">
        <DiscountCouponTable />
        <Pagination />
         </div>
         </div>
       </div>
       </main>
   
   </>
  )
}

export default DiscountCoupon
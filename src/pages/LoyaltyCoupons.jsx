import React from 'react'
import Breadcrumb from '../components/common/breadcrumb/Breadcrumb'
import LoyaltyCouponTable from '../components/loyalty-program/loyalty-coupons/LoyaltyCouponTable'
import Pagination from '../components/pagination/Pagination'

const  LoyaltyCoupons = () => {
  return (
    <>
     <main>
    <Breadcrumb  data={"loyalty-coupons"}/>
      <div className="page-content">
      <div className="card">
      <div className="card-body">
         <LoyaltyCouponTable />
         <Pagination />
          </div>
          </div>
        </div>
        </main>
    
    </>
  )
}


export default LoyaltyCoupons
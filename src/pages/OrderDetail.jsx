import React from 'react'
import Breadcrumb from '../components/common/breadcrumb/Breadcrumb'
import UserInformation from '../components/orders/order-detail/UserInformation'
import OrderInformation from '../components/orders/order-detail/OrderInformation'
import OrderedTableList from '../components/orders/order-detail/OrderedTableList'
import ChargeBreakdown from '../components/orders/order-detail/ChargeBreakdown'
import Pagination from '../components/pagination/Pagination'


const OrderDetail = () => {
  return (
    <main>
    <Breadcrumb  data={"homepage"}/>
      <div className="page-content">
     <div className='row'>
        <div className='col-md-6'>
            <UserInformation />
        </div>
        <div className='col-md-6'>
          <OrderInformation />
            </div>
     </div>
     <div className='row mt-3'>
        <div className='col-md-12'>
        <div className="card">
		<div className="card-body">
           <OrderedTableList />
           <Pagination />
        </div>
        </div>
        </div>
     </div>
     <div className='row mt-3'>
     <div className='col-md-12'>
         <ChargeBreakdown />
        </div>
     </div>
        </div>
        </main>
   
  )
}

export default OrderDetail
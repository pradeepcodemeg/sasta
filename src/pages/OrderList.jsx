import React from 'react'
import OrderListTable from '../components/orders/order-list/OrderListTable'
import Breadcrumb from '../components/common/breadcrumb/Breadcrumb'
import OrderFilter from '../components/orders/order-list/OrderFilter'

function OrderList() {
  return (
    <>
   
    <main>
    <Breadcrumb data={"orderlist"}/>
    <div className="page-content">
    <div className='row'>
    <div className='col-md-3'>
         <OrderFilter />
      </div>
                    <div className='col-md-9'>
    <div className="card">
    <div className="card-body">
       <OrderListTable/>
       </div>
       </div>
       </div>
       </div>
       </div>
    </main>
    </>
  )
}

export default OrderList
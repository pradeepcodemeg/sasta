import React from 'react'
import RefundOrderTable from '../components/orders/refund-order/RefundOrderTable'
import RefundTopCard from '../components/orders/refund-order/RefundTopCard'
import Breadcrumb from '../components/common/breadcrumb/Breadcrumb'
import RefundOrderFilter from '../components/orders/refund-order/RefundOrderFilter'


function RefundOrderList() {
  return (
    <>
   
      <main>
      <Breadcrumb data={"refund-order"}/>
        <div className="page-content">
          <div className='row'>
            <div className='col-md-3'>
             <RefundOrderFilter />
             <RefundTopCard />
            </div>
            <div className='col-md-9'>
              <div className="card">
                <div className="card-body">
                  <RefundOrderTable />
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  )
}

export default RefundOrderList
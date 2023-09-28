import React from 'react'
import Breadcrumb from '../components/common/breadcrumb/Breadcrumb'
import DailyOrderTable from '../components/reports/daily-order/DailyOrderTable'
import DailyOrderFilter from '../components/reports/daily-order/DailyOrderFilter'
import Pagination from '../components/pagination/Pagination'

const DailyOrder = () => {
  return (
    <>
       <main>
    <Breadcrumb  data={"daily-order "}/>
      <div className="page-content">
      <div className='row'>
      <div className='col-md-3'>
         <DailyOrderFilter />
        </div>
        <div className='col-md-9'>
        <div className="card">
      <div className="card-body">
        <DailyOrderTable />
        <Pagination />
        </div>
        </div>
        </div>
      </div>
        </div>
        </main>
  
    </>
  )
}

export default DailyOrder
import React from 'react'
import SoldItemReportTable from '../components/reports/sold-item-report/SoldItemReportTable'
import Breadcrumb from '../components/common/breadcrumb/Breadcrumb'
import SoldItemReportFilter from '../components/reports/sold-item-report/SoldItemReportFilter'
import Pagination from '../components/pagination/Pagination'

const SoldItemReport = () => {
  return (
    <>
       <main>
    <Breadcrumb  data={"sold-item-report"}/>
      <div className="page-content">
      <div className='row'>
      <div className='col-md-3'>
         <SoldItemReportFilter />
        </div>
        <div className='col-md-9'>
        <div className="card">
      <div className="card-body">
      <SoldItemReportTable />
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

export default SoldItemReport
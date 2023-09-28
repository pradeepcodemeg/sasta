import React from 'react'
import Breadcrumb from '../components/common/breadcrumb/Breadcrumb'
import RunnerTable from '../components/runner-management/RunnerTable'
import Pagination from '../components/pagination/Pagination'

const  RunnerManagement = () => {
  return (
    <>
     <main>
    <Breadcrumb  data={"loyalty-coupons"}/>
      <div className="page-content">
      <div className="card">
      <div className="card-body">
        <RunnerTable />
        <Pagination />
          </div>
          </div>
        </div>
        </main>
    
    </>
  )
}

export default RunnerManagement



import React from 'react'
import Breadcrumb from '../components/common/breadcrumb/Breadcrumb'
import Pagination from '../components/pagination/Pagination'
import CreditTable from '../components/financial/credit-points/CreditTable'
const CreditList = () => {
  return (
    <>
     <main>
    <Breadcrumb  data={"credit-points"}/>
      <div className="page-content">
      <div className="card">
      <div className="card-body">
        <CreditTable />
      <Pagination />
          </div>
          </div>
        </div>
        </main>
    
    </>
  )
}

export default CreditList
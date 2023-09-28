import React from 'react'
import Breadcrumb from '../components/common/breadcrumb/Breadcrumb'
import VendorTable from '../components/vendors/vendor/VendorTable'
import Pagination from '../components/pagination/Pagination'

const Vendor = () => {
  return (
    <>
   <main>
    <Breadcrumb />
    <div className="page-content">
      <div className="card">
      <div className="card-body">
       <VendorTable />
        <Pagination />
          </div>
          </div>
        </div>
   </main>
    </>
  )
}

export default Vendor
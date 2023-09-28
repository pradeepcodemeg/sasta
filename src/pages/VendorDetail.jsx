import React from 'react'
import Breadcrumb from '../components/common/breadcrumb/Breadcrumb'
import Pagination from '../components/pagination/Pagination'
import VendorOrderHistory from '../components/vendors/vendor-detail/VendorOrderHistory'
import VendorDetailFilter from '../components/vendors/vendor-detail/VendorDetailFilter'
import VendorDetailInformation from '../components/vendors/vendor-detail/VendorDetailInformation'

function VendorDetail() {
  return (
    <>
   
    <main>
    <Breadcrumb data={"vendor-detail"}/>
    <div className="page-content">
    <div className='row'>
    <div className='col-md-12'>
        <VendorDetailInformation />
        </div>
        </div>
        <div className='row mt-4'>
          <div className='col-md-3'>
            <VendorDetailFilter />
          </div>
                    <div className='col-md-9'>
    <div className="card">
    <div className="card-body">
    <VendorOrderHistory />
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


export default VendorDetail
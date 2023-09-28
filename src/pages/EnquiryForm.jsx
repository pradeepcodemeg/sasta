import React from 'react'
import Breadcrumb from '../components/common/breadcrumb/Breadcrumb'
import EnquiryTopCard from '../components/enquiry-form/EnquiryTopCard'
import EnquiryTable from '../components/enquiry-form/EnquiryTable'
import Pagination from '../components/pagination/Pagination'

const EnquiryForm = () => {
  return (
    <>
    <main>
   <Breadcrumb  data={"enquiry-form"}/>
     <div className="page-content">
     <div className='row'>
    <div className='col-md-12'>
         <EnquiryTopCard />
      </div>
                    <div className='col-md-12'>
     <div className="card mt-4">
     <div className="card-body">
        <EnquiryTable />
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

export default EnquiryForm
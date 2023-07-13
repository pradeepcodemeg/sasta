import React from 'react'
import Breadcrumb from '../components/common/breadcrumb/Breadcrumb'
import AddFaqForm from '../components/content-management/faq/AddFaqForm'

const AddFaq = () => {
  return (
    <>
    <main>
    <Breadcrumb data={"add-faq"}/>
    <div className="page-content">
    <div className="card">
    <div className="card-body">
       <AddFaqForm />
       </div>
       </div>
       </div>
    </main>
    </>
  )
}

export default AddFaq
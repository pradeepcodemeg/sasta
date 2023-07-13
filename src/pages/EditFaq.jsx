import React from 'react'
import Breadcrumb from '../components/common/breadcrumb/Breadcrumb'
import EditFaqForm from '../components/content-management/faq/EditFaqForm'

const EditFaq = () => {
  return (
    <>
    <main>
    <Breadcrumb data={"add-faq"}/>
    <div className="page-content">
    <div className="card">
    <div className="card-body">
      <EditFaqForm />
       </div>
       </div>
       </div>
    </main>
    </>
  )
}

export default EditFaq
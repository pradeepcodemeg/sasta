import React from 'react'
import Breadcrumb from '../components/common/breadcrumb/Breadcrumb'
import AddPageForm from '../components/content-management/page/AddPageForm'

const AddPage = () => {
  return (
    <>
    <main>
    <Breadcrumb data={"add-page"}/>
    <div className="page-content">
    <div className="card">
    <div className="card-body">
       <AddPageForm />
       </div>
       </div>
       </div>
    </main>
    </>
  )
}

export default AddPage
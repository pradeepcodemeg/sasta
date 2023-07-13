import React from 'react'
import Breadcrumb from '../components/common/breadcrumb/Breadcrumb'
import EditPageForm from '../components/content-management/page/EditPageForm'

const EditPage = () => {
  return (
    <>
    <main>
    <Breadcrumb data={"edit-page"}/>
    <div className="page-content">
    <div className="card">
    <div className="card-body">
       <EditPageForm />
       </div>
       </div>
       </div>
    </main>
    </>
  )
}
export default EditPage
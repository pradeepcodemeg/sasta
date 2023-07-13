import React from 'react'
import Breadcrumb from '../components/common/breadcrumb/Breadcrumb'
import EditRunnerForm from '../components/runner-management/EditRunnerForm'

const EditRunner = () => {
  return (
    <>
    <main>
    <Breadcrumb data={"edit-runner"}/>
    <div className="page-content">
    <div className="card">
    <div className="card-body">
       <EditRunnerForm />
       </div>
       </div>
       </div>
    </main>
    </>
  )
}
export default EditRunner
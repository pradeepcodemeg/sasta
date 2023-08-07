import React from 'react'
import Breadcrumb from '../components/common/breadcrumb/Breadcrumb'
import AddRunnerForm from '../components/runner-management/AddRunnerForm'

const AddRunner = () => {
  return (
    <>
    <main>
    <Breadcrumb data={"add-runner"}/>
    <div className="page-content">
    <div className="card">
    <div className="card-body">
       <AddRunnerForm />
       </div>
       </div>
       </div>
    </main>
    </>
  )
}

export default AddRunner
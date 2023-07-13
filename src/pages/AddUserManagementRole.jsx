import React from 'react'
import Breadcrumb from '../components/common/breadcrumb/Breadcrumb'
import AddUserRoleForm from '../components/user-management/AddUserRoleForm'

const  AddUserManagementRole = () => {
  return (
    <>
    <main>
    <Breadcrumb data={"add-user-management-role"}/>
    <div className="page-content">
    <div className="card">
    <div className="card-body">
     <AddUserRoleForm />
       </div>
       </div>
       </div>
    </main>
    </>
  )
}

export default AddUserManagementRole
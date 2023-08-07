import React from 'react'
import Breadcrumb from '../components/common/breadcrumb/Breadcrumb'
import EditUserRoleForm from '../components/user-management/EditUserRoleForm'

const  EditUserManagementRole = () => {
  return (
    <>
    <main>
    <Breadcrumb data={"edit-user-management-role"}/>
    <div className="page-content">
    <div className="card">
    <div className="card-body">
       <EditUserRoleForm />
       </div>
       </div>
       </div>
    </main>
    </>
  )
}

export default EditUserManagementRole
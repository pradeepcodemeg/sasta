import React from 'react'
import Breadcrumb from '../components/common/breadcrumb/Breadcrumb'
import UserManagementTable from '../components/user-management/UserManagementTable'

const  UserManagement = () => {
  return (
    <>
     <main>
    <Breadcrumb  data={"loyalty-coupons"}/>
      <div className="page-content">
      <div className="card">
      <div className="card-body">
        <UserManagementTable />
          </div>
          </div>
        </div>
        </main>
    
    </>
  )
}

export default UserManagement
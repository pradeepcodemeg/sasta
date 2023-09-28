import React from 'react'
import Breadcrumb from '../components/common/breadcrumb/Breadcrumb'
import UserManagementTable from '../components/user-management/UserManagementTable'
import Pagination from '../components/pagination/Pagination'

const  UserManagement = () => {
  return (
    <>
     <main>
    <Breadcrumb  data={"loyalty-coupons"}/>
      <div className="page-content">
      <div className="card">
      <div className="card-body">
        <UserManagementTable />
        <Pagination />
          </div>
          </div>
        </div>
        </main>
    
    </>
  )
}

export default UserManagement
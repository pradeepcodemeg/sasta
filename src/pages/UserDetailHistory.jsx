import React from 'react'
import Breadcrumb from '../components/common/breadcrumb/Breadcrumb'
import UserOrderHistoryTable from '../components/users/user-detail/UserOrderHistoryTable'
import UserDetailInformation from '../components/users/user-detail/UserDetailInformation'
import UserDetailFilter from '../components/users/user-detail/UserDetailFilter'
import Pagination from '../components/pagination/Pagination'

function UserDetailHistory() {
  return (
    <>
   
    <main>
    <Breadcrumb data={"user-detail"}/>
    <div className="page-content">
    <div className='row mt-4'>
    <div className='col-md-12'>
        <UserDetailInformation />
        </div>
        </div>
        <div className='row mt-4'>
          <div className='col-md-3'>
            <UserDetailFilter />
          </div>
                    <div className='col-md-9'>
    <div className="card">
    <div className="card-body">
    <UserOrderHistoryTable />
         <Pagination />
       </div>
       </div>
       </div>
       </div>
       </div>
    </main>
    </>
  )
}

export default UserDetailHistory
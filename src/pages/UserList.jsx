import React from 'react'
import UserTable from '../components/user/UserTable'
import Breadcrumb from '../components/common/breadcrumb/Breadcrumb'
import UserFilter from '../components/user/UserFilter'

function UserList() {
  return (
    <>
   
       <main>
       <Breadcrumb  data={"userList"}/>
      <div className="page-content">
      <div className='row'>
    <div className='col-md-3'>
         <UserFilter />
      </div>
                    <div className='col-md-9'>
      <div className="card">
      <div className="card-body">
         <UserTable/>
         </div>
         </div>
         </div>
         </div>
         </div>
         thsi is user test
      </main>
    </>
   
  )
}

export default UserList
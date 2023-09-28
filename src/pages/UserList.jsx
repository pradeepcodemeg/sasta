import React from 'react'
// import UserTable from '../components/users/user/UserTable'
import Breadcrumb from '../components/common/breadcrumb/Breadcrumb'
import UserFilter from '../components/users/user/UserFilter'
import UserTable from '../components/users/User/UserTable'
import Pagination from '../components/pagination/Pagination'

function UserList() {
  return (
    <>
   
       <main>
       <Breadcrumb  data={"userList"}/>
      <div className="page-content">
      <div className='row'>
    {/* <div className='col-md-3'>
         <UserFilter />
      </div> */}
                    <div className='col-md-12'>
      <div className="card">
      <div class="card-header">
        <div class="card-title mb-0">
            <div class="d-flex align-items-center position-relative catgry-cstmsrch">
            <label>
                <span class="svg-icon svg-icon-1 srchsvg-icon">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                        <rect opacity="0.5" x="17.0365" y="15.1223" width="8.15546" height="2" rx="1" transform="rotate(45 17.0365 15.1223)" fill="black"></rect>
                        <path d="M11 19C6.55556 19 3 15.4444 3 11C3 6.55556 6.55556 3 11 3C15.4444 3 19 6.55556 19 11C19 15.4444 15.4444 19 11 19ZM11 5C7.53333 5 5 7.53333 5 11C5 14.4667 7.53333 17 11 17C14.4667 17 17 14.4667 17 11C17 7.53333 14.4667 5 11 5Z" fill="black"></path>
                    </svg>
                </span>
                <input type="text" class="form-control w-250px" placeholder="Search by Name, Email, Phone" />
          </label>
            </div>
        </div>
      </div>
      <div className="card-body">
         <UserTable/>
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

export default UserList
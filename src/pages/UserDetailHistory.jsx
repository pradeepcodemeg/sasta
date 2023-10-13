import React, { useEffect } from 'react'
import Breadcrumb from '../components/common/breadcrumb/Breadcrumb'
import UserOrderHistoryTable from '../components/users/user-detail/UserOrderHistoryTable'
import UserDetailInformation from '../components/users/user-detail/UserDetailInformation'
import UserDetailFilter from '../components/users/user-detail/UserDetailFilter'
import Pagination from '../components/pagination/Pagination'
import { useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { getSingleUser } from '../store/slices/UsersSlice'

function UserDetailHistory() {
  const dispatch = useDispatch()
  const { userId } = useParams();
  useEffect(()=>{
    dispatch(getSingleUser(userId))
  },[])
  
  const { pending, user, error } = useSelector((state) => state.users.singleUser);
  const userD = user ? user[0] : {}
  
  return (
    <>
   
    <main>
    <Breadcrumb data={"user-detail"}/>
    <div className="page-content">
    <div className='row mt-4'>
    <div className='col-md-12'>
        <UserDetailInformation user={userD} />
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
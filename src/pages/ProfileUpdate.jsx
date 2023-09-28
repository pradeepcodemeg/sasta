import React from 'react'
import Breadcrumb from '../components/common/breadcrumb/Breadcrumb'
import UpdateProfileForm from '../components/profile-update/UpdateProfileForm'

const ProfileUpdate = () => {
  return (
    <>
    <main>
    <Breadcrumb data={"profile-update"}/>
    <div className="page-content">
    <div className="card">
    <div className="card-body">
      <UpdateProfileForm />
       </div>
       </div>
       </div>
    </main>
    </>
  )
}



export default ProfileUpdate
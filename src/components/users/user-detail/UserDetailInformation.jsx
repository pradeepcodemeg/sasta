import React, { useState } from 'react';
import EditCreditForm from '../../financial/credit-points/EditCreditForm'

const  UserDetailInformation = ({user}) => {
	const [toggleEditCreditModal, setToggleEditCreditModal] = useState(false)
	
  return (
    <>
    <div className="card h-100">
		<div className="userinfo-head">
			<h2>User Information</h2>
		</div>
		<div className="card-body pt-0">
			<div className="userdtl-card">
				<div className="brnd-vndrnmbr">
					<p>Name</p>
					<h4>{user.fullname}</h4>
				</div>
				<div className="brnd-vndrnmbr">
					<p>User Id</p>
					<h4>{user.id}</h4>
				</div>
				<div className="brnd-vndrnmbr">
					<p>User Type</p>
					<h4>{user.type}</h4>
				</div>
				<div className="brnd-vndrnmbr">
					<p>Credit Points</p>
					<h4>Rs.{user.credit_balance} <span className="paynow-btn" onClick={()=>{setToggleEditCreditModal(p=> !p)}}>Pay Now</span></h4>
				</div>
				<div className="brnd-vndrnmbr">
					<p>Email</p>
					<h4>{user.email ? user.email : 'N/A'}</h4>
				</div>
				<div className="brnd-vndrnmbr">
					<p>Mobile Number</p>
					<h4>{user.mobile ? user.mobile : 'N/A'}</h4>
				</div>
				<div className="brnd-vndrnmbr">
					<p>City</p>
					<h4>{user.address ? `${user.address.address_line1.slice(0,40)}` : 'N/A'}</h4>
				</div>
				<div className="brnd-vndrnmbr">
					<p>Area</p>
					<h4>{user.address ? user.address.city : 'N/A'}</h4>
				</div>
                <div className="brnd-vndrnmbr">
					<p>Address</p>
					<h4>{user.address ? `${user.address.address_line1}` : 'N/A'}</h4>
				</div>
			</div>
		</div>
	</div>
	<EditCreditForm toggleEditCreditModal={toggleEditCreditModal} setToggleEditCreditModal={setToggleEditCreditModal}/>
    </>
  )
}

export default  UserDetailInformation
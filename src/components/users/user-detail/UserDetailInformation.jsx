import React, { useState } from 'react';
import EditCreditForm from '../../financial/credit-points/EditCreditForm'

const  UserDetailInformation = () => {
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
					<h4>Rahul</h4>
				</div>
				<div className="brnd-vndrnmbr">
					<p>User Id</p>
					<h4>12458</h4>
				</div>
				<div className="brnd-vndrnmbr">
					<p>User Type</p>
					<h4>Business</h4>
				</div>
				<div className="brnd-vndrnmbr">
					<p>Credit Points</p>
					<h4>Rs.20000 <span className="paynow-btn" onClick={()=>{setToggleEditCreditModal(p=> !p)}}>Pay Now</span></h4>
				</div>
				<div className="brnd-vndrnmbr">
					<p>Email</p>
					<h4>rahul@gmai9l.com</h4>
				</div>
				<div className="brnd-vndrnmbr">
					<p>Mobile Number</p>
					<h4>9200380648</h4>
				</div>
				<div className="brnd-vndrnmbr">
					<p>City</p>
					<h4>12/06/2023</h4>
				</div>
				<div className="brnd-vndrnmbr">
					<p>Area</p>
					<h4>Pune</h4>
				</div>
                <div className="brnd-vndrnmbr">
					<p>Address</p>
					<h4>Pune</h4>
				</div>
			</div>
		</div>
	</div>
	<EditCreditForm toggleEditCreditModal={toggleEditCreditModal} setToggleEditCreditModal={setToggleEditCreditModal}/>
    </>
  )
}

export default  UserDetailInformation
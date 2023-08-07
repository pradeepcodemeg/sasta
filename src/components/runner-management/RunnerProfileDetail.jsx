import React from 'react'
import logo from "../../assets/images/logo-lg.png"

const RunnerProfileDetail = () => {
  return (
    <>
       <div className="card h-100">
		<div className="userinfo-head">
			<h2>Runner Information</h2>
		</div>
		<div className="card-body pt-0">
            <div className='runer-main'>
            <div className='runnerprfl-image'>
                <span style={{backgroundImage: `url(${logo})`}}></span>

            </div>
			<div className="userdtl-card">
				<div className="brnd-vndrnmbr">
					<p>Name</p>
					<h4>Rahul</h4>
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
					<p>Registration Date</p>
					<h4>12/06/2023</h4>
				</div>
				<div className="brnd-vndrnmbr">
					<p>Area</p>
					<h4>Pune</h4>
				</div>
                <div className="brnd-vndrnmbr">
					<p>Status</p>
					<h4>Active</h4>
				</div>
			</div>
            </div>
		</div>
	</div>
    </>
  )
}

export default RunnerProfileDetail
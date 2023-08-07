import React from 'react'

const OrderInformation = () => {
  return (
    <>
<div className="card h-100">
			<div className="userinfo-head">
				<h2>Order Information:</h2>
			</div>
			<div className="card-body pt-0">
				<div className="ordrsmry-flx">
					<div className="ordrsmry-inner">
						<div className="userdtl-card">
							<div className="brnd-vndrnmbr">
								<p>Delivery Time</p>
								<h4>N/A</h4>
							</div>
							<div className="brnd-vndrnmbr">
								<p>Order Type</p>
								<h4 className="gglmp-dlvrypointr">Delivery</h4>
							</div>
							<div className="brnd-vndrnmbr">
								<p>Note</p>
								<h4>--</h4>
							</div>
							<div className="brnd-vndrnmbr">
								<p>Payment Option</p>
								<h4>COD</h4>
							</div>
							<div className="brnd-vndrnmbr">
								<p>Refund Amount</p>
								<h4 >₹0.00</h4>
							</div>
							<div className="brnd-vndrnmbr">
								<p>Carts Saving</p>
								<h4>₹0.00</h4>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
    </>
  )
}

export default OrderInformation
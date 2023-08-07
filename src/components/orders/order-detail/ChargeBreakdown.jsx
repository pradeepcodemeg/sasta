import React from 'react'

const ChargeBreakdown = () => {
  return (
    <>
 <div className="card">
                <div className="card-body">
                    <div className="total-billing">
                        <div className="d-fl">
                            <div className="d-flex">
                                <h4 className="m-0 me-2 text-muted fs-6">(-)Discount:</h4>
                                <h4 className="m-0 fs-6">₹0.00</h4>
                            </div>
                            <div className="d-flex mt-2">
                                <h4 className="m-0 fs-6 me-2 text-muted">(+)Shipping Charge:</h4>
                                <h4 className="m-0 fs-6">₹0.00</h4>
                            </div>
                        </div>
                        <div className="d-fl">
                            <div className="d-flex">
                                <h4 className="m-0 me-2 text-muted fs-6">Checkout:</h4>
                                <h4 className="m-0 fs-6">₹1281.00</h4>
                            </div>
                            <div className="d-flex mt-2">
                                <h4 className="m-0 me-2 fs-6 text-muted">Total Amount:</h4>
                                <h4 className="m-0 fs-6">₹1281.00</h4></div>
                        </div>
                    </div>
                </div>
            </div>
    </>
  )
}

export default ChargeBreakdown
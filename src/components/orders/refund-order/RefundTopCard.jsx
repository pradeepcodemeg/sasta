import React from 'react'

function RefundTopCard() {
  return (
    <>
    {/* <div className='rfundtop-card'> */}
      <div className="row">
    <div className="col-md-3">
        <div className="card mb-15">
            <div className="card-body dashcrd-bdy">
                <div className="erning-flx">
                    <div className="">
                    <h4 className="mb-2">₹4,152</h4>
                    <p className="">TOTAL REFUNDS</p>
                    </div>
                    <div className="chart-crd">
                    <span></span>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div className="col-md-3">
        <div className="card mb-15">
            <div className="card-body dashcrd-bdy">
            <div className="erning-flx">
                    <div className="">
                    <h4 className="mb-2">₹3,152</h4>
                    <p className="">Refunded</p>
                    </div>
                    <div className="chart-crd">
                    <span></span>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div className="col-md-3">
        <div className="card mb-15">
            <div className="card-body dashcrd-bdy">
            <div className="erning-flx">
                    <div className="">
                    <h4 className="mb-2">₹1000</h4>
                    <p className="">Pending</p>
                    </div>
                    <div className="chart-crd">
                    <span></span>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
{/* </div> */}
    </>
  )
}

export default RefundTopCard
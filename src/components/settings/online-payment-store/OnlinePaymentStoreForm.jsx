import React from 'react'

const OnlinePaymentStoreForm = () => {
    return (
        <>
            <div className='row'>
            <div className='col-md-12'>
                    <div className="card">
                        <div className="card-body">
                            <div className='main-form'>
                                <div className='prdt-inr'>
                                    <div className="form-heading flxfrm-hdng">
                                        <h3>Active Online Payment</h3>
                                        <div className="svcrd-togl">
                                        <div className="tgl-sld">
                                            <label>
                                                <input type="checkbox"  />
                                                <span>
                                                    <i></i>
                                                </span>
                                            </label>
                                        </div>
                                    </div>
                                    </div>
                                    </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='col-md-12'>
                    <div className="card mt-3">
                        <div className="card-body">
                            <div className='main-form'>
                                <div className='prdt-inr'>
                                    <div className="form-heading">
                                        <h3>Razorpay Details</h3>
                                    </div>
                                    <div className='row'>
                                        <div className='col-md-4'>
                                            <div className="mb-3 fv-row">
                                                <label className="form-label">Key Id<i>*</i></label>
                                                <input type="text" name="Date" className="form-control" placeholder="Enter Key Id" />
                                            </div>
                                        </div>
                                        <div className='col-md-4'>
                                            <div className="mb-3 fv-row">
                                                <label className="form-label">Secret Key <i>*</i></label>
                                                <input type="text" name="Date" className="form-control" placeholder="Enter Secret Key" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='col-md-12'>
                    <div className="card mt-3">
                        <div className="card-body">
                            <div className='main-form'>
                                <div className='prdt-inr'>
                                    <div className="form-heading">
                                        <h3>Paytm Details</h3>
                                    </div>
                                    <div className='row'>
                                        <div className='col-md-4'>
                                            <div className="mb-3 fv-row">
                                                <label className="form-label">Merchant Id<i>*</i></label>
                                                <input type="text" name="Date" className="form-control" placeholder="Enter Merchant Id" />
                                            </div>
                                        </div>
                                        <div className='col-md-4'>
                                            <div className="mb-3 fv-row">
                                                <label className="form-label">Secret Key <i>*</i></label>
                                                <input type="text" name="Date" className="form-control" placeholder="Enter Secret Key" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='col-md-12'>
                    <div className="card mt-3">
                        <div className="card-body">
                            <div className='main-form'>
                            <div className="d-flex justify-content-end mt-3 mb-3">
                    <button type="button" className="btn btn-shadow btn-secondary me-2">Cancel</button>
                    <button type="button" className="btn btn-shadow btn-primary">Save</button>
                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default OnlinePaymentStoreForm
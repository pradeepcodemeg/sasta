import React from 'react'

const AddDeliveryAddressForm = () => {

    return (
        <>
            <div className='main-form'>
                <div className='prdt-inr'>
                    <div className="form-heading">
                        <h3>Delivery Address Details</h3>
                    </div>
                    <div className='row'>
                        <div className='col-md-6'>
                            <div className="mb-3 fv-row">
                                <label className="form-label">Zone <i>*</i></label>
                                <input type="text" name="Date" className="form-control" placeholder="Enter Zone" />
                            </div>
                        </div>
                        <div className='col-md-6'>
                            <div className="mb-3 fv-row">
                                <label className="form-label">Delivery Area Name <i>*</i></label>
                                <input type="text" name="Date" className="form-control" placeholder="Enter Delivery Area Name" />
                            </div>
                        </div>
                        <div className='col-md-6'>
                            <div className="mb-3 fv-row">
                                <label className="form-label">Minimum Order Amount <i>*</i></label>
                                <input type="text" name="Date" className="form-control" placeholder="Enter Minimum Order Amount" />
                            </div>
                        </div>

                        <div className='col-md-6'>
                            <div className="mb-3 fv-row">
                                <label className="form-label">Shipping Fee <i>*</i></label>
                                <input type="text" name="Date" className="form-control" placeholder="Enter Shipping Fee" />
                            </div>
                        </div>
                        <div className='col-md-12'>
                            <div className="mb-3 fv-row">
                                <label className="form-label">Additional note <i>*</i></label>
                                <textarea class="form-control" rows="4" name="address" placeholder="Enter Note Here..."></textarea>
                            </div>
                        </div>
                        <div className='col-md-12'>
                            <div className="mb-3 fv-row">
                                <div className="dlvry-chk">
                                <div className="cstmall-chkmain">
                                                <div className="slect-allchk">
                                                    <label>
                                                        <input type="checkbox" />
                                                        <span></span>
                                                    </label>
                                                </div>
                                                <p>Do not allow customers to place order below min order amount </p>
                                            </div>
                                </div>
                            </div>
                        </div>
                        <div className='col-md-12'>
                            <div className="mb-3 fv-row">
                            <div className="dlvry-chk">
                                            <div className="cstmall-chkmain">
                                                <div className="slect-allchk">
                                                    <label>
                                                        <input type="checkbox" />
                                                        <span></span>
                                                    </label>
                                                </div>
                                                <p>Charge Shipping Fee above min order amount too</p>
                                            </div>
                                </div>
                            </div>
                        </div>

                       
                    </div>
                </div>

                <div className="d-flex justify-content-end mt-3 mb-3">
                    <button type="button" className="btn btn-shadow btn-secondary me-2">Cancel</button>
                    <button type="button" className="btn btn-shadow btn-primary">Save</button>
                </div>
            </div>
        </>
    )
}







export default AddDeliveryAddressForm
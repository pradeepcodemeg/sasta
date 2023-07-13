import React from 'react'

const TaxSettingForm = () => {
    return (
        <>

            <div className="card">
                <div className="card-body">
                    <div className='main-form'>
                        <div className='prdt-inr'>
                            <div className="form-heading flxfrm-hdng">
                                <h3>Tax Setting</h3>
                                <div className="svcrd-togl">
                                    <div className="tgl-sld">
                                        <label>
                                            <input type="checkbox" />
                                            <span>
                                                <i></i>
                                            </span>
                                        </label>
                                    </div>
                                </div>
                            </div>

                            <div className='row'>
                                <div className='col-md-6'>
                                    <div className="mb-3 fv-row">
                                        <label className="form-label">GST Number<i>*</i></label>
                                        <input type="text" name="Date" className="form-control" placeholder="Enter GST Number" />
                                    </div>
                                </div>
                                <div className='col-md-6'>
                                    <div className="mb-3 fv-row">
                                        <label className="form-label">GST State <i>*</i></label>
                                        <input type="text" name="Date" className="form-control" placeholder="Enter GST State" />
                                    </div>
                                </div>
                                <div className='col-md-6'>
                                    <div className="mb-3 fv-row">
                                        <label className="form-label">Allow customer to add gst number <i>*</i></label>
                                        <div className="mp-flex">
                                            <div className="map-inerflx mpwdth-25">
                                                <div className="rdobtn-card">
                                                    <label>
                                                        <input  type="radio" name="Activity" />
                                                        <span>
                                                            <em></em>
                                                            <i>Yes</i>
                                                        </span>
                                                    </label>
                                                </div>
                                            </div>
                                            <div className="map-inerflx mpwdth-25">
                                                <div className="rdobtn-card">
                                                    <label>
                                                        <input type="radio" name="Activity" />
                                                        <span>
                                                            <em></em>
                                                            <i>No</i>
                                                        </span>
                                                    </label>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className='col-md-6'>
                                    <div className="mb-3 fv-row">
                                        <label className="form-label">Apply discount on order amount after adding tax or before adding tax <i>*</i></label>
                                        <div className="mp-flex">
                                            <div className="map-inerflx mpwdth-25">
                                                <div className="rdobtn-card">
                                                    <label>
                                                        <input type="radio" name="Activity" />
                                                        <span>
                                                            <em></em>
                                                            <i>After</i>
                                                        </span>
                                                    </label>
                                                </div>
                                            </div>
                                            <div className="map-inerflx mpwdth-25">
                                                <div className="rdobtn-card">
                                                    <label>
                                                        <input type="radio" name="Activity" />
                                                        <span>
                                                            <em></em>
                                                            <i>Before</i>
                                                        </span>
                                                    </label>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                

                                
                            </div>

                        </div>

                        <div className='prdt-inr'>
                            <div className="form-heading flxfrm-hdng">
                                <h3>Common Tax Rate</h3>
                            </div>
                            <div className='row'>
                            <div className='col-md-6'>
                                    <div className="mb-3 fv-row">
                                        <label className="form-label">Set common tax rate for all products or product wise <i>*</i></label>
                                        <div className="mp-flex">
                                            <div className="map-inerflx mpwdth-250">
                                                <div className="rdobtn-card">
                                                    <label>
                                                        <input type="radio" name="Activity" />
                                                        <span>
                                                            <em></em>
                                                            <i>Fix Charges</i>
                                                        </span>
                                                    </label>
                                                </div>
                                            </div>
                                            <div className="map-inerflx mpwdth-250">
                                                <div className="rdobtn-card">
                                                    <label>
                                                        <input type="radio" name="Activity" />
                                                        <span>
                                                            <em></em>
                                                            <i>Product wise tax rate</i>
                                                        </span>
                                                    </label>
                                                </div>
                                            </div>
                                        </div>
                                        <p className='msg-note'><b>Note:</b>Set common tax rate for all products or product wise</p>
                                    </div>
                                    </div>
                                </div>
                            </div>

                           
                    
                           
                            <div className="d-flex justify-content-end mt-3 mb-3">
                    <button type="button" className="btn btn-shadow btn-secondary me-2">Cancel</button>
                    <button type="button" className="btn btn-shadow btn-primary">Save</button>
                </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default TaxSettingForm
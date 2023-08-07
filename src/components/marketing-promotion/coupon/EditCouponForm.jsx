import React, { useState, useEffect, useRef } from 'react'
import Select from 'react-select'

// This is Style for Select Box 
const customStyles = {
    control: (provided, state) => ({
        ...provided,
        border: state.isFocused ? '1px solid #b5b5c3' : '1px solid #e4e6ef',
        borderRadius: '4px',
        boxShadow: 'none',
        '&:hover': {
            border: '1px solid #b5b5c3',
        },
    }),
    option: (provided, state) => ({
        ...provided,
        backgroundColor: state.isFocused ? '#ffffff' : '#ffffff',
        color: state.isFocused ? '#000000' : '#000000',
        '&:hover': {
            backgroundColor: '#f4fde5',
            color: '#9fc55e',
        },
    }),
};

const EditCouponForm = () => {


    const [value, setValue] = useState(null);

    const [CouponType, setCouponType] = useState(null)
    const [PaymntMthod, setPaymntMthodType] = useState(null)
    const [LimitStatsType, setLimitStatsType] = useState(null)
    const [OrderFacility, setOrderFacilityType] = useState(null)


    const CouponTypeoptions = [
        { value: 'Flat coupon', label: 'Flat coupon' },
        { value: 'Percentage Coupon', label: 'Percentage Coupon' },];

    const PaymntMthodoptions = [
        { value: 'Both', label: 'Both' },
        { value: 'Online', label: 'Online' },
        { value: 'COD', label: 'COD' },
    ];

    const LimitStatsTypeoptions = [
        { value: 'Limit', label: 'Limit' },
        { value: 'No Limit', label: 'No Limit' },
    ];
    const OrderFacilityoptions = [
        { value: 'Both', label: 'Both' },
        { value: 'Pickup', label: 'Pickup' },
        { value: 'Delivery', label: 'Delivery' },
    ];

    return (
        <>
            <div className='main-form'>
                <div className='prdt-inr'>
                    <div className="form-heading">
                        <h3>Coupon Type</h3>
                    </div>
                    <div className='row'>
                        <div className='col-md-6'>
                            <div className="mb-3 fv-row">
                                <label className="form-label">Select Your Coupon Type <i>*</i></label>
                                <div className='slectbx-singel'>
                                    <Select styles={customStyles} placeholder={'Select Coupon Type'} onChange={(e) => { setCouponType(e.value) }} options={CouponTypeoptions} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='prdt-inr'>
                    <div className="form-heading">
                        <h3>Offers Information</h3>
                    </div>
                <div className='row'>
                    <div className='col-md-3'>
                        <div className="mb-3 fv-row">
                            <label className="form-label">Offer Name<i>*</i></label>
                            <input type="text" name="Date" className="form-control" placeholder="Enter Offer Name" />
                        </div>
                    </div>
                    <div className='col-md-3'>
                        <div className="mb-3 fv-row">
                            <label className="form-label">Coupon Code <i>*</i></label>
                            <input type="text" name="Date" className="form-control" placeholder="Enter Coupon Code" />
                        </div>
                    </div>
                    <div className='col-md-3'>
                        <div className="mb-3 fv-row">
                            <label className="form-label">Discount (%) <i>*</i></label>
                            <input type="text" name="Date" className="form-control" placeholder="Enter Discount %" />
                        </div>
                    </div>
                    <div className='col-md-3'>
                        <div className="mb-3 fv-row">
                            <label className="form-label">Discounted Amount Upto <i>*</i></label>
                            <input type="text" name="Date" className="form-control" placeholder="Enter Discounted Amount Upto" />
                        </div>
                    </div>
                    </div>
                    </div>

                    <div className='prdt-inr'>
                    <div className="form-heading">
                        <h3>Offers Validation</h3>
                    </div>
                <div className='row'>
                    <div className='col-md-6'>
                        <div className="mb-3 fv-row">
                            <label className="form-label">Minimum Order Amount <i>*</i></label>
                            <input type="text" name="Date" className="form-control" placeholder="Enter Minimum Order Amount" />
                        </div>
                    </div>
                    <div className='col-md-6'>
                        <div className="mb-3 fv-row">
                            <label className="form-label">Usage Per Customer <i>*</i></label>
                            <div className='slectbx-singel'>
                                <Select styles={customStyles} placeholder={'Select Usage Per Customer'} onChange={(e) => { setLimitStatsType(e.value) }} options={LimitStatsTypeoptions} />
                            </div>
                        </div>
                    </div>
                    </div>
                    </div>

                    <div className='prdt-inr'>
                    <div className="form-heading">
                        <h3>Validity Duration</h3>
                    </div>
                <div className='row'>
                    <div className='col-md-6'>
                        <div className="mb-3 fv-row">
                            <label className="form-label">Date form <i>*</i></label>
                            <input type="text" name="Date" className="form-control" placeholder="DD/MM/YYYY" />
                        </div>
                    </div>
                    <div className='col-md-6'>
                        <div className="mb-3 fv-row">
                            <label className="form-label">Date  To (%) <i>*</i></label>
                            <input type="text" name="Date" className="form-control" placeholder="DD/MM/YYYY" />
                        </div>
                    </div>
                    </div>
                    </div>

                    <div className='prdt-inr'>
                    <div className="form-heading">
                        <h3>Others</h3>
                    </div>
                <div className='row'>
                    <div className='col-md-6'>
                        <div className="mb-3 fv-row">
                            <label className="form-label">Order Facilities <i>*</i></label>
                            <Select styles={customStyles} placeholder={'Select Order Facilities'} onChange={(e) => { setOrderFacilityType(e.value) }} options={OrderFacilityoptions} />
                        </div>
                    </div>
                    <div className='col-md-6'>
                        <div className="mb-3 fv-row">
                            <label className="form-label">Payment Method <i>*</i></label>
                            <Select styles={customStyles} placeholder={'Select Payment Method'} onChange={(e) => { setPaymntMthodType(e.value) }} options={PaymntMthodoptions} />
                        </div>
                    </div>
                </div>
                  </div>

                  <div className='prdt-inr'>
                    <div className="form-heading">
                        <h3>Offer Term & Conditions</h3>
                    </div>
                <div className='row'>
                    <div className='col-md-12'>
                        <div className="mb-3 fv-row">
                            <label className="form-label">Term & Conditions<i>*</i></label>
                            <textarea class="form-control" rows="4" name="address" placeholder="Enter Terms and conditions"></textarea>
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


export default EditCouponForm
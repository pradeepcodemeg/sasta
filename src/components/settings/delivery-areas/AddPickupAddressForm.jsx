import React, { useState } from 'react'
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

const  AddPickupAddressForm = () => {

  const [city, setCityType] = useState(null)

  const Cityoptions = [
    { value: 'Bangalore', label: 'Bangalore' },
    { value: 'Hyderabad', label: 'Hyderabad' },
    { value: 'Indore', label: 'Indore' },
];
    return (
        <>
            <div className='main-form'>
                <div className='prdt-inr'>
                    <div className="form-heading">
                        <h3>Pickup Address Details</h3>
                    </div>
                    <div className='row'>
                    <div className='col-md-12'>
                            <div className="mb-3 fv-row">
                                <label className="form-label">City <i>*</i></label>
                                <Select styles={customStyles} placeholder={'Select City'} onChange={(e) => { setCityType(e.value) }} options={Cityoptions} />
                            </div>
                        </div>
                        <div className='col-md-6'>
                            <div className="mb-3 fv-row">
                                <label className="form-label">Zone <i>*</i></label>
                                <input type="text" name="Date" className="form-control" placeholder="Enter Zone" />
                            </div>
                        </div>
                        <div className='col-md-6'>
                            <div className="mb-3 fv-row">
                                <label className="form-label">Pickup Phone <i>*</i></label>
                                <input type="text" name="Date" className="form-control" placeholder="Enter Pickup phone" />
                            </div>
                        </div>
                        <div className='col-md-6'>
                            <div className="mb-3 fv-row">
                                <label className="form-label">Pickup Email <i>*</i></label>
                                <input type="text" name="Date" className="form-control" placeholder="Enter Pickup Email" />
                            </div>
                        </div>
                        <div className='col-md-6'>
                            <div className="mb-3 fv-row">
                                <label className="form-label">Pickup Address <i>*</i></label>
                                <input type="text" name="Date" className="form-control" placeholder="Enter Pickup Address" />
                            </div>
                        </div>
                        <div className='col-md-6'>
                            <div className="mb-3 fv-row">
                                <label className="form-label">Pickup Latitude <i>*</i></label>
                                <input type="text" name="Date" className="form-control" placeholder="Enter Pickup Latitude " />
                            </div>
                        </div>
                        <div className='col-md-6'>
                            <div className="mb-3 fv-row">
                                <label className="form-label">Pickup Longitude <i>*</i></label>
                                <input type="text" name="Date" className="form-control" placeholder="Enter Pickup Longitude" />
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
                                                <p>Auto Fill</p>
                                            </div>
                                </div>
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
                                <label className="form-label">Additional note <i>*</i></label>
                                <textarea class="form-control" rows="1" name="address" placeholder="Enter Note Here..."></textarea>
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





export default AddPickupAddressForm
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
const StoreTimeInformationForm = () => {
    const [formTime, setFormTime] = useState(null)
    const [toTime, setToTime] = useState(null)
    const FormTimeoptions = [
        { value: '00:00 AM', label: '00:00 AM' },
        { value: '01:00 PM', label: '01:00 PM' },
        { value: '02:00 PM', label: '02:00 PM' },
        { value: '03:00 PM', label: '03:00 PM' },
        { value: '04:00 PM', label: '04:00 PM' },
        { value: '05:00 PM', label: '05:00 PM' },
        { value: '06:00 PM', label: '06:00 PM' },
        { value: '07:00 PM', label: '07:00 PM' },
        { value: '08:00 PM', label: '08:00 PM' },
        { value: '09:00 AM', label: '09:00 AM' },
        { value: '10:00 AM', label: '10:00 AM' },
        { value: '11:00 AM', label: '11:00 AM' },
        { value: '12:00 PM', label: '12:00 PM' },
    ];
    const ToTimeoptions = [
        { value: '00:00 AM', label: '00:00 AM' },
        { value: '01:00 PM', label: '01:00 PM' },
        { value: '02:00 PM', label: '02:00 PM' },
        { value: '03:00 PM', label: '03:00 PM' },
        { value: '04:00 PM', label: '04:00 PM' },
        { value: '05:00 PM', label: '05:00 PM' },
        { value: '06:00 PM', label: '06:00 PM' },
        { value: '07:00 PM', label: '07:00 PM' },
        { value: '08:00 PM', label: '08:00 PM' },
        { value: '09:00 AM', label: '09:00 AM' },
        { value: '10:00 AM', label: '10:00 AM' },
        { value: '11:00 AM', label: '11:00 AM' },
        { value: '12:00 PM', label: '12:00 PM' },
    ];
    return (
        <>
            <div className='row'>
                <div className='col-md-12'>
                    <div className="card">
                        <div className="card-body">
                            <div className='main-form'>
                                <div className='prdt-inr'>
                                    <div className="form-heading flxfrm-hdng">
                                        <h3>Is your store 24 X 7 open to take orders ?</h3>
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
                                        <h3>Open Hours</h3>
                                    </div>
                                    <div className='row'>
                                        <div className='col-md-4'>
                                            <div className="mb-3 fv-row">
                                                <label className="form-label">Form Time<i>*</i></label>
                                                <div className='slectbx-singel'>
                                                    <Select styles={customStyles} placeholder={'Select Open Hours Time'} onChange={(e) => { setFormTime(e.value) }} options={FormTimeoptions} />
                                                </div>
                                            </div>
                                        </div>
                                        <div className='col-md-4'>
                                            <div className="mb-3 fv-row">
                                                <label className="form-label">To Time <i>*</i></label>
                                                <Select styles={customStyles} placeholder={'Select Open Hours Time'} onChange={(e) => { setToTime(e.value) }} options={ToTimeoptions} />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className='prdt-inr'>
                                    <div className="form-heading">
                                        <h3>Days</h3>
                                    </div>
                                    <div className='row'>
                                        <div className='col-md-12'>
                                            <div className="mb-3 fv-row">
                                                <div className="userrole-chk">
                                                    <ul className='Userrole-list'>
                                                        <li>
                                                            <div className="cstmall-chkmain">
                                                                <p>Sunday</p>
                                                                <div className="slect-allchk">
                                                                    <label>
                                                                        <input type="checkbox" />
                                                                        <span></span>
                                                                    </label>
                                                                </div>
                                                            </div>
                                                        </li>
                                                        <li>
                                                            <div className="cstmall-chkmain">
                                                                <p>Monday</p>
                                                                <div className="slect-allchk">
                                                                    <label>
                                                                        <input type="checkbox" />
                                                                        <span></span>
                                                                    </label>
                                                                </div>
                                                            </div>
                                                        </li>
                                                        <li>
                                                            <div className="cstmall-chkmain">
                                                                <p>Tuesday</p>
                                                                <div className="slect-allchk">
                                                                    <label>
                                                                        <input type="checkbox" />
                                                                        <span></span>
                                                                    </label>
                                                                </div>
                                                            </div>
                                                        </li>
                                                        <li>
                                                            <div className="cstmall-chkmain">
                                                                <p>Wednesday</p>
                                                                <div className="slect-allchk">
                                                                    <label>
                                                                        <input type="checkbox" />
                                                                        <span></span>
                                                                    </label>
                                                                </div>
                                                            </div>
                                                        </li>
                                                        <li>
                                                            <div className="cstmall-chkmain">
                                                                <p>Thursday</p>
                                                                <div className="slect-allchk">
                                                                    <label>
                                                                        <input type="checkbox" />
                                                                        <span></span>
                                                                    </label>
                                                                </div>
                                                            </div>
                                                        </li>
                                                        <li>
                                                            <div className="cstmall-chkmain">
                                                                <p>Friday</p>
                                                                <div className="slect-allchk">
                                                                    <label>
                                                                        <input type="checkbox" />
                                                                        <span></span>
                                                                    </label>
                                                                </div>
                                                            </div>
                                                        </li>
                                                        <li>
                                                            <div className="cstmall-chkmain">
                                                                <p>Saturday</p>
                                                                <div className="slect-allchk">
                                                                    <label>
                                                                        <input type="checkbox" />
                                                                        <span></span>
                                                                    </label>
                                                                </div>
                                                            </div>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className='prdt-inr'>
                                    <div className="form-heading">
                                        <h3>Message Description</h3>
                                    </div>
                                    <div className='row'>

                                        <div className='col-md-12'>
                                            <div className="mb-3 fv-row">
                                                <label className="form-label">App Display Message during Non-Operating Hours <i>*</i></label>
                                                <textarea class="form-control" rows="4" name="address" placeholder="Enter Message Here..."></textarea>
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
                </div>

            </div>
        </>
    )
}


export default StoreTimeInformationForm
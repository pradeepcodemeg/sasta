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
const DeliverySlotForm = () => {
    const [formTime, setFormTime] = useState(null)
    const [toTime, setToTime] = useState(null)
    const [numberSlotsAdditions, setNumberSlotsAdditions] = useState([1])
    console.log(numberSlotsAdditions)
    const FormTimeoptions = [
        { value: '00:00 AM', label: '00:00 AM' },
        { value: '01:00 AM', label: '01:00 AM' },
        { value: '02:00 AM', label: '02:00 AM' },
        { value: '03:00 AM', label: '03:00 AM' },
        { value: '04:00 AM', label: '04:00 AM' },
        { value: '05:00 AM', label: '05:00 AM' },
        { value: '06:00 AM', label: '06:00 AM' },
        { value: '07:00 AM', label: '07:00 AM' },
        { value: '08:00 AM', label: '08:00 AM' },
        { value: '09:00 AM', label: '09:00 AM' },
        { value: '10:00 AM', label: '10:00 AM' },
        { value: '11:00 AM', label: '11:00 AM' },
        { value: '12:00 AM', label: '12:00 AM' },
        { value: '13:00 PM', label: '13:00 PM' },
        { value: '14:00 PM', label: '14:00 PM' },
        { value: '15:00 PM', label: '15:00 PM' },
        { value: '16:00 PM', label: '16:00 PM' },
        { value: '17:00 PM', label: '17:00 PM' },
        { value: '18:00 PM', label: '18:00 PM' },
        { value: '19:00 PM', label: '19:00 PM' },
        { value: '20:00 PM', label: '20:00 PM' },
        { value: '21:00 PM', label: '21:00 PM' },
        { value: '22:00 PM', label: '22:00 PM' },
        { value: '23:00 PM', label: '23:00 PM' },
        { value: '24:00 PM', label: '24:00 PM' },
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



    const deleteInputs = (itemNo) =>{
        setNumberSlotsAdditions(p => p.filter((prev)=> prev !== itemNo))
    }
    return (
        <>
            <div className='row'>
                <div className='col-md-12'>
                    <div className="card">
                        <div className="card-body">
                            <div className='main-form'>
                                <div className='prdt-inr'>
                                    <div className="form-heading flxfrm-hdng mb-0">
                                        <h3>Store provides instant delivery of the orders.</h3>
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
                                        <h3>Delivery Slot Setting</h3>
                                    </div>
                                    <div className='row'>
                                        <div className='col-md-6'>
                                            <div className="mb-3 fv-row">
                                                <label className="form-label">Order Buffer time<i>*</i></label>
                                                <div className='slectbx-singel'>
                                                    <Select styles={customStyles} placeholder={'Select Open Hours Time'} onChange={(e) => { setFormTime(e.value) }} options={FormTimeoptions} />
                                                </div>
                                            </div>
                                        </div>
                                        <div className='col-md-6'>
                                            <div className="mb-3 fv-row">
                                                <label className="form-label">Order Buffer time taken on <i>*</i></label>
                                                {/* <Select styles={customStyles} placeholder={'Select Open Hours Time'} onChange={(e) => { setToTime(e.value) }} options={ToTimeoptions} /> */}
                                                <div className="mp-flex">
                                                    <div className="map-inerflx mpwdth-50">
                                                        <div className="rdobtn-card">
                                                            <label>
                                                                <input type="radio" name="Activity" />
                                                                <span>
                                                                    <em></em>
                                                                    <i>On Start Time</i>
                                                                </span>
                                                            </label>
                                                        </div>
                                                    </div>
                                                    <div className="map-inerflx mpwdth-50">
                                                        <div className="rdobtn-card">
                                                            <label>
                                                                <input type="radio" name="Activity" />
                                                                <span>
                                                                    <em></em>
                                                                    <i>On End Time</i>
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
                                    <div className="form-heading">
                                        <h3>Order Slot</h3>
                                    </div>
                                    <div className='row'>
                                        <div className='col-md-4'>
                                            <div className="mb-3 fv-row">
                                                <label className="form-label">Max Orders in a slot <i>*</i></label>
                                                <input type="text" name="Date" className="form-control" placeholder="Enter Max Orders in a slot" />
                                            </div>
                                        </div>
                                    </div>
                                    </div>

                                    <div className='prdt-inr'>
                                    <div className="form-heading">
                                        <h3>Time Slot</h3>
                                    </div>
                                    {numberSlotsAdditions.map((item,index)=>{
                                        return(
                                            <div className='row'>
                                        <div className='col-md-4'>
                                            <div className="mb-3 fv-row">
                                                <label className="form-label">Time Slot {item} <i>*</i></label>
                                                <Select styles={customStyles} placeholder={'Select Open Hours Time'} onChange={(e) => { setToTime(e.value) }} options={ToTimeoptions} />
                                            </div>
                                        </div>
                                        <div className='col-md-5'>
                                            <div className="mb-3 fv-row">
                                                <label className="form-label">App Display Message during Non-Operating Hours <i>*</i></label>
                                                <textarea class="form-control" rows="1" name="address" placeholder="Enter Message Here..."></textarea>
                                            </div>
                                        </div>

                                        <div className='col-md-3'>
                                            <div className="mb-3 fv-row">
                                                <label className="form-label visibilty-hidden">Slot Button</label> 
                                                <div className='d-flex'>          
                                                {index === numberSlotsAdditions.length-1 && <button onClick={()=>{setNumberSlotsAdditions(p => [...p , p[p.length-1]+ 1] )}} type="button" className="btn btn-shadow btn-primary me-2">Add slot</button>}
                                                {<button type="button" onClick={()=>deleteInputs(item)} className="btn btn-shadow d-block btn-secondary">Delete</button>}
                                            </div>
                                            </div>
                                        </div>
                                    </div>
                                        )
                                    })}
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


export default DeliverySlotForm
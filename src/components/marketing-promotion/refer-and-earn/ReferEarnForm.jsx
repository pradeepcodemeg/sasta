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
const ReferEarnForm = () => {
  const [value, setValue] = useState(null);
  const [LimitStatsType, setLimitStatsType] = useState(null)
  const LimitStatsTypeoptions = [
    { value: 'Active', label: 'Active' },
    { value: 'In Active', label: 'In Active' },
];
  return (
    <>
      <div className='main-form'>
        <div className='prdt-inr'>
          <div className="form-heading">
            <h3>Refer & Earn Info</h3>
          </div>
          <div className='row'>
            <div className='col-md-6'>
              <div className="mb-3 fv-row">
                <label className="form-label">Discount (%) <i>*</i></label>
                <input type="text" name="Date" className="form-control" placeholder="Enter Discount (%)" />
              </div>
            </div>
            <div className='col-md-6'>
              <div className="mb-3 fv-row">
                <label className="form-label">Days Validity <i>*</i></label>
                <input type="text" name="Date" className="form-control" placeholder="Enter Days Validity" />
              </div>
            </div>
            <div className='col-md-12'>
              <div className="mb-3 fv-row">
                <label className="form-label">Note as <i>*</i></label>
                <textarea class="form-control" rows="8" name="address" value="Users' refer code = <%user_refer_code%>
Discount (%) = <%discount%>
Days Validity=<%days%>
Store Name=<%store_name%>
Store Url=<%store_url%>
Example
Signup with <%store_name%> using Referral Code <%user_refer_code%> and get <%discount%> discount on your first order. 
Code is valid for <%days%> days only. Shop Now <%store_url%>" placeholder="Enter Note Here.."></textarea>
              </div>
            </div>
          </div>
        </div>
        <div className='prdt-inr'>
          <div className="form-heading">
            <h3>Shared Message</h3>
          </div>
          <div className='row'>
            <div className='col-md-12'>
              <div className="mb-3 fv-row">
                <label className="form-label">Message<i>*</i></label>
                <textarea class="form-control" rows="4" name="address" value="Signup with <%store_name%> using Referral Code <%user_refer_code%> and get <%discount%> discount on your first order. Code is valid for <%days%> days only. Shop Now <%store_url%>" placeholder="Enter Message Here.."></textarea>
              </div>
            </div>
            </div>
            </div>
            <div className='prdt-inr'>
          <div className="form-heading">
            <h3>App Notification</h3>
          </div>
          <div className='row'>
            <div className='col-md-12'>
              <div className="mb-2 fv-row">
                <label className="form-label">Notification Text<i>*</i></label>
                <textarea class="form-control" rows="4" name="address" value="Signup with <%store_name%> using Referral Code <%user_refer_code%> and get <%discount%> discount on your first order. Code is valid for <%days%> days only. Shop Now <%store_url%>>" placeholder="Enter Notification Text Here.."></textarea>
              </div>
            </div>
            <div className='col-md-12'>
            <div className="d-flex justify-content-end mt-3 mb-3">
                    <button type="button" className="btn btn-shadow btn-primary">Save & Send Notification</button>
                </div>
              </div>
            </div>
            </div>
            <div className='prdt-inr'>
          <div className="form-heading">
            <h3>Notification Status</h3>
          </div>
          <div className='row'>
          <div className='col-md-6'>
                        <div className="mb-3 fv-row">
                            <label className="form-label">Notification Status <i>*</i></label>
                            <div className='slectbx-singel'>
                                <Select styles={customStyles} placeholder={'Select Notification Status'} onChange={(e) => { setLimitStatsType(e.value) }} options={LimitStatsTypeoptions} />
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

export default ReferEarnForm
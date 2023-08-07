import Select from 'react-select';
import React, { useState } from 'react'
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

function  AddManageCitiesForm({ toggleAddManageCitiesModal, setToggleAddManageCitiesModal }) {
const [city, setCityType] = useState(null)

const Cityoptions = [
  { value: 'Bangalore', label: 'Bangalore' },
  { value: 'Hyderabad', label: 'Hyderabad' },
  { value: 'Indore', label: 'Indore' },
];
  return (
    <>
      <div className={`main-popup categry-popup ${toggleAddManageCitiesModal ? 'pop-open' : 'pop-close'}`}>
        <div className="lm-outer">
          <div className="lm-inner">
            <div className="popup-inner">
              <div className='popup-header'>
                <div className='popup-heading'>
                  <h3>Add City</h3>
                </div>
              </div>
              <div className='popup-body'>
                  <div className='form-main'>
                <div className="mb-3 fv-row">
                    <label className="form-label">City <i>*</i></label>
                    <div className='slectbx-singel'>
                    <Select styles={customStyles} placeholder={'Select City'} onChange={(e) => { setCityType(e.value) }} options={Cityoptions} />
                 </div>
                </div>
                <div className="d-flex justify-content-end mt-4">
                    <button type="button" className="btn btn-shadow btn-primary me-2">Save</button>
                <button type="button" className="btn btn-shadow btn-secondary" onClick={() => { setToggleAddManageCitiesModal(p=> !p) }}>Cancel</button></div>
                 </div>
                  </div>
              </div>
              
          </div>
        </div>
        <div className="overlay" onClick={() => { setToggleAddManageCitiesModal(p=> !p) }}></div>
      </div>
    </>
  )
}






export default AddManageCitiesForm
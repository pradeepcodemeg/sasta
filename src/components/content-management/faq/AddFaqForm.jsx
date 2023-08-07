import React, { useState, useEffect, useRef } from 'react'
import Select from 'react-select'
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
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

// AddProductForm Function Components Start
const AddFaqForm = () => {


  const [value, setValue] = useState(null);

  // Options for Select 
  const [category, setCategory] = useState(null)    

 
  const Categoryoptions = [
    { value: 'Ordering', label: 'Ordering' },
    { value: 'Complaints & Feedback', label: 'Complaints & Feedback' },
    { value: 'Payments', label: 'Payments' },
    { value: 'Order Processing', label: 'Order Processing' },
  ];
  
  return (
    <>
      <div className='main-form'>
        <div className='prdt-inr'>
          <div className="form-heading">
            <h3>Faq Description</h3>
          </div>
          <div className='row'>
          <div className='col-md-12'>
              <div className="mb-3 fv-row">
                <label className="form-label">Select Category <i>*</i></label>
                <div className='slectbx-singel'>
                  <Select styles={customStyles} placeholder={'Select Category'} onChange={(e) => { setCategoryType(e.value) }} options={Categoryoptions} />
                </div>
              </div>
            </div>

            <div className='col-md-12'>
              <div className="mb-3 fv-row">
                <label className="form-label">Question <i>*</i></label>
                <textarea class="form-control" rows="4" name="address" placeholder="Enter Questions Here..."></textarea>
                </div>
                </div>

            <div className='col-md-12'>
              <div className="mb-3 fv-row">
                <label className="form-label">Answer <i>*</i></label>
                <div className='text-editor '>
                                    <ReactQuill
                                        value={value}
                                        onChange={(content) => setValue(content)}
                                        placeholder="Enter Answer Here..."
                                        modules={{
                                            toolbar: [
                                                [{ header: [1, 2, false] }],
                                                ['bold', 'italic', 'underline', 'strike', 'blockquote'],
                                                [{ list: 'ordered' }, { list: 'bullet' }],
                                                ['link', 'image'],
                                                ['clean'],
                                            ],
                                        }}
                                        formats={[
                                            'header',
                                            'bold', 'italic', 'underline', 'strike', 'blockquote',
                                            'list', 'bullet',
                                            'link', 'image',
                                        ]}
                                    />
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






export default AddFaqForm
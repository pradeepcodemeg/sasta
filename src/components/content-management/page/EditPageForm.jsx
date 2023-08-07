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
const EditPageForm = () => {


  const [value, setValue] = useState(null);

  // Options for Select 
  const [page, setPage] = useState(null)    

 
  const Pageoptions = [
    { value: 'Privacy Policy', label: 'Privacy Policy' },
    { value: 'Terms and Condition', label: 'Terms and Condition' },
    { value: 'Refund Policy', label: 'Refund Policy' },
  ];
  
  return (
    <>
      <div className='main-form'>
        <div className='prdt-inr'>
          <div className="form-heading">
            <h3>Page Description</h3>
          </div>
          <div className='row'>
          <div className='col-md-12'>
              <div className="mb-3 fv-row">
                <label className="form-label">Select Page Type <i>*</i></label>
                <div className='slectbx-singel'>
                  <Select styles={customStyles} placeholder={'Select Page Type'} onChange={(e) => { setPageType(e.value) }} options={Pageoptions} />
                </div>
              </div>
            </div>

            <div className='col-md-12'>
              <div className="mb-3 fv-row">
                <label className="form-label">Message Box <i>*</i></label>
                <div className='text-editor text-editor-400'>
                                    <ReactQuill
                                        value={value}
                                        onChange={(content) => setValue(content)}
                                        placeholder="Write something..."
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





export default EditPageForm
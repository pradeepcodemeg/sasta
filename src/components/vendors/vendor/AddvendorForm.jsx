import React, { useState, useEffect, useRef } from 'react'
import Select from 'react-select'
import { FileUploader } from "react-drag-drop-files";
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
const  AddvendorForm = () => {

  const [imageFiles, setImageFiles] = useState([]);

    const selectFile = (newFile) => {
        setImageFiles((prevFiles) => [...prevFiles, ...newFile]);
    };

    const removeFile = (name) => {
        setImageFiles((prevFiles) => prevFiles.filter((file) => file.name !== name));
    };

  const [value, setValue] = useState(null);

  // Options for Select  
  const [status, setStatus] = useState(null)     
  const [bank, setBank] = useState(null)    


  const Statusoptions = [
    { value: 'Approved', label: 'Approved' },
    { value: 'Rejected', label: 'Rejected' },
  ];
  const Bankoptions = [
    { value: 'Union Bank Of India', label: 'Union Bank Of India' },
    { value: 'Punjab National Bank', label: 'Punjab National Bank' },
  ];
  
  return (
    <>
      <div className='main-form'>
        <div className='prdt-inr'>
          <div className="form-heading">
            <h3>Vendor Detail</h3>
          </div>
          <div className='row'>
          <div className='col-md-6'>
              <div className="mb-3 fv-row">
                <label className="form-label">Vendor Name <i>*</i></label>
                <input type="text" name="name" className="form-control" placeholder="Enter Vendor Name" />
              </div>
            </div>
            <div className='col-md-6'>
              <div className="mb-3 fv-row">
                <label className="form-label">Phone <i>*</i></label>
                <input type="text" name="name" className="form-control" placeholder="Enter Phone Number" />
              </div>
            </div>
            <div className='col-md-6'>
              <div className="mb-3 fv-row">
                <label className="form-label">Email <i>*</i></label>
                <input type="Email" name="name" className="form-control" placeholder="Enter Email Address" />
              </div>
            </div>
            <div className='col-md-6'>
              <div className="mb-3 fv-row">
                <label className="form-label">Addresss <i>*</i></label>
                <input type="text" name="name" className="form-control" placeholder="Enter Address Here" />
              </div>
            </div>
            <div className='col-md-6'>
              <div className="mb-3 fv-row">
                <label className="form-label">Pan No. <i>*</i></label>
                <input type="text" name="name" className="form-control" placeholder="Enter Pan Number" />
              </div>
            </div>
            <div className='col-md-6'>
              <div className="mb-3 fv-row">
                <label className="form-label">Bank Name <i>*</i></label>
                <Select styles={customStyles} placeholder={'Select Bank'} onChange={(e) => { setBank(e.value) }} options={Bankoptions} />
              </div>
            </div>
            <div className='col-md-6'>
              <div className="mb-3 fv-row">
                <label className="form-label">Account Number<i>*</i></label>
                <input type="text" name="name" className="form-control" placeholder="Enter Account Number" />
              </div>
            </div>
            <div className='col-md-6'>
              <div className="mb-3 fv-row">
                <label className="form-label">IfSC Code<i>*</i></label>
                <input type="text" name="name" className="form-control" placeholder="Enter IFSC Code" />
              </div>
            </div>
            <div className='col-md-6'>
              <div className="mb-3 fv-row">
                <label className="form-label">Select Status <i>*</i></label>
                <div className='slectbx-singel'>
                  <Select styles={customStyles} placeholder={'Select Status'} onChange={(e) => { setStatus(e.value) }} options={Statusoptions} />
                </div>
              </div>
            </div>
          </div>
        </div>


        <div className='prdt-inr'>
          <div className="form-heading">
            <h3>Image Upload</h3>
          </div>
          <div className='row'>
            <div className='col-md-4'>
            <div className="mb-3 fv-row">
                                        <label className="form-label">Upload Image <i>*</i></label>
                                        <div className='exclfil-upload'>
                                            <FileUploader children={<UploadBox/>} handleChange={(file) => selectFile(file)} file={imageFiles} multiple={true} types={["JPG", "PNG"]} />
                                        </div>
                                        {imageFiles.length !== 0 && <div className='fileupld-show'>
                                            <ul>
                                                {imageFiles && imageFiles.map((file, i) => {
                                                    return (
                                                        <li key={i}>
                                                            <div className='flinner-shw'>
                                                                <ImageComponent file={file} />
                                                                <span onClick={() => removeFile(file.name)}><i className="fa fa-times" aria-hidden="true"></i></span>
                                                            </div>
                                                        </li>
                                                    )
                                                })}
                                            </ul>
                                        </div>}
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



export default AddvendorForm

// component to Show image which is Choose by user
function ImageComponent({ file }) {
  const imgRef = useRef(null);

  const handleFileRead = (event) => {
      const fileData = event.target.result;
      imgRef.current.src = fileData;
  };

  const handleFileLoad = (file) => {
      const reader = new FileReader();
      reader.onloadend = handleFileRead;
      reader.readAsDataURL(file);
  };

  useEffect(() => {
      if (file) {
          handleFileLoad(file);
      }
  }, [file]);

  return <img ref={imgRef} alt="Image" />;
}

// compont which show as a file upload tag
const UploadBox = () => {
  return (
      <div className='imgupld-descrp'>
          <span><i class="fa fa-cloud-upload" aria-hidden="true"></i></span>
          <p>Click to upload or drag and drop</p>
          <p className='notes'><b>Note:</b> Image dimension should be 370px in width * 208px in height</p>
      </div>
  )
}




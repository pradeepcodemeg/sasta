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
const EditRunnerForm = () => {

  const [imageFiles, setImageFiles] = useState([]);

    const selectFile = (newFile) => {
        setImageFiles((prevFiles) => [...prevFiles, ...newFile]);
    };

    const removeFile = (name) => {
        setImageFiles((prevFiles) => prevFiles.filter((file) => file.name !== name));
    };

  const [value, setValue] = useState(null);

  // Options for Select
  const [role, setRole] = useState(null)   
  const [area, setArea] = useState(null)       

  const Areaoptions = [
    { value: 'Both', label: 'Both' },
    { value: 'South', label: 'South' },
    { value: 'East', label: 'East' },
  ];
  const Statusoptions = [
    { value: 'Active', label: 'Active' },
    { value: 'In Active', label: 'In Active' },
  ];
  
  return (
    <>
      <div className='main-form'>
        <div className='prdt-inr'>
          <div className="form-heading">
            <h3>Runner Description</h3>
          </div>
          <div className='row'>
            <div className='col-md-12'>
              <div className="mb-3 fv-row">
                <label className="form-label">Full Name <i>*</i></label>
                <input type="text" name="name" className="form-control" placeholder="Enter Full Name" />
              </div>
            </div>
            <div className='col-md-6'>
              <div className="mb-3 fv-row">
                <label className="form-label">Phone Number <i>*</i></label>
                <input type="text" name="number" className="form-control" placeholder="Enter Phone Number" />
              </div>
            </div>
            <div className='col-md-6'>
              <div className="mb-3 fv-row">
                <label className="form-label">Email <i>*</i></label>
                <input type="email" name="email" className="form-control" placeholder="Enter Email Address" />
              </div>
            </div>
            <div className='col-md-6'>
              <div className="mb-3 fv-row">
                <label className="form-label">Select Area <i>*</i></label>
                <div className='slectbx-singel'>
                  <Select styles={customStyles} placeholder={'Select Status'} onChange={(e) => { setArea(e.value) }} options={Areaoptions} />
                </div>
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
                                                                <span onClick={() => removeFile(file.name)}><i class="fa fa-times" aria-hidden="true"></i></span>
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



export default EditRunnerForm

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


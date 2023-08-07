import React, { useState, useEffect, useRef } from 'react'
import { FileUploader } from "react-drag-drop-files";
import Select from 'react-select';

function  EditSubCategoryForm({ toggleEditSubCategryModal, setToggleEditSubCategryModal }) {
  console.log(toggleEditSubCategryModal);
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
  const options = [
    { value: 'Fruits & Vegetables', label: 'Fruits & Vegetables' },
    { value: 'Cakes & bakery', label: 'Cakes & bakery' },
    { value: 'Drink', label: 'Drink' },
  ];
  const placeholderSelect = 'Select Categories'
  const [selectedCategory,setSelectedCategory] = useState(null)

  
  const [imageFiles, setImageFiles] = useState([]);
  const [LinkTo,setLinkTo] = useState(null)

    const selectFile = (newFile) => {
        setImageFiles((prevFiles) => [...prevFiles, ...newFile]);
    };

    const removeFile = (name) => {
        setImageFiles((prevFiles) => prevFiles.filter((file) => file.name !== name));
    };

  const [value, setValue] = useState(null);

  return (
    <>
      <div className={`main-popup categry-popup ${toggleEditSubCategryModal ? 'pop-open' : 'pop-close'}`}>
        <div className="lm-outer">
          <div className="lm-inner">
            <div className="popup-inner">
              <div className='popup-header'>
                <div className='popup-heading'>
                  <h3>Edit Sub Category</h3>
                </div>
              </div>
              <div className='popup-body'>
                  <div className='form-main'>
                  <div className="mb-3 fv-row">
                    <label className="form-label">Sub Category Title <i>*</i></label>
                    <input type="text" name="Date" value="" className="form-control" placeholder="Enter Sub Category Title" />
                </div>
                <div className="mb-3 fv-row">
                    <label className="form-label">Category <i>*</i></label>
                    <div className='slectbx-singel'>
                    <Select styles={customStyles} placeholder={placeholderSelect} onChange={(e)=>{setSelectedCategory(e.value)}} options={options} />
                 </div>
                </div>
                  <div className="mb-3 fv-row ">
                    <label className="form-label">Image Upload <i>*</i></label>
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
                
                <div className="d-flex justify-content-end mt-4">
                    <button type="button" className="btn btn-shadow btn-primary me-2">Save</button>
                <button type="button" className="btn btn-shadow btn-secondary" onClick={() => { setToggleEditSubCategryModal(p=> !p) }}>Cancel</button></div>
                 </div>
                  </div>
              </div>
              
          </div>
        </div>
        <div className="overlay" onClick={() => { setToggleEditSubCategryModal(p=> !p) }}></div>
      </div>
    </>
  )
}




export default EditSubCategoryForm


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

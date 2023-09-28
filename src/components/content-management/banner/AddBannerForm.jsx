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
const AddBannerForm = () => {

  const [imageFiles, setImageFiles] = useState([]);
  const [LinkTo,setLinkTo] = useState(null)

    const selectFile = (newFile) => {
        setImageFiles((prevFiles) => [...prevFiles, ...newFile]);
    };

    const removeFile = (name) => {
        setImageFiles((prevFiles) => prevFiles.filter((file) => file.name !== name));
    };

  const [value, setValue] = useState(null);

  // Options for Select
  const [bannertype, setBannerType] = useState(null)   
  const [status, setStatus] = useState(null)     
  const [category, setCategory] = useState(null)    

  const BannerTypeoptions = [
    { value: 'Top banner', label: 'Top banner' },
    { value: 'Web Footer Banner', label: 'Web Footer Banner' },
    { value: 'About Us Banner', label: 'About Us Banner' },
    { value: 'Offers', label: 'Offers' },
    { value: 'Mini Slider', label: 'Mini Slider' },
  ];
  const Statusoptions = [
    { value: 'Active', label: 'Active' },
    { value: 'In Active', label: 'In Active' },
  ];
  const Categoryoptions = [
    { value: 'Diwali Offers', label: 'Diwali Offers' },
    { value: 'Holi offers', label: 'Holi Offers' },
  ];
  
  return (
    <>
      <div className='main-form'>
        <div className='prdt-inr'>
          <div className="form-heading">
            <h3>Banner Description</h3>
          </div>
          <div className='row'>
          <div className='col-md-12'>
              <div className="mb-3 fv-row">
                <label className="form-label">Select Banner Type <i>*</i></label>
                <div className='slectbx-singel'>
                  <Select styles={customStyles} placeholder={'Select Banner Type'} onChange={(e) => { setBannerType(e.value) }} options={BannerTypeoptions} />
                </div>
              </div>
            </div>
            <div className='col-md-12'>
              <div className="mb-3 fv-row">
                <label className="form-label">Image Caption <i>*</i></label>
                <input type="text" name="name" className="form-control" placeholder="Enter Image Caption" />
              </div>
            </div>
           
            <div className='col-md-6'>
              <div className="mb-3 fv-row">
                <label className="form-label">Link <i>*</i></label>
                <div className="mp-flex">
                  <div className="map-inerflx mpwdth-50">
                    <div className="rdobtn-card">
                      <label>
                        <input onChange={()=>{setLinkTo('None')}} type="radio" name="Activity" />
                          <span>
                            <em></em>
                            <i>None</i>
                            </span>
                            </label>
                            </div>
                            </div>
                            <div className="map-inerflx mpwdth-50">
                              <div className="rdobtn-card">
                                <label>
                                  <input onChange={()=>{setLinkTo('Category')}} type="radio" name="Activity" />
                                    <span>
                                      <em></em>
                                      <i>Category</i>
                                      </span>
                                      </label>
                                      </div>
                                      </div>
                                      </div>
              </div>
            </div>
            {LinkTo === 'Category' && <div className='col-md-6'>
              <div className="mb-3 fv-row">
                <label className="form-label">Category <i>*</i></label>
                <div className='slectbx-singel'>
                  <Select styles={customStyles} placeholder={'Select Category'} onChange={(e) => { setCategory(e.value) }} options={Categoryoptions} />
                </div>
              </div>
            </div>}
           

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



export default AddBannerForm

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


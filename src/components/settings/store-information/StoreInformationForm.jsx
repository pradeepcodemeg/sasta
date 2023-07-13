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
const StoreInformationForm = () => {
    // Files which getting from FileProviders Components
    const [categoryFiles, setCategoryFiles] = useState([]);
    const [thumbnailFiles, setThumbnailFiles] = useState([]);

    const [value, setValue] = useState(null);
    const [tags, setTags] = useState([]);

    // Options for Select
    const [storeAssociates, setStoreAssociates] = useState(null)
    const [currency, setCurrency] = useState(null)
    const [showCurrency, setShowCurrency] = useState(null)
    const [timeZone, setTimeZone] = useState(null)
    const [country, setCountryType] = useState(null)


    const StoreAssociatesoptions = [
        { value: 'All', label: 'All' },
    ];

    const Currencyoptions = [
        { value: '$', label: '$' },
        { value: '₹', label: '₹' },
        { value: 'Dollar', label: 'Dollar' },
        { value: 'INR', label: 'INR' },
    ];
    const ShowCurrencyoptions = [
        { value: 'Symbol', label: 'Symbol' },
        { value: 'Abbreviation', label: 'Abbreviation' },
    ];

    const TimeZoneoptions = [
        { value: 'Asia/Kolkata', label: 'Asia/Kolkata' },
        { value: 'Delhi/Mumbai', label: 'Delhi/Mumbai' },
    ];
    const Countryoptions = [
        { value: 'India', label: 'India' },
        { value: 'America', label: 'America' },
        { value: 'Nepal', label: 'Nepal' },
    ];

    const addTags = (event) => {
        const inputValue = event.target.value.trim();
        if (event.key === 'Enter' && inputValue !== '') {
            if (tags.length >= 5) {
                return;
            }
            setTags(prevTags => [...prevTags, inputValue]);
            event.target.value = '';
        }
    };

    const deleteTag = (tag) => {
        const updatedTags = tags.filter(t => t !== tag);
        setTags(updatedTags);
    }

    const selectFile = (newFile, flag) => {
        if (flag == "img1") {
            setCategoryFiles((prevFiles) => [...prevFiles, ...newFile]);
        }
        else if (flag == "img2") {
            setThumbnailFiles((prevFiles) => [...prevFiles, ...newFile]);
        }
    };

    const removeFile = (name, flag) => {
        if (flag == "img1") {
            setCategoryFiles((prevFiles) => prevFiles.filter((file) => file.name !== name));
        }
        else if (flag == "img2") {
            setThumbnailFiles((prevFiles) => prevFiles.filter((file) => file.name !== name));
        }
    };

    return (
        <>
            <div className='main-form'>
                <div className='prdt-inr'>
                    <div className="form-heading">
                        <h3>Store Information</h3>
                    </div>
                    <div className='row'>
                        <div className='col-md-4'>
                            <div className="mb-3 fv-row">
                                <label className="form-label">Store Name <i>*</i></label>
                                <input type="text" name="Date" className="form-control" placeholder="Enter Store Name" />
                            </div>
                        </div>
                        <div className='col-md-4'>
                            <div className="mb-3 fv-row">
                                <label className="form-label">Store Contact Person <i>*</i></label>
                                <input type="text" name="Date" className="form-control" placeholder="Enter Contact Person" />
                            </div>
                        </div>
                        <div className='col-md-4'>
                            <div className="mb-3 fv-row">
                                <label className="form-label">Store Contact Number <i>*</i></label>
                                <input type="text" name="Date" className="form-control" placeholder="Enter Contact Number" />
                            </div>
                        </div>
                        <div className='col-md-4'>
                            <div className="mb-3 fv-row">
                                <label className="form-label">Store Email <i>*</i></label>
                                <input type="email" name="email" className="form-control" placeholder="Enter Store Email Address" />
                            </div>
                        </div>



                        <div className='col-md-4'>
                            <div className="mb-3 fv-row">
                                <label className="form-label">Store Associates <i>*</i></label>
                                <div className='slectbx-singel'>
                                    <Select styles={customStyles} placeholder={'Select Category'} onChange={(e) => { setStoreAssociates(e.value) }} options={StoreAssociatesoptions} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                
                

                <div className='prdt-inr'>
                    <div className="form-heading">
                        <h3>Address</h3>
                    </div>
                    <div className='row'>
                        <div className='col-md-4'>
                            <div className="mb-3 fv-row">
                                <label className="form-label">Location <i>*</i></label>
                                <input type="text" name="Date" className="form-control" placeholder="Enter Store Location" />
                            </div>
                        </div>
                        <div className='col-md-4'>
                            <div className="mb-3 fv-row">
                                <label className="form-label">City <i>*</i></label>
                                <input type="text" name="Date" className="form-control" placeholder="Enter City Name" />
                            </div>
                        </div>
                        <div className='col-md-4'>
                            <div className="mb-3 fv-row">
                                <label className="form-label">State <i>*</i></label>
                                <input type="text" name="Date" className="form-control" placeholder="Enter State Name" />
                            </div>
                        </div>
                        <div className='col-md-4'>
                            <div className="mb-3 fv-row">
                                <label className="form-label">Time Zone <i>*</i></label>
                                <Select styles={customStyles} placeholder={'Select Time Zone'} onChange={(e) => { setTimeZone(e.value) }} options={TimeZoneoptions} />
                            </div>
                        </div>
                        <div className='col-md-4'>
                            <div className="mb-3 fv-row">
                                <label className="form-label">Country <i>*</i></label>
                                <Select styles={customStyles} placeholder={'Select Country'} onChange={(e) => { setCountryType(e.value) }} options={Countryoptions} />
                            </div>
                        </div>
                        <div className='col-md-4'>
                            <div className="mb-3 fv-row">
                                <label className="form-label">Zip Code <i>*</i></label>
                                <input type="text" name="Date" className="form-control" placeholder="Enter Zip Code" />
                            </div>
                        </div>
                        <div className='col-md-4'>
                            <div className="mb-3 fv-row">
                                <label className="form-label">Lattitude<i>*</i></label>
                                <input type="text" name="Date" className="form-control" placeholder="Enter Lattitude" />
                            </div>
                        </div>
                        <div className='col-md-4'>
                            <div className="mb-3 fv-row">
                                <label className="form-label">Longitude<i>*</i></label>
                                <input type="text" name="Date" className="form-control" placeholder="Enter Longitude" />
                            </div>
                        </div>
                    </div>
                </div>
                <div className='prdt-inr'>
                    <div className="form-heading">
                        <h3>Currency</h3>
                    </div>
                    <div className='row'>
                        <div className='col-md-4'>
                            <div className="mb-3 fv-row">
                                <label className="form-label">Currency <i>*</i></label>
                                <div className='slectbx-singel'>
                                    <Select styles={customStyles} placeholder={'Select Currency'} onChange={(e) => { setCurrency(e.value) }} options={Currencyoptions} />
                                </div>
                            </div>
                        </div>
                        <div className='col-md-4'>
                            <div className="mb-3 fv-row">
                                <label className="form-label">Show Currency <i>*</i></label>
                                <div className='slectbx-singel'>
                                    <Select styles={customStyles} placeholder={'Show Currency'} onChange={(e) => { setShowCurrency(e.value) }} options={ShowCurrencyoptions} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='prdt-inr'>
                    <div className="form-heading">
                        <h3>Seo Details</h3>
                    </div>
                    <div className='row'>
                        <div className='col-md-4'>
                            <div className="mb-3 fv-row">
                                <label className="form-label">SEO Meta Title<i>*</i></label>
                                <input type="text" name="Date" className="form-control" placeholder="Enter SEO Meta Title" />
                            </div>
                        </div>
                        <div className='col-md-4'>
                            <div className="mb-3 fv-row">
                                <label className="form-label">SEO Meta Keyword<i>*</i></label>
                                <input type="text" name="Date" className="form-control" placeholder="Enter SEO Meta Keyword" />
                            </div>
                        </div>
                    </div>
                </div>

                <div className='prdt-inr'>
                    <div className="form-heading">
                        <h3>Links</h3>
                    </div>
                    <div className='row'>
                        <div className='col-md-4'>
                            <div className="mb-3 fv-row">
                                <label className="form-label">App Share Link<i>*</i></label>
                                <input type="text" name="Date" className="form-control" placeholder="Enter App Share Link" />
                            </div>
                        </div>
                        <div className='col-md-4'>
                            <div className="mb-3 fv-row">
                                <label className="form-label">Android Share Link<i>*</i></label>
                                <input type="text" name="Date" className="form-control" placeholder="Enter Android Share Link" />
                            </div>
                        </div>
                        <div className='col-md-4'>
                            <div className="mb-3 fv-row">
                                <label className="form-label">Iphone Share Link<i>*</i></label>
                                <input type="text" name="Date" className="form-control" placeholder="Enter Iphone Share Link" />
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
                                <label className="form-label">Upload Store Logo <i>*</i></label>
                                <div className='exclfil-upload'>
                                    <FileUploader children={<UploadBox type={"image"} />} handleChange={(file) => selectFile(file, "img1")} file={categoryFiles} multiple={true} types={["JPG", "PNG"]} />
                                </div>
                                {categoryFiles.length !== 0 && <div className='fileupld-show'>
                                    <ul>
                                        {categoryFiles && categoryFiles.map((file, i) => {
                                            return (
                                                <li key={i}>
                                                    <div className='flinner-shw'>
                                                        <ImageComponent file={file} />
                                                        <span onClick={() => removeFile(file.name, "img1")}><i class="fa fa-times" aria-hidden="true"></i></span>
                                                    </div>
                                                </li>
                                            )
                                        })}
                                    </ul>
                                </div>}
                            </div>

                        </div>

                        <div className='col-md-4'>
                            <div className="mb-3 fv-row">
                                <label className="form-label">Upload App Icon <i>*</i></label>
                                <div className='exclfil-upload'>
                                    <FileUploader children={<UploadBox type={"thumbnail"} />} handleChange={(file) => selectFile(file, "img2")} multiple={true} types={["JPG", "PNG"]} />
                                </div>

                                {thumbnailFiles.length !== 0 && <div className='fileupld-show'>
                                    <ul>
                                        {thumbnailFiles && thumbnailFiles.map((file, i) => {
                                            return (
                                                <li key={i}>
                                                    <div className='flinner-shw'>
                                                        <ImageComponent file={file} />
                                                        <span onClick={() => removeFile(file.name, "img2")}><i class="fa fa-times" aria-hidden="true"></i></span>
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
export default StoreInformationForm
// AddProductForm Function Components End


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
const UploadBox = ({ type }) => {
    return (
        <div className='imgupld-descrp'>
            <span><i class="fa fa-cloud-upload" aria-hidden="true"></i></span>
            <p>Click to upload or drag and drop</p>
            {type === "image" && <p className='notes'><b>Note:</b> Store logo dimension should be 200px in width * 50px in height</p>}
            {type === "thumbnail" && <p className='notes'><b>Note:</b> Upload app icon dimension should be 512px in width * 512px in height</p>}
        </div>
    )
}





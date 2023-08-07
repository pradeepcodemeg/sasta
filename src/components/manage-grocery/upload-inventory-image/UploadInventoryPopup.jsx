import React, { useState, useEffect, useRef } from 'react'
import { FileUploader } from "react-drag-drop-files";

function UploadInventoryPopup({ toggleUploadInventoryModal, setToggleUploadInventoryModal }) {
    console.log(toggleUploadInventoryModal);

    const [imageFiles, setImageFiles] = useState([]);

    const selectFile = (newFile) => {
        setImageFiles((prevFiles) => [...prevFiles, ...newFile]);
    };

    const removeFile = (name) => {
        setImageFiles((prevFiles) => prevFiles.filter((file) => file.name !== name));
    };

    return (
        <>
            <div className={`main-popup categry-popup ${toggleUploadInventoryModal ? 'pop-open' : 'pop-close'}`}>
                <div className="lm-outer">
                    <div className="lm-inner">
                        <div className="popup-inner">
                            <div className='popup-header'>
                                <div className='popup-heading'>
                                    <h3>Add Inventory Image</h3>
                                </div>
                            </div>
                            <div className='popup-body'>
                                <div className='form-main'>
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
                                    <div className="d-flex justify-content-end mt-4">
                                        <button type="button" className="btn btn-shadow btn-primary me-2">Save</button>
                                        <button type="button" className="btn btn-shadow btn-secondary" onClick={() => { setToggleUploadInventoryModal(p => !p) }}>Cancel</button></div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
                <div className="overlay" onClick={() => { setToggleUploadInventoryModal(p => !p) }}></div>
            </div>
        </>
    )
}


export default UploadInventoryPopup



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

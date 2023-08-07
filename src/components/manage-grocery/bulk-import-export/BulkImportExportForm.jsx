
import React, { useState } from 'react';
import { FileUploader } from "react-drag-drop-files";
const BulkImportExportForm = () => {

  const [categoryFiles, setCategoryFiles] = useState([]);
  const [thumbnailFiles, setThumbnailFiles] = useState([]);

  const [activeTab, setActiveTab] = useState(1);

  const handleTabClick = (tabNumber) => {
    setActiveTab(tabNumber);
  };
  const selectFile = (newFile, flag) => {
    if (flag == "img1") {
      setCategoryFiles((prevFiles) => [...prevFiles, ...newFile]);
    }
    else if (flag == "img2") {
      setThumbnailFiles((prevFiles) => [...prevFiles, ...newFile]);
    } else if (flag == "video") {
      setVideoFiles((prevFiles) => [...prevFiles, ...newFile]);
    }
  };

  const removeFile = (name, flag) => {
    if (flag == "img1") {
      setCategoryFiles((prevFiles) => prevFiles.filter((file) => file.name !== name));
    }
    else if (flag == "img2") {
      setThumbnailFiles((prevFiles) => prevFiles.filter((file) => file.name !== name));
    } else if (flag == "video") {
      setVideoFiles((prevFiles) => prevFiles.filter((file) => file.name !== name));
    }
  };
  return (
    <>
      <div className='row'>
        <div className='col-md-12'>
          <div className='d-flex jstfy-spcbtwn'>
            <div className='store-msg'>
              <p>Please download store data first before upload the excel file.</p>
            </div>
            <div className='smplinvtry-btn'>
                  <button className='btn btn-shadow btn-sample'>Sample Inventory Sheet</button>
                </div>
                </div>
        </div>
        <div className='col-md-6'>
          <div className="card">
            <div className='card-header'>
              <div className='crdhdr-title'>
                <h3>Upload Product</h3>
              </div>
            </div>
            <div className="card-body">
              <div className="mb-3 fv-row">
                <label className="form-label">Upload Product Excel File <i>*</i></label>
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
          </div>
        </div>
        <div className='col-md-6'>
          <div className="card">
            <div className='card-header'>
              <div className='crdhdr-title'>
                <h3>Upload Product Price</h3>
              </div>
            </div>
            <div className="card-body">
              <div className="mb-3 fv-row">
                <label className="form-label">Upload Product Price Excel File <i>*</i></label>
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
      </div>
    </>
  );
};

export default BulkImportExportForm;


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
      {type === "image" && <p className='notes'><b>Note:</b> Image dimension should be 370px in width * 208px in height</p>}
      {type === "thumbnail" && <p className='notes'><b>Note:</b> Thumbnail dimension should be 370px in width * 208px in height</p>}
      {type === "video" && <p className='notes'><b>Note:</b> Video dimension should be 370px in width * 208px in height</p>}
    </div>
  )
}
import React, { useState } from 'react'
import { FileUploader } from "react-drag-drop-files";

const fileTypes = ["JPG", "PNG", "GIF"];

function ImportUser({ toggleImportUserModal, setToggleImportUserModal }) {
  const [files, setFiles] = useState([]);

  const handleChange = (newFile) => {
    setFiles((prevFiles) => [...prevFiles, newFile]);
  };

  const removeFile = (name) => {
    setFiles((prevFiles) => prevFiles.filter((file) => file.name !== name));
  };


  return (
    <>
      <div className={`main-popup adduser-popup ${toggleImportUserModal ? 'pop-open' : 'pop-close'}`}>
        <div className="lm-outer">
          <div className="lm-inner">
            <div className="popup-inner">
              <div className='popup-header'>
                <div className='popup-heading'>
                  <h3>Upload Customers Excel File</h3>
                </div>
              </div>
              <div className='popup-body'>
                <div className='import-user'>
                  <div className='smpl-sheet'>
                    <p>Please Download Sample Sheet for reference to create new sheet.</p>
                    <div className='smpl-btn'>
                      <button type="button" className="btn btn-shadow btn-primary" onClick={() => { console.log("file") }}>Sample Sheet</button>
                    </div>
                  </div>
                  <div className='exlfile-imprt'>
                    <div className="mb-3 fv-row ">
                      <label className="form-label">Upload Excel <i>*</i></label>
                      <div className='exclfil-upload'>
                        <FileUploader handleChange={handleChange} children={<UploadBox />} multipal={false} file={files} types={["XLS", "XLSX"]} />
                      </div>

                      {files.length !== 0 && <div className='excel-rslt'>
                                    <ul>
                                    {files && files.map(({ name }, i) => {
                                            return (
                                                <li key={i}>
                                                    <div className='flinner-shw'>
                                                    <p className='exlfl-ttl'><em><i class="fa fa-file-excel-o" aria-hidden="true"></i></em> {name} </p>
                                                        <span onClick={() => removeFile(name)}><i class="fa fa-times" aria-hidden="true"></i></span>
                                                    </div>
                                                </li>
                                            )
                                        })}
                                    </ul>
                                </div>}
                    </div>
                    <div className="d-flex justify-content-end mt-4">
                      <button type="button" className="btn btn-shadow btn-primary me-2">Save</button>
                      <button type="button" className="btn btn-shadow btn-secondary" onClick={() => { setToggleImportUserModal(p => !p) }}>Cancel</button></div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
        <div className="overlay" onClick={() => { setToggleImportUserModal(p => !p) }}></div>
      </div>
    </>
  )
}

export default ImportUser


// compont which show as a file upload tag
const UploadBox = () => {
  return (
    <div className='imgupld-descrp'>
      <span><i class="fa fa-file-excel-o" aria-hidden="true"></i></span>
      <p>Click to upload or drag and drop</p>
      <p className='notes'><b>Note:</b> Excel file size should be less then 100kb</p>
    </div>
  )
}



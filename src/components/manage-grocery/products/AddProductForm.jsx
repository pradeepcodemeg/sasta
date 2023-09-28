import React, { useState, useEffect, useRef } from 'react'
import Select from 'react-select'
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
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
const AddProductForm = () => {
    // Files which getting from FileProviders Components
    const [categoryFiles, setCategoryFiles] = useState([]);
    const [thumbnailFiles, setThumbnailFiles] = useState([]);
    const [videoFiles, setVideoFiles] = useState([]);

    const [value, setValue] = useState(null);
    const [tags, setTags] = useState([]);

    const [multipleVariant,setMultipleVariant] = useState([1])
    // Options for Select
    const [category, setCategory] = useState(null)
    const [subCategory, setSubCategory] = useState(null)
    const [gstType, setGstType] = useState(null)
    const [stockStatus, setStockStatusType] = useState(null)
    const [brand, setBrand] = useState(null)
    const [updatePrdcts, setUpdatePrdcts] = useState(null)
    const Categoryoptions = [
        { value: 'Fruits & Vegetables', label: 'Fruits & Vegetables' },
        { value: 'Cakes & bakery', label: 'Cakes & bakery' },
        { value: 'Drink', label: 'Drink' },
    ];
    const Brandoptions = [
        { value: 'Britania', label: 'Britania' },
        { value: 'Nestle', label: 'Nestle' },
    ];
    const SubCategryoptions = [
        { value: 'Apple', label: 'Apple' },
        { value: 'Mango', label: 'Mango' },
        { value: 'Cheeku', label: 'Cheeku' },
    ];

    const GstTypeoptions = [
        { value: 'Inclusive', label: 'Inclusive' },
        { value: 'Exclusive', label: 'Exclusive' },
    ];
    const UpdatePrdctsoptions = [
        { value: 'Static Sections ', label: 'Static Sections ' },
        { value: 'Best Deals', label: 'Best Deals' },
        { value: 'Top Trends sections', label: 'Top Trends sections' },
    ];
    const StockStatusoptions = [
        { value: 'Continue selling after out of stock', label: 'Continue selling after out of stock' },
        { value: 'Show out of stock on minimum quantity', label: 'Show out of stock on minimum quantity' },
        { value: 'Show out of stock on threshold quantity', label: 'Show out of stock on threshold quantity' },
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
            <div className='main-form'>
                <div className='prdt-inr'>
                    <div className="form-heading">
                        <h3>Product Description</h3>
                    </div>
                    <div className='row'>
                        <div className='col-md-3'>
                            <div className="mb-3 fv-row">
                                <label className="form-label">Product Name <i>*</i></label>
                                <input type="text" name="Date" className="form-control" placeholder="Enter Product Name Title" />
                            </div>
                        </div>
                        <div className='col-md-3'>
                            <div className="mb-3 fv-row">
                                <label className="form-label">Brand <i>*</i></label>
                                <div className='slectbx-singel'>
                                    <Select styles={customStyles} placeholder={'Select Brand'} onChange={(e) => { setBrand(e.value) }} options={Brandoptions} />
                                </div>
                            </div>
                        </div>
                        <div className='col-md-3'>
                            <div className="mb-3 fv-row">
                                <label className="form-label">Category <i>*</i></label>
                                <div className='slectbx-singel'>
                                    <Select styles={customStyles} placeholder={'Select Category'} onChange={(e) => { setCategory(e.value) }} options={Categoryoptions} />
                                </div>
                            </div>
                        </div>
                        <div className='col-md-3'>
                            <div className="mb-3 fv-row">
                                <label className="form-label">Sub Category <i>*</i></label>
                                <div className='slectbx-singel'>
                                    <Select styles={customStyles} placeholder={'Select Sub Category'} onChange={(e) => { setSubCategory(e.value) }} options={SubCategryoptions} />
                                </div>
                            </div>
                        </div>
                        <div className='col-md-12'>
                            <div className="mb-3 fv-row">
                                <label className="form-label">Description <i>*</i></label>
                                <div className='text-editor'>
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
                        <div className='col-md-6'>
                            <div className="mb-3 fv-row">
                                <label className="form-label">Tags <i>*</i></label>
                                <input type="text" name="Date" onKeyUp={(e) => addTags(e)} className="form-control" placeholder="Enter multiple tags here" />

                                {tags.length !== 0 && <div className='tags-rslt'>
                                    {tags.map((item, i) => {
                                        return (
                                            <div className='tag-ttl' key={i}>
                                                <span>{item}</span>
                                                <em onClick={() => deleteTag(item)}><i class="fa fa-times" aria-hidden="true"></i></em>
                                            </div>
                                        )
                                    })}
                                </div>}
                            </div>
                        </div>
                        <div className='col-md-6'>
                            <div className="mb-3 fv-row">
                                <label className="form-label">Mark As Special <i>*</i></label>
                                <div className='slectbx-singel'>
                                    <Select styles={customStyles} placeholder={'Mark as Special'} onChange={(e) => { setUpdatePrdcts(e.value) }} options={UpdatePrdctsoptions} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>


                <div className='prdt-inr'>
                    <div className="form-heading">
                        <h3>Select Taxes Option</h3>
                    </div>
                    <div className='row'>
                        <div className='col-md-4'>
                            <div className="mb-3 fv-row">
                                <label className="form-label">GST Rate Type <i>*</i></label>
                                <Select styles={customStyles} placeholder={'Select Gst Type'} onChange={(e) => { setGstType(e.value) }} options={GstTypeoptions} />
                            </div>
                        </div>
                        <div className='col-md-4'>
                            <div className="mb-3 fv-row">
                                <label className="form-label">GST Rate <i>*</i></label>
                                <input type="text" name="Date" className="form-control" placeholder="Enter Product Name Title" />
                            </div>
                        </div>
                        <div className='col-md-4'>
                            <div className="mb-3 fv-row">
                                <label className="form-label">HSN Code <i>*</i></label>
                                <input type="text" name="Date" className="form-control" placeholder="Enter Product Name Title" />
                            </div>
                        </div>
                    </div>
                </div>

                <div className='prdt-inr'>
                    <div className="form-heading flxform-hdng">
                        <h3>Variant</h3>
                        <div className=''>
                            <button onClick={()=>{setMultipleVariant(p=>[...p,p.length + 1])}} className='btn btn-primary'>Add More Variant</button>
                        </div>
                    </div>
                    {/* add var */}
                    {multipleVariant.map((item,idx)=>{
                        return(
                            <div className='add-variant'>
                    <div className='row'>
                        <div className='col-md-4'>
                            <div className="mb-3 fv-row">
                                <label className="form-label">Sort <i>*</i></label>
                                <input type="text" name="Date" className="form-control" placeholder="Enter Product Name Title" />
                            </div>
                        </div>
                        <div className='col-md-4'>
                            <div className="mb-3 fv-row">
                                <label className="form-label">SKU <i>*</i></label>
                                <input type="text" name="Date" className="form-control" placeholder="Enter Product Name Title" />
                            </div>
                        </div>
                        <div className='col-md-4'>
                            <div className="mb-3 fv-row">
                                <label className="form-label">Weight/No of Units/Quantity <i>*</i></label>
                                <input type="text" name="Date" className="form-control" placeholder="Enter Product Name Title" />
                            </div>
                        </div>
                        <div className='col-md-4'>
                            <div className="mb-3 fv-row">
                                <label className="form-label">Unit <i>*</i></label>
                                <input type="text" name="Date" className="form-control" placeholder="Enter Product Name Title" />
                            </div>
                        </div>
                        <div className='col-md-4'>
                            <div className="mb-3 fv-row">
                                <label className="form-label">MRP <i>*</i></label>
                                <input type="text" name="Date" className="form-control" placeholder="Enter Product Name Title" />
                            </div>
                        </div>
                        <div className='col-md-4'>
                            <div className="mb-3 fv-row">
                                <label className="form-label">Discount <i>*</i></label>
                                <input type="text" name="Date" className="form-control" placeholder="Enter Product Name Title" />
                            </div>
                        </div>
                        <div className='col-md-4'>
                            <div className="mb-3 fv-row">
                                <label className="form-label">Price <i>*</i></label>
                                <input type="text" name="Date" className="form-control" placeholder="Enter Product Name Title" />
                            </div>
                        </div>
                        <div className='col-md-4'>
                            <div className="mb-3 fv-row">
                                <label className="form-label">Max Quantity Per Order <i>*</i></label>
                                <input type="text" name="Date" className="form-control" placeholder="Enter Product Name Title" />
                            </div>
                        </div>
                        <div className='col-md-4'>
                            <div className="mb-3 fv-row">
                                <label className="form-label">Stock <i>*</i></label>
                                <input type="text" name="Date" className="form-control" placeholder="Enter Product Name Title" />
                            </div>
                        </div>
                        <div className='col-md-4'>
                            <div className="mb-3 fv-row">
                                <label className="form-label">Min Stock Alert <i>*</i></label>
                                <input type="text" name="Date" className="form-control" placeholder="Enter Product Name Title" />
                            </div>
                        </div>
                        <div className='col-md-4'>
                            <div className="mb-3 fv-row">
                                <label className="form-label">Variant Out of Stock Status <i>*</i></label>
                                <Select styles={customStyles} placeholder={'Select Stock Staus'} onChange={(e) => { setStockStatusType(e.value) }} options={StockStatusoptions} />
                            </div>
                        </div>
                    </div>
                    </div>
                        )
                    })}

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
                                <label className="form-label">Upload Video <i>*</i></label>
                                <div className='exclfil-upload'>
                                    <FileUploader children={<UploadBox type={"video"} />} handleChange={(file) => selectFile(file, "video")} file={videoFiles}  multiple={true} types={["MP4", "MOV", "AVI"]} />
                                </div>
                                {videoFiles.length !== 0 && <div className='fileupld-show videouplod-show'>
                                    <ul>
                                        {videoFiles && videoFiles.map((file, i) => {
                                            return (
                                                <li key={i}>
                                                    <div className='flinner-shw'>
                                                        <VideoComponent file={file} />
                                                        {/* <p>{file.name}</p> */}
                                                        <span onClick={() => removeFile(file.name, "video")}><i class="fa fa-times" aria-hidden="true"></i></span>
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
                                <label className="form-label">Video Thumbnail Image <i>*</i></label>
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
export default AddProductForm
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
            {type === "image" && <p className='notes'><b>Note:</b> Image dimension should be 370px in width * 208px in height</p>}
            {type === "thumbnail" && <p className='notes'><b>Note:</b> Thumbnail dimension should be 370px in width * 208px in height</p>}
            {type === "video" && <p className='notes'><b>Note:</b> Video dimension should be 370px in width * 208px in height</p>}
        </div>
    )
}


function VideoComponent({ file }) {
    const videoRef = useRef(null);

    const handleFileRead = (event) => {
        const fileData = event.target.result;
        videoRef.current.src = fileData;
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

    return <video ref={videoRef} autoPlay />;
}

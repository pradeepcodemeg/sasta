import React, { useState, useEffect, useRef } from 'react'
import Select from 'react-select'

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
const AddUserRoleForm = () => {


    const [value, setValue] = useState(null);

    // Options for Select
    const [role, setRole] = useState(null)


    const Roleoptions = [
        { value: 'Store Admin', label: 'Store Admin' },
        { value: 'Staff', label: 'Staff' },
    ];


    return (
        <>
            <div className='main-form'>
                <div className='prdt-inr'>
                    <div className="form-heading">
                        <h3>Product Description</h3>
                    </div>
                    <div className='row'>
                        <div className='col-md-6'>
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
                                <label className="form-label">Role <i>*</i></label>
                                <div className='slectbx-singel'>
                                    <Select styles={customStyles} placeholder={'Select Role'} onChange={(e) => { setRole(e.value) }} options={Roleoptions} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>


                <div className='prdt-inr'>
                    <div className="form-heading">
                        <h3>Select Roles</h3>
                    </div>
                    <div className='row'>
                        <div className='col-md-12'>
                            <div className="userrole-chk">
                                <ul className='Userrole-list'>
                                    <li>
                                        <div className="cstmall-chkmain">
                                            <p>Orders</p>
                                            <div className="slect-allchk">
                                                <label>
                                                    <input type="checkbox" />
                                                    <span></span>
                                                </label>
                                            </div>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="cstmall-chkmain">
                                            <p>Dashboards</p>
                                            <div className="slect-allchk">
                                                <label>
                                                    <input type="checkbox" />
                                                    <span></span>
                                                </label>
                                            </div>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="cstmall-chkmain">
                                            <p>Customers</p>
                                            <div className="slect-allchk">
                                                <label>
                                                    <input type="checkbox" />
                                                    <span></span>
                                                </label>
                                            </div>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="cstmall-chkmain">
                                            <p>Manage Grocery</p>
                                            <div className="slect-allchk">
                                                <label>
                                                    <input type="checkbox" />
                                                    <span></span>
                                                </label>
                                            </div>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="cstmall-chkmain">
                                            <p>Reports</p>
                                            <div className="slect-allchk">
                                                <label>
                                                    <input type="checkbox" />
                                                    <span></span>
                                                </label>
                                            </div>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="cstmall-chkmain">
                                        <p>Marketing & Promotion</p>
                                            <div className="slect-allchk">
                                                <label>
                                                    <input type="checkbox" />
                                                    <span></span>
                                                </label>
                                            </div>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="cstmall-chkmain">
                                            <p>User Management</p>
                                            <div className="slect-allchk">
                                                <label>
                                                    <input type="checkbox" />
                                                    <span></span>
                                                </label>
                                            </div>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="cstmall-chkmain">
                                            <p>Runner Management</p>
                                            <div className="slect-allchk">
                                                <label>
                                                    <input type="checkbox" />
                                                    <span></span>
                                                </label>
                                            </div>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="cstmall-chkmain">
                                            <p>Enquiry Form</p>
                                            <div className="slect-allchk">
                                                <label>
                                                    <input type="checkbox" />
                                                    <span></span>
                                                </label>
                                            </div>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="cstmall-chkmain">
                                            <p>Content Management</p>
                                            <div className="slect-allchk">
                                                <label>
                                                    <input type="checkbox" />
                                                    <span></span>
                                                </label>
                                            </div>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="cstmall-chkmain">
                                            <p>Settings</p>
                                            <div className="slect-allchk">
                                                <label>
                                                    <input type="checkbox" />
                                                    <span></span>
                                                </label>
                                            </div>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="cstmall-chkmain">
                                            <p>Loyalty Program</p>
                                            <div className="slect-allchk">
                                                <label>
                                                    <input type="checkbox" />
                                                    <span></span>
                                                </label>
                                            </div>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='prdt-inr'>
                    <div className="form-heading">
                        <h3>Admin App Permissions</h3>
                    </div>
                    <div className='row'>
                        <div className='col-md-12'>
                            <div className="userrole-chk">
                                <ul className='Userrole-list'>
                                    <li>
                                        <div className="cstmall-chkmain">
                                        <p>Orders</p>
                                            <div className="slect-allchk">
                                                <label>
                                                    <input type="checkbox" />
                                                    <span></span>
                                                </label>
                                            </div>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="cstmall-chkmain">
                                        <p>Create Orders</p>
                                            <div className="slect-allchk">
                                                <label>
                                                    <input type="checkbox" />
                                                    <span></span>
                                                </label>
                                            </div>
                                        </div>
                                    </li>
                                </ul>
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
export default AddUserRoleForm
// AddProductForm Function Components End

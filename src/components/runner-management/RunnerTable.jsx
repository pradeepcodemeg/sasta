import React, { useState } from 'react';
import { Link } from 'react-router-dom';
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


const orders = [
    {
        runnerName: 'Rahul Singh',
        email: 'rahul@gmail.com',
        contact: '7858689595',
    },
    {
        runnerName: 'Rahul Singh',
        email: 'rahul@gmail.com',
        contact: '7858689595',
    },
    {
        runnerName: 'Rahul Singh',
        email: 'rahul@gmail.com',
        contact: '7858689595',
    },
    {
        runnerName: 'Rahul Singh',
        email: 'rahul@gmail.com',
        contact: '7858689595',
    },

];

for (let i in orders) {
    orders[i]["imgUri"] = "	https://codemeg.com/demo-site/Caly-admin/assets/media/avatars/300-1.jpg"
}

// console.log(orders)




const RunnerTable = () => {
    const [selectAll, setSelectAll] = useState(false);
    const [selectedRows, setSelectedRows] = useState([]);

    const handleSelectAll = () => {
        setSelectAll(!selectAll);
        if (!selectAll) {
            setSelectedRows(orders.map((item) => item.orderId));
        } else {
            setSelectedRows([]);
        }
    };


    const handleRowSelect = (orderId) => {
        if (selectedRows.includes(orderId)) {
            setSelectedRows(selectedRows.filter((id) => id !== orderId));
        } else {
            setSelectedRows([...selectedRows, orderId]);
        }
    };





    // Options for Select
    const [status, setStatus] = useState(null)
    const Statusoptions = [
        { value: 'Active', label: 'Active' },
        { value: 'In Active', label: 'In Active' },
    ];


    return (
        <>

            <div className="responsive-table">
                <table className="table table-row-dashed">
                    <thead>
                        <tr className="fw-bolder text-muted">
                            <th className="w-10px">
                                <div className="cstmall-chkmain d-flex align-items-center">
                                    <div className="slect-allchk me-2">
                                        <label>
                                            <input
                                                type="checkbox"
                                                checked={selectAll}
                                                onChange={handleSelectAll}
                                            />
                                            <span></span>
                                        </label>
                                    </div>
                                </div>
                            </th>
                            <th className="w-100px text-center">Profile Image</th>
                            <th className="w-125px">Full Name</th>
                            <th className="w-100px">Mobile</th>
                            <th className="w-70px">Email</th>
                            <th className="w-150px">Status</th>
                            <th className="w-175px text-end">Action</th>
                        </tr>
                    </thead>
                    <tbody className=''>
                        {orders && orders.map((item) => {
                            return (
                                <tr key={item.orderId} className="">
                                    <td className="w-10px">
                                        <div className="cstmall-chkmain d-flex align-items-center">
                                            <div className="slect-allchk me-2">
                                                <label>
                                                    <input
                                                        type="checkbox"
                                                        checked={selectedRows.includes(item.orderId)}
                                                        onChange={() => handleRowSelect(item.orderId)} />
                                                    <span></span>
                                                </label>
                                            </div>
                                        </div>
                                    </td>
                                    <td className="text-center"><span className='prdctimg-bg'><img src={item.imgUri} /></span></td>
                                    <td className=""> {item.runnerName}</td>
                                    <td className=""> {item.contact}</td>
                                    <td className="">{item.email}</td>
                                    <td className="">
                                        <div className='slectbx-singel'>
                                            <Select styles={customStyles} placeholder={'Select Status'} onChange={(e) => { setStatus(e.value) }} options={Statusoptions} />
                                        </div>
                                    </td>
                                    <td className="">
                                        <div className="d-flex justify-content-end align-items-center flex-shrink-0">
                                            <div className="svcrd-togl me-2">
                                                <div className="tgl-sld">
                                                    <label>
                                                        <input type="checkbox" />
                                                        <span>
                                                            <i></i>
                                                        </span>
                                                    </label>
                                                </div>
                                            </div>
                                           
                                            <Link to="/edit-runner" className="btn btn-icon btn-bg-light btn-active-color-primary btn-sm me-2">
                                                <span className="svg-icon svg-icon-3">
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                                        <path opacity="0.3" d="M21.4 8.35303L19.241 10.511L13.485 4.755L15.643 2.59595C16.0248 2.21423 16.5426 1.99988 17.0825 1.99988C17.6224 1.99988 18.1402 2.21423 18.522 2.59595L21.4 5.474C21.7817 5.85581 21.9962 6.37355 21.9962 6.91345C21.9962 7.45335 21.7817 7.97122 21.4 8.35303ZM3.68699 21.932L9.88699 19.865L4.13099 14.109L2.06399 20.309C1.98815 20.5354 1.97703 20.7787 2.03189 21.0111C2.08674 21.2436 2.2054 21.4561 2.37449 21.6248C2.54359 21.7934 2.75641 21.9115 2.989 21.9658C3.22158 22.0201 3.4647 22.0084 3.69099 21.932H3.68699Z" fill="black"></path>
                                                        <path d="M5.574 21.3L3.692 21.928C3.46591 22.0032 3.22334 22.0141 2.99144 21.9594C2.75954 21.9046 2.54744 21.7864 2.3789 21.6179C2.21036 21.4495 2.09202 21.2375 2.03711 21.0056C1.9822 20.7737 1.99289 20.5312 2.06799 20.3051L2.696 18.422L5.574 21.3ZM4.13499 14.105L9.891 19.861L19.245 10.507L13.489 4.75098L4.13499 14.105Z" fill="black"></path>
                                                    </svg>
                                                </span>
                                            </Link>
                                            <Link to="/runner-detail" className="btn btn-icon btn-bg-light btn-active-color-primary btn-sm me-2">
                                                <span className="svg-icon svg-icon-3">
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16" opacity="0.3">
                                                        <path d="M10.5 8a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0z"></path>
                                                        <path d="M0 8s3-5.5 8-5.5S16 8 16 8s-3 5.5-8 5.5S0 8 0 8zm8 3.5a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7z">
                                                        </path>
                                                    </svg>
                                                </span>
                                            </Link>
                                            <Link to="/" className="btn btn-icon btn-bg-light btn-active-color-primary btn-sm" data-bs-toggle="modal" data-bs-target="#kt_modal_create_campaign">
                                                <span className="svg-icon svg-icon-2" data-bs-toggle="tooltip" data-bs-placement="top" title="" data-bs-original-title="Delete">
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" opacity="0.3">
                                                        <path d="M5 9C5 8.44772 5.44772 8 6 8H18C18.5523 8 19 8.44772 19 9V18C19 19.6569 17.6569 21 16 21H8C6.34315 21 5 19.6569 5 18V9Z">
                                                        </path>
                                                        <path opacity="0.5" d="M5 5C5 4.44772 5.44772 4 6 4H18C18.5523 4 19 4.44772 19 5V5C19 5.55228 18.5523 6 18 6H6C5.44772 6 5 5.55228 5 5V5Z">
                                                        </path>
                                                        <path opacity="0.5" d="M9 4C9 3.44772 9.44772 3 10 3H14C14.5523 3 15 3.44772 15 4V4H9V4Z">
                                                        </path>
                                                    </svg>
                                                </span>
                                            </Link>
                                        </div>
                                    </td>
                                </tr>
                            )
                        })}
                    </tbody>
                </table>
            </div>
        </>
    );
};




export default RunnerTable
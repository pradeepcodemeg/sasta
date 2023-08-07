import React, { useState } from 'react';
import { Link } from 'react-router-dom';

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
        orderId: '45258',
        dlivryStatus: 'On The Way',
        deliveryDate: '12/07/2023',
    },
    {
        orderId: '45258',
        dlivryStatus: 'Completed',
        deliveryDate: '12/07/2023',
    },
    {
        orderId: '45258',
        dlivryStatus: 'On The Way',
        deliveryDate: '12/07/2023',
    },
    {
        orderId: '45258',
        dlivryStatus: 'Completed',
        deliveryDate: '12/07/2023',
    },

];



// console.log(orders)




const RunnerHistoryTable = () => {
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
                            <th className="w-100px">Order Id</th>
                            <th className="w-100px">Delivery Status</th>
                            <th className="w-100px">Delivery Date</th>
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
                                    <td className="">{item.orderId}</td>
                                    <td className="">{item.dlivryStatus}</td>
                                    <td className="">{item.deliveryDate}</td>
                                    <td className="">
                                        <div className="d-flex justify-content-end align-items-center flex-shrink-0">
                                            <Link to="/order-detail" className="btn btn-icon btn-bg-light btn-active-color-primary btn-sm me-2">
                                                <span className="svg-icon svg-icon-3">
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16" opacity="0.3">
                                                        <path d="M10.5 8a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0z"></path>
                                                        <path d="M0 8s3-5.5 8-5.5S16 8 16 8s-3 5.5-8 5.5S0 8 0 8zm8 3.5a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7z">
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





export default RunnerHistoryTable
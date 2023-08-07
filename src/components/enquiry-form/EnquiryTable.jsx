import React from 'react'
import { Link } from 'react-router-dom'

const EnquiryTable = () => {
    const dummyArray = Array(10).fill(1)
    return (
        <>
            <div className="responsive-table">
                <table className="table table-row-dashed">
                    <thead>
                        <tr>
                            <th className='w-10px'>
                                #
                            </th>
                            <th className='w-100px'>
                                Platform
                            </th>
                            <th className='w-100px'>
                                Name
                            </th>
                            <th className="w-100px">
                                Email
                            </th>
                            <th className="w-100px">
                                Phone
                            </th>
                            <th className="w-100px">
                                Received on
                            </th>
                            <th className="w-70px text-end">Action</th>

                        </tr>
                    </thead>
                    <tbody className=''>
                        {dummyArray.map((item, index) => {
                            return (
                                <tr key={item.orderId} className="">
                                    <td className="">{index + 1}</td>
                                    <td className="">Web</td>
                                    <td className="">Rahul Singh</td>
                                    <td className="">rahul@gmail.com</td>
                                    <td className="">9520845847</td>
                                    <td className="">2020-23-05</td>
                                    <td className=''>
                                        <div className="d-flex justify-content-end align-items-center flex-shrink-0">
                                            <button className="btn btn-icon btn-bg-light btn-active-color-primary btn-sm me-2">
                                                <span className="svg-icon svg-icon-3">
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16" opacity="0.3">
                                                        <path d="M10.5 8a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0z"></path>
                                                        <path d="M0 8s3-5.5 8-5.5S16 8 16 8s-3 5.5-8 5.5S0 8 0 8zm8 3.5a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7z">
                                                        </path>
                                                    </svg>
                                                </span>
                                            </button>
                                        </div>
                                    </td>
                                </tr>
                            )
                        })}
                    </tbody>
                </table>
            </div>
        </>
    )
}


export default EnquiryTable
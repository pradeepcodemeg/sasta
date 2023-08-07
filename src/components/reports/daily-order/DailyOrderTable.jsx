import React from 'react'
import { Link } from 'react-router-dom'

const DailyOrderTable = () => {
    const dummyArray = Array(10).fill(1)
  return (
    <>
    <div className="responsive-table">
        <table className="table table-row-dashed">
            <thead>
                <tr>
                    <th className='w-10px'>#</th>
                    <th className='w-175px'>Date</th>
                    <th className='w-70px text-center'>Order count </th>
                    <th className="w-100px text-center"> Total Payment</th>
                    <th className="w-100px text-center"> Discount </th>
                    <th className="w-100px text-center"> Payment in cash </th>
                    <th className="w-100px text-center">Online payment</th>
                    <th className="w-100px text-center">Payment on android</th>
                    <th className="w-100px text-center">Payment on IOS</th>
                    <th className="w-100px text-center">Payment on website</th>
                    <th className="w-70px text-end">View</th>
                </tr>
            </thead>
            <tbody className=''>
            {dummyArray.map((item, index) => {
                    return (
                        <tr key={item.orderId} className="">
                            <td className="">{index + 1}</td>
                            <td className=""><span className='whtspc-nowrp'>2020-23-05</span></td>
                            <td className="text-center">2</td>
                            <td className="text-center">₹2500</td>
                            <td className="text-center">₹2800</td>
                            <td className="text-center">₹2500</td>
                            <td className="text-center">₹2800</td>
                            <td className="text-center">₹2800</td>
                            <td className="text-center">₹2500</td>
                            <td className="text-center">₹2800</td>
                            <td className='text-end'>
                            <div className="d-flex justify-content-end align-items-center flex-shrink-0">
                            <Link to="/" className="btn btn-icon btn-bg-light btn-active-color-primary btn-sm">
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
  )
}



export default DailyOrderTable
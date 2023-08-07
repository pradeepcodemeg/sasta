import React from 'react'
import { Link } from 'react-router-dom'

const SoldItemReportTable = () => {
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
                    Date
                    </th>
                    <th className='w-100px'>
                    HSN/SKU
                    </th>
                    <th className="w-100px">
                   Product Id
                    </th>
                    <th className="w-100px">
                    Name
                    </th>
                    <th className="w-100px">
                   Variant Id
                    </th>
                    <th className="w-70px text-center">Sale Quantity</th>

                </tr>
            </thead>
            <tbody className=''>
            {dummyArray.map((item, index) => {
                    return (
                        <tr key={item.orderId} className="">
                            <td className="">{index + 1}</td>
                            <td className="">2020-23-05</td>
                            <td className="">2WM19122020</td>
                            <td className="">2WM19122020</td>
                            <td className="">2WM19122020</td>
                            <td className="">2WM19122020</td>
                            <td className='text-center'>
                             1
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


export default SoldItemReportTable
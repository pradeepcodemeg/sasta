import React from 'react'
const orders = [
    {
      productName: 'AMUL GOLD MILK',
      Weight: '1 lt',
      UnitPrice: '₹78.00',
      Quantity: '2',
      netAmount: '156.00',
      taxType: 'CGST + SGST (0.00%)',
      taxAmount: '0',
      totalAmount: '₹156.00',
      comment: '--',
    },
    {
        productName: 'AMUL GOLD MILK',
        Weight: '1 lt',
        UnitPrice: '₹78.00',
        Quantity: '2',
        netAmount: '156.00',
        taxType: 'CGST + SGST (0.00%)',
        taxAmount: '0',
        totalAmount: '₹156.00',
        comment: '--',
      },
      {
        productName: 'AMUL GOLD MILK',
        Weight: '1 lt',
        UnitPrice: '₹78.00',
        Quantity: '2',
        netAmount: '156.00',
        taxType: 'CGST + SGST (0.00%)',
        taxAmount: '0',
        totalAmount: '₹156.00',
        comment: '--',
      },
      {
        productName: 'AMUL GOLD MILK',
        Weight: '1 lt',
        UnitPrice: '₹78.00',
        Quantity: '2',
        netAmount: '156.00',
        taxType: 'CGST + SGST (0.00%)',
        taxAmount: '0',
        totalAmount: '₹156.00',
        comment: '--',
      },
    
  ];
const OrderedTableList = () => {
    return (
        <>
            <div className="responsive-table">
                <table className="table table-row-dashed">
                    <thead>
                        <tr>
                            <th className=''>
                                #
                            </th>
                            <th className=''>
                                Product Name
                            </th>
                            <th className=''>
                                Weight
                            </th>
                            <th className="">
                                Unit Price
                            </th>
                            <th className="">
                                Net Amount
                            </th>
                            <th className="">
                                Tax Type
                            </th>
                            <th className="">
                                Tax Amount
                            </th>
                            <th className="">
                                Total Amount
                            </th>
                            <th className="">
                                Comment
                            </th>
                            <th className="">Action</th>

                        </tr>
                    </thead>
                    <tbody className=''>
                        {orders && orders.map((item, index) => {
                            return (
                                <tr key={item.orderId} className="">
                                    <td className="">{index + 1}</td>
                                    <td className="">{item.productName}</td>
                                    <td className="">{item.Weight}</td>
                                    <td className="">{item.UnitPrice}</td>
                                    <td className="">{item.Quantity}</td>
                                    <td className="">{item.netAmount}</td>
                                    <td className="">{item.taxType}</td>
                                    <td className="">{item.taxAmount}</td>
                                    <td className="">{item. comment}</td>
                                    <td className=''>
                                        <div className="d-flex justify-content-end align-items-center flex-shrink-0">
                                            <a href="#" className="btn btn-sm btn-icon btn-bg-light btn-active-color-primary acept-btn me-2">
                                                <span className="svg-icon svg-icon-2">
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-check" viewBox="0 0 16 16" opacity="0.8">
                                                        <path d="M10.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.267.267 0 0 1 .02-.022z"></path>
                                                    </svg>
                                                </span>
                                            </a>
                                            <a href="#" className="btn btn-icon btn-bg-light btn-active-color-danger btn-sm rejct-btn">
                                                <span className="svg-icon svg-icon-3">
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 16 16" fill="currentColor" opacity="0.8">
                                                        <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" fill="red"></path>
                                                    </svg>
                                                </span>
                                            </a>
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

export default OrderedTableList
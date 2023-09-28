import React, { useState } from 'react';
import { Link } from 'react-router-dom';
const orders = [
  {
     amount: '2000',
     transactionDate: '2023-06-07',
  },
  {
    amount: '4000',
    transactionDate: '2023-06-07',
  },
  {
    amount: '500',
     transactionDate: '2023-06-07',
  },
  {
    amount: '1000',
    transactionDate: '2023-06-07',
  },
];

// console.log(orders)




const OverallCreditHistoryTable = () => {
  return (
    <>

      <div className="responsive-table">
        <table className="table table-row-dashed">
          <thead>
            <tr className="fw-bolder text-muted">
              <th className="w-auto">
                #
              </th>
              <th className="w-auto">Date</th>
              <th className="w-auto">Balance</th>
            </tr>
          </thead>
          <tbody className=''>
            {orders && orders.map((item, index) => {
              return (
                <tr key={item.vendorId} className="">
                  <td className="w-auto">{index+1}</td>
                  <td className="">
                    <p className='whtspc-nowrp'>{item.transactionDate}</p>
                  </td>
                  <td className="">
                  {/* <p className='whtspc-nowrp credit-blnce'><span className='text-success'><em>+</em>{item.amount}</span></p> */}
                  <p className='whtspc-nowrp credit-blnce'><span className='text-danger'><em>-</em>{item.amount}</span></p>
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

export default OverallCreditHistoryTable

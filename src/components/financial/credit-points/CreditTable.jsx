import React, { useState } from 'react';
import { Link } from 'react-router-dom';
const orders = [
  {
    userId: '#1255',
    userName: 'John Doe',
     creditBalance: '20000',
     creditedDate: '2023-06-07',
  },
  {
    userId: '#1255',
    userName: 'Mariam Sheikh',
     creditBalance: '20000',
     creditedDate: '2023-06-07',
  },
  {
    userId: '#1256',
    userName: 'Asif Ali',
     creditBalance: '20000',
     creditedDate: '2023-06-07',
  },
  {
    userId: '#1257',
    userName: 'Ram Singh',
     creditBalance: '20000',
     creditedDate: '2023-06-07',
  },
  {
    userId: '#1258',
    userName: 'Aftab Ahmad',
     creditBalance: '20000',
     creditedDate: '2023-06-07',
  },
  {
   userId: '#1259',
   userName: 'Ranu Mondal',
    creditBalance: '20000',
    creditedDate: '2023-06-07',
  },
];

// console.log(orders)




const CreditTable = () => {


  return (
    <>

      <div className="responsive-table">
        <table className="table table-row-dashed">
          <thead>
            <tr className="fw-bolder text-muted">
              <th className="w-10px">
                #
              </th>
              <th className="w-auto">User ID</th>
              <th className="w-auto">Name</th>
              <th className="w-auto">Balance</th>
              <th className="w-auto">Date</th>
              <th className="w-175px text-end">Action</th>
            </tr>
          </thead>
          <tbody className=''>
            {orders && orders.map((item, index) => {
              return (
                <tr key={item.vendorId} className="">
                  <td className="w-10px">{index+1}</td>
                  <td className="">{item.userId}</td>
                  <td className="">
                    <p className='whtspc-nowrp'>{item.userName}</p>
                  </td>
                  <td className="">
                  <p className='whtspc-nowrp'>{item.creditBalance}</p>
                 </td>
                  <td className="">
                  <p className='whtspc-nowrp'> {item.creditedDate}</p>
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
                      <Link to="/overall-credit-summary"
                          class="btn btn-sm btn-icon btn-bg-light btn-active-color-primary"
                        >
                          <span class="svg-icon svg-icon-2">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="24"
                              height="24"
                              viewBox="0 0 24 24"
                              fill="none"
                            >
                              <rect
                                opacity="0.5"
                                x="18"
                                y="13"
                                width="13"
                                height="2"
                                rx="1"
                                transform="rotate(-180 18 13)"
                                fill="black"
                              ></rect>
                              <path
                                d="M15.4343 12.5657L11.25 16.75C10.8358 17.1642 10.8358 17.8358 11.25 18.25C11.6642 18.6642 12.3358 18.6642 12.75 18.25L18.2929 12.7071C18.6834 12.3166 18.6834 11.6834 18.2929 11.2929L12.75 5.75C12.3358 5.33579 11.6642 5.33579 11.25 5.75C10.8358 6.16421 10.8358 6.83579 11.25 7.25L15.4343 11.4343C15.7467 11.7467 15.7467 12.2533 15.4343 12.5657Z"
                                fill="black"
                              ></path>
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



export default CreditTable
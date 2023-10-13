import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import Select from 'react-select'
import SelectBoxTwo from '../../formtools/SelectBoxTwo';
import { OrderRejectionForm } from './OrderRejectionForm';
import { useDispatch, useSelector } from 'react-redux';
import { fetchOrderLists } from '../../../store/slices/Order';



const tabelHeading = [
  "#", "Order ID", "Customer Name", " Contact No.", "Address", "TOTAL(₹)", "Order Received", "Delivery Time Slot", "Order Status","Change Order Status Action", "Runners", "Runners Order Status", "Payment Status", "Action"
]

const optionsStatus = [
  { value: 'Due', label: 'Due' },
  { value: 'Delivering', label: 'Delivering' },
  { value: 'Delivered', label: 'Delivered' },
  { value: 'Rejected', label: 'Rejected' },
]

const optionsFIR = [
  { value: 'Shivam singh', label: 'Shivam Singh' },
  { value: 'Rahul Mishra', label: 'Rahul Mishra' },
  { value: 'Aftab Ahmad', label: 'Aftab Ahmad' },
];

const optionsSEC = [
  { value: 'On The Way', label: 'On The Way' },
  { value: 'Completed', label: 'Completed' },
  { value: 'Pending', label: 'Pending' },
];

const optionsThi = [
  { value: 'Recieved', label: 'Recieved' },
  { value: 'Pending', label: 'Pending' },
];


const OrderListTable = ({data}) => {

  const [orderStatus, setOrderStatus] = useState({ value: 'Select Order Status', label: 'Select Order Status' })
  const [runner, setRunner] = useState({ value: 'Select Runner', label: 'Select Runner' })
  const [runnerStatus, setRunnerStatus] = useState({ value: 'Select Runner Staus', label: 'Select Runner Staus' })
  const [paymentStatus, setPaymentStatus] = useState({ value: 'Payment Staus', label: 'Payment Staus' })

  return (
    <>
      <div className="responsive-table">
        <table className="table table-row-dashed">
          <thead>
            <tr>
              {
                tabelHeading.map((title, i) => <th key={i} className=''>{title}</th>)
              }
            </tr>
          </thead>
          <tbody className=''>
            {data && 
            <>
            {data.map((item, index) => {
              return (
                <tr key={item.orderId} className="">
                  <td className="">{index + 1}</td>
                  <td className="">{item.id}</td>
                  <td className="">{item.userFullname}</td>
                  <td className="">{item.userMobile}</td>
                  <td className="">
                 {item.delivery_address && item.delivery_address[0] && item.delivery_address[0].area
                  ? item.delivery_address[0].area.slice(0, 25) + "..."
                  : "N/A"}
                  </td>
                  <td className="">{item.totalAmount}</td>
                  <td className="">{item.date_time}</td>
                  <td className="">{item.delivery_slot_id === '0' ? '9AM TO 7PM' : '7AM T0 10PM'}</td>
                  <td className="">{item.status}</td>
                  <td className="">
                  <div className='ordrstats-slectbx'  style={{whiteSpace:'nowrap'}}>
                    <SelectBoxTwo options={optionsStatus} newStatus={item.status} setNewStatus={setOrderStatus} />
                    </div>
                  </td>
                  <td className="">
                    <div className='runer-slectbx'>
                       <SelectBoxTwo options={optionsFIR} newStatus={runner} setNewStatus={setRunner} />
                    </div>
                  </td>
                  <td className="">
                     <div className='runerstats-slectbx'  style={{whiteSpace:'nowrap'}}>
                        <SelectBoxTwo options={optionsSEC} newStatus={runnerStatus} setNewStatus={setRunnerStatus} />
                    </div>
                  </td>
                  <td className="">
                    <div className='pymn-slectbx'>
                       <SelectBoxTwo options={optionsThi} newStatus={paymentStatus} setNewStatus={setPaymentStatus} />
                    </div>
                  </td>
                  <td className=''>
                    <div className="d-flex justify-content-end align-items-center flex-shrink-0">
                      <Link to="/order-detail" className="btn btn-icon btn-bg-light btn-active-color-primary btn-sm">
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
            </>
            }
            
          </tbody>
        </table>
      </div>



      {/* OrderRejectionForm popup */}
      <OrderRejectionForm newStatus={orderStatus} setNewStatus={setOrderStatus} />
      {/* OrderRejectionForm popup */}
    </>
  );
};

export default OrderListTable;
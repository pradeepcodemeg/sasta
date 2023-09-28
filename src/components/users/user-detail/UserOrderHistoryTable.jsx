import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import Select from 'react-select'
import SelectBoxTwo from '../../formtools/SelectBoxTwo';
import { OrderRejectionForm } from '../../orders/order-list/OrderRejectionForm';

const orders = [
  {
    orderId: 1623,
    // customerName: 'John Doe',
    totalItems: '8',
    refundStaus: 'Refund Pending',
    totalAmount: '480',
    PaymentMode: 'Online',
    orderRecevied: '2023-06-07 12:30 PM',
    deliveryTimeSlot: '2023-06-07 12:30 PM',
    // contactNumber: '123-456-7890',
    orderstatus: 'Delivered',
    DeliveryTimeSlot: '10:00 AM -7:00 PM',
  },
  {
    orderId: 1624,
    // customerName: 'John Doe',
    totalItems: '4',
    refundStaus: 'Refunded',
    totalAmount: '480',
    PaymentMode: 'COD',
    orderRecevied: '2023-06-07 12:30 PM',
    deliveryTimeSlot: '2023-06-07 12:30 PM',
    // contactNumber: '123-456-7890',
    orderStatus: 'Delivered',
    DeliveryTimeSlot: '10:00 AM -7:00 PM',
  },
  {
    orderId: 1625,
    // customerName: 'John Doe',
    refundStaus: 'Refund Pending',
    totalItems: '3',
    totalAmount: '480',
    PaymentMode: 'Online',
    orderRecevied: '2023-06-07 12:30 PM',
    deliveryTimeSlot: '2023-06-07 12:30 PM',
    // contactNumber: '123-456-7890',
    orderStatus: 'Delivered',
    DeliveryTimeSlot: '10:00 AM -7:00 PM',
  },
  {
    orderId: 1626,
    // customerName: 'John Doe',
    totalItems: '6',
    refundStaus: 'Refunded',
    totalAmount: '480',
    PaymentMode: 'COD',
    orderRecevied: '2023-06-07 12:30 PM',
    deliveryTimeSlot: '2023-06-07 12:30 PM',
    // contactNumber: '123-456-7890',
    orderStatus: 'Delivered',
    DeliveryTimeSlot: '10:00 AM -7:00 PM',
  },
  {
    orderId: 1627,
    // customerName: 'John Doe',
    totalItems: '5',
    refundStaus: 'Refund Pending',
    totalAmount: '480',
    PaymentMode: 'Online',
    orderRecevied: '2023-06-07 12:30 PM',
    deliveryTimeSlot: '2023-06-07 12:30 PM',
    contactNumber: '123-456-7890',
    orderStatus: 'Delivered',
    DeliveryTimeSlot: '10:00 AM -7:00 PM',
  },
  {
    orderId: 1628,
    // customerName: 'John Doe',
    totalItems: '8',
    refundStaus: 'Refunded',
    totalAmount: '480',
    PaymentMode: 'COD',
    orderRecevied: '2023-06-07 12:30 PM',
    deliveryTimeSlot: '2023-06-07 12:30 PM',
    contactNumber: '123-456-7890',
    orderStatus: 'Delivered',
    DeliveryTimeSlot: '10:00 AM -7:00 PM',
  },
  {
    orderId: 1629,
    // customerName: 'John Doe',
    totalItems: '5',
    refundStaus: 'Refund Pending',
    totalAmount: '480',
    PaymentMode: 'Online',
    orderRecevied: '2023-06-07 12:30 PM',
    deliveryTimeSlot: '2023-06-07 12:30 PM',
    // contactNumber: '123-456-7890',
    orderStatus: 'Delivered',
    DeliveryTimeSlot: '10:00 AM -7:00 PM',
  },
  {
    orderId: 1630,
    // customerName: 'John Doe',
    totalItems: '9',
    refundStaus: 'Refund Pending',
    totalAmount: '480',
    PaymentMode: 'Online',
    orderRecevied: '2023-06-07 12:30 PM',
    deliveryTimeSlot: '2023-06-07 12:30 PM',
    // contactNumber: '123-456-7890',
    orderStatus: 'Delivered',
    DeliveryTimeSlot: '10:00 AM -7:00 PM',
  },
  {
    orderId: 1631,
    // customerName: 'John Doe',
    totalItems: '3',
    refundStaus: 'Refunded',
    totalAmount: '480',
    PaymentMode: 'COD',
    orderRecevied: '2023-06-07 12:30 PM',
    deliveryTimeSlot: '2023-06-07 12:30 PM',
    // contactNumber: '123-456-7890',
    orderStatus: 'Delivered',
    DeliveryTimeSlot: '10:00 AM -7:00 PM',
  },
  {
    orderId: 1632,
    // customerName: 'John Doe',
    totalItems: '4',
    refundStaus: 'Refund Pending',
    totalAmount: '480',
    PaymentMode: 'Online',
    orderRecevied: '2023-06-07 12:30 PM',
    deliveryTimeSlot: '2023-06-07 12:30 PM',
    // contactNumber: '123-456-7890',
    orderStatus: 'Delivered',
    DeliveryTimeSlot: '10:00 AM -7:00 PM',
  }
];

const tabelHeading = [
  "#", "Order ID", "Total Items", "TOTAL(₹)", "Order Received", "Delivery Time Slot", "Order Status", "Runners", "Runners Order Status", "Payment Status", "Action"
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


const UserOrderHistoryTable = () => {

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
            {orders && orders.map((item, index) => {
              return (
                <tr key={item.orderId} className="">
                  <td className="">{index + 1}</td>
                  <td className="">{item.orderId}</td>
                  <td className="">{item.totalItems}</td>
                  {/* <td className="">{item.contactNumber}</td>
                  <td className="">{item.Address}</td> */}
                  <td className="">{item.totalAmount}</td>
                  <td className="">{item.orderRecevied}</td>
                  <td className="">{item.DeliveryTimeSlot}</td>
                  <td className="">
                  <div className='ordrstats-slectbx' style={{whiteSpace:'nowrap'}}>
                    <SelectBoxTwo options={optionsStatus} newStatus={orderStatus} setNewStatus={setOrderStatus} />
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
          </tbody>
        </table>
      </div>



      {/* OrderRejectionForm popup */}
      <OrderRejectionForm newStatus={orderStatus} setNewStatus={setOrderStatus} />
      {/* OrderRejectionForm popup */}
    </>
  );
};



export default UserOrderHistoryTable
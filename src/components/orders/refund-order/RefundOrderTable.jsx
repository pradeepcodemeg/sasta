import React from 'react';
import { Link } from 'react-router-dom';
const orders = [
  {
    orderId: 1623,
    customerName: 'John Doe',
    refundStaus: 'Refund Pending',
    totalAmount: '480',
    PaymentMode: 'Online',
    orderRecevied: '2023-06-07 12:30 PM',
    deliveryTimeSlot: '2023-06-07 12:30 PM',
    contactNumber: '123-456-7890',
    orderStatus: 'Delivered'
  },
  {
    orderId: 1624,
    customerName: 'John Doe',
    refundStaus: 'Refunded',
    totalAmount: '480',
    PaymentMode: 'COD',
    orderRecevied: '2023-06-07 12:30 PM',
    deliveryTimeSlot: '2023-06-07 12:30 PM',
    contactNumber: '123-456-7890',
    orderStatus: 'Delivered'
  },
  {
    orderId: 1625,
    customerName: 'John Doe',
    refundStaus: 'Refund Pending',
    totalAmount: '480',
    PaymentMode: 'Online',
    orderRecevied: '2023-06-07 12:30 PM',
    deliveryTimeSlot: '2023-06-07 12:30 PM',
    contactNumber: '123-456-7890',
    orderStatus: 'Delivered'
  },
  {
    orderId: 1626,
    customerName: 'John Doe',
    refundStaus: 'Refunded',
    totalAmount: '480',
    PaymentMode: 'COD',
    orderRecevied: '2023-06-07 12:30 PM',
    deliveryTimeSlot: '2023-06-07 12:30 PM',
    contactNumber: '123-456-7890',
    orderStatus: 'Delivered'
  },
  {
    orderId: 1627,
    customerName: 'John Doe',
    refundStaus: 'Refund Pending',
    totalAmount: '480',
    PaymentMode: 'Online',
    orderRecevied: '2023-06-07 12:30 PM',
    deliveryTimeSlot: '2023-06-07 12:30 PM',
    contactNumber: '123-456-7890',
    orderStatus: 'Delivered'
  },
  {
    orderId: 1628,
    customerName: 'John Doe',
    refundStaus: 'Refunded',
    totalAmount: '480',
    PaymentMode: 'COD',
    orderRecevied: '2023-06-07 12:30 PM',
    deliveryTimeSlot: '2023-06-07 12:30 PM',
    contactNumber: '123-456-7890',
    orderStatus: 'Delivered'
  },
  {
    orderId: 1629,
    customerName: 'John Doe',
    refundStaus: 'Refund Pending',
    totalAmount: '480',
    PaymentMode: 'Online',
    orderRecevied: '2023-06-07 12:30 PM',
    deliveryTimeSlot: '2023-06-07 12:30 PM',
    contactNumber: '123-456-7890',
    orderStatus: 'Delivered'
  },
  {
    orderId: 1630,
    customerName: 'John Doe',
    refundStaus: 'Refund Pending',
    totalAmount: '480',
    PaymentMode: 'Online',
    orderRecevied: '2023-06-07 12:30 PM',
    deliveryTimeSlot: '2023-06-07 12:30 PM',
    contactNumber: '123-456-7890',
    orderStatus: 'Delivered'
  },
  {
    orderId: 1631,
    customerName: 'John Doe',
    refundStaus: 'Refunded',
    totalAmount: '480',
    PaymentMode: 'COD',
    orderRecevied: '2023-06-07 12:30 PM',
    deliveryTimeSlot: '2023-06-07 12:30 PM',
    contactNumber: '123-456-7890',
    orderStatus: 'Delivered'
  },
  {
    orderId: 1632,
    customerName: 'John Doe',
    refundStaus: 'Refund Pending',
    totalAmount: '480',
    PaymentMode: 'Online',
    orderRecevied: '2023-06-07 12:30 PM',
    deliveryTimeSlot: '2023-06-07 12:30 PM',
    contactNumber: '123-456-7890',
    orderStatus: 'Delivered'
  }
];


const RefundOrderTable = () => {
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
                Order ID
              </th>
              <th className=''>
                Refund Status
              </th>
              <th className="">
                Customer Name
              </th>
              <th className="">
                Contact No.
              </th>
              <th className="">
                TOTAL(₹)
              </th>
              <th className="">
                Payment Method
              </th>
              <th className="">
                Order Received
              </th>
              <th className="">
                Delivery Time Slot
              </th>
              <th className="">
                Order Status
              </th>
              <th className="">Action</th>

            </tr>
          </thead>
          <tbody className=''>
            {orders && orders.map((item, index) => {
              return (
                <tr key={item.orderId} className="">
                  <td className="">{index + 1}</td>
                  <td className="">{item.orderId}</td>
                  <td className="">{item.refundStaus}</td>
                  <td className="">{item.customerName}</td>
                  <td className="">{item.contactNumber}</td>
                  <td className="">{item.totalAmount}</td>
                  <td className="">{item.PaymentMode}</td>
                  <td className="">{item.orderRecevied}</td>
                  <td className="">{item.deliveryTimeSlot}</td>
                  <td className="">{item.orderStatus}</td>
                  <td className=''>
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
  );
};

export default RefundOrderTable;
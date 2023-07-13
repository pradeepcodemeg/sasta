
import React from 'react';
const orders = [
  {
    orderId: 1,
    customerName: 'John Doe',
    orderAmount: 50.99,
    dateTime: '2023-06-07 12:30 PM',
    contactNumber: '123-456-7890',
    status: 'Delivered'
  },
  {
    orderId: 2,
    customerName: 'Jane Smith',
    orderAmount: 75.5,
    dateTime: '2023-06-06 10:45 AM',
    contactNumber: '987-654-3210',
    status: 'Due'
  },
  {
    orderId: 3,
    customerName: 'Mike Johnson',
    orderAmount: 32.75,
    dateTime: '2023-06-05 2:15 PM',
    contactNumber: '555-123-4567',
    status: 'Shipped'
  },
  {
    orderId: 4,
    customerName: 'Sarah Anderson',
    orderAmount: 120.0,
    dateTime: '2023-06-04 9:00 AM',
    contactNumber: '987-654-3210',
    status: 'Shipped'
  },
  {
    orderId: 5,
    customerName: 'Alex Thompson',
    orderAmount: 45.99,
    dateTime: '2023-06-03 6:30 PM',
    contactNumber: '555-789-1234',
    status: 'Due'
  },
  {
    orderId: 6,
    customerName: 'Emily Davis',
    orderAmount: 88.5,
    dateTime: '2023-06-02 11:15 AM',
    contactNumber: '999-888-7777',
    status: 'Delivered'
  },
  {
    orderId: 7,
    customerName: 'David Wilson',
    orderAmount: 60.0,
    dateTime: '2023-06-01 3:45 PM',
    contactNumber: '123-456-7890',
    status: 'Delivered'
  },
  {
    orderId: 8,
    customerName: 'Olivia Martin',
    orderAmount: 27.99,
    dateTime: '2023-05-31 8:30 AM',
    contactNumber: '555-777-8888',
    status: 'Rejected'
  },
  {
    orderId: 9,
    customerName: 'Daniel Brown',
    orderAmount: 93.75,
    dateTime: '2023-05-30 1:00 PM',
    contactNumber: '999-333-2222',
    status: 'Shipped'
  },
  {
    orderId: 10,
    customerName: 'Sophia Clark',
    orderAmount: 15.0,
    dateTime: '2023-05-29 5:30 PM',
    contactNumber: '777-888-9999',
    status: 'Active'
  }
];


const Tables = ({status}) => {
  // console.log(status);
  const sortTableBasedOnStatusActive = orders.filter(item=>item.status === status)
  // console.log(sortTableBasedOnStatusActive);
  return (
    <>
     
      <div className="responsive-table">
        <table className="table table-row-dashed">
          <thead>
            <tr>
              <th className=''>
              Order id
              </th>
              <th  className="">
              Customer name
              </th>
              <th className="">
                Order Amount
              </th>
              <th  className="">
              Date
              </th>
              <th className="">
              Contact Number
              </th>
            </tr>
          </thead>
          <tbody className=''>
            {sortTableBasedOnStatusActive && sortTableBasedOnStatusActive.map((item)=>{
              return(
              <tr key={item.orderId} className="">
              <td className="">{item.orderId}</td>
              <td  className="">{item.customerName}</td>
              <td className="">{item.orderAmount}</td>
              <td className="">{item.status}</td>
              <td className="">{item.contactNumber}</td>
            </tr>
              )
            })}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Tables;
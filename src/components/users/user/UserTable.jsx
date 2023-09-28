import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import EditUserForm from './EditUserForm';
import EditCreditForm from '../../financial/credit-points/EditCreditForm';
const orders = [
  {
    userId: 1,
    customerName: 'John Doe',
    totalOrder: 20,
    dateTime: '2023-06-07 12:30 PM',
    contactNumber: '123-456-7890',
    status: 'Delivered',
    email: 'jhon@gmail.com',
    phone: '123-456-7890',
    city: 'Hyedrabad',
    regDate: '2023-06-07 12:30 PM',
    totalOrder: '12',
    loyltypoints: '12',
    userType: 'Business',
    creditPoint: '20000',
  },
  {
    userId: 2,
    customerName: 'John Doe',
    totalOrder: 20,
    dateTime: '2023-06-07 12:30 PM',
    contactNumber: '123-456-7890',
    status: 'Delivered',
    email: 'jhon@gmail.com',
    phone: '123-456-7890',
    city: 'Hyedrabad',
    regDate: '2023-06-07 12:30 PM',
    totalOrder: '12',
    loyltypoints: '12',
    userType: 'Individual',
    creditPoint: '',
  },
  {
    userId: 3,
    customerName: 'John Doe',
    totalOrder: 20,
    dateTime: '2023-06-07 12:30 PM',
    contactNumber: '123-456-7890',
    status: 'Delivered',
    email: 'jhon@gmail.com',
    phone: '123-456-7890',
    city: 'Hyedrabad',
    regDate: '2023-06-07 12:30 PM',
    totalOrder: '12',
    loyltypoints: '12',
    userType: 'Individual',
    creditPoint: '',
  },
  {
    userId: 4,
    customerName: 'John Doe',
    totalOrder: 20,
    dateTime: '2023-06-07 12:30 PM',
    contactNumber: '123-456-7890',
    status: 'Delivered',
    email: 'jhon@gmail.com',
    phone: '123-456-7890',
    city: 'Hyedrabad',
    regDate: '2023-06-07 12:30 PM',
    totalOrder: '12',
    loyltypoints: '12',
    userType: 'Business',
    creditPoint: '20000',
  },
  {
    userId: 5,
    customerName: 'John Doe',
    totalOrder: 20,
    dateTime: '2023-06-07 12:30 PM',
    contactNumber: '123-456-7890',
    status: 'Delivered',
    email: 'jhon@gmail.com',
    phone: '123-456-7890',
    city: 'Hyedrabad',
    regDate: '2023-06-07 12:30 PM',
    totalOrder: '12',
    loyltypoints: '12',
    userType: 'Business',
    creditPoint: '20000',
  },
  {
    userId: 6,
    customerName: 'John Doe',
    totalOrder: 20,
    dateTime: '2023-06-07 12:30 PM',
    contactNumber: '123-456-7890',
    status: 'Delivered',
    email: 'jhon@gmail.com',
    phone: '123-456-7890',
    city: 'Hyedrabad',
    regDate: '2023-06-07 12:30 PM',
    totalOrder: '12',
    loyltypoints: '12',
    userType: 'Business',
    creditPoint: '20000',
  },
  {
    userId: 7,
    customerName: 'John Doe',
    totalOrder: 20,
    dateTime: '2023-06-07 12:30 PM',
    contactNumber: '123-456-7890',
    status: 'Delivered',
    email: 'jhon@gmail.com',
    phone: '123-456-7890',
    city: 'Hyedrabad',
    regDate: '2023-06-07 12:30 PM',
    totalOrder: '12',
    loyltypoints: '12',
    userType: 'Individual',
    creditPoint: '',
  },
  {
    userId: 8,
    customerName: 'John Doe',
    totalOrder: 20,
    dateTime: '2023-06-07 12:30 PM',
    contactNumber: '123-456-7890',
    status: 'Delivered',
    email: 'jhon@gmail.com',
    phone: '123-456-7890',
    city: 'Hyedrabad',
    regDate: '2023-06-07 12:30 PM',
    totalOrder: '12',
    loyltypoints: '12',
    userType: 'Individual',
    creditPoint: '',
  },
  {
    userId: 9,
    customerName: 'John Doe',
    totalOrder: 20,
    dateTime: '2023-06-07 12:30 PM',
    contactNumber: '123-456-7890',
    status: 'Delivered',
    email: 'jhon@gmail.com',
    phone: '123-456-7890',
    city: 'Hyedrabad',
    regDate: '2023-06-07 12:30 PM',
    totalOrder: '12',
    loyltypoints: '12',
    userType: 'Individual',
    creditPoint: '',
  },
  {
    userId: 10,
    customerName: 'John Doe',
    totalOrder: 20,
    dateTime: '2023-06-07 12:30 PM',
    contactNumber: '123-456-7890',
    status: 'Delivered',
    email: 'jhon@gmail.com',
    phone: '123-456-7890',
    city: 'Hyedrabad',
    regDate: '2023-06-07 12:30 PM',
    totalOrder: '12',
    loyltypoints: '12',
    userType: 'Business',
    creditPoint: '20000',
  }
];

for (let i in orders) {
  orders[i]["imgUri"] = "https://dev.codemeg.com/caly/dist/assets/media/avatar.png"
}

// console.log(orders)




const UserTable = () => {


  const [toggleEditUserModal, setToggleEditUserModal] = useState(false)
  const [toggleEditCreditModal, setToggleEditCreditModal] = useState(false)
  const [selectAll, setSelectAll] = useState(false);
  const [selectedRows, setSelectedRows] = useState([]);

  const handleSelectAll = () => {
    setSelectAll(!selectAll);
    if (!selectAll) {
      setSelectedRows(orders.map((item) => item.userId));
    } else {
      setSelectedRows([]);
    }
  };


  const handleRowSelect = (userId) => {
    if (selectedRows.includes(userId)) {
      setSelectedRows(selectedRows.filter((id) => id !== userId));
    } else {
      setSelectedRows([...selectedRows, userId]);
    }
  };

  return (
    <>

      <div className="responsive-table">
        <table className="table table-row-dashed">
          <thead>
            <tr className="fw-bolder text-muted">
              <th className="w-10px">
                <div className="cstmall-chkmain d-flex align-items-center">
                  <div className="slect-allchk me-2">
                    <label>
                      <input
                        type="checkbox"
                        checked={selectAll}
                        onChange={handleSelectAll}
                      />
                      <span></span>
                    </label>
                  </div>
                </div>
              </th>
              <th className="w-100px">User ID</th>
              <th className="w-100px">Name</th>
              <th className="w-100px">Phone</th>
              <th className="w-100px">Email</th>
              <th className="w-100px">City</th>
              <th className="w-70px">Reg. Date</th>
              <th className="w-100px">User Type</th>
              <th className="w-100px">Credit Balance</th>
              <th className="w-100px text-center">Total Orders</th>
              <th className="w-70px text-center">Loyalty Points</th>
              <th className="w-175px text-end">Action</th>
            </tr>
          </thead>
          <tbody className=''>
            {orders && orders.map((item) => {
              return (
                <tr key={item.userId} className="">
                  <td className="w-10px">
                    <div className="cstmall-chkmain d-flex align-items-center">
                      <div className="slect-allchk me-2">
                        <label>
                          <input
                            type="checkbox"
                            checked={selectedRows.includes(item.userId)}
                            onChange={() => handleRowSelect(item.userId)}
                          />
                          <span></span>
                        </label>
                      </div>
                    </div>
                  </td>
                  <td className="">{item.userId}</td>
                  <td className="">
                    <p className='whtspc-nowrp'>{item.customerName}</p>
                    {/* <img src={item.imgUri} /> */}
                  </td>
                  <td className="">
                  <p className='whtspc-nowrp'>{item.phone}</p>
                 </td>
                  <td className="">
                  <p className='whtspc-nowrp'> {item.email}</p>
                  </td>
                  <td className=""><p className='whtspc-nowrp'>{item.city}</p></td>
                  <td className=""><p className='whtspc-nowrp'>{item.regDate}</p></td>
                  <td className=""><p className='whtspc-nowrp'>{item.userType}</p></td>
                  <td className=""><p className='whtspc-nowrp'><span class="cursur-pointer" onClick={()=>{setToggleEditCreditModal(p=> !p)}}>{item.creditPoint}</span></p></td>
                  <td className="text-center">{item.totalOrder}</td>
                  <td className="text-center">{item.loyltypoints}</td>
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
                      <button  onClick={()=>{setToggleEditUserModal(p=> !p)}} className="btn btn-icon btn-bg-light btn-active-color-primary btn-sm me-2">
                        <span className="svg-icon svg-icon-3">
                          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                            <path opacity="0.3" d="M21.4 8.35303L19.241 10.511L13.485 4.755L15.643 2.59595C16.0248 2.21423 16.5426 1.99988 17.0825 1.99988C17.6224 1.99988 18.1402 2.21423 18.522 2.59595L21.4 5.474C21.7817 5.85581 21.9962 6.37355 21.9962 6.91345C21.9962 7.45335 21.7817 7.97122 21.4 8.35303ZM3.68699 21.932L9.88699 19.865L4.13099 14.109L2.06399 20.309C1.98815 20.5354 1.97703 20.7787 2.03189 21.0111C2.08674 21.2436 2.2054 21.4561 2.37449 21.6248C2.54359 21.7934 2.75641 21.9115 2.989 21.9658C3.22158 22.0201 3.4647 22.0084 3.69099 21.932H3.68699Z" fill="black"></path>
                            <path d="M5.574 21.3L3.692 21.928C3.46591 22.0032 3.22334 22.0141 2.99144 21.9594C2.75954 21.9046 2.54744 21.7864 2.3789 21.6179C2.21036 21.4495 2.09202 21.2375 2.03711 21.0056C1.9822 20.7737 1.99289 20.5312 2.06799 20.3051L2.696 18.422L5.574 21.3ZM4.13499 14.105L9.891 19.861L19.245 10.507L13.489 4.75098L4.13499 14.105Z" fill="black"></path>
                          </svg>
                        </span>
                      </button>
                      <Link to="/user-detail" className="btn btn-icon btn-bg-light btn-active-color-primary btn-sm">
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

      <EditCreditForm toggleEditCreditModal={toggleEditCreditModal} setToggleEditCreditModal={setToggleEditCreditModal}/>
      <EditUserForm toggleEditUserModal={toggleEditUserModal} setToggleEditUserModal={setToggleEditUserModal}/>
    </>
  );
};

export default UserTable;
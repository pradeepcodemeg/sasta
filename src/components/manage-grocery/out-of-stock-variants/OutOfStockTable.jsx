import React, { useState } from 'react';
import { Link } from 'react-router-dom';
const orders = [
  {
    subCategoryName: 'Fresh Fruits',
    categoryName: 'FRUITS & VEGETABLES',
    productName: 'Chikku (Sapodilla)',
    variant: '2',
    Status: 'Delete',
  },
  {
    subCategoryName: 'Fresh Fruits',
    categoryName: 'FRUITS & VEGETABLES',
    productName: 'BANANA YELLAKI',
    variant: '2',
    Status: 'Active',
  },
  {
    subCategoryName: 'Fresh Fruits',
    categoryName: 'FRUITS & VEGETABLES',
    productName: 'Apple Red Delicious',
    variant: '2',
    Status: 'Disable',
  },
  {
    subCategoryName: 'Fresh Fruits',
    categoryName: 'FRUITS & VEGETABLES',
    productName: 'Apple Red Delicious',
    variant: '2',
    Status: 'Enable',
  },
  {
    subCategoryName: 'Fresh Fruits',
    categoryName: 'FRUITS & VEGETABLES',
    productName: 'ALPHONSO MANGO',
    variant: '2',
    Status: 'Active',
  },
  
];

for (let i in orders) {
  orders[i]["imgUri"] = "https://s3.amazonaws.com/store-asset/100_80/1656208461-1654653694-Untitled.jpeg"
}

// console.log(orders)




const OutOfStockTable = () => {
  const [selectAll, setSelectAll] = useState(false);
  const [selectedRows, setSelectedRows] = useState([]);

  const handleSelectAll = () => {
    setSelectAll(!selectAll);
    if (!selectAll) {
      setSelectedRows(orders.map((item) => item.orderId));
    } else {
      setSelectedRows([]);
    }
  };


  const handleRowSelect = (orderId) => {
    if (selectedRows.includes(orderId)) {
      setSelectedRows(selectedRows.filter((id) => id !== orderId));
    } else {
      setSelectedRows([...selectedRows, orderId]);
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
              <th className="w-175px">Product Name</th>
              <th className="w-100px text-center">Image</th>
              <th className="w-100px">Category</th>
              <th className="w-100px">Sub Category</th>
              <th className="w-70px text-center">Variants</th>
              <th className="w-70px text-center">Sort</th>
              <th className="w-70px text-end">Action</th>
            </tr>
          </thead>
          <tbody className=''>
            {orders && orders.map((item) => {
              return (
                <tr key={item.orderId} className="">
                  <td className="w-10px">
                    <div className="cstmall-chkmain d-flex align-items-center">
                      <div className="slect-allchk me-2">
                        <label>
                          <input
                            type="checkbox"
                            checked={selectedRows.includes(item.orderId)}
                            onChange={() => handleRowSelect(item.orderId)}
                          />
                          <span></span>
                        </label>
                      </div>
                    </div>
                  </td>
                  <td className=""> {item.productName}</td>
                  <td className="text-center"><span className='prdctimg-bg'><img src={item.imgUri} /></span></td>
                  <td className=""> {item.categoryName}</td>
                  <td className=""> {item.subCategoryName}</td>
                  <td className="text-center"><Link to="/product" className='text-dark-hover'>{item.variant}</Link></td>
                  <td className="text-center">{item.Status}</td>
                  <td className="">
                  <div className="d-flex justify-content-end align-items-center flex-shrink-0">
																	<Link to="/edit-product" className="btn btn-icon btn-bg-light btn-active-color-primary btn-sm me-2">
																		<span className="svg-icon svg-icon-3">
																			<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
																				<path opacity="0.3" d="M21.4 8.35303L19.241 10.511L13.485 4.755L15.643 2.59595C16.0248 2.21423 16.5426 1.99988 17.0825 1.99988C17.6224 1.99988 18.1402 2.21423 18.522 2.59595L21.4 5.474C21.7817 5.85581 21.9962 6.37355 21.9962 6.91345C21.9962 7.45335 21.7817 7.97122 21.4 8.35303ZM3.68699 21.932L9.88699 19.865L4.13099 14.109L2.06399 20.309C1.98815 20.5354 1.97703 20.7787 2.03189 21.0111C2.08674 21.2436 2.2054 21.4561 2.37449 21.6248C2.54359 21.7934 2.75641 21.9115 2.989 21.9658C3.22158 22.0201 3.4647 22.0084 3.69099 21.932H3.68699Z" fill="black"></path>
																				<path d="M5.574 21.3L3.692 21.928C3.46591 22.0032 3.22334 22.0141 2.99144 21.9594C2.75954 21.9046 2.54744 21.7864 2.3789 21.6179C2.21036 21.4495 2.09202 21.2375 2.03711 21.0056C1.9822 20.7737 1.99289 20.5312 2.06799 20.3051L2.696 18.422L5.574 21.3ZM4.13499 14.105L9.891 19.861L19.245 10.507L13.489 4.75098L4.13499 14.105Z" fill="black"></path>
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





export default OutOfStockTable
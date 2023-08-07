import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import AddUserForm from '../../user/AddUserForm';
import ImportUser from '../../user/ImportUser';
import AddCategoryForm from '../../manage-grocery/category/AddCategoryForm';
import EditCategoryForm from '../../manage-grocery/category/EditCategoryForm';
import AddSubCategoryForm from '../../manage-grocery/sub-category/AddSubCategoryForm';
import UploadInventoryPopup from '../../manage-grocery/upload-inventory-image/UploadInventoryPopup';
import AddConfigurPointForm from '../../loyalty-program/configure-points/AddConfigurPointForm';
import AddLoyaltyCouponForm from '../../loyalty-program/loyalty-coupons/AddLoyaltyCouponForm';


function Breadcrumb({ data }) {
  const [toggleUserModal, setToggleUserModal] = useState(false)
  const [toggleImportUserModal, setToggleImportUserModal] = useState(false)
  const [toggleAddCategryModal, setToggleAddCategryModal] = useState(false)
  const [toggleEditCategryModal, setToggleEditCategryModal] = useState(false)
  const [toggleAddSubCategryModal, setToggleAddSubCategryModal] = useState(false)
  const [toggleUploadInventoryModal, setToggleUploadInventoryModal] = useState(false)
  const [toggleAddConfigurPointModal, setToggleAddConfigurPointModal] = useState(false)
  const [toggleAddLoyaltyCouponsModal, setToggleAddLoyaltyCouponsModal] = useState(false)
  const location = useLocation();
  const route = location.pathname.split('/').filter(p => (p !== "" && p !== "sasta"))

  // console.log(route)

  return (
    <>
      <div className="breadcrumb-main">
        <div className="breadcrumb-inner">
          <div className="breadcrumb-left">
            <h3 className='breadcrumb-pagehdng'>
              {route.length
                ?
                (
                  route.map((key, i) => (
                    <span key={i}>{key.replaceAll('-', ' ')}</span>
                  ))
                )
                : (
                  <span>Dashboard</span>
                )}
            </h3>

            <ul className="breadcrumb-title">
              <li className="active breadcrumb-item">
                <Link href="/dashboard">Home</Link>
              </li>
              <li className="breadcrumb-item">
                {route.map((key, i) => {
                  return (
                    <span key={i}>{key.replaceAll('-', " ")}</span>
                  )
                })}
              </li>
            </ul>
          </div>
          <div className="breadcrumb-right">



            {/* start-userlist-data */}
            {location.pathname === "/user" && <div className='userlist-pg'>
              <div className='brdcrmbbtn-main'>
                <div className='brdcrmbbtn-inner'>
                  <button onClick={()=>{setToggleUserModal(p=> !p)}} className='btn btn-shadow btn-primary'>Add New User</button>
                </div>
                <div className='brdcrmbbtn-inner'>
                  <button className='btn btn-shadow btn-primary'>Export User</button>
                </div>
                <div className='brdcrmbbtn-inner'>
                  <button onClick={()=>{setToggleImportUserModal(p=> !p)}} className='btn btn-shadow btn-primary'>Import User</button>
                </div>
              </div>
              <AddUserForm toggleUserModal={toggleUserModal} setToggleUserModal={setToggleUserModal}/>
              <ImportUser toggleImportUserModal={toggleImportUserModal} setToggleImportUserModal={setToggleImportUserModal}/>
            </div>}
            {/* end-userlist-data */}



            {/* start-Orderlist-data */}
            {location.pathname === "/order-list" && <div className='ordrlist-pg'>
              <div className='brdcrmbbtn-main'>
                <div className='brdcrmbbtn-inner'>
                  <button className='btn btn-shadow btn-primary'>Export Data</button>
                </div>
              </div>
            </div>}
            {/* End-Orderlist-data */}

              {/* start-Order-detail-data */}
              {location.pathname === "/order-detail" && <div className='ordrlist-pg'>
              <div className='brdcrmbbtn-main'>
                <div className='brdcrmbbtn-inner'>
                  <button className='btn btn-shadow btn-primary'>Print Setting</button>
                </div>
                <div className='brdcrmbbtn-inner'>
                  <button className='btn btn-shadow btn-primary'>Print Summary</button>
                </div>
                <div className='brdcrmbbtn-inner'>
                  <button className='btn btn-shadow btn-primary'>Print Order</button>
                </div>
              </div>
            </div>}
            {/* End-Order-detail-data */}

              {/* start-category-data */}
              {location.pathname === "/category" && <div className='ordrlist-pg'>
              <div className='brdcrmbbtn-main'>
              <div className='brdcrmbbtn-inner'>
                  <button onClick={()=>{setToggleAddCategryModal(p=> !p)}} className='btn btn-shadow btn-primary'>Add Category</button>
                </div>
              </div>
              <AddCategoryForm toggleAddCategryModal={toggleAddCategryModal} setToggleAddCategryModal={setToggleAddCategryModal}/>
              <EditCategoryForm toggleEditCategryModal={toggleEditCategryModal} setToggleEditCategryModal={setToggleEditCategryModal}/>
            </div>}
            {/* End-category-data */}

             {/* start-sub-category-data */}
             {location.pathname === "/sub-category" && <div className='ordrlist-pg'>
              <div className='brdcrmbbtn-main'>
                <div className='brdcrmbbtn-inner'>
                  <button onClick={()=>{setToggleAddSubCategryModal(p=> !p)}} className='btn btn-shadow btn-primary'>Add Sub Category</button>
                </div>
              </div>
              <AddSubCategoryForm toggleAddSubCategryModal={toggleAddSubCategryModal} setToggleAddSubCategryModal={setToggleAddSubCategryModal}/>
           
            </div>}
            {/* End-sub-category-data */}

             {/* start-product-data */}
             {location.pathname === "/product" && <div className='ordrlist-pg'>
              <div className='brdcrmbbtn-main'>
              <div className='brdcrmbbtn-inner'>
                  <Link to="/add-product" className='btn btn-shadow btn-primary'>Add Product</Link>
                </div>
              </div>
            </div>}
            {/* End-product-data */}

             {/* start-upload-inventory-image-data */}
             {location.pathname === "/upload-inventory-image" && <div className='ordrlist-pg'>
              <div className='brdcrmbbtn-main'>
              <div className='brdcrmbbtn-inner'>
                  <button onClick={()=>{setToggleUploadInventoryModal(p=> !p)}} className='btn btn-shadow btn-primary'>Add Image</button>
                </div>
              </div>
              <UploadInventoryPopup toggleUploadInventoryModal={toggleUploadInventoryModal} setToggleUploadInventoryModal={setToggleUploadInventoryModal}/>
            </div>}
            {/* End-upload-inventory-image-data */}

              {/* start-bulk-import-export-data */}
              {location.pathname === "/bulk-import-export" && <div className='ordrlist-pg'>
              <div className='brdcrmbbtn-main'>
              <div className='brdcrmbbtn-inner'>
                  <button className='btn btn-shadow btn-primary'>Download Store Inventory</button>
                </div>
                <div className='brdcrmbbtn-inner'>
                  <button className='btn btn-shadow btn-primary'>Delete All Inventory</button>
                </div>
                
                <div className='brdcrmbbtn-inner'>
                  <Link to="/upload-inventory-image" className='btn btn-shadow btn-primary'>Upload Product Images</Link>
                </div>
              </div>
            </div>}
            {/* End-bulk-import-export-data */}


             {/* start-discount-coupon-data */}
             {location.pathname === "/discount-coupon" && <div className='ordrlist-pg'>
              <div className='brdcrmbbtn-main'>
                <div className='brdcrmbbtn-inner'>
                  <Link to="/add-discount-coupon" className='btn btn-shadow btn-primary'>Add New Coupon</Link>
                </div>
              </div>
            </div>}
            {/* End-discount-coupon-data */}


              {/* start-alert-message-data */}
            {location.pathname === "/alert-message" && <div className='ordrlist-pg'>
              <div className='brdcrmbbtn-main'>
                <div className='brdcrmbbtn-inner'>
                  <Link to="/add-push-notification" className='btn btn-shadow btn-primary'>Add Push Notification</Link>
                </div>
              </div>
            </div>}
            {/* End-alert-message-data */}


              {/* start-sold-item-report-data */}
              {location.pathname === "/sold-item-report" && <div className='ordrlist-pg'>
              <div className='brdcrmbbtn-main'>
                <div className='brdcrmbbtn-inner'>
                  <button className='btn btn-shadow btn-primary'>Export Data</button>
                </div>
              </div>
            </div>}
            {/* End-sold-item-report-data */}


             {/* start-daily-order-data */}
             {location.pathname === "/daily-order" && <div className='ordrlist-pg'>
              <div className='brdcrmbbtn-main'>
                <div className='brdcrmbbtn-inner'>
                  <button className='btn btn-shadow btn-primary'>Export Data</button>
                </div>
              </div>
            </div>}
            {/* End-daily-order-data */}

            {/* start-configure-points-data */}
            {location.pathname === "/configure-points" && <div className='ordrlist-pg'>
              <div className='brdcrmbbtn-main'>
                <div className='brdcrmbbtn-inner'>
                  <button onClick={()=>{setToggleAddConfigurPointModal(p=> !p)}} className='btn btn-shadow btn-primary'>Add Configure Points</button>
                </div>
              </div>
              <AddConfigurPointForm toggleAddConfigurPointModal={toggleAddConfigurPointModal} setToggleAddConfigurPointModal={setToggleAddConfigurPointModal} />
            </div>}
            {/* End-daily-order-data */}


                 {/* start-loyalty-coupons-data */}
                 {location.pathname === "/loyalty-coupons" && <div className='ordrlist-pg'>
              <div className='brdcrmbbtn-main'>
                <div className='brdcrmbbtn-inner'>
                  <button onClick={()=>{setToggleAddLoyaltyCouponsModal(p=> !p)}} className='btn btn-shadow btn-primary'>Add Loyalty Coupons</button>
                </div>
              </div>
              <AddLoyaltyCouponForm toggleAddLoyaltyCouponsModal={toggleAddLoyaltyCouponsModal} setToggleAddLoyaltyCouponsModal={setToggleAddLoyaltyCouponsModal} />
            </div>}
            {/* End-daily-order-data */}


             {/* start-user-management-data */}
             {location.pathname === "/user-management" && <div className='ordrlist-pg'>
              <div className='brdcrmbbtn-main'>
                <div className='brdcrmbbtn-inner'>
                  <Link to="/add-user-management-role" className='btn btn-shadow btn-primary'>Add User Role</Link>
                </div>
              </div>
            </div>}
            {/* End-user-management-data */}

            {/* start-user-management-data */}
            {location.pathname === "/runner-management" && <div className='ordrlist-pg'>
              <div className='brdcrmbbtn-main'>
                <div className='brdcrmbbtn-inner'>
                  <Link to="/add-runner" className='btn btn-shadow btn-primary'>Add Runner</Link>
                </div>
              </div>
            </div>}
            {/* End-user-management-data */}


            {/* start-banner-data */}
            {location.pathname === "/banner" && <div className='ordrlist-pg'>
              <div className='brdcrmbbtn-main'>
                <div className='brdcrmbbtn-inner'>
                  <Link to="/add-banner" className='btn btn-shadow btn-primary'>Add Banner</Link>
                </div>
              </div>
            </div>}
            {/* End-banner-data */}

               {/* start-banner-data */}
               {location.pathname === "/page" && <div className='ordrlist-pg'>
              <div className='brdcrmbbtn-main'>
                <div className='brdcrmbbtn-inner'>
                  <Link to="/add-page" className='btn btn-shadow btn-primary'>Add Pages</Link>
                </div>
              </div>
            </div>}
            {/* End-banner-data */}

              {/* start-banner-data */}
              {location.pathname === "/faq" && <div className='ordrlist-pg'>
              <div className='brdcrmbbtn-main'>
                <div className='brdcrmbbtn-inner'>
                  <Link to="/add-faq" className='btn btn-shadow btn-primary'>Add Faq</Link>
                </div>
              </div>
            </div>}
            {/* End-banner-data */}


          </div>
        </div>
      </div>
    </>
  )
}

export default Breadcrumb
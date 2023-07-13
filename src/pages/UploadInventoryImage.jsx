import React from 'react'
import InventoryImageTable from '../components/manage-grocery/upload-inventory-image/InventoryImageTable'
import Breadcrumb from '../components/common/breadcrumb/Breadcrumb'

const UploadInventoryImage = () => {
  return (
    <>
     <main>
       <Breadcrumb  data={"upload-inventory-image"}/>
      <div className="page-content">
      <div className='row'>
                    <div className='col-md-12'>
      <div className="card">
      <div className="card-body">
           <InventoryImageTable />
         </div>
         </div>
         </div>
         </div>
         </div>
      </main>
    </>
  )
}

export default UploadInventoryImage
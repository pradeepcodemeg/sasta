import React from 'react'
import Breadcrumb from '../components/common/breadcrumb/Breadcrumb'
import EditProductFrom from '../components/manage-grocery/products/EditProductFrom'

const EditProduct = () => {
  return (
    <>
    <main>
    <Breadcrumb data={"add-product"}/>
    <div className="page-content">
    <div className="card">
    <div className="card-body">
       <EditProductFrom />
       </div>
       </div>
       </div>
    </main>
    </>
  )
}

export default EditProduct
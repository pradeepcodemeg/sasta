import React from 'react'
import Breadcrumb from '../components/common/breadcrumb/Breadcrumb'
import AddProductForm from '../components/manage-grocery/products/AddProductForm'

const AddProduct = () => {
  return (
    <>
    <main>
    <Breadcrumb data={"add-product"}/>
    <div className="page-content">
    <div className="card">
    <div className="card-body">
       <AddProductForm />
       </div>
       </div>
       </div>
    </main>
    </>
  )
}

export default AddProduct
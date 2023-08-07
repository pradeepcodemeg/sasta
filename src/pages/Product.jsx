import React from 'react'
import Breadcrumb from '../components/common/breadcrumb/Breadcrumb'
import ProductTable from '../components/manage-grocery/products/ProductTable'
import ProductFilter from '../components/manage-grocery/products/ProductFilter'

const Product = () => {
  return (
    <>
    <main>
   <Breadcrumb  data={"homepage"}/>
     <div className="page-content">
     <div className='row'>
    <div className='col-md-3'>
         <ProductFilter />
      </div>
                    <div className='col-md-9'>
     <div className="card">
     <div className="card-body">
         <ProductTable />
         </div>
         </div>
         </div>
         </div>
       </div>
       </main>
   
   </>
  )
}

export default Product
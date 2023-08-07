import React from 'react'
import CategoryTable from '../components/manage-grocery/category/CategoryTable'
import Breadcrumb from '../components/common/breadcrumb/Breadcrumb'

const Category = () => {
  return (
    <>
     <main>
    <Breadcrumb  data={"homepage"}/>
      <div className="page-content">
      <div className="card">
      <div className="card-body">
          <CategoryTable />
          </div>
          </div>
        </div>
        </main>
    
    </>
  )
}

export default Category
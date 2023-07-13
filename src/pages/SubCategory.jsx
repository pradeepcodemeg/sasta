import React from 'react'
import Breadcrumb from '../components/common/breadcrumb/Breadcrumb'
import SubCategoryTable from '../components/manage-grocery/sub-category/SubCategoryTable'

const SubCategory = () => {
  return (
    <>
   <main>
    <Breadcrumb  data={"homepage"}/>
      <div className="page-content">
      <div className="card">
      <div className="card-body">
          <SubCategoryTable />
        </div>
        </div>
        </div>
        </main>
    </>
  )
}

export default SubCategory
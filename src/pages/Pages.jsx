import React from 'react'
import Breadcrumb from '../components/common/breadcrumb/Breadcrumb'
import PageTable from '../components/content-management/page/PageTable'

const Pages = () => {
  return (
    <>
    <main>
    <Breadcrumb data={"page"}/>
    <div className="page-content">
    <div className="card">
    <div className="card-body">
     <PageTable  />
       </div>
       </div>
       </div>
       this test
    </main>
    </>
  )
}

export default Pages
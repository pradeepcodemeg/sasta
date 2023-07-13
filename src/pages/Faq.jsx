import React from 'react'
import Breadcrumb from '../components/common/breadcrumb/Breadcrumb'
import FaqTable from '../components/content-management/faq/FaqTable'

const Faq = () => {
  return (
    <>
    <main>
    <Breadcrumb data={"faq"}/>
    <div className="page-content">
    <div className="card">
    <div className="card-body">
        <FaqTable />
       </div>
       </div>
       </div>
    </main>
    </>
  )
}

export default Faq
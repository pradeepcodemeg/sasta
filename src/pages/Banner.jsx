import React from 'react'
import Breadcrumb from '../components/common/breadcrumb/Breadcrumb'
import BannerTable from '../components/content-management/banner/BannerTable'

const  Banner = () => {
  return (
    <>
     <main>
    <Breadcrumb  data={"banner"}/>
      <div className="page-content">
      <div className="card">
      <div className="card-body">
       <BannerTable />
          </div>
          </div>
        </div>
        </main>
    
    </>
  )
}

export default Banner
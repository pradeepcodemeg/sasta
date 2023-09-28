import React from 'react'
import Breadcrumb from '../components/common/breadcrumb/Breadcrumb'
import ConfigurePointsTable from '../components/loyalty-program/configure-points/ConfigurePointsTable'
import Pagination from '../components/pagination/Pagination'

const ConfigurePoints = () => {
  return (
    <>
     <main>
    <Breadcrumb  data={"configure-points"}/>
      <div className="page-content">
      <div className="card">
      <div className="card-body">
      <ConfigurePointsTable />
      <Pagination />
          </div>
          </div>
        </div>
        </main>
    
    </>
  )
}


export default ConfigurePoints
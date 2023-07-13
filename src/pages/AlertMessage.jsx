import React from 'react'
import Breadcrumb from '../components/common/breadcrumb/Breadcrumb'
import AlertMessageTable from '../components/marketing-promotion/alert-message/AlertMessageTable'

const AlertMessage = () => {
  return (
    <>
    <main>
    <Breadcrumb data={"alert-message"}/>
    <div className="page-content">
    <div className="card">
    <div className="card-body">
       <AlertMessageTable />
       </div>
       </div>
       </div>
    </main>
    </>
  )
}

export default AlertMessage
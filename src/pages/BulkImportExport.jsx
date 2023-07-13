import React from 'react'

import Breadcrumb from '../components/common/breadcrumb/Breadcrumb'
import BulkImportExportForm from '../components/manage-grocery/bulk-import-export/BulkImportExportForm'

const BulkImportExport = () => {
  return (
    <>
     <main>
       <Breadcrumb  data={"bulk-import-export"}/>
      <div className="page-content">
      <BulkImportExportForm />
         </div>
      </main>
    </>
  )
}

export default BulkImportExport
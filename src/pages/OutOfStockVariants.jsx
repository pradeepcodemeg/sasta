import React from 'react'

import Breadcrumb from '../components/common/breadcrumb/Breadcrumb'
import OutOfStockTable from '../components/manage-grocery/out-of-stock-variants/OutOfStockTable'

const OutOfStockVariants = () => {
    return (
        <>
            <main>
                <Breadcrumb data={"bulk-import-export"} />
                <div className="page-content">
                    <div className='row'>
                        <div className='col-md-12'>
                            <div className="card">
                                <div className="card-body">
                                    <OutOfStockTable />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </>
    )
}

export default OutOfStockVariants
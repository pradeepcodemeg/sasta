import React from 'react'

import Breadcrumb from '../components/common/breadcrumb/Breadcrumb'
import OutOfStockTable from '../components/manage-grocery/out-of-stock-variants/OutOfStockTable'
import Pagination from '../components/pagination/Pagination'

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
                                    <Pagination />
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
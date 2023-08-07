import React from 'react'
import Breadcrumb from '../components/common/breadcrumb/Breadcrumb'
import RunnerProfileDetail from '../components/runner-management/RunnerProfileDetail'
import RunnerHistoryTable from '../components/runner-management/RunnerHistoryTable'


function RunnerDetail() {
  return (
    <>
   
      <main>
      <Breadcrumb data={"runner-detail"}/>
        <div className="page-content">
          <div className='row'>
            <div className='col-md-12'>
                  <RunnerProfileDetail />
            </div>
            <div className='col-md-12'>
              <div className="card mt-3">
                <div className="card-body">
                  <RunnerHistoryTable />
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  )
}

export default RunnerDetail
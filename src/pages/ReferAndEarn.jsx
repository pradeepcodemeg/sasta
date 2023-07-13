import React from 'react'
import Breadcrumb from '../components/common/breadcrumb/Breadcrumb'
import ReferEarnForm from '../components/marketing-promotion/refer-and-earn/ReferEarnForm'

const ReferAndEarn = () => {
  return (
    <>
      <main>
        <Breadcrumb data={"add-product"} />
        <div className="page-content">
          <div className="card">
            <div className="card-body">
              <ReferEarnForm />
            </div>
          </div>
        </div>
      </main>
    </>
  )
}

export default ReferAndEarn
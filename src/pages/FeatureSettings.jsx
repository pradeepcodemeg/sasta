import React from 'react'
import Breadcrumb from '../components/common/breadcrumb/Breadcrumb'
import FeatureSetingForm from '../components/settings/feature-setting/FeatureSetingForm'

const FeatureSettings = () => {
  return (
    <>
    <main>
    <Breadcrumb data={"features-settings"}/>
    <div className="page-content">
    <div className="card">
    <div className="card-body">
       <FeatureSetingForm />
       </div>
       </div>
       </div>
    </main>
    </>
  )
}

export default FeatureSettings
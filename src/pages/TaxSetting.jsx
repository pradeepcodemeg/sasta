import React from 'react'
import Breadcrumb from '../components/common/breadcrumb/Breadcrumb'
import TaxSettingForm from '../components/settings/tax-setting/TaxSettingForm'

const  TaxSetting = () => {
  return (
    <>
    <main>
    <Breadcrumb data={"tax-setting"}/>
    <div className="page-content">
        <TaxSettingForm />
       </div>
    </main>
    </>
  )
}

export default TaxSetting
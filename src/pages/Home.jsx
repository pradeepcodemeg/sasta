import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import HomeTop from '../components/home/HomeTop.jsx'
import TabLayout from '../components/home/TabLayout.jsx'
import Breadcrumb from '../components/common/breadcrumb/Breadcrumb.jsx'

const Home = () => {
  return (
    <>
   
    <main>
    <Breadcrumb  data={"homepage"}/>
      <div className="page-content">
        <HomeTop />
        <TabLayout/>
        </div>
        </main>
    </>
  )
}





export default Home
import React from 'react'
import Breadcrumb from '../components/common/breadcrumb/Breadcrumb'
import SocialMediaLinksForm from '../components/settings/Social-media-management/SocialMediaLinksForm'
const SocialMediaManagement = () => {
    return (
        <>
            <main>
                <Breadcrumb data={"social-media-management"} />
                <div className="page-content">
                    <div className='card'>
                        <div className="card-body">
                            <SocialMediaLinksForm />
                        </div>
                    </div>
                </div>
            </main>
        </>
    )
}



export default SocialMediaManagement
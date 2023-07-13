import React from 'react'

const EnquiryTopCard = () => {
    return (
        <>
            <div className='row'>
                <div class="col-md-3">
                    <div className="card">
                        <div className="card-body">
                            <div className='enqry-crd'>
                                <div className='enqry-icon'>
                                    <span><i class="fa fa-comments-o" aria-hidden="true"></i></span>
                                </div>
                                <div className='enqry-dtls'>
                                    <h3>8</h3>
                                    <p>Enquiries</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="col-md-3">
                    <div className="card">
                        <div className="card-body">
                            <div className='enqry-crd'>
                                <div className='enqry-icon'>
                                    <span><i class="fa fa-android" aria-hidden="true"></i></span>
                                </div>
                                <div className='enqry-dtls'>
                                    <h3>8</h3>
                                    <p>Android</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>


                <div class="col-md-3">
                    <div className="card">
                        <div className="card-body">
                            <div className='enqry-crd'>
                                <div className='enqry-icon'>
                                    <span><i class="fa fa-apple" aria-hidden="true"></i></span>
                                </div>
                                <div className='enqry-dtls'>
                                    <h3>8</h3>
                                    <p>IOS</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>


                <div class="col-md-3">
                    <div className="card">
                        <div className="card-body">
                            <div className='enqry-crd'>
                                <div className='enqry-icon'>
                                <span><i class="fa fa-globe" aria-hidden="true"></i></span>
                                </div>
                                <div className='enqry-dtls'>
                                    <h3>8</h3>
                                    <p>Web</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default EnquiryTopCard
import React, { useState } from 'react';
import Breadcrumb from '../components/common/breadcrumb/Breadcrumb'
import AddDeliveryAddressForm from '../components/settings/delivery-areas/AddDeliveryAddressForm';
import AddPickupAddressForm from '../components/settings/delivery-areas/AddPickupAddressForm';
import ManageCitiesTable from '../components/settings/delivery-areas/ManageCitiesTable';
import AddManageCitiesForm from '../components/settings/delivery-areas/AddManageCitiesForm';

const DeliveryAreas = () => {

    const [toggleAddManageCitiesModal, setToggleAddManageCitiesModal] = useState(false)
    const [activeTab, setActiveTab] = useState(1);

    const handleTabClick = (tabNumber) => {
        setActiveTab(tabNumber);
    };
    return (
        <>
            <main>
                <Breadcrumb data={"delivery-areas"} />
                <div className="page-content">
                    <div className="delvryarea-main">
                        <div className='tabbing-main'>
                            <div className="tab-list">
                                <ul>
                                    <li>
                                        <span className={activeTab === 1 ? 'active' : ''} onClick={() => handleTabClick(1)}>Delivery Address </span>
                                    </li>
                                    <li>
                                        <span className={activeTab === 2 ? 'active' : ''} onClick={() => handleTabClick(2)}>Pickup Address</span>
                                    </li>
                                    <li>
                                        <span className={activeTab === 3 ? 'active' : ''} onClick={() => handleTabClick(3)}>Manage Cities</span>
                                    </li>
                                </ul>
                            </div>
                            <div className="tab-content">
                                <div className={activeTab === 1 ? 'active' : 'inactive'}>
                                    <div className="card">
                                        <div className="card-body">
                                            <div className='row'>
                                                <div className='col-md-12'>
                                                    <AddDeliveryAddressForm />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className={activeTab === 2 ? 'active' : 'inactive'}>
                                    <div className="card">
                                        <div className="card-body">
                                            <div className='row'>
                                                <div className='col-md-12'>
                                                    <AddPickupAddressForm />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className={activeTab === 3 ? 'active' : 'inactive'}>

                                    <div className="card">
                                        <div className="card-body">
                                            <div className='row'>
                                                <div className='col-md-12'>
                                                    <div className='main-form pb-2'>
                                                        <div className='prdt-inr'>
                                                            <div className="form-heading flxfrm-hdng">
                                                                <h3>Manage City</h3>
                                                                <div className=''>
                                                                <button  onClick={()=>{setToggleAddManageCitiesModal(p=> !p)}} type="button" className="btn btn-shadow btn-primary">Add New City</button>
                                                                 </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className='col-md-12'>
                                                    <ManageCitiesTable />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <AddManageCitiesForm toggleAddManageCitiesModal={toggleAddManageCitiesModal} setToggleAddManageCitiesModal={setToggleAddManageCitiesModal}/>
            </main>
        </>
    )
}

export default DeliveryAreas 
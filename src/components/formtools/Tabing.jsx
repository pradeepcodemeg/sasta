
import React, { useState } from 'react';
const  Tabing = () => {

  const [activeTab, setActiveTab] = useState(1);

  const handleTabClick = (tabNumber) => {
    setActiveTab(tabNumber);
  };
 


  return (
    <>
    <div className='tabbing-main'>
      <div className="tab-list">
        <ul>
       <li>
        <span className={activeTab === 1 ? 'active' : ''} onClick={() => handleTabClick(1)}>Tab 1 </span>
        </li> 
        <li>
            <span className={activeTab === 2 ? 'active' : ''} onClick={() => handleTabClick(2)}>Tab 2</span>
         </li> 
        </ul>
      </div>
      <div className="tab-content">
        <div className={activeTab === 1 ? 'active' : 'inactive'}>
        <div className='row'>
                        <div className='col-md-12'>
                          gdgbdf
                            </div>
                            </div>
        </div>
        <div className={activeTab === 2 ? 'active' : 'inactive'}>
        <div className='row'>
        <div className='col-md-12'>
                          nbfghh
                        </div>
                        </div>
        </div>
      </div>
      </div>
    </>
  );
};

export default  Tabing;


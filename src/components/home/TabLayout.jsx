import React, { useState } from 'react';
import Tables from './Tables';
import { NavLink } from 'react-router-dom';

const TabLayout = () => {
  const [activeSwitch, setActiveSwitch] = useState('Due');
  
  const switches = ['Due', 'Active', 'Shipped', 'Delivered'];

  const handleChangeSwitches = (switchName) => {
    setActiveSwitch(switchName);
  };

  return (
    <>
     <div className="card">
      <div className="card-header">
        <div className="d-flex align-items-center justify-content-between">
      <div className='tab-main'>
        <ul className='tab-list'>
          {switches.map((item, index) => {
            return (
              <li
                key={index}
                onClick={() => handleChangeSwitches(item)}
                className={`tab-title ${activeSwitch === item ? 'active' : ''
                  }`}
              >
                {item}
              </li>
            );
          })}
        </ul>
      </div>
        <NavLink to="/order-list" className='viewall-btn'><span>View All</span></NavLink> 
      </div>
        </div>
      <div className="card-body pt-4">
        <Tables status={activeSwitch} />
        </div>
        </div>
    </>
  );
};










export default TabLayout;
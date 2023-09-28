import React, { useState } from 'react'
import { Link } from 'react-router-dom';

function Header() {
  const [showProfile, setShowProfile] = useState(false)
  const [showNotify, setShowNotify] = useState(false)
  const toggle = () => {
    document.body.classList.toggle("sidebar-collapse")
  }
  return (
    <>
      <header>
        <div className="main-header">
          <div className='lft-hdr'>
            <div className="navmenu-hdr"><span className="nav-menu" onClick={toggle}><i className="fa fa-bars" aria-hidden="true"></i></span></div>
          </div>
          <div className='rght-hdr'>
            <div className='hdrbtn-main'>
            <div className='brdcrmbbtn-inner'>
                  <button  className='btn btn-shadow btn-primary'>Admin FAQ</button>
                </div>
                <div className='brdcrmbbtn-inner'>
                  <button  className='btn btn-shadow btn-primary'>Contact Us</button>
                </div>
                <div className='brdcrmbbtn-inner'>
                  <button className='btn btn-shadow btn-primary'>Publish to Live</button>
                </div>
                <div className='brdcrmbbtn-inner'>
                  <button className='btn btn-shadow btn-primary'>View Store</button>
                </div>
            </div>
            <div className='hdrmr-main'>
            <div className="notification-main">
              <div className="notification-icon" onClick={() => setShowNotify(p => !p)}>
                <span><i className="fa fa-bell-o" aria-hidden="true"></i></span>
              </div>
              {showNotify && <div className="hdrnoti-drpdwn">
                <div className='noti-head'>
                  <h3>Notification</h3>
                  <p>View all</p>
                  </div>
                <ul>
                  <li>
                    <div className="notihstry-dtls">
                      <h3>New Order Added</h3>
                      <p>Rahul Recently placed new order.</p>
                    </div>
                  </li>
                  <li>
                    <div className="notihstry-dtls">
                      <h3>New Order Added</h3>
                      <p>Rahul Recently placed new order.</p>
                    </div>
                  </li>
                  <li>
                    <div className="notihstry-dtls">
                      <h3>New Order Added</h3>
                      <p>Rahul Recently placed new order.</p>
                    </div>
                  </li>
                  <li>
                    <div className="notihstry-dtls">
                      <h3>New Order Added</h3>
                      <p>Rahul Recently placed new order.</p>
                    </div>
                  </li>
                </ul>
              </div>}
            </div>
            <div className="admin-prflsec">
              <div className="admnprfl-tbmain">
                <div className="profile-crclimg">
                  <span style={{ "backgroundImage": "url(https://dev.codemeg.com/caly-backend/public/uploads/EmployeeImage/1680874750.png)" }}></span>
                </div>
                <div className="admin-name" onClick={() => setShowProfile(p => !p)}>
                  <p className="">admin<em><i class="fa fa-angle-down" aria-hidden="true"></i></em></p>
                </div>
              </div>
              {showProfile && <div className="hdrmenu-drpdwn">
                <ul>
                  <li>
                    <Link to={'/profile-update'}>
                      <span>
                        <i className="fa fa-user-o" aria-hidden="true"></i>
                      </span>
                      Profile Update
                    </Link>
                  </li>
                  <li>
                    <Link to={'/'}>
                      <span>
                        <i className="fa fa-language" aria-hidden="true"></i>
                      </span>
                      Change Language
                    </Link>
                  </li>
                  <li>
                    <Link to={'/login'}>
                      <span>
                        <i className="fa fa-sign-out" aria-hidden="true"></i>
                      </span>
                      Log Out
                    </Link>
                  </li>
                </ul>
              </div>}

            </div>
          </div>
        </div>
        </div>
      </header>

    </>
  )
}

export default Header
import React from 'react'
import Breadcrumb from '../components/common/breadcrumb/Breadcrumb'

function PushNotificationList() {
    const dummyArray = Array(10).fill(1)
  return (
    <>
   
       <main>
       <Breadcrumb  data={"push-notification-list"}/>
      <div className="page-content">
      <div className='row'>
                    <div className='col-md-12'> 
                    <div className='card'>
                    <div class="card-header">
                <div class="card-header-inner">
                  <div class="card-title mb-0">
                    <div class="d-flex align-items-center position-relative catgry-cstmsrch">
                      <label>
                        <span class="svg-icon svg-icon-1 srchsvg-icon">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                          >
                            <rect
                              opacity="0.5"
                              x="17.0365"
                              y="15.1223"
                              width="8.15546"
                              height="2"
                              rx="1"
                              transform="rotate(45 17.0365 15.1223)"
                              fill="black"
                            ></rect>
                            <path
                              d="M11 19C6.55556 19 3 15.4444 3 11C3 6.55556 6.55556 3 11 3C15.4444 3 19 6.55556 19 11C19 15.4444 15.4444 19 11 19ZM11 5C7.53333 5 5 7.53333 5 11C5 14.4667 7.53333 17 11 17C14.4667 17 17 14.4667 17 11C17 7.53333 14.4667 5 11 5Z"
                              fill="black"
                            ></path>
                          </svg>
                        </span>
                        <input
                          type="text"
                          class="form-control w-250px"
                          placeholder="Search by notification title"
                        />
                      </label>
                    </div>
                  </div>
                  </div>
                </div>
                    <div className='card-body'>
                    <div className="responsive-table">
        <table className="table table-row-dashed">
            <thead>
                <tr>
                    <th className='w-10px'>
                        #
                    </th>
                    <th className='w-200px'>
                    TITLE 
                    </th>
                    <th className='w-200px'>
                    Alert Text
                    </th>
                    <th className="w-70px text-center">
                    Date Time
                    </th>
                    <th className="w-75px text-end">Action</th>

                </tr>
            </thead>
            <tbody className=''>
            {dummyArray.map((item, index) => {
                    return (
                        <tr key={item.orderId} className="">
                            <td className="">{index + 1}</td>
                            <td className="">How about an Ice Candy to beat the heat ..!</td>
                            <td className="">
                              <p>You loved it, so we have it. You have to taste to believe freshness 
                              of Magnum ice creams and kwality ice cream bars. Order now!</p>
                              </td>
                            <td className="text-center">07-04-2024</td>
                            <td className=''>
                               <div className="d-flex justify-content-end align-items-center flex-shrink-0">
                                    <button className="btn btn-icon btn-bg-light btn-active-color-primary btn-sm">
                                                <span className="svg-icon svg-icon-2">
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" opacity="0.3">
                                                        <path d="M5 9C5 8.44772 5.44772 8 6 8H18C18.5523 8 19 8.44772 19 9V18C19 19.6569 17.6569 21 16 21H8C6.34315 21 5 19.6569 5 18V9Z">
                                                        </path>
                                                        <path opacity="0.5" d="M5 5C5 4.44772 5.44772 4 6 4H18C18.5523 4 19 4.44772 19 5V5C19 5.55228 18.5523 6 18 6H6C5.44772 6 5 5.55228 5 5V5Z">
                                                        </path>
                                                        <path opacity="0.5" d="M9 4C9 3.44772 9.44772 3 10 3H14C14.5523 3 15 3.44772 15 4V4H9V4Z">
                                                        </path>
                                                    </svg>
                                                </span>
                                    </button>    
                                </div>
                            </td>
                        </tr>
                    )
                })}
            </tbody>
        </table>
    </div>
                    </div>
                     </div>
                     </div>
         </div>
         </div>
      </main>
    </>
   
  )
}

export default PushNotificationList
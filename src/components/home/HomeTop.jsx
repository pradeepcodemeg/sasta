import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchDashboardData } from '../../store/slices/dashboard'

function HomeTop() {
    const dispatch = useDispatch()
    useEffect(()=>{dispatch(fetchDashboardData())},[])
    const {pending,data,error} = useSelector(state=>state.Dashboard.dashboard)
    return (
    <>
    <div className="row">
    <div className="col-md-3">
        <div className="card mb-15">
            <div className="card-body dashcrd-bdy">
                <div className="erning-flx">
                    <div className="">
                    <p className="">Total Orders</p>
                    <h4 className="">{data ? data.orders.active : 0}</h4>
                    </div>
                    <div className="chart-crd">
                    <span></span>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div className="col-md-3">
        <div className="card mb-15">
            <div className="card-body dashcrd-bdy">
            <div className="erning-flx">
                    <div className="">
                    <p className="">Delivered Order</p>
                    <h4 className="">{data ? data.orders.delivered.total : 0}</h4>
                    </div>
                    <div className="chart-crd">
                    <span></span>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div className="col-md-3">
        <div className="card mb-15">
            <div className="card-body dashcrd-bdy">
            <div className="erning-flx">
                    <div className="">
                    <p className="">Total Earnings</p>
                    <h4 className="">₹{data ? data.revenue.total : 0}</h4>
                    </div>
                    <div className="chart-crd">
                    <span></span>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div className="col-md-3">
        <div className="card mb-15">
            <div className="card-body dashcrd-bdy">
            <div className="erning-flx">
                    <div className="">
                    <p className="">Total Customers</p>
                    <h4 className="">3,458</h4>
                    </div>
                    <div className="chart-crd">
                    <span></span>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div className="col-md-3">
        <div className="card mb-15">
            <div className="card-body dashcrd-bdy">
            <div className="erning-flx">
                    <div className="">
                    <p className="">Today earnings</p>
                    <h4 className="">₹{data ? data.revenue.total : 0}</h4>
                    </div>
                    <div className="chart-crd">
                    <span></span>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div className="col-md-3">
        <div className="card mb-15">
            <div className="card-body dashcrd-bdy">
            <div className="erning-flx">
                    <div className="">
                    <p className="">Yesterday Earnings</p>
                    <h4 className="">₹{data ? data.revenue.yesterday : 0}</h4>
                    </div>
                    <div className="chart-crd">
                    <span></span>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div className="col-md-3">
        <div className="card mb-15">
            <div className="card-body dashcrd-bdy">
            <div className="erning-flx">
                    <div className="">
                    <p className="">Last 7 Days Earnings</p>
                    <h4 className="">₹{data ? data.revenue.last_7_days : 0}</h4>
                    </div>
                    <div className="chart-crd">
                    <span></span>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div className="col-md-3">
        <div className="card mb-15">
            <div className="card-body dashcrd-bdy">
            <div className="erning-flx">
                    <div className="">
                    <p className="">Last 30 Days Earnings</p>
                    <h4 className="">₹{data ? data.revenue.last_30_days : 0}</h4>
                    </div>
                    <div className="chart-crd">
                    <span></span>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </div>
    </>
  )
}

export default HomeTop
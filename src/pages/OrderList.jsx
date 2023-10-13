import React, { useEffect, useState } from 'react'
import Select from 'react-select'
import OrderListTable from '../components/orders/order-list/OrderListTable'
import Breadcrumb from '../components/common/breadcrumb/Breadcrumb'
// import OrderFilter from '../components/orders/order-list/OrderFilter'
import Pagination from '../components/pagination/Pagination'
import { useDispatch, useSelector } from 'react-redux'
import { fetchOrderLists } from '../store/slices/Order'

const customStyles = {
  control: (provided, state) => ({
    ...provided,
    border: state.isFocused ? '1px solid #b5b5c3' : '1px solid #e4e6ef',
    borderRadius: '4px',
    boxShadow: 'none',
    '&:hover': {
      border: '1px solid #b5b5c3',
    },
  }),
  option: (provided, state) => ({
    ...provided,
    backgroundColor: state.isFocused ? '#ffffff' : '#ffffff',
    color: state.isFocused ? '#000000' : '#000000',
    '&:hover': {
      backgroundColor: '#f4fde5',
      color: '#9fc55e',
    },
  }),
};

function OrderList() {

  

  const dispatch = useDispatch()

  const [searchValue,setSearchValue] = useState('')
  const [daterangetype, setDateRangeType] = useState(null) 
  const [timeslot, setTimeSlotType] = useState(null) 
  const [paginationValue,setPaginationValue] = useState(1)
  
  const handleChange = (e) => {
    setSearchValue(e.target.value)
  }

  const nextPage = (value) => {
    console.log('value page')
    console.log(paginationValue)
    setPaginationValue(p => p + 1)
  }
  const prevPage = (value => {
    
    console.log('value page')
    console.log(paginationValue)
    if(paginationValue > 1){
    console.log(`value ===> ${value}`)
    setPaginationValue(p => p - 1)
    }
  })


  useEffect(()=>{
    dispatch(fetchOrderLists({
      page:paginationValue
    }))
  },[paginationValue])
  

  const {pending,data,error} = useSelector(state=>state.Order.orderlist)


  const DateRangeTypeoptions = [
    { value: 'Today', label: 'Today' },
    { value: 'Yesterday', label: 'Yesterday' },
    { value: 'Last 7 Days', label: 'Last 7 Days' },
    { value: 'Last 30 days', label: 'Last 30 days' },
  ];

  const TimeSlotTypeoptions = [
    { value: '9 AM To 7 PM', label: '9 AM To 7 PM' },
    { value: '7 AM To 10 PM', label: '7 AM To 10 PM' },
  ];

  return (
    <>
   
    <main>
    <Breadcrumb data={"orderlist"}/>
    <div className="page-content">
    <div className='row'>
    {/* <div className='col-md-3'>
         <OrderFilter />
      </div> */}
                    <div className='col-md-12'>
    <div className="card">
    <div class="card-header">
    <div className="crdhdr-main-flx">
    <div className="crdhdr-inner-flx">
        <div class="card-title mb-0">
            <div class="d-flex align-items-center position-relative catgry-cstmsrch">
            <label>
                <span class="svg-icon svg-icon-1 srchsvg-icon">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                        <rect opacity="0.5" x="17.0365" y="15.1223" width="8.15546" height="2" rx="1" transform="rotate(45 17.0365 15.1223)" fill="black"></rect>
                        <path d="M11 19C6.55556 19 3 15.4444 3 11C3 6.55556 6.55556 3 11 3C15.4444 3 19 6.55556 19 11C19 15.4444 15.4444 19 11 19ZM11 5C7.53333 5 5 7.53333 5 11C5 14.4667 7.53333 17 11 17C14.4667 17 17 14.4667 17 11C17 7.53333 14.4667 5 11 5Z" fill="black"></path>
                    </svg>
                </span>
                <input onChange={handleChange} value={searchValue} type="text" class="form-control w-350px" placeholder="Search Name, Contact, Category, Order id" />
          </label>
            </div>
            </div>
            </div>
            <div className="crdhdr-inner-flx">
            <div className="fv-row">
                <div className='slectbx-singel'>
                  <Select styles={customStyles} placeholder={'Select Date Range'} onChange={(e) => { setDateRangeType(e.value) }} options={DateRangeTypeoptions} />
                </div>
              </div>
              <div className="fv-row">
                <div className='slectbx-singel'>
                  <Select styles={customStyles} placeholder={'Select Delivery Time Slot'} onChange={(e) => { setTimeSlotType(e.value) }} options={TimeSlotTypeoptions} />
                </div>
              </div>
              </div>
        </div>
      </div>
    <div className="card-body">
       <OrderListTable data={data} />
       <Pagination paginationValue={paginationValue} nextPage={nextPage} prevPage={prevPage} />
       </div>
       </div>
       </div>
       </div>
       </div>
    </main>
    </>
  )
}

export default OrderList
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { fetchOrdersLength } from '../../store/slices/Order'

const Pagination = ({nextPage,prevPage}) => {
  // const dispatch = useDispatch()
  // useEffect(()=>{dispatch(fetchOrdersLength())},[])
  
  // const Orderlength = useSelector(state=>state.Order.orderlength)
  // console.log('Orderlength')
  // console.log(Orderlength)
  return (
    <>
    <div class="paginations">
  <ul>
    <li  class="button previous-page">
      <Link onClick={prevPage}>
        <em>
          <i aria-hidden="true" class="fa fa-long-arrow-left"></i>
        </em>Prev </Link>
    </li>
    {/* {Array(paginationValue).fill(1).map((item,idx)=>{
      return(
        <>
    <li key={idx} onClick={()=>{handlePagination(idx + 1)}} class={`p-2 ${paginationValue === idx + 1 ? 'active' : ''}`}>
      {idx + 1}
    </li>
        </>
      )
    })} */}
    <li  onClick={nextPage} class="button next-page">
      <Link >Next <em>
          <i aria-hidden="true" class="fa fa-long-arrow-right"></i>
        </em>
      </Link>
    </li>
  </ul>
</div>
    </>
  )
}

export default Pagination
import React from 'react'
import { Link } from 'react-router-dom'

const Pagination = () => {
  return (
    <>
    <div class="paginations">
  <ul>
    <li class="button previous-page">
      <Link to="/">
        <em>
          <i aria-hidden="true" class="fa fa-long-arrow-left"></i>
        </em>Prev </Link>
    </li>
    <li class="active">
      <a href="">1</a>
    </li>
    <li>
      <a href="">2</a>
    </li>
    <li>
      <a href="">3</a>
    </li>
    <li>
      <a href="">4</a>
    </li>
    <li>
      <a href="">5</a>
    </li>
    <li>
      <a href="">6</a>
    </li>
    <li>
      <a href="">...</a>
    </li>
    <li>
      <a href="">20</a>
    </li>
    <li class="button next-page">
      <Link to="/" >Next <em>
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
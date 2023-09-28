import React from 'react'
import logoLg from '../assets/images/logo-lg.png';
import { Link } from 'react-router-dom';
const Login = () => {
  return (
    <>
    <div class="login-main">
    <div class="login-card">
        <div class="login-head">
          <div class="login-logo">
            <span>  <img src={logoLg} alt='' /></span>
          </div>
            <p>Lorem ipsum dolor sit amet consectetur adipiscing</p>
        </div>
        <div class="add-form">
        <div class="mb-3 fv-row">
          <label class="form-label">Email <i>*</i></label>
        <input type="email" name="email" class="form-control" placeholder="Enter your email" value="" />
          </div>
          <div class="mb-3 fv-row">
          <label class="form-label">Password <i>*</i></label>
        <input type="password" name="password" class="form-control" placeholder="*********" value="" />
          </div>
        </div>
        <div class="login-btn">
            <Link class="btn btn-primary" to="/">Login</Link>
        </div>
    </div>
</div>
    </>
  )
}

export default Login
import React, { useState } from 'react'
import logoLg from '../assets/images/logo-lg.png';
import { Link, useNavigate } from 'react-router-dom';
import { signInUser } from '../store/slices/LoginSlice';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
const Login = () => {

  const navigate = useNavigate()

  const dispatch = useDispatch()
  
  const {pending,user,error} = useSelector(state=>state.Signature.signInUserCredentials)

  const [authState,setAuthState] = useState({
    action:'login_user',
    login_via:'direct',
    username:'',
    password:'',
  })

  const handleChange = (e) => {
    const {name,value} = e.target
    setAuthState((p)=>({
      ...p,
      [name]:value
    }))
  }
  
  const handleSubmit = (e) => {
    e.preventDefault()
    const form = new FormData()
    form.append('action',authState.action)
    form.append('login_via',authState.login_via)
    form.append('username',authState.username)
    form.append('password',authState.password)
    dispatch(signInUser(form))
  }
  console.log(user)
  console.log(`error ===> ${error}`)
  console.log(`pending ===> ${pending}`)
  console.log(`user ===> ${user}`)

  useEffect(()=>{
    if(user){
      navigate('/')
    }
  },[user])

  return (
    <>
    <div class="login-main">
    <div class="login-card">
        <div class="login-head">
          <div class="login-logo">
            <span><img src={logoLg} alt='' /></span>
          </div>
            <p>Lorem ipsum dolor sit amet consectetur adipiscing</p>
        </div>
        <div class="add-form">
        <div class="mb-3 fv-row">
          <label class="form-label">Email <i>*</i></label>
        <input type="email" name="username" onChange={handleChange} value={authState.username} class="form-control" placeholder="Enter your email" />
          </div>
          <div class="mb-3 fv-row">
          <label class="form-label">Password <i>*</i></label>
        <input type="password" name="password" onChange={handleChange} value={authState.password} class="form-control" placeholder="*********" />
          </div>
        <p className={`mt-2 text-danger font-semibold ${error ? 'block' : 'hidden'}`}>{error}</p>
        </div>
        <div class="login-btn">
            <Link onClick={handleSubmit} class="btn btn-primary" >Login</Link>
        </div>
    </div>
</div>
    </>
  )
}

export default Login
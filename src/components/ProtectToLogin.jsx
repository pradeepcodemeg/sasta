import React from 'react'
import { useSelector } from 'react-redux'
import { Navigate, useNavigate } from 'react-router-dom'

const ProtectToLogin = ({children}) => {

    const navigate = useNavigate()
    
    const {pending,user,error} = useSelector(state=>state.Signature)
    console.log(user)
    if(user){
        return navigate('/')
    }
    return children

}

export default ProtectToLogin

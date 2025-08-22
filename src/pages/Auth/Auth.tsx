import React from 'react'
import { Outlet } from 'react-router'

const Auth = () => {
  return (
    <div className='bg-background-main'>
       <Outlet />
    </div>
  )
}

export default Auth

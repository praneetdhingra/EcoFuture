import React from 'react'
import { Outlet } from 'react-router-dom'

const AuthLayout = ({children}) => {
  return (
    <div className='w-full min-h-screen'>
      {children}
      <Outlet></Outlet>
    </div>
  )
}

export default AuthLayout

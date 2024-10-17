import React from 'react'
import Navbar from '../Navbar/Navbar'
import { Outlet } from 'react-router-dom'
import Footer from '../Footer/Footer'

const Layout = ({children}) => {
  return (
    <div className=''>
      <Navbar />
      <Outlet />
      {children}
      <Footer />
    </div>
  )
}

export default Layout

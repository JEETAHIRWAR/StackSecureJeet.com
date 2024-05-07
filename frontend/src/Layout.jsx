import React from 'react'
import './Layout.css';
import { ProfileContainer, MainContainer, Navbar } from './components/index'
import { Outlet } from 'react-router-dom'


function Layout()
{
  return (
    <>
      <div className="layout-container">
        <Navbar />
        <ProfileContainer />
        <MainContainer>
          <Outlet />
        </MainContainer>
      </div>
    </>
  )
}

export default Layout

import React from 'react'
 import { CiMail } from "react-icons/ci";
 import { CiSearch } from "react-icons/ci";
 import { CgProfile } from "react-icons/cg";
 import { IoMdNotificationsOutline } from "react-icons/io";
 import { TbLayoutNavbarCollapse } from "react-icons/tb";

function Header({OpenSidebar}) {
  return (
    <header className='header'>
        <div className='menu-icon'>
            <TbLayoutNavbarCollapse className='icon' onClick={OpenSidebar}/>
        </div>
        <div className='header-left'>
            <CiSearch  className='icon'/>
        </div>
        <div className='header-right'>
            <CgProfile className='icon'/>
            <CiMail className='icon'/>
            <IoMdNotificationsOutline className='icon'/>
        </div>
    </header>
  )
}

export default Header

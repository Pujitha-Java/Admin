import React from 'react';
import { AiFillProfile } from "react-icons/ai";
import { MdManageAccounts } from "react-icons/md";
import { IoTicketOutline } from "react-icons/io5";
import { RxDashboard } from "react-icons/rx";
import { IoSettingsOutline } from "react-icons/io5";

function Sidebar({ openSidebarToggle, OpenSidebar }) {
  return (
    <aside id="sidebar" className={openSidebarToggle ? "sidebar-responsive" : ""}>
      <div className='sidebar-title'>
        <div className='sidebar-brand'>
          <AiFillProfile className='icon_header'/> DELOPYH.AI
        </div>
        <span className='icon close_icon' onClick={OpenSidebar}>X</span>
      </div>

      <ul className='sidebar-list'>
        <li className='sidebar-list-item'>
          <a href="">
            <RxDashboard className='icon'/> Dashboard
          </a>
        </li>
        <li className='sidebar-list-item'>
          <a href="">
            < MdManageAccounts className='icon'/> User Management
          </a>
        </li>
        <li className='sidebar-list-item'>
          <a href="">
            <IoTicketOutline className='icon'/> Ticket
          </a>
        </li>
        <li className='sidebar-list-item'>
          <a href="">
            <IoSettingsOutline className='icon'/> Settings
          </a>
        </li>
      </ul>
    </aside>
  );
}

export default Sidebar;

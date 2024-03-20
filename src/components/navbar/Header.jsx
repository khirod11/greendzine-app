import React from 'react'
import './Header.css'
import { TbAntennaBars5 } from "react-icons/tb";
import { FaWifi } from "react-icons/fa";
import { FaBatteryThreeQuarters } from "react-icons/fa";

const Header = () => {
  return (
    <div className='header-container'>
        <div className='header-time'>11:30</div>
        <div className='header-connection'>
            <TbAntennaBars5/>
            <FaWifi/>
            <FaBatteryThreeQuarters/>
        </div>
    </div>
  )
}

export default Header
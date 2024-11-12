import React, { useEffect, useRef } from 'react'
import './Navbar.css'
import logo from '../../assets/image/logo.png'
import { logout } from '../../Firebase'
import SearchIcon from '@mui/icons-material/Search';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import ArrowDropDownCircleOutlinedIcon from '@mui/icons-material/ArrowDropDownCircleOutlined';


const Navbar = () => {
  const navRef=useRef();
  useEffect(()=>{
window.addEventListener('scroll',()=>{
  if(window.scrollY >=80){
    navRef.current.classList.add('nav-dark')
    }else{
      navRef.current.classList.remove('nav-dark')

    }
  }
  )},[])
  return (
    <div className='navbar' ref={navRef}>
      <div className="navbar-left">
        <img src={logo} alt="" />
        <ul>
          <li>Netflix</li>
          <li>Home</li>
          <li> Tv Shows</li>
          <li>Movies</li>
          <li>Latest</li>
          <li>My List </li>
          <li>Browser by Language</li>
        </ul>
      </div>
      <div className="navbar-right">
        <ul>
        <li><SearchIcon/></li>
        <li><NotificationsNoneIcon/></li>
        <li><AccountBoxIcon/></li>
        <li><ArrowDropDownCircleOutlinedIcon/></li>
        </ul>

        <div className="drop-down">
          <p onClick={()=>{logout()}}>Sign Out</p>
        </div>
      </div>
      


    </div>
  )
}

export default Navbar
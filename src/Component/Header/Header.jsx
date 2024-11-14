import React, { useEffect} from 'react'
import './Header.css'
import logo from '../../assets/image/logo.png'
import { logout } from '../../Firebase'
import SearchIcon from '@mui/icons-material/Search';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import ArrowDropDownCircleOutlinedIcon from '@mui/icons-material/ArrowDropDownCircleOutlined';


const Header = () => {
  useEffect(()=>{
window.addEventListener('scroll',()=>{
  const header = document.querySelector('.header');
  if (header) {
    if (window.scrollY >= 80) {
      header.classList.add('nav-dark');
    } else {
      header.classList.remove('nav-dark');
    }
  }
  
  }
  )},[])
  return (
    <div className='header' >
      <div className="header-left">
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
      <div className="header-right">
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

export default Header
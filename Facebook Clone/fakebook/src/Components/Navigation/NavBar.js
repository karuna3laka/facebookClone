import React from 'react';
import SearchIcon from '@mui/icons-material/Search';
import PersonIcon from '@mui/icons-material/Person';
import MessageIcon from '@mui/icons-material/Message';
import SettingsIcon from '@mui/icons-material/Settings';
import './NavBar.css';


export default function NavBar() {
  return (
    <div className="navBarBox">
      <div className="navBarLeft">
        <span className="logo">FaceBook Lite</span>
      </div>
      <div className="navBarCenter">
        <div className="searchBarBox">
          <SearchIcon className='searchIcon' />
          <input placeholder='search for friends' className='searchInput' />
        </div>
      </div>
      <div className="navBarRight">
        <div className="navBarLinks">
          <span className="navBarLinks">Homepage</span>
          <span className="navBarLinks">Profile</span>
        </div>
        
        <div className="navBarIcons">
          <div className="navBarIcon">
            <PersonIcon className='personIcon' />
            <span className="iconTag">2</span>
          </div>
          <div className="navBarIcon">
            <MessageIcon className='messageIcon' />
            <span className="iconTag">4</span>
          </div>
          <div className="navBarIcon">
            <SettingsIcon className='settingIcon' />
            <span className="iconTag">1</span>
          </div>
        </div> 
      
      </div>
      <div className='pic'>
          <img src=".\images\one.jpeg" alt="pic1" className="profilepic" />

        </div>
    </div>
    
  );
}

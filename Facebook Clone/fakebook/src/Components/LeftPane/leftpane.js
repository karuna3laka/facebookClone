import React from 'react';
import "./leftpane.css";
import MessageIcon from '@mui/icons-material/Message';
import MarkUnreadChatAltIcon from '@mui/icons-material/MarkUnreadChatAlt';
import GroupIcon from '@mui/icons-material/Group';
import RssFeedIcon from '@mui/icons-material/RssFeed';
import FlagIcon from '@mui/icons-material/Flag';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import BuildIcon from '@mui/icons-material/Build';
import SportsEsportsIcon from '@mui/icons-material/SportsEsports';
import NewspaperIcon from '@mui/icons-material/Newspaper';

export default function LeftPane() {
  return (
    <div className='leftPaneBox'>
      <div className="leftPaneContainer">
        <ul className='leftPaneMenu'>
          <li className='leftPaneMenuItem'>
            <MessageIcon className='leftPaneMenuIcon'/>
            <span className='leftPaneMenuText'>Messages</span>
          </li>
          <li className='leftPaneMenuItem'>
            <MarkUnreadChatAltIcon className='leftPaneMenuIcon'/>
            <span className='leftPaneMenuText'>Unread Messages</span>
          </li>
          <li className='leftPaneMenuItem'>
            <GroupIcon className='leftPaneMenuIcon'/>
            <span className='leftPaneMenuText'>Groups</span>
          </li>
          <li className='leftPaneMenuItem'>
            <RssFeedIcon className='leftPaneMenuIcon'/>
            <span className='leftPaneMenuText'>Followers</span>
          </li>
          <li className='leftPaneMenuItem'>
            <FlagIcon className='leftPaneMenuIcon'/>
            <span className='leftPaneMenuText'>Pages</span>
          </li>
          <li className='leftPaneMenuItem'>
            <CalendarMonthIcon className='leftPaneMenuIcon'/>
            <span className='leftPaneMenuText'>Reminders</span>
          </li>
          <li className='leftPaneMenuItem'>
            <BuildIcon className='leftPaneMenuIcon'/>
            <span className='leftPaneMenuText'>Settings</span>
          </li>
          <li className='leftPaneMenuItem'>
            <SportsEsportsIcon className='leftPaneMenuIcon'/>
            <span className='leftPaneMenuText'>Games</span>
          </li>
          <li className='leftPaneMenuItem'>
            <NewspaperIcon className='leftPaneMenuIcon'/>
            <span className='leftPaneMenuText'>News</span>
          </li>
        </ul>
        <hr></hr>
        <div className="pagesyouliked">
          <h6>
            Pages You Liked.
          </h6>
        </div>
        <li className='pagelistitems'> 
        <img src='\images\one.jpeg' alt="pic1" className='liked_pages_picture'/>
        <span className='page_names'>Formula1 Fans</span>
        </li>

        <li className='pagelistitems'> 
        <img src='\images\one.jpeg' alt="pic1" className='liked_pages_picture'/>
        <span className='page_names'>K3</span>
        
        </li>

        <li className='pagelistitems'> 
        <img src='\images\one.jpeg' alt="pic1" className='liked_pages_picture'/>
        <span className='page_names'>IIT Sri Lanka</span>
        
        </li>

        <li className='pagelistitems'> 
        <img src='\images\one.jpeg' alt="pic1" className='liked_pages_picture'/>
        <span className='page_names'>k3lk.04270</span>
        
        </li>

        <li className='pagelistitems'> 
        <img src='\images\one.jpeg' alt="pic1" className='liked_pages_picture'/>
        <span className='page_names'>Logan Paul</span>
        
        </li>

        <li className='pagelistitems'> 
        <img src='\images\one.jpeg' alt="pic1" className='liked_pages_picture'/>
        <span className='page_names'>Side men</span>
        
        </li>
      </div>
    </div>
  );
}

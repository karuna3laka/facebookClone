import React from 'react';
import './rightpane.css';

export default function RightPane() {
  return (
    <div className='rightPaneBox'>
      <div className='section'>
        <h4>Friend Requests</h4>
  
        <div className='friendRequest'>
          <img src="/images/two.jpg" alt="friend" className='friendImage' />
          <span className='friendName'>John Doe</span>
          <button className='actionButton'>Confirm</button>
          <button className='actionButton'>Delete</button>
        </div>
      </div>

      <div className='section'>
        <h4>Birthdays</h4>
        <div className='birthdayNotification'>
          <span className='birthdayText'>Today is Mike's birthday.</span>
        </div>
      </div>

      <div className='section'>
        <h4>Contacts</h4>
        <div className='contact'>
          <img src="/images/two.jpg" alt="contact" className='contactImage' />
          <span className='contactName'>Alice Johnson</span>
        </div>
      </div>

      <div className='section'>
        <h4>Sponsored</h4>
        <div className='sponsored'>
          <img src="/images/two.jpg" alt="sponsored ad" className='sponsoredImage' />
          <span className='sponsoredText'>Check out this amazing product!</span>
        </div>
      </div>
    </div>
  );
}

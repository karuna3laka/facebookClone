import React from 'react';
import NavBar from '../../Components/Navigation/NavBar';
import LeftPane from '../../Components/LeftPane/leftpane'; // Notice the change here
import PostPane from '../../Components/PostPane/postpane';
import RightPane from '../../Components/RightPane/rightpane';
import "./home.css";





export default function Home() {
  return (
    <>
      <NavBar />
      <div className="bottomContainer">
        <LeftPane /> 
        <PostPane /> 
        <RightPane /> 
      </div>
      
      
    </>
  );
}

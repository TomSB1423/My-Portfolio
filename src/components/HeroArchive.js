import React from 'react';
import '../App.css';
import './HeroArchive.css';

function HeroSection() {
 return (
  <div className='archive-container noselect'>
   {/* Would be background video below */}
   {/* <video src='/videos/video-1.mp4' autoPlay loop muted /> */}
   <div className='mobile-spacing'> </div>
   <h1>Welcove to the Archive</h1>
   <p>
    Find out more about me!
    <div class='arrow bounce'>
     <i class='fa fa-arrow-down'/>
    </div>
   </p>
  </div>
 );
}

export default HeroSection;

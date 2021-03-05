import React from 'react';
import '../App.css';
import { Button } from './Button';
import './HeroMain.css';

function HeroSection() {
 return (
  <div className='hero-container noselect'>
   {/* Would be background video below */}
   {/* <video src='/videos/video-1.mp4' autoPlay loop muted /> */}
   <img className='profilePicture' src='/images/Hero/profilePicture.jpg' />
   <div className='mobile-spacing'> </div>
   <h1>TOM BUSHELL</h1>
   <p>Entrepreneur and Developer</p>
   <div className='hero-btns'>
    <Button
     className='btns'
     link='https://www.linkedin.com/in/t-bushell/'
     buttonStyle='btn--outline'
     buttonSize='btn--large'
    >
     <i class='fab fa-linkedin-in'></i>
    </Button>
    <Button
     className='btns'
     link='mailto:tsbushell@outlook.com'
     buttonStyle='btn--outline'
     buttonSize='btn--large'
    >
     <i class='fas fa-envelope'></i>
    </Button>
    <Button
     className='btns'
     link='https://github.com/TomSB1423'
     buttonStyle='btn--outline'
     buttonSize='btn--large'
    >
     <i class='fab fa-github'></i>
    </Button>
   </div>
  </div>
 );
}

export default HeroSection;

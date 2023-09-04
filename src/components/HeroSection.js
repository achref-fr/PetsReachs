import React from 'react';
import '../App.css';
import { Button } from './Button';
import './HeroSection.css';
import { Link as ScrollLink } from 'react-scroll';
function HeroSection() {
  
  return (
    <div className='hero-container'>
      <video src='/videos/video-1.mp4' autoPlay loop muted />
      <h1>Get 10 More Bookings - Risk Free!</h1>
      <p>Within 30 days or you don't pay !</p>
      <div className='hero-btns'>
     <Button
  className='btns'
  buttonStyle='btn--outline'
  buttonSize='btn--large'
  scrollTo='footer-subscription-heading' // Replace 'targetElement' with the actual element's name
>
  GET STARTED
</Button>

  
      </div>
      
    </div>
  );
}

export default HeroSection;
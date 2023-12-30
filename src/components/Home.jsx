import React from 'react';
import Navbar from './Navbar';
import Profile_pic from '../assets/high-angle-desktop-with-laptop-copy-space.jpg';

const Home = () => {
  return (
    <div id="home">
      <Navbar />
      <div
        className="lg:h-screen h-[400px] bg-cover flex items-center justify-center lg:text-white text-blue-400"
        style={{
          backgroundImage: `url(${Profile_pic})`,
        }}
      >
        <div className="text-center">
          <div className='text-5xl lg:text-white font-bold'>I am Kartvaya Gupta</div>
          <div className='text-3xl lg:text-white font-bold mt-4 animate-bounce'>WEB DEVELOPER</div>
          
        </div>
      </div>
    </div>
  );
};

export default Home;

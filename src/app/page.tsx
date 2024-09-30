import React from 'react';
import Home from './dashboard/home';
import Projects from './dashboard/projects';
import About from './dashboard/about';
import Navbar from './dashboard/navbar'


const page = () => {
  return (
    <div className='bg-gray-100'>
      <Navbar />
      <Home />
      <Projects />
      <About />
    </div>
);
};

export default page;

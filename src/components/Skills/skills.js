import React from 'react';
import './skills.css';
import AppDev from '../../assets/app-dev.png';
import WebDev from '../../assets/web-dev.png';
import MobileDev from '../../assets/mobile-dev.png';

const Skills = () => {
  return (
    <section id='skills'>
        <span className='skillTitle'>What I Do</span>
        <span className='skillDesc'>I am a result-driven, passionate and skilled software development expert
            with over 6 years of experience in managing and building high-performance teams
            and 12+ years of experience in developing customer satisfied applications.</span>
        <div className='skillBars'>
          <div className='skillBar'>
            <img src={AppDev} alt='AppDevelopment' className='skillBarImg'></img>
            <div className='skillBartext'>
              <h2>Application Development</h2>
              <p>This is demo text.</p>
            </div>
          </div>
          <div className='skillBar'>
            <img src={WebDev} alt='WebDevelopment' className='skillBarImg'></img>
            <div className='skillBartext'>
              <h2>Web Development</h2>
              <p>This is demo text.</p>
            </div>
          </div>
          <div className='skillBar'>
            <img src={MobileDev} alt='MobileDevelopment' className='skillBarImg'></img>
            <div className='skillBartext'>
              <h2>Mobile Development</h2>
              <p>This is demo text.</p>
            </div>
          </div>
        </div>
    </section>
  )
}

export default Skills
import React from 'react'
import Typed from 'react-typed';
import 'react-typed/dist/animatedCursor.css'
import './intro.css';
import bg from '../../assets/manfat2.png';
import btnImg from '../../assets/hireme2.gif';
import { Link } from 'react-scroll';

const Intro = () => {
  
  return (
    <section id='intro'>
        <div className='introContent'>
            <span className='hello'>Hello,</span>
            <span className='introText'>I'm <span className='introName'>Phyoe Tay Zar Minn</span> <br />
            </span>
            <Typed strings={['Software Developer', 'Solution Architect', 'Freelancer']} typeSpeed={40} backSpeed={50} backDelay={2000} loop></Typed>
            <span className='typed' data-typed-items='Software Developer, Solution Architect'></span>
            <p className='introPara'>I am a result-driven, passionate and skilled software development expert</p>
            <Link to='#'><button className='btn'onClick={() => {
            document.getElementById('contact').scrollIntoView({behavior: 'smooth'});
        }}><img className='btnImg' src={btnImg} alt='Hire Me' />Hire Me</button></Link>
        </div>
        <img src={bg} alt='Profile' className='bg' />
    </section>
  )
}

export default Intro
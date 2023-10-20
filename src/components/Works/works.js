import React from 'react'
import './works.css';
import SeeMore from '../../assets/seemore.gif';
import Portfolio1 from '../../assets/integralsolution.jpeg';
import Portfolio2 from '../../assets/project-2.jpg';
import Portfolio3 from '../../assets/project-3.jpg';
import Portfolio4 from '../../assets/fareast-portfolio.jpeg';
import Portfolio5 from '../../assets/nhn-portfolio.jpeg';
import Portfolio6 from '../../assets/tutor-portfolio.jpeg';

const Works = () => {
  return (
    <section id='works'>
        <h2 className='worksTitle'>My Portfolio</h2>
        <span className='worksDesc'>I am a result-driven, passionate and skilled software development expert
            with over 6 years of experience in managing and building high-performance teams
            and 12+ years of experience in developing customer satisfied applications.</span>
        <div className='worksImgs'>
          <img src={Portfolio1} alt='' className='worksImg' />
          <img src={Portfolio2} alt='' className='worksImg' />
          <img src={Portfolio3} alt='' className='worksImg' />
          <img src={Portfolio4} alt='' className='worksImg' />
          <img src={Portfolio5} alt='' className='worksImg' />
          <img src={Portfolio6} alt='' className='worksImg' />
        </div>
        <button className='worksBtn'><img className='btnImg' src={SeeMore} alt='See More' />See More</button>
    </section>
  );
}

export default Works
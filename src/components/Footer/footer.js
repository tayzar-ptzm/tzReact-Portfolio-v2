import React from 'react'
import './footer.css';
import Song2 from '../../assets/leva-eternity.mp3';

const Footer = () => {
  return (
    <footer className='footer'>
      <audio preload='auto' src={Song2} loop autoPlay></audio>
        Copyright &#169; 2023 Phyoe Tay Zar Minn. All right received.
    </footer>
  )
}

export default Footer
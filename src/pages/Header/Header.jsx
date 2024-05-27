import React from 'react';
import './Header.css'
import headIcon1 from "../../Assets/Logos/headIcon1.png"
import headIcon2 from "../../Assets/Logos/headIcon2.png"
import headIcon3 from "../../Assets/Logos/headIcon3.png"
export default function Header() {
  return (
    <div>
      <>
      
      <div className='headerIcons'> 
        <span>
            <img src={headIcon1} alt="bell-icon1" />
        </span>
        <span>
            <img src={headIcon2} alt="bell-icon2" />
        </span>
        <span style={{color:'#8c8694'}}>
            <img src={headIcon3} alt="bell-icon3" />
            &nbsp; 8000
        </span>
      </div>
      
      </>
    </div>
  )
}

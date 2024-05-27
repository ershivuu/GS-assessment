import React from 'react'
import './SideNav.css'
import sideLogo from "../Assets/Logos/sideLogo.png";
import sideimglogo from "../Assets/Logos/sideimglogo.png";
import lessthanIcon from "../Assets/Logos/lessthanIcon.png";
import flash from "../Assets/Logos/flash.png";
import coin from "../Assets/Logos/coin.png";
import infoIcon from "../Assets/Logos/infoIcon.png";
import Bronze from "../Assets/Logos/Bronze.png";
import Silver from "../Assets/Logos/Silver.png";
import spinwheel from "../Assets/Logos/spinwheel.png";
import vector1 from "../Assets/Logos/vector1.png";
import vector2 from "../Assets/Logos/vector2.png";
import vector3 from "../Assets/Logos/vector3.png";
import vector4 from "../Assets/Logos/vector4.png";
import vector5 from "../Assets/Logos/vector5.png";


function SideNav() {
  return (
    <>
      <div>
        <div className="sidebar">

          <img src={sideLogo} alt="logo" style={{ marginTop: '10px' }} />


          <div class="Sidecard">

            <div class="Sidecard-content">
              {/* <h2 class="Sidecard-title">Sidecard Title</h2> */}
              <div className="user">
                <div className="usr-img">
                  <img src={sideimglogo} alt="" />
                </div>
                <div className="usr-data">
                  <p>Gold &nbsp; &nbsp;<span><img src={lessthanIcon} alt="" /></span></p>
                  <p className='logo-percent'>
                    <div className='percent-div'>
                      <div>
                        <img src={flash} alt="" />
                      </div>
                      <div>
                        <span>30%</span>
                      </div>
                    </div>
                    <div className='percent-div'>
                      <div>
                        <img src={coin} alt="" />
                      </div>
                      <div>
                        <span>10%</span>
                      </div>
                      <div>
                        &nbsp;
                        &nbsp;
                        <img src={infoIcon} alt="" />
                      </div>
                    </div>
                  </p>
                </div>

              </div>
            </div>
            <div className='SideBar-btn'>
              <div>
                <button className="lines-button Side-btn On">
                  <span> Get Coins </span>
                </button>
              </div>
              <div>
                <button className="lines-button Side-btn">
                  <span> Redeem </span>
                </button>
              </div>
            </div>


            <div className="prog1">

              <div className="prog-data">
                <div className='bronze-logo'>
                  <img src={Bronze} alt="" />
                </div>
                <div className='prog-content'>
                  <span>Bronze </span>
                  <br />
                  <span style={{ fontSize: '10px', color: '#858585', fontWeight: '400' }}>Your Loyalty Level</span>
                  <span className='lessthanBig'>   <img src={lessthanIcon} alt="" /> </span>
                </div>
              </div>



            </div>
            <div className="prog2">

              <div className="prog-data2">
                <div className='mlp-text'>
                  Monthly Loyalty Progress
                </div>
                <div className='prog-content'>
                  <span className='span-start'><img src={Bronze} alt="" /></span>
                  <div class="progress bar-long">
                    <div class="progress-bar progress-bar-striped bg-warning" role="progressbar"
                      style={{ width: '70%' }} aria-valuenow="70"
                      aria-valuemin="0" aria-valuemax="100"></div>
                  </div>
                  <span className='span-end'><img src={Silver} alt="" /></span>
                </div>


                <div className='progress-label'>
                  <div className='pgr-lab1'>
                    Bronze
                  </div>
                  <div className='pgr-lab1' style={{color:'#858585'}}> 
                    70%
                  </div>
                  <div className='pgr-lab1'>
                    Silver
                  </div>
                </div>

              </div>

            </div>
            <div className='spinwheel'><img src={spinwheel} alt="" /></div>
          </div>


          
          <div class="Sidecard2">

         <div className='card2-label'>
          
          <div><img src={vector1} alt="" /></div>
          <div>Lobby</div>
          </div>
         <div className='card2-label'>
          
          <div><img src={vector2} alt="" /></div>
          <div>Stackr Scratchers</div>
          </div>
         <div className='card2-label'>
          
          <div><img src={vector3} alt="" /></div>
          <div>Social Casino</div>
          </div>
         <div className='card2-label'>
          
          <div><img src={vector4} alt="" /></div>
          <div>Reward/VIP system</div>
          </div>
         <div className='card2-label'>          
          <div><img src={vector2} alt="" /></div>
          <div>Promotions</div>
          </div>
          
         <div className='card2-label'>          
          <div><img src={vector5} alt="" /></div>
          <div>Responsible Gambling</div>
          </div>
  
          </div>
        
       
          {/* <div className="sidebar-footer">
            <div className="sidebar-user">
              <img src="user.png" alt="user" />
              <div>
                <h3>John Doe</h3>
                <p>Gold Member</p>
              </div>
            </div>
            <div className="sidebar-buttons">
              <button>Get Coins</button>
              <button>Redeem</button>
            </div>
          </div> */}
        </div>
      </div></>
  )
}

export default SideNav

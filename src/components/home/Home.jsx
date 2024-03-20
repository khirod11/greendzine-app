import React from 'react'
import './Home.css'
import helpIcon from '../images/Group 46.png'
import logo from '../images/moptro logo.png'
const Home = () => {
  return (
    <div className='home-container'>
        <div className='help-icon'>
            <img src={helpIcon} alt="" />
        </div>
        <div className='company-logo'>
            <img src={logo} alt="" />
            <div>4</div>
        </div>
        <div className='home-container-box'>
            <div className='home-container-box-header'>
                Employee Productivity Dashboard
            </div>
            <div className='home-container-box-body'>
                <div className='home-body-item'>
                    <div className='home-body-item-info'>
                        <p>Productivity on Monday</p>
                        <p>4%</p>
                    </div>
                    <div className="progress-line" data-percent='4%'>
                    <span style={{width:'4%'}}></span>
                    </div>
                    
                </div>
                <div className='home-body-item'>
                    <div className='home-body-item-info'>
                        <p>Productivity on Tuesday</p>
                        <p>92%</p>
                    </div>
                    <div className="progress-line" data-percent='92%'>
                    <span style={{width:'62%'}}></span>
                    </div>
                    
                </div>
                <div className='home-body-item'>
                    <div className='home-body-item-info'>
                        <p>Productivity on Wednesday</p>
                        <p>122%</p>
                    </div>
                    <div className="progress-line" data-percent='122%'>
                    <span style={{width:'88%'}}></span>
                    </div>
                    
                </div>
                <div className='home-body-item'>
                    <div className='home-body-item-info'>
                        <p>Productivity on Thursday</p>
                        <p>93%</p>
                    </div>
                    <div className="progress-line" data-percent='93%'>
                    <span style={{width:'74%'}}></span>
                    </div>
                    
                </div>
                <div className='home-body-item'>
                    <div className='home-body-item-info'>
                        <p>Productivity on Friday</p>
                        <p>89%</p>
                    </div>
                    <div className="progress-line" data-percent='89%'>
                    <span style={{width:'80%'}}></span>
                    </div>
                    
                </div>
                <div className='home-body-item'>
                    <div className='home-body-item-info'>
                        <p>Productivity on Saturday</p>
                        <p>98%</p>
                    </div>
                    <div className="progress-line" data-percent='98%'>
                    <span style={{width:'84%'}}></span>
                    </div>
                    
                </div>
            </div>
        </div>
    </div>
  )
}

export default Home
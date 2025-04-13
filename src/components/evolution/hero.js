import React from 'react'
import arrow_btn from '../assests/arrow_btn.png';
import play_icon from '../assests/play_icon.png';
import pause_icon from '../assests/pause_icon.png';
import './hero.css'

const Hero = (props) => {
  return (
    <div className='hero'>
        <div className='hero-text'>
            <p>{props.herodata.text1}</p>
            <p>{props.herodata.text2}</p>
        </div>
        <div className='hero-explore'>
            <p>Explore the features</p>
            <img src={arrow_btn} alt=""></img>
        </div>
        <div className='hero-dot-play'>
            <ul className='hero-dots'>
                <li onClick={()=>{props.setherocount(0)}} className={props.herocount===0?"hero-dot orange":"hero-dot"}></li>
                <li onClick={()=>{props.setherocount(1)}} className={props.herocount===1?"hero-dot orange":"hero-dot"}></li>
                <li onClick={()=>{props.setherocount(2)}} className={props.herocount===2?"hero-dot orange":"hero-dot"}></li>
            </ul>
            <div className='hero-play'>
                <img onClick={()=>{props.setplaystatus(!props.playstatus)}} src={props.playstatus?pause_icon : play_icon} alt=""></img>
                <p>See the video</p>

            </div>
        </div>
    </div>
  )
}

export default Hero
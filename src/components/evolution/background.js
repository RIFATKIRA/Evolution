import React from 'react';
import video1 from '../assests/video1.mp4';
import image1 from '../assests/image1.png';
import image2 from '../assests/image2.png';
import image3 from '../assests/image3.png';
import './background.css';


const Background = (props) => {

  if(props.playstatus)
    return (
      <video className='background fade-in' autoPlay loop muted>
        <source src={video1} type="video/mp4"></source>
      </video>
  )
  else if(props.herocount===0)
  {
    return(
      <img src={image1} className='background fade-in' alt=""></img>
    )
  }
  else if(props.herocount===1)
    {
      return(
        <img src={image2} className='background fade-in' alt=""></img>
      )
    }
    else
      {
        return(
          <img src={image3} className='background fade-in' alt=""></img>
        )
      }
}

export default Background;
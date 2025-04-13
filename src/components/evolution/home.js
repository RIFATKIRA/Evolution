import React, { useEffect, useState } from 'react'
import Background from './background';
import Hero from './hero';
import Navabr from './navbar';

const Home = () => {

    const herodata = [
        {text1:"Drive into", text2:"What you love"},
        {text1:"Indulge", text2:"Your passion"},
        {text1:"Give in to", text2:"Your passion"},
    ]
    const [herocount, setherocount] = useState(0);
    const [playstatus, setplaystatus] =useState(false);

    useEffect(()=>{
      setInterval(()=>{
        setherocount((prevcount)=>{
          return prevcount===2?0:prevcount+1
        })
      }, 3000)
    },[])
  return ( 
    <div>
        <Background playstatus={playstatus} herocount={herocount} />
        <Navabr />
        <Hero setplaystatus={setplaystatus} herodata={herodata[herocount]} herocount={herocount} setherocount = {setherocount} playstatus={playstatus}/>
    </div>
  )
}

export default Home
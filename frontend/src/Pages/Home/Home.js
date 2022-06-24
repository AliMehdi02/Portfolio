import React from 'react'
import './Home.css';
import video from '../videos/video.mp4';
import  { useEffect, useState } from "react";



const Main = () =>{
  return (
    
    <div id='bgVideo'>  
    <div className='overlay'></div>
        <video src= {video} autoPlay loop muted />
        <div className='text'>
            <h1></h1>
            <p className='txt2'> <b>Note: </b> <b>This is not the final version 
          More Features are under development</b> </p>
            <h3>"Its Now <i>Simple, Quick & Easy </i> To Know"</h3>
            <a href="/Cont">
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        ABOUT ME
    </a>
        </div> 
    </div>
    
  ) 
}


const Home = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);

  return <div>{loading ? "loading..." : Main()}</div>;
}


export default Home;

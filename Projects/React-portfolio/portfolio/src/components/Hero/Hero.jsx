import React from 'react'
import "./Hero.css"
import profile_img from "../../assets/profile_img.png"

const Hero = () => {
  return (
    <div className='hero' id='home'>
      <img src={profile_img} alt="" height="200px" />
      <h1> <span>i'm Aditya Patel,</span> Full Stack Developer.</h1>
      <p>I am a full stack developer from Gujarat,India with 1 year of experience in multiple companies like  Apple,Google. </p>
      <div className='hero-action'>
        <div className="hero-connect">Connect With me</div>
        <div className="hero-resume">My Reasume</div>
      </div>
    </div>
  )
}

export default Hero

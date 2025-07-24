import React from 'react'
import Discord from '../components/Discord'
import Hero from '../components/Hero'
import Tournament from '../components/Tournament'
import Schedule from '../components/Schedule'
import Footer from '../components/Footer'
const Home = () => {
  return (
    <div>
        <Hero/>
        <Discord/>
        <Tournament/>
        <Schedule/>
        <Footer/>
    </div>
  )
}

export default Home
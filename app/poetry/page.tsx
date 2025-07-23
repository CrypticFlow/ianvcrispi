'use client'
import React from 'react'
import Header from '../components/header'
import Nav from '../components/nav'
import Footer from '../components/footer'

export default function Poetry() {
  return (
    <div className="relative min-h-screen bg-white w-full" style={{ backgroundColor: 'white' }}> 
        <Header />
        <Nav />
        <h1 className="text-center text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-teal-400 pl-[8vh] pr-[8vh] mb-[3vh]"> All of my poetry is available as Laser Engraved Woodcut fine art Commissions. </h1>
        <h2 className="text-center text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-teal-400"> Examples Coming Soon... </h2>
        <Footer /> 
    </div>
  )
}



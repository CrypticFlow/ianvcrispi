'use client'
import Image from 'next/image'
import Header from './components/header'
import Nav from './components/nav'
import { useRouter } from 'next/navigation'
import Footer from './components/footer'
import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

export default function IanVCrispi() {
  const router = useRouter()

  return (
    <div className="relative min-h-full bg-white w-full" style={{ minHeight: '100vh', backgroundColor: 'white' }}>
      <Header />
      <Nav />
      
      {/* Dove Feather positioned in bottom right corner between logo and nav */}
      <motion.div 
        className="h-[50vh] right-[5%] top-[30%] md:right-[15%] md:top-[30%] z-40"
        initial={{ y: 200, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ 
          duration: 1.2, 
          ease: "easeOut",
          delay: 0.5
        }}
      >
        <div className="flex flex-col items-end mr-[15%]">
          <Image
            src="/Assets/DoveFeatherVision_001.png"
            alt="Dove Feather"
            width={300}
            height={360}
            priority
            className="mb-4 opacity-80 hover:opacity-100 transition-all duration-300"
            style={{
              filter: 'hue-rotate(200deg) saturate(150%) brightness(1.2)',
              mixBlendMode: 'multiply'
            }}
          />
        </div>
      </motion.div>

      {/* Scrollable content */}
      <div className="h-[500vh] mt-[5vh] bg-white w-full" style={{ backgroundColor: 'white' }}>

        {/* Second Poem - Rainbow Tears - Scroll triggered from left */}
        <div className="h-screen flex items-end justify-start pl-[5%] pb-[30%]">
          <motion.div
            initial={{ x: -300, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ 
              duration: 1.2, 
              ease: "easeOut"
            }}
            viewport={{ once: true, margin: "-100px" }}
          >
            <Image
              src="/Assets/RainbowTears_Final.png"
              alt="Rainbow Tears"
              width={500}
              height={500}
              className="opacity-80 hover:opacity-100 transition-all duration-300"
            />
          </motion.div>
        </div>

         {/* Third Poem - PsyberDelic - Scroll triggered from left */}
         <div className="h-screen flex items-end justify-start pl-[15%] pb-[13%]">
          <motion.div
            initial={{ x: 250, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ 
              duration: 1.2, 
              ease: "easeOut"
            }}
            viewport={{ once: true, margin: "-100px" }}
          >
            <Image
              src="/Assets/PsyberDelic_Final.png"
              alt="PsyberDelic"
              width={800}
              height={800}
              className="opacity-80 hover:opacity-100 transition-all duration-300"
            />
          </motion.div>
        </div>


        {/* Fourth Poem - Trust - Scroll triggered from right */}
        <div className="h-screen flex items-end justify-end pr-[13%] pb-[10%]">
          <motion.div
            initial={{ x: -300, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ 
              duration: 1.2, 
              ease: "easeOut"
            }}
            viewport={{ once: true, margin: "-100px" }}
          >
            <Image
              src="/Assets/Trust-Iridescent.png"
              alt="Trust"
              width={360}
              height={360}
              className="opacity-80 hover:opacity-100 transition-all duration-300"
            />
          </motion.div>
        </div>

        {/* Fifth Poem - Your Song - Scroll triggered from left */}
        <div className="h-screen flex items-end justify-start pl-[13%] pb-[3%]">
          <motion.div
            initial={{ x: 300, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ 
              duration: 1.2, 
              ease: "easeOut"
            }}
            viewport={{ once: true, margin: "-100px" }}
          >
            <Image
              src="/Assets/YourSong_Final.png"
              alt="Your Song"
              width={360}
              height={360}
              className="opacity-80 hover:opacity-100 transition-all duration-300"
            />
          </motion.div>
        </div>

        {/* Sixth Poem - Luscious Death - Scroll triggered from right */}
        <div className="h-screen flex items-end justify-start pl-[18%] pb-[10%]">
          <motion.div
            initial={{ x: -300, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ 
              duration: 1.2, 
              ease: "easeOut"
            }}
            viewport={{ once: true, margin: "-100px" }}
          >
            <Image
              src="/Assets/LusciousDeath_Final.png"
              alt="Luscious Death"
              width={500}
              height={500}
              className="opacity-80 hover:opacity-100 transition-all duration-300"
            />
          </motion.div>
        </div>

        {/* Seventh Poem - Mad Kiss - Scroll triggered from left */}
        <div className="h-screen flex items-end justify-start pl-[10%] pb-[10%]">
          <motion.div
            initial={{ x: 300, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ 
              duration: 1.2, 
              ease: "easeOut"
            }}
            viewport={{ once: true, margin: "-100px" }}
          >
            <Image
              src="/Assets/MadKiss_Final.png"
              alt="Mad Kiss"
              width={800}
              height={800}
              className="opacity-80 hover:opacity-100 transition-all duration-300"
            />
          </motion.div>
        </div>

      </div>

      <Footer />
    </div>
  )
}

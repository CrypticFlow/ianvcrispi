'use client'
import Image from 'next/image'
import Header from './components/header'
import Nav from './components/nav'
import { useRouter } from 'next/navigation'
import Footer from './components/footer'
import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { useQuery } from 'convex/react'
import { api } from '../convex/_generated/api'

export default function IanVCrispi() {
  const router = useRouter()
  const poems = useQuery(api.poems.getPoems)

  if (!poems) {
    return <div>Loading...</div>
  }

  return (
    <div className="relative min-h-full bg-white w-full overflow-x-hidden" style={{ minHeight: '100vh', backgroundColor: 'white' }}>
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
      <div className="mt-[5vh] bg-white w-full" style={{ backgroundColor: 'white' }}>
        {poems.map((poem) => (
          <div 
            key={poem._id} 
            className={`h-[80vh] md:min-h-screen flex items-center justify-center md:items-end md:${
              poem.justifyPosition === 'start' ? 'justify-start' : 
              poem.justifyPosition === 'center' ? 'justify-center' : 
              'justify-end'
            } px-4 md:px-8 lg:px-16 py-4 md:pb-16 lg:pb-24`}
          >
            <motion.div
              initial={{ 
                x: -100, 
                opacity: 0 
              }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ 
                duration: 1.2, 
                ease: "easeOut"
              }}
              viewport={{ once: true, margin: "-100px" }}
            >
              <Image
                src={poem.imageUrl}
                alt={poem.alt}
                width={poem.width}
                height={poem.height}
                className={`opacity-80 hover:opacity-100 transition-all duration-300 object-contain
                  w-[90vw] h-[90vw] max-w-md max-h-md ${poem.width >= 800 ? 'md:w-96 md:h-96 lg:w-[800px] lg:h-[800px]' : 
                    poem.width >= 500 ? 'md:w-80 md:h-80 lg:w-[500px] lg:h-[500px]' :
                    'md:w-72 md:h-72 lg:w-[360px] lg:h-[360px]'}`}
              />
            </motion.div>
          </div>
        ))}
      </div>

      <Footer />
    </div>
  )
}

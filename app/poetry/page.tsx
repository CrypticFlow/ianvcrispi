'use client'
import React from 'react'
import Image from 'next/image'
import Header from '../components/header'
import Footer from '../components/footer'
import { motion } from 'framer-motion'
import { poems } from '../data/poems'

export default function Poetry() {
  return (
    <div className="relative min-h-screen bg-white w-full overflow-x-hidden" style={{ backgroundColor: 'white' }}>
      <Header />

      <h1 className="text-center text-xl md:text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-teal-400 px-8 mb-8 mt-4" style={{ fontFamily: 'Osaka, sans-serif' }}>
        Poetry
      </h1>

      <p className="text-center text-gray-600 px-8 mb-12 max-w-xl mx-auto">
        All of my poetry is available as Laser Engraved Woodcut fine art Commissions.
      </p>

      <div className="flex flex-col items-center gap-16 md:gap-20 px-4 sm:px-6 pb-32">
        {poems.map((poem) => (
          <motion.figure
            key={poem.id}
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            viewport={{ once: true, margin: '-50px' }}
            className="w-full max-w-2xl"
          >
            <Image
              src={poem.imageUrl}
              alt={poem.alt}
              width={poem.width}
              height={poem.height}
              sizes="(max-width: 768px) 100vw, 672px"
              className="opacity-90 hover:opacity-100 transition-all duration-300 object-contain w-full h-auto"
            />
          </motion.figure>
        ))}
      </div>

      <Footer />
    </div>
  )
}



'use client'
import React from 'react'
import Image from 'next/image'
import Header from '../components/header'
import Footer from '../components/footer'
import { motion } from 'framer-motion'
import { useQuery } from 'convex/react'
import { api } from '../../convex/_generated/api'

export default function Poetry() {
  const poems = useQuery(api.poems.getPoems)

  return (
    <div className="relative min-h-screen bg-white w-full" style={{ backgroundColor: 'white' }}>
      <Header />

      <h1 className="text-center text-xl md:text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-teal-400 px-8 mb-8 mt-4" style={{ fontFamily: 'Osaka, sans-serif' }}>
        Poetry
      </h1>

      <p className="text-center text-gray-600 px-8 mb-8">
        All of my poetry is available as Laser Engraved Woodcut fine art Commissions.
      </p>

      {!poems ? (
        <div className="text-center text-gray-500">Loading...</div>
      ) : (
        <div className="flex flex-col items-center gap-8 px-4 pb-32">
          {poems.map((poem) => (
            <motion.div
              key={poem._id}
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              viewport={{ once: true, margin: "-50px" }}
              className="max-w-md"
            >
              <Image
                src={poem.imageUrl}
                alt={poem.alt}
                width={poem.width}
                height={poem.height}
                className="opacity-90 hover:opacity-100 transition-all duration-300 object-contain w-full max-w-sm"
              />
            </motion.div>
          ))}
        </div>
      )}

      <Footer />
    </div>
  )
}



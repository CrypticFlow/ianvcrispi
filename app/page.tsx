'use client'
import Image from 'next/image'
import Link from 'next/link'
import Header from './components/header'
import Nav from './components/nav'
import Footer from './components/footer'
import { motion } from 'framer-motion'
import { useQuery } from 'convex/react'
import { api } from '../convex/_generated/api'

export default function IanVCrispi() {
  const poems = useQuery(api.poems.getPoems)

  return (
    <div className="relative min-h-full bg-white w-full overflow-x-hidden">
        <Header />
      <Nav />

      {/* Hero Section - Circular Headshot */}
      <section className="relative flex flex-col items-center pt-4 pb-8">
        <motion.div
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
          className="relative z-10"
        >
          <div className="w-40 h-40 md:w-48 md:h-48 rounded-full overflow-hidden border-4 border-white shadow-lg">
            <Image
              src="/Ian.PNG"
              alt="Ian V Crispi"
              width={192}
              height={192}
              className="w-full h-full object-cover object-top scale-150"
              priority
            />
          </div>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mt-12 mb-8 text-md italic text-center px-4 rainbow-text"
        >
          "Let no man who may work for himself,
          <span className="block md:inline"> work for anybody else."</span>
          <span className="block mt-1 text-sm not-italic">— William Blake</span>
        </motion.p>
      </section>

      {/* Four Pillars - Inline Links */}
      <motion.section
        initial={{ y: 30, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="py-4 px-4 text-center -mt-2.5"
      >
        <p className="text-lg md:text-xl max-w-2xl mx-auto" style={{ fontFamily: 'Osaka, sans-serif' }}>
          <a href="https://crypticflow.net" target="_blank" rel="noopener noreferrer" className="text-teal-400 hover:text-teal-500 transition-colors">Music</a>
          <span className="text-gray-300 mx-2">·</span>
          <a href="https://indiepa.ge/crypticfl0w" target="_blank" rel="noopener noreferrer" className="text-red-400 hover:text-red-500 transition-colors">Software</a>
          <span className="text-gray-300 mx-2">·</span>
          <a href="https://tipsfromthebar.com" target="_blank" rel="noopener noreferrer" className="text-amber-500 hover:text-amber-600 transition-colors">Cocktails</a>
          <span className="text-gray-300 mx-2">·</span>
          <Link href="/poetry" className="text-purple-400 hover:text-purple-500 transition-colors">Poetry</Link>
        </p>
      </motion.section>


      {/* Featured Poems */}
      <section className="py-8 bg-white">
        {!poems ? (
          <div className="text-center text-gray-500">Loading...</div>
        ) : (
          <>
            <div className="flex flex-col items-center gap-8 px-4">
              {poems
                .filter((poem) =>
                  poem.title.toLowerCase().includes('dovefeather') ||
                  poem.title.toLowerCase().includes('rainbow') ||
                  poem.title.toLowerCase().includes('psyber')
                )
                .sort((a, b) => {
                  const getOrder = (title: string) => {
                    if (title.toLowerCase().includes('dovefeather')) return 0
                    if (title.toLowerCase().includes('rainbow')) return 1
                    if (title.toLowerCase().includes('psyber')) return 2
                    return 3
                  }
                  return getOrder(a.title) - getOrder(b.title)
                })
                .map((poem) => (
                <motion.div
                  key={poem._id}
                  initial={{ y: 50, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.8, ease: "easeOut" }}
                  viewport={{ once: true, margin: "-50px" }}
                  className="max-w-md"
                  style={{ marginTop: poem.title.toLowerCase().includes('rainbow') ? '-70px' : undefined }}
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

            {/* See all poetry link */}
            <div className="text-center mt-6">
              <Link
                href="/poetry"
                className="text-purple-400 hover:text-purple-500 transition-colors text-sm"
              >
                view more poetry →
              </Link>
            </div>
          </>
        )}
      </section>

      {/* Spacer for fixed footer */}
      <div className="h-24"></div>

      <Footer />

      <style jsx>{`
        @font-face {
          font-family: 'Osaka';
          src: url('/osaka-re.ttf') format('truetype');
          font-weight: normal;
          font-style: normal;
        }

        .rainbow-text {
          background: linear-gradient(90deg, #ff6b6b, #4ecdc4, #ffe66d, #ff6b9d, #c44dff, #4ecdc4, #ff6b6b);
          background-size: 200% auto;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          animation: rainbow-shift 3s linear infinite;
        }

        @keyframes rainbow-shift {
          0% { background-position: 0% center; }
          100% { background-position: 200% center; }
        }
      `}</style>
    </div>
  )
}

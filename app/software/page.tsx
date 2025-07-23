'use client'
import React from 'react'
import { useRouter } from 'next/navigation'
import Header from '../components/header'
import Nav from '../components/nav'
import Footer from '../components/footer'

function Software() {
  const router = useRouter()

  const handleBuildMyApp = () => {
    router.push('/software/build-my-app')
  }

  return (
    <div className="relative min-h-screen bg-white">
      <Header />
      <Nav />
      <div className="px-4 sm:px-20 pt-10 pb-20 bg-white">
        <h1 
          className="text-4xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-teal-400"
          style={{ fontFamily: 'Osaka, sans-serif' }}
        >
          Visioneering
        </h1>
        <p className="text-lg leading-relaxed mb-8 text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-teal-400">
          Ian Vincenzo Crispi is a Full Stack Software Engineer with a passion for bringing creative ideas to life.
        </p>
        
        <div className="portfolio-container mt-10">
          <h2 
            className="text-2xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-teal-400"
            style={{ fontFamily: 'Osaka, sans-serif' }}
          >
            Portfolio Examples
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl">
            <div className="bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 border border-red-600">
              <h3 className="text-2xl font-bold mb-2 text-red-600">TeO</h3>
              <p className="text-gray-400 mb-4 text-sm">The Future of Culture, Tickets & Experiences. </p>
              <p className="text-gray-400 mb-4 text-sm"> TeO is the Startup I work for and a revolutionary platform challenging the way we create and attend live events.</p>
              <button 
                onClick={() => window.open('https://teolive.com', '_blank')}
                className="bg-red-600 text-white px-6 py-3 rounded-lg hover:bg-red-700 transition-all duration-300 font-semibold"
              >
                Visit TeO Live
              </button>
            </div>
            
            <div className="bg-gradient-to-br from-purple-900 to-blue-900 p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 border border-cyan-400">
              <h3 className="text-2xl font-bold mb-2 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">psyberDust.ai</h3>
              <p className="text-gray-300 mb-4 text-sm"> psyberDust is more than just a music label: </p>
              <p className="text-gray-300 mb-4 text-sm">It's a Creative Network at the intersection of Music, Art, Web3, Consciousness, Human Potential and AI.</p>
              <button 
                onClick={() => window.open('https://psyberdust.ai', '_blank')}
                className="bg-gradient-to-r from-cyan-500 to-purple-500 text-white px-6 py-3 rounded-lg hover:from-cyan-600 hover:to-purple-600 transition-all duration-300 font-semibold"
              >
                Explore psyberDust
              </button>
            </div>
            
            <div className="bg-gray-100 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
              <h3 className="text-lg font-semibold mb-2"> UA NEAR ME </h3>
              <p className="text-gray-700 mb-4"> Coming soon... </p>
              <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
                View Project
              </button>
            </div>
          </div>

          <div className="mt-16">
          <h2 
            className="text-2xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-teal-400"
            style={{ fontFamily: 'Osaka, sans-serif' }}
          >
            Experience & Expertise
          </h2>
          <div className="bg-gray-50 p-8 rounded-lg shadow-lg">
            <p className="text-lg leading-relaxed mb-4 text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-teal-400">
              At TeO my official role is QA Engineer and I double as a Full Stack Developer. I got in with company on the ground floor and helped build the engineering team, develop and maintain all the Test Suites in our codebase and support the Lead Full Stack Engineer in development. We are a global team collaborating across time zones and platforms. 
            </p>
            <p className="text-lg leading-relaxed mb-4 text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-teal-400"> 
              I wrote my first programs in 2015 when I was in college primarily doing creative visual processor coding, and digital signal processing while studying at The University of Caifornia, Santa Cruz's Electronic Music Minor.
            </p>
            <p className="text-lg leading-relaxed mb-4 text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-teal-400"> 
              Since 2019 I have been developing the skill of a Full Stack Engineer and have been in love with the life-long journey of continuing to grow as a Developer. I love to learn new technologies so that I may deliver the most state of the art applications.
            </p>
            <p className="text-lg leading-relaxed text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-teal-400"> 
              This year in 2025 I have built, developed and launched my own App/Company and love to build businesses and products that are not only functional but also beautiful and user-friendly.
            </p>
          </div>
          
          <div className="mt-8 text-center">
            <button 
              onClick={handleBuildMyApp}
              className="px-12 py-6 text-white font-bold text-xl rounded-lg transition-all duration-300 hover:scale-110 shadow-lg"
              style={{
                background: 'linear-gradient(45deg, #ff6b6b, #4ecdc4)',
                animation: 'softwareGlow 2s ease-in-out infinite alternate',
                fontFamily: 'Osaka, sans-serif'
              }}
            >
              BUILD MY APP
            </button>
          </div>
        </div>
       </div>
      </div>
      
      <style jsx>{`
        @font-face {
          font-family: 'Osaka';
          src: url('/osaka-re.ttf') format('truetype');
          font-weight: normal;
          font-style: normal;
        }
        
        @keyframes rainbow {
          0% { filter: hue-rotate(0deg) saturate(300%) brightness(1.2); }
          16.66% { filter: hue-rotate(60deg) saturate(300%) brightness(1.2); }
          33.33% { filter: hue-rotate(120deg) saturate(300%) brightness(1.2); }
          50% { filter: hue-rotate(180deg) saturate(300%) brightness(1.2); }
          66.66% { filter: hue-rotate(240deg) saturate(300%) brightness(1.2); }
          83.33% { filter: hue-rotate(300deg) saturate(300%) brightness(1.2); }
          100% { filter: hue-rotate(360deg) saturate(300%) brightness(1.2); }
        }
      `}</style>
      <Footer />
    </div>
  )
}

export default Software

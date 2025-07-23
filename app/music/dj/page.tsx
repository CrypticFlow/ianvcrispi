'use client'
import React from 'react'
import Header from '@/app/components/header'
import Nav from '@/app/components/nav'
import Footer from '@/app/components/footer'
import { useRouter } from 'next/navigation'

function DJ() {
  const router = useRouter()

  const handleBookDiscoSet = () => {
    router.push('/music/dj/bookings/disco-set')
  }

  const handleBookHipHopSet = () => {
    router.push('/music/dj/bookings/hip-hop-set')
  }

  const handleBookOriginalsSet = () => {
    router.push('/music/dj/bookings/crypticflow-set')
  }

  return (
    <div className='relative min-h-screen bg-white'>
        <Header />
        <Nav />
        <h1 
          className='text-4xl font-bold text-center text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-teal-400 mb-8'
          style={{ fontFamily: 'Osaka, sans-serif' }}
        >
          DJ Services
        </h1>
        
        <div className="px-4 sm:px-20 pb-20">
          <div className="flex flex-col items-center space-y-8">
            
            {/* Premium Package */}
            <div className="w-full max-w-md bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 border-2" style={{ borderImage: 'linear-gradient(45deg, #ff6b6b, #4ecdc4) 1' }}>
              <h3 className="text-2xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r" style={{ fontFamily: 'Osaka, sans-serif', backgroundImage: 'linear-gradient(45deg, #ff6b6b, #4ecdc4)' }}>
                Disco, Funk, House & Pop with Live Saxophone
              </h3>
              <p className="text-gray-700 mb-4 text-sm">
                Full-service DJ experience with premium sound system, lighting, and professional mixing for weddings, corporate events, and special occasions.
              </p>
              <ul className="text-gray-700 text-sm mb-6 space-y-2">
                <li>• Professional DJ and Saxophonist with a combined 25 years of experience</li>
                <li>• Professional sound system </li>
                <li>• Custom playlist curation</li>
                <li>• 2-4 hour set </li>
              </ul>
              <button 
                onClick={handleBookDiscoSet}
                className="w-full bg-white border-2 px-6 py-3 rounded-lg hover:bg-gray-50 transition-all duration-300 font-semibold text-transparent bg-clip-text bg-gradient-to-r" style={{ borderImage: 'linear-gradient(45deg, #ff6b6b, #4ecdc4) 1', fontFamily: 'Osaka, sans-serif', backgroundImage: 'linear-gradient(45deg, #ff6b6b, #4ecdc4)' }}>
                Book Disco Set
              </button>
            </div>

            {/* Standard Package */}
            <div className="w-full max-w-md bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 border-2 transform translate-y-4" style={{ borderImage: 'linear-gradient(45deg, #ff6b6b, #4ecdc4) 1' }}>
              <h3 className="text-xl font-bold mb-3 text-transparent bg-clip-text bg-gradient-to-r" style={{ fontFamily: 'Osaka, sans-serif', backgroundImage: 'linear-gradient(45deg, #ff6b6b, #4ecdc4)' }}>
                CrypticFlow Classic Hip Hop & Rnb DJ Set with Live Saxophone
              </h3>
              <p className="text-gray-700 mb-4 text-sm">
                Specializing in 90s Hip Hop, Rnb, with Live Saxophone by Evan O'Brien, ideal for parties, events, and gatherings. 
              </p>
              <ul className="text-gray-700 text-sm mb-4 space-y-1">
                <li>• Experienced DJ and Saxophonist with a combined 25 years of experience</li>
                <li>• Professional sound system</li>
                <li>• Custom playlist curation </li>
                <li>• 2-4 hour set </li>
              </ul>
              <button 
                onClick={handleBookHipHopSet}
                className="w-full bg-white border-2 px-6 py-3 rounded-lg hover:bg-gray-50 transition-all duration-300 font-semibold text-transparent bg-clip-text bg-gradient-to-r" style={{ borderImage: 'linear-gradient(45deg, #ff6b6b, #4ecdc4) 1', fontFamily: 'Osaka, sans-serif', backgroundImage: 'linear-gradient(45deg, #ff6b6b, #4ecdc4)' }}>
                Book Hip Hop Set
              </button>
            </div>

            {/* Basic Package */}
            <div className="w-full max-w-md bg-white p-4 rounded-lg shadow-lg hover:shadow-xl transition-shadow transform translate-y-8 border-2" style={{ borderImage: 'linear-gradient(45deg, #ff6b6b, #4ecdc4) 1' }}>
              <h3 className="text-lg font-semibold mb-2 text-transparent bg-clip-text bg-gradient-to-r" style={{ fontFamily: 'Osaka, sans-serif', backgroundImage: 'linear-gradient(45deg, #ff6b6b, #4ecdc4)' }}>
                CrypticFlow All Original Set
              </h3>
              <p className="text-gray-700 mb-3 text-sm">
                Underground Electronic Music with Ecclectic Taste. 
              </p>
              <ul className="text-gray-700 text-sm mb-3 space-y-1">
                <li>• Combining Ableton Live with Pioneer XDJ Set Up</li>
                <li>• Professional Sound System</li>
                <li>• 60-90 minute set </li>
              </ul>
              <button 
                onClick={handleBookOriginalsSet}
                className="w-full bg-white border-2 px-4 py-2 rounded hover:bg-gray-50 transition-all duration-300 text-transparent bg-clip-text bg-gradient-to-r" style={{ borderImage: 'linear-gradient(45deg, #ff6b6b, #4ecdc4) 1', fontFamily: 'Osaka, sans-serif', backgroundImage: 'linear-gradient(45deg, #ff6b6b, #4ecdc4)' }}>
                Book Original Set
              </button>
            </div>
            
          </div>
        </div>
        
        {/* Padding before footer */}
        <div className="h-[12vh]"></div>
        
        <Footer />
    </div>
  )
}

export default DJ

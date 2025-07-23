'use client'
import React from 'react'
import Header from '@/app/components/header'
import Nav from '@/app/components/nav'
import Footer from '@/app/components/footer'
import { useRouter } from 'next/navigation'

function SoundEngineer() {
  const router = useRouter()

  const handleBookStudioEngineer = () => {
    router.push('/music/engineer/bookings/studio-engineer')
  }

  const handleBookLiveSoundEngineer = () => {
    router.push('/music/engineer/bookings/live-sound-engineer')
  }

  const handleBookSoundSystemRental = () => {
    router.push('/music/engineer/bookings/sound-system-rental')
  }
  return (
    <div className='relative min-h-screen bg-white'>
        <Header />
        <Nav />
        <h1 
          className='text-4xl font-bold text-center text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-teal-400 mb-8'
          style={{ fontFamily: 'Osaka, sans-serif' }}
        >
          Engineering Services
        </h1>
        
        <div className="px-4 sm:px-20 pb-20">
          <div className="flex flex-col items-center space-y-8">
            
            {/* Premium Package */}
            <div className="w-full max-w-md bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 border-2" style={{ borderImage: 'linear-gradient(45deg, #ff6b6b, #4ecdc4) 1' }}>
              <h3 className="text-2xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r" style={{ fontFamily: 'Osaka, sans-serif', backgroundImage: 'linear-gradient(45deg, #ff6b6b, #4ecdc4)' }}>
                Studio Sound Engineer 
              </h3>
              <p className="text-gray-700 mb-4 text-sm">
                Mixing and Mastering 
              </p>
              <ul className="text-gray-700 text-sm mb-6 space-y-2">
                <li>• Professional mixing and mastering</li>
                <li>• Production consultation </li>
                <li>• Up to 3 revisions </li>
                <li>• Radio-ready masters</li>
              </ul>
              <button 
                onClick={handleBookStudioEngineer}
                className="w-full bg-white border-2 px-6 py-3 rounded-lg hover:bg-gray-50 transition-all duration-300 font-semibold text-transparent bg-clip-text bg-gradient-to-r" style={{ borderImage: 'linear-gradient(45deg, #ff6b6b, #4ecdc4) 1', fontFamily: 'Osaka, sans-serif', backgroundImage: 'linear-gradient(45deg, #ff6b6b, #4ecdc4)' }}>
                Book Studio Engineer
              </button>
            </div>

            {/* Standard Package */}
            <div className="w-full max-w-md bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 border-2 transform translate-y-4" style={{ borderImage: 'linear-gradient(45deg, #ff6b6b, #4ecdc4) 1' }}>
              <h3 className="text-xl font-bold mb-3 text-transparent bg-clip-text bg-gradient-to-r" style={{ fontFamily: 'Osaka, sans-serif', backgroundImage: 'linear-gradient(45deg, #ff6b6b, #4ecdc4)' }}>
                Live Sound System Engineer
              </h3>
              <p className="text-gray-700 mb-4 text-sm">
                This package is if you have your own sound system at a venue and are looking for an engineer to maintain it during live events.  
              </p>
              <ul className="text-gray-700 text-sm mb-4 space-y-1">
                <li>• Professional Live Sound Mixing and System Tuning</li>
                <li>• Single Day Rate </li>
                <li>• On Site Monitoring  </li>
              </ul>
              <button 
                onClick={handleBookLiveSoundEngineer}
                className="w-full bg-white border-2 px-6 py-3 rounded-lg hover:bg-gray-50 transition-all duration-300 font-semibold text-transparent bg-clip-text bg-gradient-to-r" style={{ borderImage: 'linear-gradient(45deg, #ff6b6b, #4ecdc4) 1', fontFamily: 'Osaka, sans-serif', backgroundImage: 'linear-gradient(45deg, #ff6b6b, #4ecdc4)' }}>
                Book Live Sound Engineer
              </button>
            </div>

            {/* Basic Package */}
            <div className="w-full max-w-md bg-white p-4 rounded-lg shadow-lg hover:shadow-xl transition-shadow transform translate-y-8 border-2" style={{ borderImage: 'linear-gradient(45deg, #ff6b6b, #4ecdc4) 1' }}>
              <h3 className="text-lg font-semibold mb-2 text-transparent bg-clip-text bg-gradient-to-r" style={{ fontFamily: 'Osaka, sans-serif', backgroundImage: 'linear-gradient(45deg, #ff6b6b, #4ecdc4)' }}>
                Live Sound System Enginer 
              </h3>
              <p className="text-gray-700 mb-3 text-sm">
                This package is if you need a sound system + an engineer for your event. 
              </p>
              <ul className="text-gray-700 text-sm mb-3 space-y-1">
                <li>• Professional Sound System</li>
                <li>• Sound System Rental + Audio Engineer Day Rate</li>
                <li>• Load In and Strike of Equipment </li>
                <li>• On Site Monitoring</li>
              </ul>
              <button 
                onClick={handleBookSoundSystemRental}
                className="w-full bg-white border-2 px-4 py-2 rounded hover:bg-gray-50 transition-all duration-300 text-transparent bg-clip-text bg-gradient-to-r" style={{ borderImage: 'linear-gradient(45deg, #ff6b6b, #4ecdc4) 1', fontFamily: 'Osaka, sans-serif', backgroundImage: 'linear-gradient(45deg, #ff6b6b, #4ecdc4)' }}>
                Book System Rental and Engineer
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

export default SoundEngineer

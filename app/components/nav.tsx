'use client'
import React, { useState } from 'react'
import { useRouter } from 'next/navigation'

function Nav() {
  const router = useRouter()
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div>
      {/* Desktop Navigation */}
      <div className="hidden md:flex fixed right-8 top-[30%] transform -translate-y-1/2 flex-col space-y-6">
        <button 
          onClick={() => router.push('/software')}
          className="px-8 py-4 text-white font-bold text-lg rounded-lg transition-all duration-300 hover:scale-110"
          style={{
            background: 'linear-gradient(45deg, #ff6b6b, #4ecdc4)',
            animation: 'softwareGlow 2s ease-in-out infinite alternate',
            fontFamily: 'Osaka, sans-serif'
          }}
        >
          Software
        </button>
        
        <button 
          onClick={() => router.push('/music')}
          className="px-8 py-4 text-white font-bold text-lg rounded-lg transition-all duration-300 hover:scale-110"
          style={{
            background: 'linear-gradient(45deg, #ff6b6b, #4ecdc4)',
            animation: 'musicGlow 2s ease-in-out infinite alternate',
            fontFamily: 'Osaka, sans-serif'
          }}
        >
          Music
        </button>
        
        <button 
          onClick={() => router.push('/poetry')}
          className="px-8 py-4 text-white font-bold text-lg rounded-lg transition-all duration-300 hover:scale-110"
          style={{
            background: 'linear-gradient(45deg, #ff8a80, #b39ddb)',
            animation: 'poetryGlow 2s ease-in-out infinite alternate',
            fontFamily: 'Osaka, sans-serif'
          }}
        >
          Poetry
        </button>
      </div>
      
      {/* Mobile Navigation */}
      <div className="md:hidden fixed top-4 right-4 z-50">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="p-3 text-white rounded-lg"
          style={{ 
            background: 'linear-gradient(45deg, #ff6b6b, #4ecdc4)',
            fontFamily: 'Osaka, sans-serif' 
          }}
        >
          ☰
        </button>
        
        {isOpen && (
          <div className="absolute top-12 right-0 bg-white shadow-lg rounded-lg p-4 flex flex-col space-y-3 min-w-[150px]">
            <button
              onClick={() => { router.push('/software'); setIsOpen(false); }}
              className="px-4 py-2 text-white font-bold text-sm rounded-lg transition-all duration-300"
              style={{
                background: 'linear-gradient(45deg, #ff6b6b, #4ecdc4)',
                fontFamily: 'Osaka, sans-serif'
              }}
            >
              Software
            </button>
            
            <button
              onClick={() => { router.push('/music'); setIsOpen(false); }}
              className="px-4 py-2 text-white font-bold text-sm rounded-lg transition-all duration-300"
              style={{
                background: 'linear-gradient(45deg, #ff6b6b, #4ecdc4)',
                fontFamily: 'Osaka, sans-serif'
              }}
            >
              Music
            </button>
            
            <button
              onClick={() => { router.push('/poetry'); setIsOpen(false); }}
              className="px-4 py-2 text-white font-bold text-sm rounded-lg transition-all duration-300"
              style={{
                background: 'linear-gradient(45deg, #ff8a80, #b39ddb)',
                fontFamily: 'Osaka, sans-serif'
              }}
            >
              Poetry
            </button>
          </div>
        )}
      </div>
      
      <style jsx>{`
        @font-face {
          font-family: 'Osaka';
          src: url('/osaka-re.ttf') format('truetype');
          font-weight: normal;
          font-style: normal;
        }
        
        @keyframes softwareGlow {
          0% { box-shadow: 0 0 20px rgba(255, 107, 107, 0.5); }
          100% { box-shadow: 0 0 30px rgba(78, 205, 196, 0.8); }
        }
        
        @keyframes musicGlow {
          0% { box-shadow: 0 0 20px rgba(168, 230, 207, 0.5); }
          100% { box-shadow: 0 0 30px rgba(255, 217, 61, 0.8); }
        }
        
        @keyframes poetryGlow {
          0% { box-shadow: 0 0 20px rgba(255, 138, 128, 0.5); }
          100% { box-shadow: 0 0 30px rgba(179, 157, 219, 0.8); }
        }
      `}</style>
    </div>
  )
}

export default Nav

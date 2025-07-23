'use client'
import React, { useEffect } from 'react'
import Header from '@/app/components/header'
import Nav from '@/app/components/nav'
import Footer from '@/app/components/footer'

function Producer() {
 
  return (
    <div className='relative min-h-screen bg-white'>
        <Header />
        <Nav />
        <h1 
          className='text-4xl font-bold text-center text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-teal-400 mb-8'
          style={{ fontFamily: 'Osaka, sans-serif' }}
        >
          Producer
        </h1>

        <div className="flex justify-center px-4 sm:px-20 pb-20">
          <div className="w-full max-w-2xl">
            <div className="bg-gray-50 p-8 rounded-lg shadow-lg mb-8">
              <p className="text-lg leading-relaxed mb-4 text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-teal-400">
                If you would like me to hire me as your music producer, please email me at info@ianvcrispi.com with the subject: Music Producer. Or schedule a discovery call using the calendar below. 
              </p>  
            </div>
            
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h2 className="text-2xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-teal-400" style={{ fontFamily: 'Osaka, sans-serif' }}>
                Schedule a Discovery Call
              </h2>
              <p className="text-lg leading-relaxed mb-6 text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-teal-400">
                Let's discuss your music project, production goals, and how I can help bring your musical vision to life.
              </p>
              
              {/* Cal.com React Component for Music Producer */}
              <iframe 
                src="https://cal.com/ian-crispi-ubsslh/discovery-call-music-producer?embed=true&theme=light&hideEventTypeDetails=false&layout=month_view&primaryColor=ff6b6b&textColor=374151&backgroundColor=ffffff"
                width="100%" 
                height="630px"
                frameBorder="0"
                className="rounded-lg"
                title="Schedule Discovery Call"
              ></iframe>
            </div>
          </div>
        </div>
        <Footer />
    </div>
  )
}

export default Producer

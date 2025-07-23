'use client'
import Header from '@/app/components/header'
import Nav from '@/app/components/nav'
import Footer from '@/app/components/footer'
import React from 'react'

function SoundSystemRental() {
  return (
    <div className='relative min-h-screen bg-white'>
        <Header />
        <Nav />
        <h1 className='text-4xl font-bold text-center text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-teal-400 mb-8'
        style={{ fontFamily: 'Osaka, sans-serif' }}>
            Sound System Rental
        </h1>

        <div className="flex justify-center px-4 sm:px-20">
          <div className="w-full max-w-2xl">
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h2 className="text-2xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-teal-400" style={{ fontFamily: 'Osaka, sans-serif' }}>
                Schedule a Booking Call
              </h2>
              {/* Cal.com Calendar Iframe with Custom Branding */}
              <iframe 
                src="https://cal.com/ian-crispi-ubsslh/booking-call-for-sound-system-rental?embed=true&theme=light&hideEventTypeDetails=false&layout=month_view&primaryColor=ff6b6b&textColor=374151&backgroundColor=ffffff"
                width="100%" 
                height="630px"
                frameBorder="0"
                className="rounded-lg"
                title="Schedule Discovery Call"
              ></iframe>
            </div>
          </div>
        </div>
        
        {/* Padding before footer */}
        <div className="h-[12vh]"></div>
        
        <Footer />
    </div>
  )
}

export default SoundSystemRental

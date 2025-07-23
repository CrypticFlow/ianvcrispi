'use client';
import React from 'react';
import Image from 'next/image';
import Header from '../components/header';
import Nav from '../components/nav';
import { useRouter } from 'next/navigation';
import Footer from '../components/footer';

function Music() {
  const router = useRouter();

  const handleEngineer = () => {
    router.push('/music/engineer');
  }

  const handleProducer = () => {
    router.push('/music/producer');
  }

  const handleDJ = () => {
    router.push('/music/dj');
  }

  return (
    <div className="relative min-h-screen bg-white">
        <Header />
        <Nav />
        <div className="absolute top-32 left-8">
          <div
            onClick={() => window.open('https://crypticflow.net', '_blank')}
            className="cursor-pointer transition-transform hover:scale-105"
          >
            <Image
              src="/CrypticFlow_OfficialLogo_2023.png"
              alt="CrypticFlow"
              width={400}
              height={200}
              priority
              style={{ backgroundColor: 'transparent' }}
            />
          </div>
        </div>
        
        {/* SoundCloud Featured Track Section */}
        <div className="flex justify-center px-4 sm:px-20 py-10 bg-white" style={{ marginTop: '15vh' }}>
          <div className="w-full max-w-2xl">
            <div className="bg-gray-50 p-6 rounded-lg shadow-lg">
              <h2 
                className="text-2xl font-bold mb-6 text-center text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-teal-400"
                style={{ fontFamily: 'Osaka, sans-serif' }}
              >
                Featured Track
              </h2>
              
              {/* SoundCloud Embed - Replace with your track URL */}
              <div className="w-full">
              <iframe 
                width="100%" 
                height="300" 
                scrolling="no" 
                allow="autoplay" 
                src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/2065544200&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true">
              </iframe>
              </div>
            </div>
          </div>
        </div>
        
        <div className="px-4 sm:px-20 pt-10 pb-20 bg-white">
          <div className="mt-16">
            <h2 
              className="text-2xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-teal-400"
              style={{ fontFamily: 'Osaka, sans-serif' }}
            >
              Musical Journey & Expertise
            </h2>
            <div className="bg-gray-50 p-8 rounded-lg shadow-lg">
              <p className="text-lg leading-relaxed mb-4 text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-teal-400">
                I have been writing, producing, mixing and mastering music in Ableton Live since 2012. I have also been performing and running live sound systems since 2015. I began my journey at the Dubspot Academy in New York City, and continued my studies at The University of California, Santa Cruz where I earned a B.A. in Philosophy and a minor in Electronic Music.
              </p>
              <p className="text-lg leading-relaxed mb-4 text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-teal-400">
                As an Artist I have toured and performed all across the U.S. and in Japan and worked professional level productions as a Sound Engineer. From 2018 until the Pandemic I ran a weekly music and art night in Santa Cruz, CA. I am relaunching my new promotion:  <a href="https://psyberdust.ai" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:text-blue-600">psyberDust.ai</a> in Los Angeles in August, 2025. </p>
              <p className="text-lg leading-relaxed text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-teal-400">
                As an engineer I have run Funktion One, Hennessey, PK, Danley, Void, Meyer and JBL rigs up and down the West Coast. As an Artist I have performed in Times Square, Downtown Los Angeles, and Osaka, Japan. 
              </p>
            </div>
            
            <div className="mt-8 flex flex-col sm:flex-row gap-6 justify-center">
              <button 
                onClick={handleEngineer}
                className="px-8 py-4 text-white font-bold text-lg rounded-lg transition-all duration-300 hover:scale-110 shadow-lg"
                style={{
                  background: 'linear-gradient(45deg, #ff6b6b, #4ecdc4)',
                  animation: 'softwareGlow 2s ease-in-out infinite alternate',
                  fontFamily: 'Osaka, sans-serif'
                }}
              >
                I NEED AN ENGINEER
              </button>

              <button 
                onClick={handleDJ}
                className="px-8 py-4 text-white font-bold text-lg rounded-lg transition-all duration-300 hover:scale-110 shadow-lg"
                style={{
                  background: 'linear-gradient(45deg, #ff6b6b, #4ecdc4)',
                  animation: 'softwareGlow 2s ease-in-out infinite alternate',
                  fontFamily: 'Osaka, sans-serif'
                }}
              >
                I NEED A DJ
              </button>
              
              <button 
                onClick={handleProducer}
                className="px-8 py-4 text-white font-bold text-lg rounded-lg transition-all duration-300 hover:scale-110 shadow-lg"
                style={{
                  background: 'linear-gradient(45deg, #ff8a80, #b39ddb)',
                  animation: 'poetryGlow 2s ease-in-out infinite alternate',
                  fontFamily: 'Osaka, sans-serif'
                }}
              >
                I NEED A PRODUCER
              </button>
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
          
          @keyframes softwareGlow {
            0% { box-shadow: 0 0 20px rgba(255, 107, 107, 0.5); }
            100% { box-shadow: 0 0 30px rgba(78, 205, 196, 0.8); }
          }
          
          @keyframes poetryGlow {
            0% { box-shadow: 0 0 20px rgba(255, 138, 128, 0.5); }
            100% { box-shadow: 0 0 30px rgba(179, 157, 219, 0.8); }
          }
          
          @keyframes musicGlow {
            0% { box-shadow: 0 0 20px rgba(168, 230, 207, 0.5); }
            100% { box-shadow: 0 0 30px rgba(255, 217, 61, 0.8); }
          }
        `}</style>
        <Footer />
    </div>
  )
}

export default Music

'use client'
import React from 'react'
import Image from 'next/image'
import { useRouter } from 'next/navigation'

function Header() {
  const router = useRouter()

  return (
    <div className="bg-white h-auto">
      <header className="flex justify-center items-center h-[20vh] -ml-[10%]">
        <button 
          onClick={() => router.push('/')}
          className="cursor-pointer transition-transform hover:scale-105"
        >
          <Image
            src="/Assets/IanVCrispi_Sig_2025.png"
            alt="Ian Vincenzo Crispi Signature"
            width={300}
            height={300}
            priority
            style={{
              filter: 'hue-rotate(0deg) saturate(300%) brightness(1.2)',
              animation: 'rainbow 3s linear infinite'
            }}
          />
        </button>
        <style jsx>{`
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
      </header>
    </div>
  )
}

export default Header

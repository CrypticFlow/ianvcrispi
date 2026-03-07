'use client'
import { useEffect, useRef } from 'react'

export default function VantaBirds({ children }: { children: React.ReactNode }) {
  const vantaRef = useRef<HTMLDivElement>(null)
  const vantaEffect = useRef<any>(null)

  useEffect(() => {
    const initVanta = () => {
      // @ts-ignore
      if (window.VANTA && vantaRef.current && !vantaEffect.current) {
        // @ts-ignore
        vantaEffect.current = window.VANTA.BIRDS({
          el: vantaRef.current,
          mouseControls: true,
          touchControls: true,
          gyroControls: false,
          minHeight: 200.00,
          minWidth: 200.00,
          scale: 1.00,
          scaleMobile: 1.00,
          backgroundColor: 0xffffff,
          color1: 0x000000,
          color2: 0xff6b6b,
          birdSize: 1.2,
          wingSpan: 25.00,
          speedLimit: 5.00,
          separation: 40.00,
          alignment: 40.00,
          cohesion: 40.00,
          quantity: 4.00
        })
      }
    }

    // Try immediately, then retry after scripts load
    initVanta()
    const timer = setTimeout(initVanta, 1000)
    const timer2 = setTimeout(initVanta, 2000)

    return () => {
      clearTimeout(timer)
      clearTimeout(timer2)
      if (vantaEffect.current) {
        vantaEffect.current.destroy()
        vantaEffect.current = null
      }
    }
  }, [])

  return (
    <div className="relative min-h-screen w-full">
      <div
        ref={vantaRef}
        className="fixed inset-0 w-full h-full pointer-events-none"
        style={{ zIndex: 0 }}
      />
      <div className="relative" style={{ zIndex: 1 }}>
        {children}
      </div>
    </div>
  )
}

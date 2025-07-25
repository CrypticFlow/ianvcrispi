'use client'
import React from 'react'

function Footer() {
  return (
    <footer className="fixed bottom-0 left-0 w-full bg-white border-t border-gray-200 shadow-lg z-40">
      <div className="flex justify-center items-center py-4 px-6">
        <div className="flex space-x-6">
          {/* Instagram */}
          <a
            href="https://instagram.com/crypticfl0w"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-red-400 hover:to-teal-400 transition-all duration-300"
            aria-label="Instagram"
          >
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
            </svg>
          </a>

          {/* Spotify */}
          <a
            href="https://open.spotify.com/artist/your-artist-id"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-red-400 hover:to-teal-400 transition-all duration-300"
            aria-label="Spotify"
          >
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.481.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.42 1.56-.299.421-1.02.599-1.559.3z"/>
            </svg>
          </a>

          {/* SoundCloud */}
          <a
            href="https://soundcloud.com/crypticfl0w"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-red-400 hover:to-teal-400 transition-all duration-300"
            aria-label="SoundCloud"
          >
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M1.175 12.225c-.051 0-.094.046-.101.1l-.233 2.154.233 2.105c.007.058.05.098.101.098.05 0 .09-.04.099-.098l.255-2.105-.255-2.154c-.009-.054-.049-.1-.099-.1zm1.33.135c-.058 0-.104.047-.104.104l-.203 2.019.203 2.023c0 .057.046.104.104.104.057 0 .103-.047.103-.104l.249-2.023-.249-2.019c0-.057-.046-.104-.103-.104zm1.286-.139c-.062 0-.112.053-.112.116l-.18 2.042.18 2.039c0 .063.05.116.112.116.061 0 .111-.053.111-.116l.221-2.039-.221-2.042c0-.063-.05-.116-.111-.116zm1.272-.086c-.067 0-.121.056-.121.125l-.158 2.128.158 2.125c0 .069.054.125.121.125s.121-.056.121-.125l.189-2.125-.189-2.128c0-.069-.054-.125-.121-.125zm1.302-.12c-.069 0-.125.058-.125.129l-.132 2.248.132 2.246c0 .071.056.129.125.129.068 0 .124-.058.124-.129l.16-2.246-.16-2.248c0-.071-.056-.129-.124-.129zm1.3-.093c-.071 0-.128.059-.128.132l-.111 2.341.111 2.339c0 .073.057.132.128.132.072 0 .129-.059.129-.132l.134-2.339-.134-2.341c0-.073-.057-.132-.129-.132zm1.306-.126c-.073 0-.132.061-.132.136l-.09 2.467.09 2.464c0 .075.059.136.132.136.074 0 .133-.061.133-.136l.107-2.464-.107-2.467c0-.075-.059-.136-.133-.136zm1.354-.18c-.078 0-.141.065-.141.146l-.07 2.647.07 2.643c0 .081.063.146.141.146.077 0 .14-.065.14-.146l.091-2.643-.091-2.647c0-.081-.063-.146-.14-.146zm1.426-.21c-.08 0-.145.068-.145.15l-.05 2.857.05 2.853c0 .082.065.15.145.15.081 0 .146-.068.146-.15l.067-2.853-.067-2.857c0-.082-.065-.15-.146-.15zm1.458-.22c-.083 0-.15.069-.15.155l-.028 3.077.028 2.549c0 .086.067.155.15.155.084 0 .151-.069.151-.155l.051-2.549-.051-3.077c0-.086-.067-.155-.151-.155zm1.518-.236c-.086 0-.155.071-.155.159l-.008 3.313.008 2.501c0 .088.069.159.155.159.087 0 .156-.071.156-.159l.028-2.501-.028-3.313c0-.088-.069-.159-.156-.159zm1.569-.257c-.089 0-.16.073-.16.164v3.569l.028 2.453c0 .091.071.164.16.164.09 0 .161-.073.161-.164l.007-2.453-.007-3.569c0-.091-.071-.164-.161-.164zm1.639-.28c-.092 0-.166.076-.166.171l.007 3.849-.007 2.405c0 .095.074.171.166.171.093 0 .167-.076.167-.171v-2.405l-.007-3.849c0-.095-.074-.171-.167-.171zm1.717-.308c-.096 0-.173.08-.173.179v4.157l-.007 2.357c0 .099.077.179.173.179.097 0 .174-.08.174-.179l.007-2.357v-4.157c0-.099-.077-.179-.174-.179zm1.8-.343c-.101 0-.181.083-.181.186v4.5l.007 2.309c0 .103.08.186.181.186.102 0 .182-.083.182-.186l-.007-2.309v-4.5c0-.103-.08-.186-.182-.186zm1.872-.38c-.105 0-.19.088-.19.196v4.88l.007 2.261c0 .108.085.196.19.196.106 0 .191-.088.191-.196l-.007-2.261v-4.88c0-.108-.085-.196-.191-.196zm1.947-.417c-.11 0-.198.091-.198.203v5.26l.007 2.213c0 .112.088.203.198.203.11 0 .199-.091.199-.203l-.007-2.213v-5.26c0-.112-.089-.203-.199-.203zm2.04-.462c-.114 0-.206.095-.206.212v5.702l.007 2.165c0 .117.092.212.206.212.115 0 .207-.095.207-.212l-.007-2.165v-5.702c0-.117-.092-.212-.207-.212zm2.125-.511c-.119 0-.214.099-.214.221v6.144l.007 2.117c0 .122.095.221.214.221.12 0 .215-.099.215-.221l-.007-2.117v-6.144c0-.122-.095-.221-.215-.221z"/>
            </svg>
          </a>

          {/* YouTube */}
          <a
            href="https://youtube.com/@CryptiqueFlow"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-red-400 hover:to-teal-400 transition-all duration-300"
            aria-label="YouTube"
          >
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
            </svg>
          </a>

          {/* TikTok */}
          <a
            href="https://tiktok.com/@crypticfl0w"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-red-400 hover:to-teal-400 transition-all duration-300"
            aria-label="TikTok"
          >
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z"/>
            </svg>
          </a>
        </div>
      </div>
    </footer>
  )
}

export default Footer

import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'

function App() {
  return (
    <div className="min-h-screen bg-slate-950">
      {/* Glow background */}
      <div className="pointer-events-none fixed inset-0 -z-10">
        <div className="absolute inset-0 bg-[radial-gradient(1000px_400px_at_50%_-10%,rgba(236,72,153,0.25),transparent),radial-gradient(800px_300px_at_10%_10%,rgba(244,114,182,0.18),transparent),radial-gradient(800px_300px_at_90%_90%,rgba(236,72,153,0.15),transparent)]" />
      </div>

      <Navbar />
      <Hero />
    </div>
  )
}

export default App

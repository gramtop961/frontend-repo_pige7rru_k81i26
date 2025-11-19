import React from "react";

const Navbar = () => {
  return (
    <header className="relative z-20">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5 lg:px-8">
        <div className="flex items-center gap-3">
          <div className="h-9 w-9 rounded-xl bg-pink-500 shadow-[0_8px_30px_rgba(236,72,153,0.65)] flex items-center justify-center">
            <span className="text-white font-black">A</span>
          </div>
          <span className="text-white text-xl font-semibold tracking-tight">Ascendry</span>
        </div>
        <div className="hidden md:flex items-center gap-8 text-sm">
          <a className="text-white/80 hover:text-white transition" href="#services">Services</a>
          <a className="text-white/80 hover:text-white transition" href="#work">Work</a>
          <a className="text-white/80 hover:text-white transition" href="#about">About</a>
        </div>
        <div>
          <a href="#contact" className="inline-flex items-center gap-2 rounded-xl bg-pink-500 px-4 py-2 text-sm font-medium text-white shadow-[0_10px_25px_rgba(236,72,153,0.45)] hover:bg-pink-400 transition">
            Get a Quote
          </a>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;

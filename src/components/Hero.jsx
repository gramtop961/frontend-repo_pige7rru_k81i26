import React from "react";

const Star = (props) => (
  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path d="M12 2l2.9 5.88L21 9.77l-4.5 4.39L17.8 21 12 17.9 6.2 21l1.3-6.84L3 9.77l6.1-.89L12 2z" fill="currentColor" />
  </svg>
);

const CatAstronaut = (props) => (
  <svg viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" {...props}>
    <defs>
      <linearGradient id="pinkGrad" x1="0" x2="1" y1="0" y2="1">
        <stop offset="0%" stopColor="#ec4899" />
        <stop offset="100%" stopColor="#f472b6" />
      </linearGradient>
    </defs>
    <g fill="none" stroke="none" strokeWidth="0">
      <circle cx="256" cy="256" r="200" fill="url(#pinkGrad)" opacity="0.12" />
      <g>
        <circle cx="256" cy="240" r="120" fill="#0f172a" stroke="#f9a8d4" strokeWidth="8" />
        <circle cx="256" cy="240" r="100" fill="#111827" stroke="#fb7185" strokeWidth="4" opacity="0.6" />
        <g>
          <path d="M200 210l-14-30c-3-6 4-12 10-9l28 14c5-4 16-9 32-9s27 5 32 9l28-14c6-3 13 3 10 9l-14 30" fill="#fda4af" />
          <circle cx="210" cy="245" r="10" fill="#fde68a" />
          <circle cx="302" cy="245" r="10" fill="#fde68a" />
          <path d="M220 275c12 10 60 10 72 0" stroke="#f472b6" strokeWidth="6" strokeLinecap="round" fill="none" />
          <path d="M230 255c6 4 46 4 52 0" stroke="#94a3b8" strokeWidth="6" strokeLinecap="round" />
        </g>
        <rect x="176" y="330" width="160" height="90" rx="24" fill="#1f2937" stroke="#f9a8d4" strokeWidth="6" />
        <rect x="196" y="352" width="120" height="22" rx="8" fill="#334155" />
        <circle cx="330" cy="377" r="8" fill="#fb7185" />
        <circle cx="182" cy="377" r="8" fill="#22d3ee" />
      </g>
      <g opacity="0.6">
        <circle cx="110" cy="120" r="3" fill="#f9a8d4" />
        <circle cx="420" cy="100" r="2" fill="#f9a8d4" />
        <circle cx="460" cy="220" r="3" fill="#f9a8d4" />
        <circle cx="60" cy="280" r="2" fill="#f9a8d4" />
        <circle cx="120" cy="420" r="3" fill="#f9a8d4" />
      </g>
    </g>
  </svg>
);

const Badge = ({ children }) => (
  <span className="inline-flex items-center gap-2 rounded-full border border-pink-400/30 bg-pink-500/10 px-4 py-1.5 text-xs font-medium text-pink-200 shadow-[0_0_0_1px_rgba(236,72,153,0.15)_inset]">
    <span className="h-1.5 w-1.5 rounded-full bg-pink-400 animate-pulse"></span>
    {children}
  </span>
);

const Hero = () => {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-b from-pink-600/30 via-fuchsia-700/20 to-slate-950" />
        <div className="absolute left-1/2 top-[-20%] h-[700px] w-[700px] -translate-x-1/2 rounded-full bg-pink-500/30 blur-3xl" />
        <div className="absolute left-10 top-10 h-40 w-40 rounded-full bg-pink-400/40 blur-2xl opacity-40" />
        <div className="absolute right-10 bottom-10 h-56 w-56 rounded-full bg-fuchsia-500/40 blur-3xl opacity-30" />
      </div>

      <div className="mx-auto max-w-7xl px-6 pt-10 pb-24 sm:pt-16 lg:flex lg:items-center lg:gap-10 lg:px-8 lg:pb-32">
        <div className="mx-auto max-w-2xl text-center lg:mx-0 lg:flex-auto lg:text-left">
          <div className="mb-6 flex items-center justify-center gap-3 lg:justify-start">
            <Badge>
              Award‑winning web agency
            </Badge>
          </div>
          <h1 className="text-4xl font-black tracking-tight text-white sm:text-6xl">
            Ascendry
            <span className="block bg-gradient-to-r from-pink-300 via-pink-400 to-fuchsia-300 bg-clip-text text-transparent">
              Elevate your brand online
            </span>
          </h1>
          <p className="mt-6 text-lg leading-8 text-pink-100/90">
            Full‑stack websites, SEO that ranks, and performance marketing that converts. We craft delightful digital experiences that grow your business.
          </p>
          <div className="mt-8 flex items-center justify-center gap-3 lg:justify-start">
            <a href="#contact" className="inline-flex items-center justify-center rounded-xl bg-pink-500 px-5 py-3 text-sm font-semibold text-white shadow-[0_10px_30px_rgba(236,72,153,0.45)] hover:bg-pink-400 transition">
              Get a proposal
            </a>
            <a href="#work" className="inline-flex items-center justify-center rounded-xl border border-white/15 bg-white/5 px-5 py-3 text-sm font-semibold text-white hover:bg-white/10 transition">
              See our work
            </a>
          </div>

          <div className="mt-10 grid grid-cols-2 gap-6 text-left sm:grid-cols-3">
            <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
              <div className="mb-2 inline-flex h-8 w-8 items-center justify-center rounded-lg bg-pink-500/20 text-pink-300">
                <Star className="h-4 w-4" />
              </div>
              <p className="text-sm font-semibold text-white">Marketing</p>
              <p className="text-xs text-pink-100/70">Funnels, ads, email, CRO</p>
            </div>
            <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
              <div className="mb-2 inline-flex h-8 w-8 items-center justify-center rounded-lg bg-pink-500/20 text-pink-300">
                <Star className="h-4 w-4" />
              </div>
              <p className="text-sm font-semibold text-white">SEO</p>
              <p className="text-xs text-pink-100/70">Technical + content strategy</p>
            </div>
            <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
              <div className="mb-2 inline-flex h-8 w-8 items-center justify-center rounded-lg bg-pink-500/20 text-pink-300">
                <Star className="h-4 w-4" />
              </div>
              <p className="text-sm font-semibold text-white">Web Dev</p>
              <p className="text-xs text-pink-100/70">Custom apps & blazing speed</p>
            </div>
          </div>
        </div>

        <div className="relative mx-auto mt-14 w-full max-w-xl flex-shrink-0 lg:mt-0">
          <div className="absolute -inset-6 rounded-[32px] bg-gradient-to-tr from-pink-500/30 via-fuchsia-500/20 to-pink-300/10 blur-2xl" />
          <div className="relative rounded-[32px] border border-white/10 bg-gradient-to-b from-slate-900/40 to-slate-900/80 p-6 shadow-2xl backdrop-blur-xl">
            <div className="relative aspect-square rounded-2xl border border-white/10 bg-slate-950/60 p-6 flex items-center justify-center overflow-hidden">
              <CatAstronaut className="h-full w-full" />
              <div className="absolute inset-0 pointer-events-none" style={{background:"radial-gradient( circle at 30% 30%, rgba(236,72,153,.15), transparent 40%), radial-gradient(circle at 70% 70%, rgba(244,114,182,.12), transparent 40%)"}} />
            </div>
            <div className="mt-6 grid grid-cols-3 gap-3 text-center">
              <div className="rounded-xl border border-white/10 bg-white/5 px-3 py-2">
                <p className="text-xl font-bold text-white">200+</p>
                <p className="text-[10px] uppercase tracking-wide text-pink-100/70">Projects</p>
              </div>
              <div className="rounded-xl border border-white/10 bg-white/5 px-3 py-2">
                <p className="text-xl font-bold text-white">98%</p>
                <p className="text-[10px] uppercase tracking-wide text-pink-100/70">Satisfaction</p>
              </div>
              <div className="rounded-xl border border-white/10 bg-white/5 px-3 py-2">
                <p className="text-xl font-bold text-white">4.9</p>
                <p className="text-[10px] uppercase tracking-wide text-pink-100/70">Avg rating</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

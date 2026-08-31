import React from 'react';
import { ViewType } from '../types';
import { PORTRAIT_IMAGE } from '../data/portfolioData';
import { ArrowRight, Sparkles, Terminal } from 'lucide-react';

interface HeroSectionProps {
  onNavigate: (view: ViewType) => void;
  onScrollToWork?: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onNavigate, onScrollToWork }) => {
  return (
    <section
      id="hero-editorial"
      className="relative flex-grow flex items-center pt-24 pb-16 md:pt-28 md:pb-20 overflow-hidden"
    >
      <div className="relative z-10 w-full max-w-[1920px] mx-auto px-5 md:px-20 grid grid-cols-4 md:grid-cols-12 gap-8 items-center">
        {/* Left AI Signature Line (Desktop) */}
        <div className="hidden md:block col-span-1 h-[50vh] relative">
          <div className="ai-signature absolute right-8 h-full"></div>
        </div>

        {/* Main Editorial Content */}
        <div className="col-span-4 md:col-span-7 flex flex-col justify-center h-full">
          {/* Metadata Chips / Badges */}
          <div className="mb-5 flex flex-wrap items-center gap-2.5">
            <span
              id="hero-badge-1"
              className="px-3 py-1 border border-[#222222] font-jetbrains text-[11px] text-[#e5e5e5] tracking-[0.15em] uppercase bg-[#121212]"
            >
              AI Creative Designer
            </span>
            <span
              id="hero-badge-2"
              className="px-3 py-1 border border-[#222222] font-jetbrains text-[11px] text-[#e5e5e5] tracking-[0.15em] uppercase bg-[#121212]"
            >
              Prompt Engineer
            </span>
            <span
              id="hero-badge-3"
              className="hidden sm:inline-block px-3 py-1 border border-[#222222] font-jetbrains text-[11px] text-[#c4a47c] tracking-[0.15em] uppercase bg-[#121212]"
            >
              Visual Storytelling &amp; Branding
            </span>
          </div>

          {/* Main Hero Typography - Controlled Editorial Line Breaks */}
          <h1
            id="hero-main-title"
            className="font-syne text-3xl sm:text-5xl md:text-6xl lg:text-[70px] font-extrabold uppercase tracking-tight text-[#e5e5e5] leading-[1.02] mb-6"
          >
            I TURN IDEAS INTO<br className="hidden sm:inline" />
            <span className="font-serif italic font-normal text-[#c4a47c]"> VISUAL</span> EXPERIENCES.
          </h1>

          {/* Editorial Bio with comfortable reading width */}
          <p
            id="hero-bio-statement"
            className="font-grotesk text-base sm:text-lg text-[#888888] max-w-xl mb-8 border-l-2 border-[#c4a47c]/60 pl-5 py-1 leading-relaxed"
          >
            Working at the intersection of generative AI, brand marketing, and visual storytelling
            to create commercial work that looks compelling and communicates with strategic purpose.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 items-stretch sm:items-center">
            <button
              id="hero-cta-explore-work"
              onClick={() => {
                if (onScrollToWork) {
                  onScrollToWork();
                } else {
                  onNavigate('work');
                }
              }}
              className="group inline-flex items-center justify-center gap-3 px-7 py-3.5 bg-transparent border border-[#c4a47c] text-[#c4a47c] font-jetbrains text-xs uppercase tracking-[0.15em] hover:bg-[#c4a47c] hover:text-[#080808] transition-all duration-300 cursor-pointer shadow-[0_0_15px_rgba(196,164,124,0.12)] hover:shadow-[0_0_25px_rgba(196,164,124,0.3)]"
            >
              <span>Explore Selected Work</span>
              <ArrowRight size={15} className="group-hover:translate-x-1 transition-transform" />
            </button>

            <button
              id="hero-cta-contact"
              onClick={() => onNavigate('contact')}
              className="group inline-flex items-center justify-center gap-3 px-7 py-3.5 bg-transparent border border-[#333333] text-[#e5e5e5] font-jetbrains text-xs uppercase tracking-[0.15em] hover:border-[#c4a47c] hover:text-[#c4a47c] transition-all duration-300 cursor-pointer"
            >
              <span>Get in Touch</span>
              <ArrowRight size={15} className="group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>

        {/* Right Portrait with Technical Framing */}
        <div className="col-span-4 md:col-span-4 relative mt-8 md:mt-0 flex items-center justify-center md:justify-end">
          <div
            id="hero-portrait-frame"
            className="relative w-full max-w-[340px] aspect-[3/4] border border-[#222222] p-2 group bg-[#121212]"
          >
            {/* Ambient Accent Glow behind portrait */}
            <div className="absolute -inset-2 bg-[#c4a47c]/10 blur-xl rounded-full z-0 pointer-events-none group-hover:bg-[#c4a47c]/20 transition-all duration-500"></div>

            {/* Grayscale High Contrast Portrait */}
            <img
              id="hero-portrait-img"
              src={PORTRAIT_IMAGE}
              alt="Mathesh A K S - AI Creative Designer"
              className="w-full h-full object-cover relative z-10 filter grayscale contrast-125 brightness-90 group-hover:filter-none transition-all duration-500"
            />

            {/* Decorative Technical Corners (0px sharp) */}
            <div className="absolute top-0 left-0 w-3.5 h-3.5 border-t-2 border-l-2 border-[#c4a47c] z-20"></div>
            <div className="absolute top-0 right-0 w-3.5 h-3.5 border-t-2 border-r-2 border-[#c4a47c] z-20"></div>
            <div className="absolute bottom-0 left-0 w-3.5 h-3.5 border-b-2 border-l-2 border-[#c4a47c] z-20"></div>
            <div className="absolute bottom-0 right-0 w-3.5 h-3.5 border-b-2 border-r-2 border-[#c4a47c] z-20"></div>

            {/* Metadata Overlay */}
            <div className="absolute bottom-3.5 left-3.5 right-3.5 z-20 flex justify-between items-center text-[10px] font-jetbrains text-[#888888] bg-[#080808]/90 px-3 py-1.5 border border-[#222222]">
              <span className="text-[#c4a47c]">M·AKS // PORTFOLIO</span>
              <span>MADURAI · CHENNAI</span>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll to Discover Indicator */}
      <div
        id="hero-scroll-indicator"
        className="absolute bottom-3 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-60 hover:opacity-100 transition-opacity cursor-pointer hidden md:flex"
        onClick={() => {
          if (onScrollToWork) {
            onScrollToWork();
          } else {
            const el = document.getElementById('featured-works-section');
            if (el) el.scrollIntoView({ behavior: 'smooth' });
          }
        }}
      >
        <span className="font-jetbrains text-[9px] text-[#888888] uppercase tracking-[0.25em]">
          SCROLL TO DISCOVER
        </span>
        <div className="w-[1px] h-8 bg-[#222222] relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-full bg-[#c4a47c] -translate-y-full animate-[slideDownAnim_2s_infinite]"></div>
        </div>
      </div>
    </section>
  );
};

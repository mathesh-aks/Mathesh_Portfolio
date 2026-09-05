import React from 'react';
import { ViewType } from '../types';
import { PORTRAIT_IMAGE } from '../data/portfolioData';
import { ArrowRight, ArrowDown } from 'lucide-react';

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
      <div className="relative z-10 w-full max-w-[1920px] mx-auto px-5 md:px-20 grid grid-cols-4 md:grid-cols-12 gap-8 lg:gap-12 items-center">
        {/* Left AI Signature Rule (Desktop) */}
        <div className="hidden md:block col-span-1 h-[48vh] relative">
          <div className="ai-signature absolute right-6 h-full"></div>
        </div>

        {/* Main Editorial Content */}
        <div className="col-span-4 md:col-span-7 flex flex-col justify-center h-full">
          {/* Editorial Eyebrow */}
          <div className="mb-4">
            <span className="font-jetbrains text-xs text-[#6b654c] uppercase tracking-[0.25em] font-semibold block">
              PORTFOLIO // MATHESH A K S
            </span>
          </div>

          {/* Role Chips in Refined Stone/Charcoal */}
          <div className="mb-5 flex flex-wrap items-center gap-2">
            <span
              id="hero-badge-1"
              className="px-3 py-1 border border-[#e5e2da] font-jetbrains text-[10px] sm:text-[11px] text-[#141414] tracking-[0.16em] uppercase bg-[#ffffff] shadow-[0_1px_3px_rgba(0,0,0,0.02)]"
            >
              AI CREATIVE DESIGNER
            </span>
            <span
              id="hero-badge-2"
              className="px-3 py-1 border border-[#e5e2da] font-jetbrains text-[10px] sm:text-[11px] text-[#141414] tracking-[0.16em] uppercase bg-[#ffffff] shadow-[0_1px_3px_rgba(0,0,0,0.02)]"
            >
              PROMPT ENGINEER
            </span>
            <span
              id="hero-badge-3"
              className="hidden sm:inline-block px-3 py-1 border border-[#e5e2da] font-jetbrains text-[10px] sm:text-[11px] text-[#6b654c] tracking-[0.16em] uppercase bg-[#f4f2eb] font-semibold"
            >
              VISUAL STORYTELLER &amp; BRAND STRATEGIST
            </span>
          </div>

          {/* Display Headline - Core Positioning */}
          <h1
            id="hero-main-title"
            className="font-syne text-3xl sm:text-5xl md:text-6xl lg:text-[68px] font-extrabold uppercase tracking-tight text-[#141414] leading-[1.04] mb-6"
          >
            AI IS THE MEDIUM.<br />
            <span className="font-serif italic font-normal text-[#6b654c]">DIRECTION</span> IS THE DIFFERENCE.
          </h1>

          {/* Strategic Executive Perspective Statement */}
          <p
            id="hero-bio-statement"
            className="font-grotesk text-base sm:text-lg text-[#5c5950] max-w-xl mb-8 border-l-2 border-[#6b654c] pl-5 py-1 leading-relaxed"
          >
            I combine business acumen, brand marketing, and advanced prompt architecture to direct
            generative AI toward commercial results and deep cultural resonance.
          </p>

          {/* Executive CTA Controls */}
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
              className="group inline-flex items-center justify-center gap-3 px-7 py-3.5 bg-[#141414] text-[#ffffff] font-jetbrains text-xs uppercase tracking-[0.15em] hover:bg-[#33302a] transition-all duration-300 cursor-pointer shadow-[0_2px_8px_rgba(20,20,20,0.08)]"
            >
              <span>Explore Selected Work</span>
              <ArrowDown size={14} className="group-hover:translate-y-0.5 transition-transform" />
            </button>

            <button
              id="hero-cta-contact"
              onClick={() => onNavigate('contact')}
              className="group inline-flex items-center justify-center gap-3 px-7 py-3.5 bg-[#ffffff] border border-[#dad6cc] text-[#141414] font-jetbrains text-xs uppercase tracking-[0.15em] hover:border-[#141414] hover:bg-[#f4f2eb] transition-all duration-300 cursor-pointer shadow-[0_1px_3px_rgba(0,0,0,0.02)]"
            >
              <span>Initiate Executive Brief</span>
              <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform text-[#6b654c]" />
            </button>
          </div>
        </div>

        {/* Right Portrait Frame with Editorial Matting */}
        <div className="col-span-4 md:col-span-4 relative mt-8 md:mt-0 flex items-center justify-center md:justify-end">
          <div
            id="hero-portrait-frame"
            className="relative w-full max-w-[340px] aspect-[3/4] border border-[#e5e2da] p-2.5 group bg-[#ffffff] shadow-[0_8px_30px_rgba(0,0,0,0.05)]"
          >
            {/* Subtle inner matting border */}
            <div className="w-full h-full relative overflow-hidden border border-[#e5e2da] bg-[#f4f2eb]">
              {/* Portrait Image */}
              <img
                id="hero-portrait-img"
                src={PORTRAIT_IMAGE}
                alt="Mathesh A K S - AI Creative Designer"
                className="w-full h-full object-cover relative z-10 filter grayscale contrast-110 brightness-95 group-hover:filter-none transition-all duration-700"
                referrerPolicy="no-referrer"
              />

              {/* Editorial Corner Marks */}
              <div className="absolute top-0 left-0 w-3 h-3 border-t-2 border-l-2 border-[#141414] z-20"></div>
              <div className="absolute top-0 right-0 w-3 h-3 border-t-2 border-r-2 border-[#141414] z-20"></div>
              <div className="absolute bottom-0 left-0 w-3 h-3 border-b-2 border-l-2 border-[#141414] z-20"></div>
              <div className="absolute bottom-0 right-0 w-3 h-3 border-b-2 border-r-2 border-[#141414] z-20"></div>

              {/* Metadata Overlay Badge */}
              <div className="absolute bottom-3 left-3 right-3 z-20 flex justify-between items-center text-[10px] font-jetbrains text-[#5c5950] bg-[#ffffff]/95 backdrop-blur-sm px-3 py-1.5 border border-[#e5e2da] shadow-sm">
                <span className="text-[#141414] font-semibold">MATHESH A K S</span>
                <span className="text-[#6b654c]">MADURAI · CHENNAI</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

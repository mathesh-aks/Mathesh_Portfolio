import React, { useState } from 'react';
import { ViewType } from '../types';
import { TEMPT_CASE_STUDY, TEMPT_HERO_IMAGE } from '../data/portfolioData';
import { ArrowLeft, ArrowRight, Sparkles, Check, Copy, Zap, Flame, Shield } from 'lucide-react';
import { ScrollReveal } from './ScrollReveal';

interface CaseStudyTemptProps {
  onNavigate: (view: ViewType) => void;
}

export const CaseStudyTempt: React.FC<CaseStudyTemptProps> = ({ onNavigate }) => {
  const [copiedPrompt, setCopiedPrompt] = useState(false);

  const heroPrompt =
    'Cinematic wide angle shot from behind stadium seating, crowd in motion blur looking toward luminous amber-gold football pitch, holding glowing translucent glass beverage with frosted condensation in sharp foreground focus, volumetric floodlight haze, photorealistic Hasselblad render, 8k resolution';

  const handleCopyPrompt = () => {
    navigator.clipboard.writeText(heroPrompt);
    setCopiedPrompt(true);
    setTimeout(() => setCopiedPrompt(false), 2000);
  };

  return (
    <div id="casestudy-tempt-container" className="w-full pt-[80px] bg-[#080808] text-[#e5e5e5]">
      {/* Back Navigation Bar */}
      <div className="w-full border-b border-[#222222] bg-[#0c0c0c]/90 backdrop-blur-sm px-5 md:px-20 py-3.5 flex justify-between items-center text-xs font-jetbrains">
        <button
          id="tempt-back-to-work"
          onClick={() => onNavigate('work')}
          className="inline-flex items-center gap-2 text-[#888888] hover:text-[#c4a47c] transition-colors cursor-pointer tracking-wider"
        >
          <ArrowLeft size={14} />
          <span>ALL SELECTED WORKS</span>
        </button>

        <div className="flex items-center gap-4 text-[#888888]">
          <span className="text-[#c4a47c] font-semibold">02 / TEMPT GAMING CAFE</span>
          <span>●</span>
          <button
            id="tempt-prev-project-btn"
            onClick={() => onNavigate('jkans')}
            className="hover:text-[#c4a47c] inline-flex items-center gap-1 transition-colors cursor-pointer tracking-wider"
          >
            <span>PREV: JKANS FOODS</span>
            <ArrowRight size={12} />
          </button>
        </div>
      </div>

      {/* Section 1: Hero Section */}
      <section
        id="tempt-hero-section"
        className="relative w-full min-h-[85vh] md:h-[90vh] flex items-end px-5 md:px-20 pb-16 border-b border-[#222222] overflow-hidden"
      >
        {/* Background Hero Image */}
        <div className="absolute inset-0 z-0">
          <img
            src={TEMPT_HERO_IMAGE}
            alt="Tempt Gaming Cafe Stadium Campaign Visual"
            className="w-full h-full object-cover object-center opacity-60 scale-105 transition-transform duration-1000"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#080808] via-[#080808]/50 to-transparent mix-blend-multiply"></div>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(8,8,8,0.85)_100%)]"></div>
        </div>

        {/* Hero Title & Metadata */}
        <div className="relative z-10 w-full grid grid-cols-4 md:grid-cols-12 gap-6">
          <div className="col-span-4 md:col-span-11 flex flex-col gap-6">
            <div className="flex flex-wrap items-center gap-3 text-[#c4a47c] font-jetbrains text-xs uppercase tracking-[0.2em]">
              <span className="px-2.5 py-1 border border-[#222222] bg-[#080808]/90 text-[#c4a47c]">
                02 / SELECTED WORK
              </span>
              <span className="text-[#666666]">●</span>
              <span className="tracking-widest text-[#e5e5e5]">AI-POWERED SPORTS CULTURE CAMPAIGN</span>
              <span className="text-[#666666]">●</span>
              <span className="text-[#c4a47c]">SPORTS &amp; GAMING</span>
            </div>

            <h1
              id="tempt-hero-title"
              className="font-syne text-5xl sm:text-7xl md:text-8xl lg:text-[96px] text-[#e5e5e5] uppercase tracking-tighter font-extrabold leading-[88%]"
            >
              TEMPT <span className="font-serif italic font-light text-[#c4a47c]">GAMING</span> CAFE
            </h1>

            <p className="font-grotesk text-lg md:text-xl text-[#888888] max-w-3xl leading-relaxed">
              An AI-assisted visual campaign exploring the intersection of football culture, gaming,
              and social-first brand storytelling.
            </p>
          </div>
        </div>
      </section>

      {/* Marquee Ticker */}
      <div className="w-full bg-[#0c0c0c] border-b border-[#222222] py-3.5 marquee-container">
        <div className="marquee-content font-jetbrains text-xs uppercase tracking-widest text-[#888888]">
          <span className="mx-6 text-[#c4a47c] font-bold">✦ OBSIDIAN GOLD</span>
          <span className="mx-6 text-[#444444]">///</span>
          <span className="mx-6 text-[#e5e5e5]">STADIUM WHITE</span>
          <span className="mx-6 text-[#444444]">///</span>
          <span className="mx-6 text-[#c4a47c]">AMBER LUMINESCENCE</span>
          <span className="mx-6 text-[#444444]">///</span>
          <span className="mx-6 text-[#e5e5e5]">ESPORTS × FAN CULTURE</span>
          <span className="mx-6 text-[#444444]">///</span>
          <span className="mx-6 text-[#c4a47c]">ONE DRINK. A WHOLE STADIUM OF ENERGY.</span>
          <span className="mx-6 text-[#444444]">///</span>
          <span className="mx-6 text-[#c4a47c] font-bold">✦ OBSIDIAN GOLD</span>
          <span className="mx-6 text-[#444444]">///</span>
          <span className="mx-6 text-[#e5e5e5]">STADIUM WHITE</span>
          <span className="mx-6 text-[#444444]">///</span>
          <span className="mx-6 text-[#c4a47c]">AMBER LUMINESCENCE</span>
        </div>
      </div>

      {/* Section 2: The Challenge & The Idea (Grid Guide) */}
      <section
        id="tempt-strategy-section"
        className="w-full px-5 md:px-20 py-20 border-b border-[#222222] bg-[#080808]"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* 01 / The Challenge */}
          <ScrollReveal variant="fade-up" delay={100}>
            <div className="border border-[#222222] p-8 md:p-10 bg-[#121212]/90 backdrop-blur-sm relative h-full">
              <div className="absolute top-0 left-0 w-3 h-3 border-t-2 border-l-2 border-[#c4a47c]"></div>
              <span className="font-jetbrains text-xs text-[#c4a47c] block mb-3 uppercase tracking-widest">
                01 / THE CHALLENGE
              </span>
              <h2 className="font-syne text-3xl font-bold text-[#e5e5e5] mb-6 leading-tight">
                MAKE THE BRAND PART OF THE GAME
              </h2>
              <p className="font-grotesk text-base text-[#888888] leading-relaxed">
                {TEMPT_CASE_STUDY.challenge}
              </p>
            </div>
          </ScrollReveal>

          {/* 02 / The Idea */}
          <ScrollReveal variant="fade-up" delay={200}>
            <div className="border border-[#222222] p-8 md:p-10 bg-[#121212]/90 backdrop-blur-sm relative h-full">
              <div className="absolute top-0 right-0 w-3 h-3 border-t-2 border-r-2 border-[#c4a47c]"></div>
              <span className="font-jetbrains text-xs text-[#c4a47c] block mb-3 uppercase tracking-widest">
                02 / THE IDEA
              </span>
              <h2 className="font-syne text-3xl font-bold text-[#e5e5e5] mb-6 leading-tight">
                ONE DRINK. A WHOLE STADIUM OF ENERGY.
              </h2>
              <p className="font-grotesk text-base text-[#888888] leading-relaxed">
                {TEMPT_CASE_STUDY.idea}
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Section 3: Visual Campaign Showcase */}
      <section className="w-full px-5 md:px-20 py-20 border-b border-[#222222] bg-[#080808]">
        <ScrollReveal variant="fade-up">
          <div className="mb-12 flex flex-col md:flex-row justify-between md:items-end gap-4 border-b border-[#222222] pb-6">
            <div>
              <span className="font-jetbrains text-xs text-[#c4a47c] uppercase tracking-widest block mb-2">
                03 / CAMPAIGN EXECUTION
              </span>
              <h3 className="font-syne text-3xl md:text-4xl font-bold text-[#e5e5e5]">
                Stadium Energy &amp; Signature Luminescence
              </h3>
            </div>

            <div className="flex items-center gap-3">
              <span className="font-jetbrains text-xs text-[#888888]">PALETTE:</span>
              <div className="flex items-center gap-2">
                <span className="w-5 h-5 rounded-full bg-[#080808] border border-[#222222]" title="Obsidian Black"></span>
                <span className="w-5 h-5 rounded-full bg-[#c4a47c] shadow-[0_0_8px_rgba(196,164,124,0.5)]" title="Champagne Gold"></span>
                <span className="w-5 h-5 rounded-full bg-[#e5e5e5]" title="Stadium White"></span>
                <span className="w-5 h-5 rounded-full bg-[#1e1a14] border border-[#c4a47c]/40" title="Warm Bronze"></span>
              </div>
            </div>
          </div>
        </ScrollReveal>

        {/* Feature Visual Hero Canvas */}
        <ScrollReveal variant="fade-up" delay={150}>
          <div className="w-full border border-[#222222] p-4 bg-[#121212] mb-12">
            <div className="w-full aspect-[16/9] md:aspect-[21/9] relative overflow-hidden">
              <img
                src={TEMPT_HERO_IMAGE}
                alt="Tempt Gaming Arena Atmosphere"
                className="w-full h-full object-cover"
              />
              <div className="absolute top-4 left-4 font-jetbrains text-[10px] bg-[#080808]/90 px-3 py-1.5 border border-[#222222] text-[#c4a47c] flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#c4a47c] animate-ping"></span>
                MATCHDAY STADIUM HERO RENDER
              </div>
            </div>
          </div>
        </ScrollReveal>

        {/* Prompt Blueprint Card */}
        <ScrollReveal variant="fade-up" delay={200}>
          <div className="border border-[#222222] p-8 bg-[#121212]">
            <div className="flex flex-wrap items-center justify-between gap-4 mb-4">
              <div className="flex items-center gap-2 text-[#c4a47c] font-jetbrains text-xs uppercase">
                <Zap size={15} />
                <span>CORE PROMPT BLUEPRINT // FLUX.1 PRO &amp; MIDJOURNEY v6.1</span>
              </div>

              <button
                onClick={handleCopyPrompt}
                className="inline-flex items-center gap-2 px-4 py-1.5 bg-transparent border border-[#c4a47c] text-[#c4a47c] font-jetbrains text-xs uppercase hover:bg-[#c4a47c] hover:text-[#080808] transition-all cursor-pointer tracking-wider"
              >
                {copiedPrompt ? (
                  <>
                    <Check size={14} />
                    <span>PROMPT COPIED</span>
                  </>
                ) : (
                  <>
                    <Copy size={14} />
                    <span>COPY PROMPT ARCHITECTURE</span>
                  </>
                )}
              </button>
            </div>

            <div className="bg-[#080808] p-4 border border-[#222222] font-jetbrains text-xs text-[#c4c7c7] leading-relaxed">
              {heroPrompt}
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-6">
              <div className="p-3 bg-[#080808] border border-[#222222]">
                <span className="font-jetbrains text-[10px] text-[#666666] uppercase block">Focal Element</span>
                <span className="font-jetbrains text-xs text-[#e5e5e5]">Translucent Glass Drink</span>
              </div>
              <div className="p-3 bg-[#080808] border border-[#222222]">
                <span className="font-jetbrains text-[10px] text-[#666666] uppercase block">Atmospheric Light</span>
                <span className="font-jetbrains text-xs text-[#e5e5e5]">Volumetric Floodlight Flares</span>
              </div>
              <div className="p-3 bg-[#080808] border border-[#222222]">
                <span className="font-jetbrains text-[10px] text-[#666666] uppercase block">Camera &amp; Lens</span>
                <span className="font-jetbrains text-xs text-[#e5e5e5]">Hasselblad H6D, f/2.8 Depth</span>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </section>

      {/* Next Project Footer Bar */}
      <section className="w-full px-5 md:px-20 py-16 flex flex-col sm:flex-row justify-between items-center gap-6 bg-[#0c0c0c]">
        <div>
          <span className="font-jetbrains text-xs text-[#666666] uppercase tracking-[0.2em] block">
            Up Next: Selected Work 01
          </span>
          <h4 className="font-syne text-2xl font-bold text-[#e5e5e5]">JKANS FOODS</h4>
          <p className="font-grotesk text-sm text-[#888888]">Cinematic Character-Driven Food Campaign</p>
        </div>

        <button
          onClick={() => onNavigate('jkans')}
          className="inline-flex items-center gap-3 px-8 py-4 bg-transparent border border-[#c4a47c] text-[#c4a47c] font-jetbrains text-xs uppercase tracking-[0.15em] hover:bg-[#c4a47c] hover:text-[#080808] transition-all cursor-pointer shadow-[0_0_15px_rgba(196,164,124,0.2)]"
        >
          <span>VIEW CASE STUDY</span>
          <ArrowRight size={16} />
        </button>
      </section>
    </div>
  );
};

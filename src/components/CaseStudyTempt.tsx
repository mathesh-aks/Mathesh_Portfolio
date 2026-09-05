import React, { useState } from 'react';
import { ViewType } from '../types';
import { TEMPT_CASE_STUDY, TEMPT_HERO_IMAGE } from '../data/portfolioData';
import { ArrowLeft, ArrowRight, Check, Copy, Zap } from 'lucide-react';
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

  const strategicPhases = [
    {
      step: '01',
      title: 'CONTEXT',
      subtitle: 'Market & Gaming Arena Landscape',
      content:
        'Tempt Gaming Cafe functions as both a high-performance esports arena and a community matchday screening destination. The goal was launching a signature beverage with high-impact visual branding that felt native to international stadium culture rather than a local cafe special.',
    },
    {
      step: '02',
      title: 'INSIGHT',
      subtitle: 'The Matchday Ritual',
      content:
        'During tense penalty shootouts or clutch esports rounds, sensory energy peaks. Holding a frosty, glowing drink is not merely consumption—it is a physical tether to the intensity of the stadium experience.',
    },
    {
      step: '03',
      title: 'CREATIVE DIRECTION',
      subtitle: 'One Drink. A Whole Stadium of Energy.',
      content:
        'Framing the translucent amber beverage in razor-sharp foreground macro focus, while the roaring stadium amphitheater and floodlit pitch create a dynamic, motion-blurred backdrop of sheer kinetic scale.',
    },
    {
      step: '04',
      title: 'AI / PROMPT APPROACH',
      subtitle: 'Volumetric Depth & Sensor Physics',
      content:
        'Engineered in FLUX.1 Pro and Midjourney v6.1 using optical parameters: Hasselblad H6D medium format sensor, 28mm wide prime lens, f/2.8 shallow depth-of-field, volumetric floodlight haze, and precise refraction calculations through condensed glass.',
    },
    {
      step: '05',
      title: 'ART DIRECTION',
      subtitle: 'Chroma & Atmospheric Balance',
      content:
        'A high-contrast palette anchored by Obsidian Charcoal, Stadium Floodlight White, and Luminescent Amber Gold (#c4a47c). Condensation physics were tuned to convey crisp temperature and refreshing intensity.',
    },
    {
      step: '06',
      title: 'FINAL OUTPUT',
      subtitle: 'Hero Advertising Asset',
      content:
        'High-resolution master hero visual deployed for large-format displays, digital signages, social campaign teasers, and in-venue experiential promotions.',
    },
  ];

  return (
    <div id="casestudy-tempt-container" className="w-full pt-[75px] bg-[#fbfbf9] text-[#141414]">
      {/* Back Navigation Bar */}
      <div className="w-full border-b border-[#e5e2da] bg-[#ffffff]/95 backdrop-blur-sm px-5 md:px-20 py-3.5 flex justify-between items-center text-xs font-jetbrains">
        <button
          id="tempt-back-to-work"
          onClick={() => onNavigate('work')}
          className="inline-flex items-center gap-2 text-[#5c5950] hover:text-[#141414] transition-colors cursor-pointer tracking-wider font-medium"
        >
          <ArrowLeft size={14} />
          <span>ALL SELECTED WORKS</span>
        </button>

        <div className="flex items-center gap-4 text-[#827e74]">
          <span className="text-[#141414] font-bold">02 / TEMPT GAMING CAFE</span>
          <span>●</span>
          <button
            id="tempt-prev-project-btn"
            onClick={() => onNavigate('jkans')}
            className="hover:text-[#141414] inline-flex items-center gap-1 transition-colors cursor-pointer tracking-wider font-medium"
          >
            <span>PREV: JKANS FOODS</span>
            <ArrowRight size={12} />
          </button>
        </div>
      </div>

      {/* Section 1: Hero Section */}
      <section
        id="tempt-hero-section"
        className="relative w-full min-h-[75vh] md:min-h-[85vh] flex items-end px-5 md:px-20 pb-16 border-b border-[#e5e2da] overflow-hidden"
      >
        {/* Background Hero Image */}
        <div className="absolute inset-0 z-0">
          <img
            src={TEMPT_HERO_IMAGE}
            alt="Tempt Gaming Cafe Stadium Campaign Visual"
            className="w-full h-full object-cover object-center opacity-35 scale-105 transition-transform duration-1000"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#fbfbf9] via-[#fbfbf9]/80 to-transparent"></div>
        </div>

        {/* Hero Title & Metadata */}
        <div className="relative z-10 w-full grid grid-cols-4 md:grid-cols-12 gap-6">
          <div className="col-span-4 md:col-span-11 flex flex-col gap-5">
            <div className="flex flex-wrap items-center gap-3 font-jetbrains text-xs uppercase tracking-[0.2em]">
              <span className="px-2.5 py-1 border border-[#e5e2da] bg-[#ffffff] text-[#141414] font-semibold">
                02 / CASE STUDY
              </span>
              <span className="text-[#dad6cc]">●</span>
              <span className="tracking-widest text-[#5c5950]">AI-DIRECTED SPORTS CULTURE CAMPAIGN</span>
              <span className="text-[#dad6cc]">●</span>
              <span className="text-[#6b654c] font-semibold">ESPORTS &amp; FOOTBALL</span>
            </div>

            <h1
              id="tempt-hero-title"
              className="font-syne text-4xl sm:text-6xl md:text-7xl lg:text-[90px] text-[#141414] uppercase tracking-tighter font-extrabold leading-[92%]"
            >
              TEMPT <span className="font-serif italic font-normal text-[#6b654c]">GAMING</span> CAFE
            </h1>

            <p className="font-grotesk text-lg md:text-xl text-[#5c5950] max-w-2xl leading-relaxed">
              An AI-assisted visual campaign exploring football culture, gaming intensity, and social brand storytelling.
            </p>
          </div>
        </div>
      </section>

      {/* Marquee Ticker */}
      <div className="w-full bg-[#ffffff] border-b border-[#e5e2da] py-3.5 marquee-container">
        <div className="marquee-content font-jetbrains text-xs uppercase tracking-widest text-[#5c5950]">
          <span className="mx-6 text-[#141414] font-bold">✦ OBSIDIAN CHARCOAL</span>
          <span className="mx-6 text-[#dad6cc]">///</span>
          <span className="mx-6 text-[#6b654c] font-medium">STADIUM FLOODLIGHT WHITE</span>
          <span className="mx-6 text-[#dad6cc]">///</span>
          <span className="mx-6 text-[#141414]">AMBER LUMINESCENCE</span>
          <span className="mx-6 text-[#dad6cc]">///</span>
          <span className="mx-6 text-[#5c5950]">ESPORTS × FAN CULTURE</span>
          <span className="mx-6 text-[#dad6cc]">///</span>
          <span className="mx-6 text-[#141414] font-semibold">ONE DRINK. A WHOLE STADIUM OF ENERGY.</span>
          <span className="mx-6 text-[#dad6cc]">///</span>
          <span className="mx-6 text-[#141414] font-bold">✦ OBSIDIAN CHARCOAL</span>
          <span className="mx-6 text-[#dad6cc]">///</span>
          <span className="mx-6 text-[#6b654c] font-medium">STADIUM FLOODLIGHT WHITE</span>
        </div>
      </div>

      {/* Section 2: Strategic Sequence (CONTEXT → INSIGHT → DIRECTION → PROMPT → ART → OUTPUT) */}
      <section id="tempt-strategy-framework" className="w-full px-5 md:px-20 py-16 border-b border-[#e5e2da] bg-[#ffffff]">
        <div className="max-w-[1920px] mx-auto">
          <ScrollReveal variant="fade-up">
            <div className="mb-12 border-b border-[#e5e2da] pb-6 flex flex-col md:flex-row md:items-end justify-between gap-4">
              <div>
                <span className="font-jetbrains text-xs text-[#6b654c] uppercase tracking-[0.25em] block mb-2 font-semibold">
                  STRATEGIC METHODOLOGY
                </span>
                <h2 className="font-syne text-2xl sm:text-4xl font-extrabold text-[#141414] uppercase">
                  ATMOSPHERE &amp; <span className="font-serif italic font-normal text-[#6b654c]">ENERGY DIRECTION.</span>
                </h2>
              </div>
              <p className="font-grotesk text-sm text-[#5c5950] max-w-md">
                Translating real fan emotion into disciplined visual architecture and prompt engineering specifications.
              </p>
            </div>
          </ScrollReveal>

          {/* 6-Stage Strategic Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {strategicPhases.map((phase, idx) => (
              <ScrollReveal key={idx} variant="fade-up" delay={idx * 75}>
                <div className="p-6 bg-[#fbfbf9] border border-[#e5e2da] h-full flex flex-col justify-between shadow-[0_1px_3px_rgba(0,0,0,0.02)]">
                  <div>
                    <div className="flex items-center justify-between mb-3 border-b border-[#e5e2da] pb-2">
                      <span className="font-jetbrains text-xs text-[#6b654c] font-bold tracking-widest">
                        PHASE {phase.step} // {phase.title}
                      </span>
                      <span className="font-jetbrains text-[10px] text-[#827e74]">TEMPT 2025</span>
                    </div>
                    <h3 className="font-syne text-base font-bold text-[#141414] mb-2">{phase.subtitle}</h3>
                    <p className="font-grotesk text-xs sm:text-sm text-[#5c5950] leading-relaxed">
                      {phase.content}
                    </p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Section 3: Visual Campaign Showcase */}
      <section className="w-full px-5 md:px-20 py-20 border-b border-[#e5e2da] bg-[#fbfbf9]">
        <ScrollReveal variant="fade-up">
          <div className="mb-12 flex flex-col md:flex-row justify-between md:items-end gap-4 border-b border-[#e5e2da] pb-6">
            <div>
              <span className="font-jetbrains text-xs text-[#6b654c] uppercase tracking-widest block mb-2 font-semibold">
                03 / CAMPAIGN EXECUTION
              </span>
              <h3 className="font-syne text-3xl md:text-4xl font-bold text-[#141414]">
                Stadium Energy &amp; Signature Luminescence
              </h3>
            </div>

            <div className="flex items-center gap-3">
              <span className="font-jetbrains text-xs text-[#5c5950] font-semibold">PALETTE:</span>
              <div className="flex items-center gap-2">
                <span className="w-5 h-5 rounded-full bg-[#141414] border border-[#dad6cc]" title="Obsidian Charcoal"></span>
                <span className="w-5 h-5 rounded-full bg-[#c4a47c] border border-[#dad6cc]" title="Amber Gold"></span>
                <span className="w-5 h-5 rounded-full bg-[#ffffff] border border-[#dad6cc]" title="Stadium White"></span>
                <span className="w-5 h-5 rounded-full bg-[#6b654c]" title="Muted Olive"></span>
              </div>
            </div>
          </div>
        </ScrollReveal>

        {/* Feature Visual Hero Canvas */}
        <ScrollReveal variant="fade-up" delay={150}>
          <div className="w-full border border-[#e5e2da] p-4 bg-[#ffffff] mb-12 shadow-[0_4px_20px_rgba(0,0,0,0.04)]">
            <div className="w-full aspect-[16/9] md:aspect-[21/9] relative overflow-hidden bg-[#f4f2eb]">
              <img
                src={TEMPT_HERO_IMAGE}
                alt="Tempt Gaming Arena Atmosphere"
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute top-4 left-4 font-jetbrains text-[10px] bg-[#ffffff]/95 backdrop-blur-sm px-3 py-1.5 border border-[#e5e2da] text-[#141414] flex items-center gap-2 font-semibold">
                <span className="w-2 h-2 rounded-full bg-[#6b654c] animate-ping"></span>
                MATCHDAY STADIUM HERO RENDER
              </div>
            </div>
          </div>
        </ScrollReveal>

        {/* Prompt Blueprint Card */}
        <ScrollReveal variant="fade-up" delay={200}>
          <div className="border border-[#e5e2da] p-8 bg-[#ffffff] shadow-sm">
            <div className="flex flex-wrap items-center justify-between gap-4 mb-4">
              <div className="flex items-center gap-2 text-[#141414] font-jetbrains text-xs uppercase font-bold">
                <Zap size={15} className="text-[#6b654c]" />
                <span>CORE PROMPT BLUEPRINT // FLUX.1 PRO &amp; MIDJOURNEY v6.1</span>
              </div>

              <button
                onClick={handleCopyPrompt}
                className="inline-flex items-center gap-2 px-4 py-2 bg-[#ffffff] border border-[#dad6cc] text-[#141414] font-jetbrains text-xs uppercase hover:bg-[#141414] hover:text-[#ffffff] transition-all cursor-pointer tracking-wider font-semibold"
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

            <div className="bg-[#f4f2eb] p-4 border border-[#e5e2da] font-jetbrains text-xs text-[#141414] leading-relaxed">
              {heroPrompt}
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-6">
              <div className="p-3 bg-[#fbfbf9] border border-[#e5e2da]">
                <span className="font-jetbrains text-[10px] text-[#827e74] uppercase block font-semibold">Focal Element</span>
                <span className="font-jetbrains text-xs text-[#141414] font-medium">Translucent Glass Drink</span>
              </div>
              <div className="p-3 bg-[#fbfbf9] border border-[#e5e2da]">
                <span className="font-jetbrains text-[10px] text-[#827e74] uppercase block font-semibold">Atmospheric Light</span>
                <span className="font-jetbrains text-xs text-[#141414] font-medium">Volumetric Floodlight Flares</span>
              </div>
              <div className="p-3 bg-[#fbfbf9] border border-[#e5e2da]">
                <span className="font-jetbrains text-[10px] text-[#827e74] uppercase block font-semibold">Camera &amp; Lens</span>
                <span className="font-jetbrains text-xs text-[#141414] font-medium">Hasselblad H6D, f/2.8 Depth</span>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </section>

      {/* Next Project Footer Bar */}
      <section className="w-full px-5 md:px-20 py-16 flex flex-col sm:flex-row justify-between items-center gap-6 bg-[#f4f2eb]">
        <div>
          <span className="font-jetbrains text-xs text-[#5c5950] uppercase tracking-[0.2em] block font-semibold">
            Up Next: Selected Work 01
          </span>
          <h4 className="font-syne text-2xl font-bold text-[#141414]">JKANS FOODS</h4>
          <p className="font-grotesk text-sm text-[#5c5950]">Character-Driven Cinematic Food Campaign</p>
        </div>

        <button
          onClick={() => onNavigate('jkans')}
          className="inline-flex items-center gap-3 px-8 py-4 bg-[#141414] text-[#ffffff] font-jetbrains text-xs uppercase tracking-[0.15em] hover:bg-[#33302a] transition-all cursor-pointer shadow-sm font-semibold"
        >
          <span>VIEW CASE STUDY</span>
          <ArrowRight size={16} />
        </button>
      </section>
    </div>
  );
};

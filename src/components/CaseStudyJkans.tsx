import React, { useState } from 'react';
import { GalleryItem, ViewType } from '../types';
import { JKANS_CASE_STUDY, JKANS_GALLERY, JKANS_HERO_IMAGE } from '../data/portfolioData';
import { ArrowLeft, ArrowRight, Eye, Check, Copy } from 'lucide-react';
import { ScrollReveal } from './ScrollReveal';

interface CaseStudyJkansProps {
  onNavigate: (view: ViewType) => void;
  onOpenLightbox: (item: GalleryItem) => void;
}

export const CaseStudyJkans: React.FC<CaseStudyJkansProps> = ({ onNavigate, onOpenLightbox }) => {
  const [selectedTab, setSelectedTab] = useState<'gallery' | 'breakdown' | 'prompts'>('gallery');
  const [copiedPromptId, setCopiedPromptId] = useState<string | null>(null);

  const handleCopyPrompt = (id: string, text: string) => {
    navigator.clipboard.writeText(text);
    setCopiedPromptId(id);
    setTimeout(() => setCopiedPromptId(null), 2000);
  };

  const strategicPhases = [
    {
      step: '01',
      title: 'CONTEXT',
      subtitle: 'The Brand & Market Reality',
      content:
        'JKANS Foods sought to elevate their regional Madurai presence into a premium culinary brand. In a market dominated by flat stock photography and generic promotional templates, the objective was establishing immediate visual authority, emotional memorability, and genuine cultural pride.',
    },
    {
      step: '02',
      title: 'INSIGHT',
      subtitle: 'The Emotional Cultural Anchor',
      content:
        'In South India, food and cinema are deeply intertwined rituals of identity. Pairing celebrated cinema archetypes with indigenous Madurai specialties (Bun Parotta, Mutton Sukka, Kari Dosa) bridges deep collective nostalgia with culinary desire.',
    },
    {
      step: '03',
      title: 'CREATIVE DIRECTION',
      subtitle: 'Cinema Icons as Culinary Champions',
      content:
        'Rather than passive endorsements, each icon was conceptualized in a distinct cinematic narrative: Rajinikanth commanding the kitchen with theatrical majesty, Kamal Haasan assessing culinary perfection like a master artisan, and Sivakarthikeyan embodying contemporary everyday celebration.',
    },
    {
      step: '04',
      title: 'AI / PROMPT APPROACH',
      subtitle: 'Model Architecture & LoRA Controls',
      content:
        'Engineered through a multi-pass pipeline combining Midjourney v6.1 and FLUX.1 Pro with custom LoRA consistency weights. Prompts utilized strict optical parameters: 35mm & 50mm anamorphic prime framing, f/2.2 aperture, and physical lighting descriptors rather than vague buzzwords.',
    },
    {
      step: '05',
      title: 'ART DIRECTION',
      subtitle: 'Color Temperature & Food Physics',
      content:
        'Rich warm amber, deep charcoal shadows, and natural spice highlights (turmeric, roasted coriander, banana leaf green). Rigorous prompt tuning simulated realistic steam thermodynamics, crispy parotta flakiness, and authentic sizzle.',
    },
    {
      step: '06',
      title: 'FINAL OUTPUT',
      subtitle: 'Commercial Campaign Suite',
      content:
        'A comprehensive 7-piece visual advertising suite deployed across digital touchpoints, driving record customer engagement, high organic social shareability, and distinct brand differentiation.',
    },
  ];

  return (
    <div id="casestudy-jkans-container" className="w-full pt-[75px] bg-[#fbfbf9] text-[#141414]">
      {/* Back Navigation Bar */}
      <div className="w-full border-b border-[#e5e2da] bg-[#ffffff]/95 backdrop-blur-sm px-5 md:px-20 py-3.5 flex justify-between items-center text-xs font-jetbrains">
        <button
          id="jkans-back-to-work"
          onClick={() => onNavigate('work')}
          className="inline-flex items-center gap-2 text-[#5c5950] hover:text-[#141414] transition-colors cursor-pointer tracking-wider font-medium"
        >
          <ArrowLeft size={14} />
          <span>ALL SELECTED WORKS</span>
        </button>

        <div className="flex items-center gap-4 text-[#827e74]">
          <span className="text-[#141414] font-bold">01 / JKANS FOODS</span>
          <span>●</span>
          <button
            id="jkans-next-project-btn"
            onClick={() => onNavigate('tempt')}
            className="hover:text-[#141414] inline-flex items-center gap-1 transition-colors cursor-pointer tracking-wider font-medium"
          >
            <span>NEXT: TEMPT GAMING</span>
            <ArrowRight size={12} />
          </button>
        </div>
      </div>

      {/* Section 1: Hero Section */}
      <section
        id="jkans-hero-section"
        className="relative w-full min-h-[75vh] md:min-h-[85vh] flex items-end px-5 md:px-20 pb-16 border-b border-[#e5e2da] overflow-hidden"
      >
        {/* Background Hero Image */}
        <div className="absolute inset-0 z-0">
          <img
            src={JKANS_HERO_IMAGE}
            alt="JKANS Foods AI Campaign Hero"
            className="w-full h-full object-cover object-top opacity-30 scale-105 transition-transform duration-1000"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#fbfbf9] via-[#fbfbf9]/80 to-transparent"></div>
        </div>

        {/* Hero Title & Metadata */}
        <div className="relative z-10 w-full grid grid-cols-4 md:grid-cols-12 gap-6">
          <div className="col-span-4 md:col-span-11 flex flex-col gap-5">
            <div className="flex flex-wrap items-center gap-3 font-jetbrains text-xs uppercase tracking-[0.2em]">
              <span className="px-2.5 py-1 border border-[#e5e2da] bg-[#ffffff] text-[#141414] font-semibold">
                01 / CASE STUDY
              </span>
              <span className="text-[#dad6cc]">●</span>
              <span className="tracking-widest text-[#5c5950]">AI CREATIVE DIRECTION &amp; PROMPT ARCHITECTURE</span>
              <span className="text-[#dad6cc]">●</span>
              <span className="text-[#6b654c] font-semibold">MADURAI, TN</span>
            </div>

            <h1
              id="jkans-hero-title"
              className="font-syne text-4xl sm:text-6xl md:text-7xl lg:text-[92px] text-[#141414] uppercase tracking-tighter font-extrabold leading-[92%]"
            >
              <span className="font-serif italic font-normal text-[#6b654c]">JKANS</span> FOODS
            </h1>

            <p className="font-grotesk text-lg md:text-xl text-[#5c5950] max-w-2xl leading-relaxed">
              Character-driven visual advertising connecting cinematic cultural mythology with authentic Madurai taste.
            </p>
          </div>
        </div>
      </section>

      {/* Section 2: Narrative Strategic Sequence (CONTEXT → INSIGHT → DIRECTION → PROMPT → ART → OUTPUT) */}
      <section id="jkans-strategy-framework" className="w-full px-5 md:px-20 py-16 border-b border-[#e5e2da] bg-[#ffffff]">
        <div className="max-w-[1920px] mx-auto">
          <ScrollReveal variant="fade-up">
            <div className="mb-12 border-b border-[#e5e2da] pb-6 flex flex-col md:flex-row md:items-end justify-between gap-4">
              <div>
                <span className="font-jetbrains text-xs text-[#6b654c] uppercase tracking-[0.25em] block mb-2 font-semibold">
                  STRATEGIC METHODOLOGY
                </span>
                <h2 className="font-syne text-2xl sm:text-4xl font-extrabold text-[#141414] uppercase">
                  THINKING BEFORE <span className="font-serif italic font-normal text-[#6b654c]">GENERATION.</span>
                </h2>
              </div>
              <p className="font-grotesk text-sm text-[#5c5950] max-w-md">
                Demonstrating rigorous creative strategy and prompt governance from initial commercial objective to final high-resolution render.
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
                      <span className="font-jetbrains text-[10px] text-[#827e74]">JKANS 2025</span>
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

      {/* Section 3: View Mode Tabs */}
      <section className="w-full px-5 md:px-20 py-5 border-b border-[#e5e2da] bg-[#f4f2eb]">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <button
              onClick={() => setSelectedTab('gallery')}
              className={`px-4 py-2 font-jetbrains text-xs uppercase tracking-wider transition-all cursor-pointer border ${
                selectedTab === 'gallery'
                  ? 'border-[#141414] text-[#141414] bg-[#ffffff] font-bold shadow-sm'
                  : 'border-[#e5e2da] text-[#5c5950] hover:text-[#141414]'
              }`}
            >
              Asymmetrical Gallery (7 Visuals)
            </button>
            <button
              onClick={() => setSelectedTab('breakdown')}
              className={`px-4 py-2 font-jetbrains text-xs uppercase tracking-wider transition-all cursor-pointer border ${
                selectedTab === 'breakdown'
                  ? 'border-[#141414] text-[#141414] bg-[#ffffff] font-bold shadow-sm'
                  : 'border-[#e5e2da] text-[#5c5950] hover:text-[#141414]'
              }`}
            >
              Strategic Breakdown
            </button>
            <button
              onClick={() => setSelectedTab('prompts')}
              className={`px-4 py-2 font-jetbrains text-xs uppercase tracking-wider transition-all cursor-pointer border ${
                selectedTab === 'prompts'
                  ? 'border-[#141414] text-[#141414] bg-[#ffffff] font-bold shadow-sm'
                  : 'border-[#e5e2da] text-[#5c5950] hover:text-[#141414]'
              }`}
            >
              Prompt Architecture
            </button>
          </div>

          <div className="font-jetbrains text-xs text-[#827e74]">
            CLICK ANY POSTER TO ZOOM &amp; INSPECT AI PROMPT METADATA
          </div>
        </div>
      </section>

      {/* Section 4: Campaign Gallery (Asymmetrical Grid Layout with all 7 pieces) */}
      {selectedTab === 'gallery' && (
        <section id="jkans-gallery-section" className="w-full px-5 md:px-20 py-16 border-b border-[#e5e2da] bg-[#fbfbf9]">
          <ScrollReveal variant="fade-up">
            <div className="mb-10 flex justify-between items-end border-b border-[#e5e2da] pb-4">
              <div>
                <h3 className="font-jetbrains text-xs text-[#5c5950] uppercase tracking-[0.2em] font-semibold">
                  CAMPAIGN VISUALS &amp; POSTER SUITE
                </h3>
                <p className="font-grotesk text-sm text-[#827e74] mt-1">
                  7 Distinct Cinematic Food Compositions Directed with Generative AI
                </p>
              </div>
              <span className="font-jetbrains text-xs text-[#141414] border border-[#e5e2da] bg-[#ffffff] px-2.5 py-1 font-semibold">
                04 / GALLERY
              </span>
            </div>
          </ScrollReveal>

          {/* Row 1: Asymmetrical Big Portrait + Stacked */}
          <div className="grid grid-cols-4 md:grid-cols-12 gap-6">
            {/* Large Portrait (Rajinikanth) */}
            <div className="col-span-4 md:col-span-5">
              <ScrollReveal variant="fade-up" delay={100}>
                <div
                  id="gallery-card-rajini"
                  onClick={() => onOpenLightbox(JKANS_GALLERY[0])}
                  className="h-[550px] md:h-[780px] border border-[#e5e2da] p-3 bg-[#ffffff] hover:border-[#dad6cc] transition-all duration-500 group cursor-pointer relative shadow-[0_2px_10px_rgba(0,0,0,0.03)]"
                >
                  <div className="w-full h-full relative overflow-hidden bg-[#f4f2eb]">
                    <img
                      src={JKANS_GALLERY[0].imageUrl}
                      alt={JKANS_GALLERY[0].title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                      referrerPolicy="no-referrer"
                    />

                    {/* Hover info badge */}
                    <div className="absolute inset-0 bg-gradient-to-t from-[#141414]/90 via-[#141414]/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6 text-[#ffffff]">
                      <span className="font-jetbrains text-[10px] text-[#f4f2eb] uppercase tracking-wider">
                        {JKANS_GALLERY[0].characterOrStar}
                      </span>
                      <h4 className="font-syne text-xl font-bold">
                        {JKANS_GALLERY[0].title}
                      </h4>
                      <p className="font-grotesk text-xs text-[#dedbd2]">{JKANS_GALLERY[0].dishName}</p>
                      <div className="mt-3 flex items-center gap-2 font-jetbrains text-[10px] text-[#f4f2eb]">
                        <Eye size={14} />
                        <span>INSPECT FULL PROMPT</span>
                      </div>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            </div>

            {/* Stacked smaller visuals (Kamal Haasan Landscape + Siva & Vijay Squares) */}
            <div className="col-span-4 md:col-span-7 grid grid-rows-2 gap-6">
              {/* Landscape Kamal Haasan */}
              <ScrollReveal variant="fade-up" delay={150}>
                <div
                  id="gallery-card-kamal"
                  onClick={() => onOpenLightbox(JKANS_GALLERY[1])}
                  className="border border-[#e5e2da] p-3 bg-[#ffffff] h-[280px] md:h-[375px] relative overflow-hidden group cursor-pointer hover:border-[#dad6cc] transition-all duration-500 shadow-[0_2px_10px_rgba(0,0,0,0.03)]"
                >
                  <div className="w-full h-full relative overflow-hidden bg-[#f4f2eb]">
                    <img
                      src={JKANS_GALLERY[1].imageUrl}
                      alt={JKANS_GALLERY[1].title}
                      className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-700"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#141414]/90 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-5 text-[#ffffff]">
                      <span className="font-jetbrains text-[10px] text-[#f4f2eb] uppercase tracking-wider">
                        {JKANS_GALLERY[1].characterOrStar}
                      </span>
                      <h4 className="font-syne text-lg font-bold">
                        {JKANS_GALLERY[1].title}
                      </h4>
                      <p className="font-grotesk text-xs text-[#dedbd2]">{JKANS_GALLERY[1].dishName}</p>
                    </div>
                  </div>
                </div>
              </ScrollReveal>

              {/* 2 Square Grid (Sivakarthikeyan & Vijay) */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 h-[280px] md:h-[375px]">
                {/* Sivakarthikeyan */}
                <ScrollReveal variant="fade-up" delay={200}>
                  <div
                    id="gallery-card-siva"
                    onClick={() => onOpenLightbox(JKANS_GALLERY[2])}
                    className="h-full border border-[#e5e2da] p-3 bg-[#ffffff] relative overflow-hidden group cursor-pointer hover:border-[#dad6cc] transition-all duration-500 shadow-[0_2px_10px_rgba(0,0,0,0.03)]"
                  >
                    <div className="w-full h-full relative overflow-hidden bg-[#f4f2eb]">
                      <img
                        src={JKANS_GALLERY[2].imageUrl}
                        alt={JKANS_GALLERY[2].title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                        referrerPolicy="no-referrer"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#141414]/90 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4 text-[#ffffff]">
                        <span className="font-jetbrains text-[10px] text-[#f4f2eb] uppercase tracking-wider">
                          {JKANS_GALLERY[2].characterOrStar}
                        </span>
                        <h4 className="font-syne text-sm font-bold">
                          {JKANS_GALLERY[2].title}
                        </h4>
                      </div>
                    </div>
                  </div>
                </ScrollReveal>

                {/* Vijay */}
                <ScrollReveal variant="fade-up" delay={250}>
                  <div
                    id="gallery-card-vijay"
                    onClick={() => onOpenLightbox(JKANS_GALLERY[3])}
                    className="h-full border border-[#e5e2da] p-3 bg-[#ffffff] relative overflow-hidden group cursor-pointer hover:border-[#dad6cc] transition-all duration-500 shadow-[0_2px_10px_rgba(0,0,0,0.03)]"
                  >
                    <div className="w-full h-full relative overflow-hidden bg-[#f4f2eb]">
                      <img
                        src={JKANS_GALLERY[3].imageUrl}
                        alt={JKANS_GALLERY[3].title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                        referrerPolicy="no-referrer"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#141414]/90 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4 text-[#ffffff]">
                        <span className="font-jetbrains text-[10px] text-[#f4f2eb] uppercase tracking-wider">
                          {JKANS_GALLERY[3].characterOrStar}
                        </span>
                        <h4 className="font-syne text-sm font-bold">
                          {JKANS_GALLERY[3].title}
                        </h4>
                      </div>
                    </div>
                  </div>
                </ScrollReveal>
              </div>
            </div>
          </div>

          {/* Row 2: 3 Square Visuals (Dhanush, Suriya, Karthi) */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
            {/* Dhanush */}
            <ScrollReveal variant="fade-up" delay={100}>
              <div
                id="gallery-card-dhanush"
                onClick={() => onOpenLightbox(JKANS_GALLERY[4])}
                className="border border-[#e5e2da] p-3 bg-[#ffffff] h-[380px] md:h-[420px] relative overflow-hidden group cursor-pointer hover:border-[#dad6cc] transition-all duration-500 shadow-[0_2px_10px_rgba(0,0,0,0.03)]"
              >
                <div className="w-full h-full relative overflow-hidden bg-[#f4f2eb]">
                  <img
                    src={JKANS_GALLERY[4].imageUrl}
                    alt={JKANS_GALLERY[4].title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#141414]/90 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4 text-[#ffffff]">
                    <span className="font-jetbrains text-[10px] text-[#f4f2eb] uppercase tracking-wider">
                      {JKANS_GALLERY[4].characterOrStar}
                    </span>
                    <h4 className="font-syne text-base font-bold">
                      {JKANS_GALLERY[4].title}
                    </h4>
                    <p className="font-grotesk text-xs text-[#dedbd2]">{JKANS_GALLERY[4].dishName}</p>
                  </div>
                </div>
              </div>
            </ScrollReveal>

            {/* Suriya */}
            <ScrollReveal variant="fade-up" delay={150}>
              <div
                id="gallery-card-suriya"
                onClick={() => onOpenLightbox(JKANS_GALLERY[5])}
                className="border border-[#e5e2da] p-3 bg-[#ffffff] h-[380px] md:h-[420px] relative overflow-hidden group cursor-pointer hover:border-[#dad6cc] transition-all duration-500 shadow-[0_2px_10px_rgba(0,0,0,0.03)]"
              >
                <div className="w-full h-full relative overflow-hidden bg-[#f4f2eb]">
                  <img
                    src={JKANS_GALLERY[5].imageUrl}
                    alt={JKANS_GALLERY[5].title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#141414]/90 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4 text-[#ffffff]">
                    <span className="font-jetbrains text-[10px] text-[#f4f2eb] uppercase tracking-wider">
                      {JKANS_GALLERY[5].characterOrStar}
                    </span>
                    <h4 className="font-syne text-base font-bold">
                      {JKANS_GALLERY[5].title}
                    </h4>
                    <p className="font-grotesk text-xs text-[#dedbd2]">{JKANS_GALLERY[5].dishName}</p>
                  </div>
                </div>
              </div>
            </ScrollReveal>

            {/* Karthi */}
            <ScrollReveal variant="fade-up" delay={200}>
              <div
                id="gallery-card-karthi"
                onClick={() => onOpenLightbox(JKANS_GALLERY[6])}
                className="border border-[#e5e2da] p-3 bg-[#ffffff] h-[380px] md:h-[420px] relative overflow-hidden group cursor-pointer hover:border-[#dad6cc] transition-all duration-500 shadow-[0_2px_10px_rgba(0,0,0,0.03)]"
              >
                <div className="w-full h-full relative overflow-hidden bg-[#f4f2eb]">
                  <img
                    src={JKANS_GALLERY[6].imageUrl}
                    alt={JKANS_GALLERY[6].title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#141414]/90 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4 text-[#ffffff]">
                    <span className="font-jetbrains text-[10px] text-[#f4f2eb] uppercase tracking-wider">
                      {JKANS_GALLERY[6].characterOrStar}
                    </span>
                    <h4 className="font-syne text-base font-bold">
                      {JKANS_GALLERY[6].title}
                    </h4>
                    <p className="font-grotesk text-xs text-[#dedbd2]">{JKANS_GALLERY[6].dishName}</p>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </section>
      )}

      {/* Section: Strategic Breakdown */}
      {selectedTab === 'breakdown' && (
        <section className="w-full px-5 md:px-20 py-16 border-b border-[#e5e2da] bg-[#ffffff]">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {/* The Challenge */}
            <div className="border border-[#e5e2da] p-8 bg-[#fbfbf9] shadow-sm">
              <span className="font-jetbrains text-xs text-[#6b654c] block mb-3 uppercase tracking-[0.2em] font-semibold">
                01 / THE STRATEGIC CHALLENGE
              </span>
              <h3 className="font-syne text-2xl font-bold text-[#141414] mb-4">
                Transcending Generic Food Stock Photography
              </h3>
              <p className="font-grotesk text-base text-[#5c5950] leading-relaxed">
                {JKANS_CASE_STUDY.challenge}
              </p>
            </div>

            {/* The Idea */}
            <div className="border border-[#e5e2da] p-8 bg-[#fbfbf9] shadow-sm">
              <span className="font-jetbrains text-xs text-[#6b654c] block mb-3 uppercase tracking-[0.2em] font-semibold">
                02 / THE AI CREATIVE SOLUTION
              </span>
              <h3 className="font-syne text-2xl font-bold text-[#141414] mb-4">
                Cinema Icons as Culinary Champions
              </h3>
              <p className="font-grotesk text-base text-[#5c5950] leading-relaxed">
                {JKANS_CASE_STUDY.idea}
              </p>
            </div>
          </div>

          {/* Execution Pipeline Steps */}
          <div className="mt-12">
            <h4 className="font-jetbrains text-xs text-[#5c5950] uppercase tracking-[0.25em] mb-6 font-semibold">
              AI EXECUTION PIPELINE
            </h4>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {JKANS_CASE_STUDY.executionSteps.map((step, idx) => (
                <div key={idx} className="border border-[#e5e2da] p-6 bg-[#fbfbf9] shadow-sm">
                  <div className="font-jetbrains text-xs text-[#6b654c] mb-2 font-bold">
                    0{idx + 1} // {step.tool}
                  </div>
                  <h5 className="font-syne text-lg font-bold text-[#141414] mb-2">{step.title}</h5>
                  <p className="font-grotesk text-sm text-[#5c5950] leading-relaxed">{step.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Section: Prompt Architecture */}
      {selectedTab === 'prompts' && (
        <section className="w-full px-5 md:px-20 py-16 border-b border-[#e5e2da] bg-[#ffffff]">
          <div className="mb-8">
            <h3 className="font-syne text-2xl font-bold text-[#141414]">
              Structured Prompt Engineering Formulas
            </h3>
            <p className="font-grotesk text-sm text-[#5c5950]">
              Exact token syntax, camera sensor models, and lighting modifiers utilized for each composition.
            </p>
          </div>

          <div className="space-y-6">
            {JKANS_GALLERY.map((item) => (
              <div
                key={item.id}
                className="border border-[#e5e2da] p-6 bg-[#fbfbf9] flex flex-col md:flex-row gap-6 items-start shadow-sm"
              >
                <img
                  src={item.imageUrl}
                  alt={item.title}
                  className="w-24 h-24 object-cover border border-[#e5e2da] flex-shrink-0 bg-[#f4f2eb]"
                  referrerPolicy="no-referrer"
                />

                <div className="flex-grow">
                  <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                    <span className="font-jetbrains text-xs text-[#141414] font-semibold">
                      {item.characterOrStar} — {item.dishName}
                    </span>
                    <span className="font-jetbrains text-[10px] text-[#6b654c] border border-[#e5e2da] bg-[#ffffff] px-2 py-0.5 font-medium">
                      {item.promptMetadata.model}
                    </span>
                  </div>

                  <div className="bg-[#f4f2eb] p-3 border border-[#e5e2da] font-jetbrains text-xs text-[#141414] my-3 leading-relaxed">
                    {item.promptMetadata.corePrompt}
                  </div>

                  <div className="flex flex-wrap gap-2 items-center justify-between">
                    <div className="flex flex-wrap gap-1.5">
                      {item.promptMetadata.styleKeywords.map((kw, i) => (
                        <span
                          key={i}
                          className="font-jetbrains text-[10px] px-2 py-0.5 bg-[#ffffff] border border-[#e5e2da] text-[#5c5950]"
                        >
                          {kw}
                        </span>
                      ))}
                    </div>

                    <button
                      onClick={() => handleCopyPrompt(item.id, item.promptMetadata.corePrompt)}
                      className="inline-flex items-center gap-1.5 px-3 py-1 bg-[#ffffff] border border-[#dad6cc] text-[#141414] font-jetbrains text-[10px] uppercase hover:bg-[#141414] hover:text-[#ffffff] transition-colors cursor-pointer tracking-wider"
                    >
                      {copiedPromptId === item.id ? (
                        <>
                          <Check size={12} />
                          <span>COPIED</span>
                        </>
                      ) : (
                        <>
                          <Copy size={12} />
                          <span>COPY PROMPT</span>
                        </>
                      )}
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Next Project Footer Bar */}
      <section className="w-full px-5 md:px-20 py-16 flex flex-col sm:flex-row justify-between items-center gap-6 bg-[#f4f2eb]">
        <div>
          <span className="font-jetbrains text-xs text-[#5c5950] uppercase tracking-[0.2em] block font-semibold">
            Up Next: Selected Work 02
          </span>
          <h4 className="font-syne text-2xl font-bold text-[#141414]">TEMPT GAMING CAFE</h4>
          <p className="font-grotesk text-sm text-[#5c5950]">AI-Powered Sports Culture Campaign</p>
        </div>

        <button
          onClick={() => onNavigate('tempt')}
          className="inline-flex items-center gap-3 px-8 py-4 bg-[#141414] text-[#ffffff] font-jetbrains text-xs uppercase tracking-[0.15em] hover:bg-[#33302a] transition-all cursor-pointer shadow-sm"
        >
          <span>VIEW CASE STUDY</span>
          <ArrowRight size={16} />
        </button>
      </section>
    </div>
  );
};

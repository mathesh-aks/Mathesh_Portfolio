import React, { useState } from 'react';
import { GalleryItem, ViewType } from '../types';
import { JKANS_CASE_STUDY, JKANS_GALLERY, JKANS_HERO_IMAGE } from '../data/portfolioData';
import { ArrowLeft, ArrowRight, Eye, Sparkles, Layers, Sliders, Check, Copy } from 'lucide-react';
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

  return (
    <div id="casestudy-jkans-container" className="w-full pt-[80px] bg-[#080808] text-[#e5e5e5]">
      {/* Back Navigation Bar */}
      <div className="w-full border-b border-[#222222] bg-[#0c0c0c]/90 backdrop-blur-sm px-5 md:px-20 py-3.5 flex justify-between items-center text-xs font-jetbrains">
        <button
          id="jkans-back-to-work"
          onClick={() => onNavigate('work')}
          className="inline-flex items-center gap-2 text-[#888888] hover:text-[#c4a47c] transition-colors cursor-pointer tracking-wider"
        >
          <ArrowLeft size={14} />
          <span>ALL SELECTED WORKS</span>
        </button>

        <div className="flex items-center gap-4 text-[#888888]">
          <span className="text-[#c4a47c] font-semibold">01 / JKANS FOODS</span>
          <span>●</span>
          <button
            id="jkans-next-project-btn"
            onClick={() => onNavigate('tempt')}
            className="hover:text-[#c4a47c] inline-flex items-center gap-1 transition-colors cursor-pointer tracking-wider"
          >
            <span>NEXT: TEMPT GAMING</span>
            <ArrowRight size={12} />
          </button>
        </div>
      </div>

      {/* Section 1: Hero Section */}
      <section
        id="jkans-hero-section"
        className="relative w-full min-h-[85vh] md:h-[90vh] flex items-end px-5 md:px-20 pb-16 border-b border-[#222222] overflow-hidden"
      >
        {/* Background Hero Image */}
        <div className="absolute inset-0 z-0">
          <img
            src={JKANS_HERO_IMAGE}
            alt="JKANS Foods AI Campaign Hero"
            className="w-full h-full object-cover object-top opacity-50 scale-105 transition-transform duration-1000"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#080808] via-[#080808]/60 to-transparent mix-blend-multiply"></div>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(8,8,8,0.85)_100%)]"></div>
        </div>

        {/* Hero Title & Metadata */}
        <div className="relative z-10 w-full grid grid-cols-4 md:grid-cols-12 gap-6">
          <div className="col-span-4 md:col-span-10 flex flex-col gap-6">
            <div className="flex flex-wrap items-center gap-3 text-[#c4a47c] font-jetbrains text-xs uppercase tracking-[0.2em]">
              <span className="px-2.5 py-1 border border-[#222222] bg-[#080808]/90 text-[#c4a47c]">
                01 / SELECTED WORK
              </span>
              <span className="text-[#666666]">●</span>
              <span className="tracking-widest text-[#e5e5e5]">AI CREATIVE MARKETING</span>
              <span className="text-[#666666]">●</span>
              <span className="text-[#c4a47c]">MADURAI, TN</span>
            </div>

            <h1
              id="jkans-hero-title"
              className="font-syne text-5xl sm:text-7xl md:text-8xl lg:text-[100px] text-[#e5e5e5] uppercase tracking-tighter font-extrabold leading-[88%]"
            >
              <span className="font-serif italic font-light text-[#c4a47c]">JKANS</span> FOODS
            </h1>

            <p className="font-grotesk text-lg md:text-xl text-[#888888] max-w-2xl">
              Character-Driven Visual Advertising at the intersection of Kollywood Culture &amp;
              Authentic Madurai Taste.
            </p>
          </div>
        </div>
      </section>

      {/* Section 2: Narrative Intro */}
      <section id="jkans-intro-section" className="w-full px-5 md:px-20 py-20 border-b border-[#222222] bg-[#080808]">
        <ScrollReveal variant="fade-up">
          <div className="grid grid-cols-4 md:grid-cols-12 gap-6 items-center">
            <div className="col-span-4 md:col-span-6">
              <span className="font-jetbrains text-xs text-[#c4a47c] uppercase tracking-[0.25em] block mb-3">
                THE CREATIVE PREMISE
              </span>
              <h2 className="font-syne text-3xl sm:text-4xl md:text-5xl font-bold text-[#e5e5e5] leading-tight">
                WHAT IF FOOD COULD FEEL <span className="font-serif italic font-light text-[#c4a47c]">CINEMATIC?</span>
              </h2>
            </div>

            <div className="col-span-4 md:col-span-6 flex flex-col justify-end gap-6">
              <p className="font-grotesk text-lg text-[#888888] leading-relaxed">
                Transforming traditional food advertising into character-driven storytelling. By
                leveraging AI creative direction, we elevated a local Madurai food brand into a
                premium, cinematic experience that resonates with cultural nostalgia and high-end
                aesthetics.
              </p>

              {/* Glowing Gold Accent Line */}
              <div className="w-full h-[1px] bg-[#c4a47c]/30 relative mt-2">
                <div className="absolute left-0 top-1/2 -translate-y-1/2 w-8 h-[2px] bg-[#c4a47c] shadow-[0_0_12px_rgba(196,164,124,1)] animate-pulse"></div>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </section>

      {/* Section 3: View Mode Tabs */}
      <section className="w-full px-5 md:px-20 py-6 border-b border-[#222222] bg-[#0c0c0c]">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <button
              onClick={() => setSelectedTab('gallery')}
              className={`px-4 py-2 font-jetbrains text-xs uppercase tracking-wider transition-all cursor-pointer border ${
                selectedTab === 'gallery'
                  ? 'border-[#c4a47c] text-[#c4a47c] bg-[#c4a47c]/10 font-semibold'
                  : 'border-[#222222] text-[#888888] hover:text-[#e5e5e5]'
              }`}
            >
              04 / Asymmetrical Gallery (7 Visuals)
            </button>
            <button
              onClick={() => setSelectedTab('breakdown')}
              className={`px-4 py-2 font-jetbrains text-xs uppercase tracking-wider transition-all cursor-pointer border ${
                selectedTab === 'breakdown'
                  ? 'border-[#c4a47c] text-[#c4a47c] bg-[#c4a47c]/10 font-semibold'
                  : 'border-[#222222] text-[#888888] hover:text-[#e5e5e5]'
              }`}
            >
              Strategy &amp; Challenge
            </button>
            <button
              onClick={() => setSelectedTab('prompts')}
              className={`px-4 py-2 font-jetbrains text-xs uppercase tracking-wider transition-all cursor-pointer border ${
                selectedTab === 'prompts'
                  ? 'border-[#c4a47c] text-[#c4a47c] bg-[#c4a47c]/10 font-semibold'
                  : 'border-[#222222] text-[#888888] hover:text-[#e5e5e5]'
              }`}
            >
              Prompt Architecture
            </button>
          </div>

          <div className="font-jetbrains text-xs text-[#666666]">
            CLICK ANY POSTER TO ZOOM &amp; INSPECT AI PROMPT METADATA
          </div>
        </div>
      </section>

      {/* Section 4: Campaign Gallery (Asymmetrical Exact Grid Layout) */}
      {selectedTab === 'gallery' && (
        <section id="jkans-gallery-section" className="w-full px-5 md:px-20 py-16 border-b border-[#222222] bg-[#080808]">
          <ScrollReveal variant="fade-up">
            <div className="mb-10 flex justify-between items-end border-b border-[#222222] pb-4">
              <div>
                <h3 className="font-jetbrains text-xs text-[#888888] uppercase tracking-[0.2em]">
                  CAMPAIGN VISUALS &amp; POSTER SUITE
                </h3>
                <p className="font-grotesk text-sm text-[#666666] mt-1">
                  7 Distinct Cinematic Food Compositions Crafted with Generative AI
                </p>
              </div>
              <span className="font-jetbrains text-xs text-[#c4a47c] border border-[#c4a47c]/40 px-2.5 py-1">
                04 / GALLERY
              </span>
            </div>
          </ScrollReveal>

          {/* Row 1: Asymmetrical Big Portrait + 3 Stacked */}
          <div className="grid grid-cols-4 md:grid-cols-12 gap-6">
            {/* Large Portrait (Rajinikanth) */}
            <div className="col-span-4 md:col-span-5">
              <ScrollReveal variant="fade-up" delay={100}>
                <div
                  id="gallery-card-rajini"
                  onClick={() => onOpenLightbox(JKANS_GALLERY[0])}
                  className="h-[550px] md:h-[780px] border border-[#222222] p-2.5 bg-[#121212] hover:bg-[#161616] transition-colors duration-500 group cursor-pointer relative"
                >
                  <div className="w-full h-full relative overflow-hidden">
                    <img
                      src={JKANS_GALLERY[0].imageUrl}
                      alt={JKANS_GALLERY[0].title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />

                    {/* Hover info badge */}
                    <div className="absolute inset-0 bg-gradient-to-t from-[#080808] via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                      <span className="font-jetbrains text-[10px] text-[#c4a47c] uppercase tracking-wider">
                        {JKANS_GALLERY[0].characterOrStar}
                      </span>
                      <h4 className="font-syne text-xl font-bold text-[#e5e5e5]">
                        {JKANS_GALLERY[0].title}
                      </h4>
                      <p className="font-grotesk text-xs text-[#888888]">{JKANS_GALLERY[0].dishName}</p>
                      <div className="mt-3 flex items-center gap-2 font-jetbrains text-[10px] text-[#c4a47c]">
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
                  className="border border-[#222222] p-2.5 bg-[#121212] h-[280px] md:h-[375px] relative overflow-hidden group cursor-pointer hover:bg-[#161616] transition-colors duration-500"
                >
                  <div className="w-full h-full relative overflow-hidden">
                    <img
                      src={JKANS_GALLERY[1].imageUrl}
                      alt={JKANS_GALLERY[1].title}
                      className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#080808] via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-5">
                      <span className="font-jetbrains text-[10px] text-[#c4a47c] uppercase tracking-wider">
                        {JKANS_GALLERY[1].characterOrStar}
                      </span>
                      <h4 className="font-syne text-lg font-bold text-[#e5e5e5]">
                        {JKANS_GALLERY[1].title}
                      </h4>
                      <p className="font-grotesk text-xs text-[#888888]">{JKANS_GALLERY[1].dishName}</p>
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
                    className="h-full border border-[#222222] p-2.5 bg-[#121212] relative overflow-hidden group cursor-pointer hover:bg-[#161616] transition-colors duration-500"
                  >
                    <div className="w-full h-full relative overflow-hidden">
                      <img
                        src={JKANS_GALLERY[2].imageUrl}
                        alt={JKANS_GALLERY[2].title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#080808] via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4">
                        <span className="font-jetbrains text-[10px] text-[#c4a47c] uppercase tracking-wider">
                          {JKANS_GALLERY[2].characterOrStar}
                        </span>
                        <h4 className="font-syne text-sm font-bold text-[#e5e5e5]">
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
                    className="h-full border border-[#222222] p-2.5 bg-[#121212] relative overflow-hidden group cursor-pointer hover:bg-[#161616] transition-colors duration-500"
                  >
                    <div className="w-full h-full relative overflow-hidden">
                      <img
                        src={JKANS_GALLERY[3].imageUrl}
                        alt={JKANS_GALLERY[3].title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#080808] via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4">
                        <span className="font-jetbrains text-[10px] text-[#c4a47c] uppercase tracking-wider">
                          {JKANS_GALLERY[3].characterOrStar}
                        </span>
                        <h4 className="font-syne text-sm font-bold text-[#e5e5e5]">
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
                className="border border-[#222222] p-2.5 bg-[#121212] h-[380px] md:h-[420px] relative overflow-hidden group cursor-pointer hover:bg-[#161616] transition-colors duration-500"
              >
                <div className="w-full h-full relative overflow-hidden">
                  <img
                    src={JKANS_GALLERY[4].imageUrl}
                    alt={JKANS_GALLERY[4].title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#080808] via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4">
                    <span className="font-jetbrains text-[10px] text-[#c4a47c] uppercase tracking-wider">
                      {JKANS_GALLERY[4].characterOrStar}
                    </span>
                    <h4 className="font-syne text-base font-bold text-[#e5e5e5]">
                      {JKANS_GALLERY[4].title}
                    </h4>
                    <p className="font-grotesk text-xs text-[#888888]">{JKANS_GALLERY[4].dishName}</p>
                  </div>
                </div>
              </div>
            </ScrollReveal>

            {/* Suriya */}
            <ScrollReveal variant="fade-up" delay={150}>
              <div
                id="gallery-card-suriya"
                onClick={() => onOpenLightbox(JKANS_GALLERY[5])}
                className="border border-[#222222] p-2.5 bg-[#121212] h-[380px] md:h-[420px] relative overflow-hidden group cursor-pointer hover:bg-[#161616] transition-colors duration-500"
              >
                <div className="w-full h-full relative overflow-hidden">
                  <img
                    src={JKANS_GALLERY[5].imageUrl}
                    alt={JKANS_GALLERY[5].title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#080808] via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4">
                    <span className="font-jetbrains text-[10px] text-[#c4a47c] uppercase tracking-wider">
                      {JKANS_GALLERY[5].characterOrStar}
                    </span>
                    <h4 className="font-syne text-base font-bold text-[#e5e5e5]">
                      {JKANS_GALLERY[5].title}
                    </h4>
                    <p className="font-grotesk text-xs text-[#888888]">{JKANS_GALLERY[5].dishName}</p>
                  </div>
                </div>
              </div>
            </ScrollReveal>

            {/* Karthi */}
            <ScrollReveal variant="fade-up" delay={200}>
              <div
                id="gallery-card-karthi"
                onClick={() => onOpenLightbox(JKANS_GALLERY[6])}
                className="border border-[#222222] p-2.5 bg-[#121212] h-[380px] md:h-[420px] relative overflow-hidden group cursor-pointer hover:bg-[#161616] transition-colors duration-500"
              >
                <div className="w-full h-full relative overflow-hidden">
                  <img
                    src={JKANS_GALLERY[6].imageUrl}
                    alt={JKANS_GALLERY[6].title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#080808] via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4">
                    <span className="font-jetbrains text-[10px] text-[#c4a47c] uppercase tracking-wider">
                      {JKANS_GALLERY[6].characterOrStar}
                    </span>
                    <h4 className="font-syne text-base font-bold text-[#e5e5e5]">
                      {JKANS_GALLERY[6].title}
                    </h4>
                    <p className="font-grotesk text-xs text-[#888888]">{JKANS_GALLERY[6].dishName}</p>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </section>
      )}

      {/* Section: Strategic Breakdown */}
      {selectedTab === 'breakdown' && (
        <section className="w-full px-5 md:px-20 py-16 border-b border-[#222222] bg-[#080808]">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {/* The Challenge */}
            <div className="border border-[#222222] p-8 bg-[#121212]">
              <span className="font-jetbrains text-xs text-[#c4a47c] block mb-3 uppercase tracking-[0.2em]">
                01 / THE STRATEGIC CHALLENGE
              </span>
              <h3 className="font-syne text-2xl font-bold text-[#e5e5e5] mb-4">
                Breaking Away from Traditional Food Stock Art
              </h3>
              <p className="font-grotesk text-base text-[#888888] leading-relaxed">
                {JKANS_CASE_STUDY.challenge}
              </p>
            </div>

            {/* The Idea */}
            <div className="border border-[#222222] p-8 bg-[#121212]">
              <span className="font-jetbrains text-xs text-[#c4a47c] block mb-3 uppercase tracking-[0.2em]">
                02 / THE AI CREATIVE SOLUTION
              </span>
              <h3 className="font-syne text-2xl font-bold text-[#e5e5e5] mb-4">
                Cinema Icons as Culinary Champions
              </h3>
              <p className="font-grotesk text-base text-[#888888] leading-relaxed">
                {JKANS_CASE_STUDY.idea}
              </p>
            </div>
          </div>

          {/* Execution Pipeline Steps */}
          <div className="mt-12">
            <h4 className="font-jetbrains text-xs text-[#888888] uppercase tracking-[0.25em] mb-6">
              AI EXECUTION PIPELINE
            </h4>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {JKANS_CASE_STUDY.executionSteps.map((step, idx) => (
                <div key={idx} className="border border-[#222222] p-6 bg-[#121212]">
                  <div className="font-jetbrains text-xs text-[#c4a47c] mb-2">
                    0{idx + 1} // {step.tool}
                  </div>
                  <h5 className="font-syne text-lg font-bold text-[#e5e5e5] mb-2">{step.title}</h5>
                  <p className="font-grotesk text-sm text-[#888888]">{step.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Section: Prompt Architecture */}
      {selectedTab === 'prompts' && (
        <section className="w-full px-5 md:px-20 py-16 border-b border-[#222222] bg-[#080808]">
          <div className="mb-8">
            <h3 className="font-syne text-2xl font-bold text-[#e5e5e5]">
              Detailed Prompt Engineering Formulas
            </h3>
            <p className="font-grotesk text-sm text-[#888888]">
              Explore the exact syntax, model tokens, and lighting modifiers used for each piece.
            </p>
          </div>

          <div className="space-y-6">
            {JKANS_GALLERY.map((item) => (
              <div
                key={item.id}
                className="border border-[#222222] p-6 bg-[#121212] flex flex-col md:flex-row gap-6 items-start"
              >
                <img
                  src={item.imageUrl}
                  alt={item.title}
                  className="w-24 h-24 object-cover border border-[#222222] flex-shrink-0"
                />

                <div className="flex-grow">
                  <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                    <span className="font-jetbrains text-xs text-[#c4a47c]">
                      {item.characterOrStar} — {item.dishName}
                    </span>
                    <span className="font-jetbrains text-[10px] text-[#c4a47c] border border-[#c4a47c]/30 px-2 py-0.5">
                      {item.promptMetadata.model}
                    </span>
                  </div>

                  <div className="bg-[#080808] p-3 border border-[#222222] font-jetbrains text-xs text-[#c4c7c7] my-3 leading-relaxed">
                    {item.promptMetadata.corePrompt}
                  </div>

                  <div className="flex flex-wrap gap-2 items-center justify-between">
                    <div className="flex flex-wrap gap-1.5">
                      {item.promptMetadata.styleKeywords.map((kw, i) => (
                        <span
                          key={i}
                          className="font-jetbrains text-[10px] px-2 py-0.5 bg-[#080808] border border-[#222222] text-[#888888]"
                        >
                          {kw}
                        </span>
                      ))}
                    </div>

                    <button
                      onClick={() => handleCopyPrompt(item.id, item.promptMetadata.corePrompt)}
                      className="inline-flex items-center gap-1.5 px-3 py-1 bg-transparent border border-[#c4a47c] text-[#c4a47c] font-jetbrains text-[10px] uppercase hover:bg-[#c4a47c] hover:text-[#080808] transition-colors cursor-pointer tracking-wider"
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
      <section className="w-full px-5 md:px-20 py-16 flex flex-col sm:flex-row justify-between items-center gap-6 bg-[#0c0c0c]">
        <div>
          <span className="font-jetbrains text-xs text-[#666666] uppercase tracking-[0.2em] block">
            Up Next: Selected Work 02
          </span>
          <h4 className="font-syne text-2xl font-bold text-[#e5e5e5]">TEMPT GAMING CAFE</h4>
          <p className="font-grotesk text-sm text-[#888888]">AI-Powered Sports Culture Campaign</p>
        </div>

        <button
          onClick={() => onNavigate('tempt')}
          className="inline-flex items-center gap-3 px-8 py-4 bg-transparent border border-[#c4a47c] text-[#c4a47c] font-jetbrains text-xs uppercase tracking-[0.15em] hover:bg-[#c4a47c] hover:text-[#080808] transition-all cursor-pointer shadow-[0_0_15px_rgba(196,164,124,0.2)]"
        >
          <span>VIEW CASE STUDY</span>
          <ArrowRight size={16} />
        </button>
      </section>
    </div>
  );
};

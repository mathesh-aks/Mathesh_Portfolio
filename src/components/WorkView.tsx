import React, { useState } from 'react';
import { ViewType } from '../types';
import { JKANS_HERO_IMAGE, TEMPT_HERO_IMAGE } from '../data/portfolioData';
import { ArrowRight } from 'lucide-react';
import { ScrollReveal } from './ScrollReveal';

interface WorkViewProps {
  onNavigate: (view: ViewType) => void;
}

export const WorkView: React.FC<WorkViewProps> = ({ onNavigate }) => {
  const [filter, setFilter] = useState<'all' | 'campaign' | 'sports'>('all');

  return (
    <div id="work-view-container" className="w-full pt-[75px] pb-20 px-5 md:px-20 bg-[#fbfbf9] text-[#141414]">
      <div className="max-w-[1920px] mx-auto">
        {/* Header */}
        <ScrollReveal variant="fade-up">
          <div className="mb-10 md:mb-12 border-b border-[#e5e2da] pb-6 md:pb-8 flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div>
              <span className="font-jetbrains text-xs text-[#6b654c] uppercase tracking-[0.25em] block mb-2.5 font-semibold">
                SELECTED PORTFOLIO // 2025 — 2026
              </span>
              <h1 className="font-syne text-3xl sm:text-5xl md:text-6xl font-extrabold uppercase tracking-tight text-[#141414]">
                COMMERCIAL &amp; <span className="font-serif italic font-normal text-[#6b654c]">CULTURAL</span> WORKS
              </h1>
            </div>

            {/* Filter Pills */}
            <div className="flex items-center gap-2">
              <button
                onClick={() => setFilter('all')}
                className={`px-3.5 py-1.5 font-jetbrains text-xs uppercase tracking-wider transition-all cursor-pointer border ${
                  filter === 'all'
                    ? 'border-[#141414] text-[#ffffff] bg-[#141414] font-semibold'
                    : 'border-[#e5e2da] text-[#5c5950] bg-[#ffffff] hover:text-[#141414]'
                }`}
              >
                All Projects
              </button>
              <button
                onClick={() => setFilter('campaign')}
                className={`px-3.5 py-1.5 font-jetbrains text-xs uppercase tracking-wider transition-all cursor-pointer border ${
                  filter === 'campaign'
                    ? 'border-[#141414] text-[#ffffff] bg-[#141414] font-semibold'
                    : 'border-[#e5e2da] text-[#5c5950] bg-[#ffffff] hover:text-[#141414]'
                }`}
              >
                Food &amp; Cinema
              </button>
              <button
                onClick={() => setFilter('sports')}
                className={`px-3.5 py-1.5 font-jetbrains text-xs uppercase tracking-wider transition-all cursor-pointer border ${
                  filter === 'sports'
                    ? 'border-[#141414] text-[#ffffff] bg-[#141414] font-semibold'
                    : 'border-[#e5e2da] text-[#5c5950] bg-[#ffffff] hover:text-[#141414]'
                }`}
              >
                Sports &amp; Gaming
              </button>
            </div>
          </div>
        </ScrollReveal>

        {/* Projects Grid */}
        <div className="space-y-10 md:space-y-12">
          {/* Project 01: JKANS Foods */}
          {(filter === 'all' || filter === 'campaign') && (
            <ScrollReveal variant="fade-up" delay={100}>
              <div
                id="project-card-jkans"
                onClick={() => {
                  onNavigate('jkans');
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className="border border-[#e5e2da] bg-[#ffffff] hover:border-[#dad6cc] transition-all duration-300 group cursor-pointer overflow-hidden p-6 md:p-8 relative shadow-[0_2px_12px_rgba(0,0,0,0.03)] hover:shadow-[0_10px_35px_rgba(0,0,0,0.06)]"
              >
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                  <div className="lg:col-span-7 aspect-[16/9] relative overflow-hidden border border-[#e5e2da] bg-[#f4f2eb]">
                    <img
                      src={JKANS_HERO_IMAGE}
                      alt="JKANS Foods AI Campaign"
                      className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-700"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute top-3 left-3 font-jetbrains text-[10px] bg-[#ffffff]/95 backdrop-blur-sm px-2.5 py-1 border border-[#e5e2da] text-[#141414] font-semibold">
                      01 // COMMERCIAL CAMPAIGN
                    </div>
                  </div>

                  <div className="lg:col-span-5 flex flex-col justify-between h-full">
                    <div>
                      <div className="flex items-center gap-2 font-jetbrains text-xs text-[#6b654c] uppercase mb-2.5 tracking-wider font-semibold">
                        <span>AI Creative Direction</span>
                        <span className="text-[#dad6cc]">●</span>
                        <span className="text-[#827e74]">2025</span>
                      </div>

                      <h2 className="font-syne text-2xl sm:text-3xl font-bold uppercase tracking-tight text-[#141414] group-hover:text-[#6b654c] transition-colors mb-3">
                        JKANS FOODS
                      </h2>

                      <p className="font-grotesk text-sm sm:text-base text-[#5c5950] leading-relaxed mb-6">
                        Character-driven visual advertising at the intersection of Kollywood cinema archetypes and authentic Madurai culinary culture. 7 distinct poster compositions with full prompt engineering metadata.
                      </p>
                    </div>

                    <div className="pt-4 border-t border-[#e5e2da] flex items-center justify-between font-jetbrains text-xs">
                      <span className="text-[#827e74]">Food &amp; Cinema</span>
                      <span className="text-[#141414] inline-flex items-center gap-2 group-hover:translate-x-1 transition-transform font-bold">
                        <span>VIEW FULL CASE STUDY</span>
                        <ArrowRight size={14} className="text-[#6b654c]" />
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          )}

          {/* Project 02: Tempt Gaming Cafe */}
          {(filter === 'all' || filter === 'sports') && (
            <ScrollReveal variant="fade-up" delay={200}>
              <div
                id="project-card-tempt"
                onClick={() => {
                  onNavigate('tempt');
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className="border border-[#e5e2da] bg-[#ffffff] hover:border-[#dad6cc] transition-all duration-300 group cursor-pointer overflow-hidden p-6 md:p-8 relative shadow-[0_2px_12px_rgba(0,0,0,0.03)] hover:shadow-[0_10px_35px_rgba(0,0,0,0.06)]"
              >
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                  <div className="lg:col-span-7 aspect-[16/9] relative overflow-hidden border border-[#e5e2da] bg-[#f4f2eb]">
                    <img
                      src={TEMPT_HERO_IMAGE}
                      alt="Tempt Gaming Cafe Campaign"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute top-3 left-3 font-jetbrains text-[10px] bg-[#ffffff]/95 backdrop-blur-sm px-2.5 py-1 border border-[#e5e2da] text-[#141414] font-semibold">
                      02 // SPORTS CULTURE CAMPAIGN
                    </div>
                  </div>

                  <div className="lg:col-span-5 flex flex-col justify-between h-full">
                    <div>
                      <div className="flex items-center gap-2 font-jetbrains text-xs text-[#6b654c] uppercase mb-2.5 tracking-wider font-semibold">
                        <span>Sports Culture Campaign</span>
                        <span className="text-[#dad6cc]">●</span>
                        <span className="text-[#827e74]">2025</span>
                      </div>

                      <h2 className="font-syne text-2xl sm:text-3xl font-bold uppercase tracking-tight text-[#141414] group-hover:text-[#6b654c] transition-colors mb-3">
                        TEMPT GAMING CAFE
                      </h2>

                      <p className="font-grotesk text-sm sm:text-base text-[#5c5950] leading-relaxed mb-6">
                        An AI-assisted visual campaign exploring football culture, gaming intensity, and stadium atmosphere. Volumetric lighting and condensation physics crafted with FLUX.1 Pro and Midjourney.
                      </p>
                    </div>

                    <div className="pt-4 border-t border-[#e5e2da] flex items-center justify-between font-jetbrains text-xs">
                      <span className="text-[#827e74]">Sports &amp; Gaming</span>
                      <span className="text-[#141414] inline-flex items-center gap-2 group-hover:translate-x-1 transition-transform font-bold">
                        <span>VIEW FULL CASE STUDY</span>
                        <ArrowRight size={14} className="text-[#6b654c]" />
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          )}
        </div>
      </div>
    </div>
  );
};

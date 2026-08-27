import React, { useState } from 'react';
import { ViewType } from '../types';
import { JKANS_HERO_IMAGE, TEMPT_HERO_IMAGE } from '../data/portfolioData';
import { ArrowRight, Sparkles, Filter } from 'lucide-react';
import { ScrollReveal } from './ScrollReveal';

interface WorkViewProps {
  onNavigate: (view: ViewType) => void;
}

export const WorkView: React.FC<WorkViewProps> = ({ onNavigate }) => {
  const [filter, setFilter] = useState<'all' | 'campaign' | 'sports'>('all');

  return (
    <div id="work-view-container" className="w-full pt-[90px] pb-24 px-5 md:px-20 bg-[#080808] text-[#e5e5e5]">
      <div className="max-w-[1920px] mx-auto">
        {/* Header */}
        <ScrollReveal variant="fade-up">
          <div className="mb-14 border-b border-[#222222] pb-8 flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div>
              <span className="font-jetbrains text-xs text-[#c4a47c] uppercase tracking-[0.25em] block mb-3">
                SELECTED PORTFOLIO // 2025 — 2026
              </span>
              <h1 className="font-syne text-4xl sm:text-5xl md:text-6xl font-extrabold uppercase tracking-tight text-[#e5e5e5]">
                COMMERCIAL &amp; <span className="font-serif italic font-light text-[#c4a47c]">CULTURAL</span> WORKS
              </h1>
            </div>

            {/* Filter Pills */}
            <div className="flex items-center gap-2">
              <button
                onClick={() => setFilter('all')}
                className={`px-4 py-1.5 font-jetbrains text-xs uppercase tracking-wider transition-all cursor-pointer border ${
                  filter === 'all'
                    ? 'border-[#c4a47c] text-[#c4a47c] bg-[#c4a47c]/10'
                    : 'border-[#222222] text-[#888888] hover:text-[#e5e5e5]'
                }`}
              >
                All Projects
              </button>
              <button
                onClick={() => setFilter('campaign')}
                className={`px-4 py-1.5 font-jetbrains text-xs uppercase tracking-wider transition-all cursor-pointer border ${
                  filter === 'campaign'
                    ? 'border-[#c4a47c] text-[#c4a47c] bg-[#c4a47c]/10'
                    : 'border-[#222222] text-[#888888] hover:text-[#e5e5e5]'
                }`}
              >
                Food &amp; Cinema
              </button>
              <button
                onClick={() => setFilter('sports')}
                className={`px-4 py-1.5 font-jetbrains text-xs uppercase tracking-wider transition-all cursor-pointer border ${
                  filter === 'sports'
                    ? 'border-[#c4a47c] text-[#c4a47c] bg-[#c4a47c]/10'
                    : 'border-[#222222] text-[#888888] hover:text-[#e5e5e5]'
                }`}
              >
                Sports &amp; Gaming
              </button>
            </div>
          </div>
        </ScrollReveal>

        {/* Projects Grid */}
        <div className="space-y-16">
          {/* Project 01: JKANS Foods */}
          {(filter === 'all' || filter === 'campaign') && (
            <ScrollReveal variant="fade-up" delay={100}>
              <div
                id="project-card-jkans"
                onClick={() => onNavigate('jkans')}
                className="border border-[#222222] bg-[#121212] hover:bg-[#161616] hover:border-[#c4a47c]/50 transition-all duration-500 group cursor-pointer overflow-hidden p-6 md:p-8 relative"
              >
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                  <div className="lg:col-span-7 aspect-[16/9] relative overflow-hidden border border-[#222222]">
                    <img
                      src={JKANS_HERO_IMAGE}
                      alt="JKANS Foods AI Campaign"
                      className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute top-4 left-4 font-jetbrains text-[10px] bg-[#080808]/90 px-3 py-1 border border-[#222222] text-[#c4a47c]">
                      01 // COMMERCIAL CAMPAIGN
                    </div>
                  </div>

                  <div className="lg:col-span-5 flex flex-col justify-between h-full">
                    <div>
                      <div className="flex items-center gap-2 font-jetbrains text-xs text-[#c4a47c] uppercase mb-3 tracking-wider">
                        <span>AI Creative Direction</span>
                        <span className="text-[#666666]">●</span>
                        <span className="text-[#888888]">2025</span>
                      </div>

                      <h2 className="font-syne text-3xl sm:text-4xl font-bold text-[#e5e5e5] group-hover:text-[#c4a47c] transition-colors mb-4">
                        JKANS FOODS
                      </h2>

                      <p className="font-grotesk text-base text-[#888888] leading-relaxed mb-6">
                        What if Kollywood cinema giants were the culinary patrons of authentic local
                        dishes? Turning regional food branding into a blockbuster cinematic experience
                        featuring 7 hero visuals.
                      </p>

                      <div className="flex flex-wrap gap-2 mb-8">
                        <span className="font-jetbrains text-[10px] px-2.5 py-1 bg-[#080808] border border-[#222222] text-[#888888]">
                          Midjourney v6.1
                        </span>
                        <span className="font-jetbrains text-[10px] px-2.5 py-1 bg-[#080808] border border-[#222222] text-[#888888]">
                          LoRA Fine-tuning
                        </span>
                        <span className="font-jetbrains text-[10px] px-2.5 py-1 bg-[#080808] border border-[#222222] text-[#888888]">
                          Character Consistency
                        </span>
                      </div>
                    </div>

                    <div className="inline-flex items-center gap-2 font-jetbrains text-xs text-[#c4a47c] uppercase tracking-wider group-hover:translate-x-2 transition-transform">
                      <span>EXPLORE CASE STUDY</span>
                      <ArrowRight size={14} />
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
                onClick={() => onNavigate('tempt')}
                className="border border-[#222222] bg-[#121212] hover:bg-[#161616] hover:border-[#c4a47c]/50 transition-all duration-500 group cursor-pointer overflow-hidden p-6 md:p-8 relative"
              >
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                  <div className="lg:col-span-7 aspect-[16/9] relative overflow-hidden border border-[#222222]">
                    <img
                      src={TEMPT_HERO_IMAGE}
                      alt="Tempt Gaming Cafe Campaign"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute top-4 left-4 font-jetbrains text-[10px] bg-[#080808]/90 px-3 py-1 border border-[#222222] text-[#c4a47c]">
                      02 // SPORTS &amp; ESPORTS
                    </div>
                  </div>

                  <div className="lg:col-span-5 flex flex-col justify-between h-full">
                    <div>
                      <div className="flex items-center gap-2 font-jetbrains text-xs text-[#c4a47c] uppercase mb-3 tracking-wider">
                        <span>Sports Culture &amp; Branding</span>
                        <span className="text-[#666666]">●</span>
                        <span className="text-[#888888]">2025</span>
                      </div>

                      <h2 className="font-syne text-3xl sm:text-4xl font-bold text-[#e5e5e5] group-hover:text-[#c4a47c] transition-colors mb-4">
                        TEMPT GAMING CAFE
                      </h2>

                      <p className="font-grotesk text-base text-[#888888] leading-relaxed mb-6">
                        One drink. A whole stadium of energy. An AI-assisted visual campaign exploring the
                        intersection of football culture, gaming lounges, and signature glowing amber
                        stadium aesthetics.
                      </p>

                      <div className="flex flex-wrap gap-2 mb-8">
                        <span className="font-jetbrains text-[10px] px-2.5 py-1 bg-[#080808] border border-[#222222] text-[#888888]">
                          FLUX.1 Pro
                        </span>
                        <span className="font-jetbrains text-[10px] px-2.5 py-1 bg-[#080808] border border-[#222222] text-[#888888]">
                          Atmospheric Volumetrics
                        </span>
                        <span className="font-jetbrains text-[10px] px-2.5 py-1 bg-[#080808] border border-[#222222] text-[#888888]">
                          Color Grading
                        </span>
                      </div>
                    </div>

                    <div className="inline-flex items-center gap-2 font-jetbrains text-xs text-[#c4a47c] uppercase tracking-wider group-hover:translate-x-2 transition-transform">
                      <span>EXPLORE CASE STUDY</span>
                      <ArrowRight size={14} />
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

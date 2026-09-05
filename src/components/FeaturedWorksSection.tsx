import React from 'react';
import { ViewType } from '../types';
import { JKANS_HERO_IMAGE, TEMPT_HERO_IMAGE } from '../data/portfolioData';
import { ArrowRight } from 'lucide-react';
import { ScrollReveal } from './ScrollReveal';

interface FeaturedWorksSectionProps {
  onNavigate: (view: ViewType) => void;
}

export const FeaturedWorksSection: React.FC<FeaturedWorksSectionProps> = ({ onNavigate }) => {
  return (
    <section
      id="featured-works-section"
      className="w-full px-5 md:px-20 py-16 md:py-24 border-b border-[#e5e2da] bg-[#fbfbf9] relative z-10"
    >
      <div className="max-w-[1920px] mx-auto">
        {/* Section Header */}
        <ScrollReveal variant="fade-up">
          <div className="mb-12 md:mb-16 flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-[#e5e2da] pb-6 md:pb-8">
            <div>
              <span className="font-jetbrains text-xs text-[#6b654c] uppercase tracking-[0.25em] block mb-2.5 font-semibold">
                01 &amp; 02 / SELECTED WORK
              </span>
              <h2 className="font-syne text-3xl sm:text-5xl md:text-6xl font-extrabold uppercase tracking-tight text-[#141414]">
                FEATURED <span className="font-serif italic font-normal text-[#6b654c]">CASE STUDIES</span>
              </h2>
            </div>

            <button
              onClick={() => {
                onNavigate('work');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="inline-flex items-center gap-2 font-jetbrains text-xs uppercase tracking-[0.15em] text-[#5c5950] hover:text-[#141414] transition-colors cursor-pointer font-semibold"
            >
              <span>VIEW ALL WORKS</span>
              <ArrowRight size={14} />
            </button>
          </div>
        </ScrollReveal>

        {/* 2 Big Featured Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-10">
          {/* Card 1: JKANS Foods */}
          <ScrollReveal variant="fade-up" delay={100}>
            <div
              id="featured-card-jkans"
              onClick={() => {
                onNavigate('jkans');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="group border border-[#e5e2da] bg-[#ffffff] hover:border-[#dad6cc] p-6 md:p-8 transition-all duration-300 cursor-pointer flex flex-col justify-between h-full shadow-[0_2px_12px_rgba(0,0,0,0.03)] hover:shadow-[0_10px_35px_rgba(0,0,0,0.06)]"
            >
              <div>
                <div className="w-full aspect-[16/10] relative overflow-hidden border border-[#e5e2da] mb-6 bg-[#f4f2eb]">
                  <img
                    src={JKANS_HERO_IMAGE}
                    alt="JKANS Foods AI Campaign"
                    className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-700"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute top-3 left-3 font-jetbrains text-[10px] bg-[#ffffff]/95 backdrop-blur-sm px-2.5 py-1 border border-[#e5e2da] text-[#141414] font-semibold">
                    01 // FOOD &amp; CINEMA
                  </div>
                </div>

                <div className="flex items-center gap-2 font-jetbrains text-xs text-[#6b654c] uppercase tracking-wider mb-2 font-semibold">
                  <span>AI Creative Direction</span>
                  <span>●</span>
                  <span className="text-[#827e74]">Madurai, TN</span>
                </div>

                <h3 className="font-syne text-2xl sm:text-3xl font-bold uppercase tracking-tight text-[#141414] group-hover:text-[#6b654c] transition-colors mb-3">
                  JKANS FOODS
                </h3>

                <p className="font-grotesk text-sm sm:text-base text-[#5c5950] leading-relaxed mb-6">
                  Character-driven visual advertising combining iconic Kollywood cinema archetypes with authentic Madurai culinary heritage through structured prompt architecture.
                </p>
              </div>

              <div className="pt-4 border-t border-[#e5e2da] flex items-center justify-between font-jetbrains text-xs">
                <span className="text-[#827e74]">7 Visuals · Strategy &amp; Prompt Blueprint</span>
                <span className="text-[#141414] inline-flex items-center gap-1 group-hover:translate-x-1 transition-transform font-bold">
                  <span>EXPLORE CASE STUDY</span>
                  <ArrowRight size={14} className="text-[#6b654c]" />
                </span>
              </div>
            </div>
          </ScrollReveal>

          {/* Card 2: Tempt Gaming Cafe */}
          <ScrollReveal variant="fade-up" delay={200}>
            <div
              id="featured-card-tempt"
              onClick={() => {
                onNavigate('tempt');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="group border border-[#e5e2da] bg-[#ffffff] hover:border-[#dad6cc] p-6 md:p-8 transition-all duration-300 cursor-pointer flex flex-col justify-between h-full shadow-[0_2px_12px_rgba(0,0,0,0.03)] hover:shadow-[0_10px_35px_rgba(0,0,0,0.06)]"
            >
              <div>
                <div className="w-full aspect-[16/10] relative overflow-hidden border border-[#e5e2da] mb-6 bg-[#f4f2eb]">
                  <img
                    src={TEMPT_HERO_IMAGE}
                    alt="Tempt Gaming Cafe Campaign"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute top-3 left-3 font-jetbrains text-[10px] bg-[#ffffff]/95 backdrop-blur-sm px-2.5 py-1 border border-[#e5e2da] text-[#141414] font-semibold">
                    02 // SPORTS CULTURE
                  </div>
                </div>

                <div className="flex items-center gap-2 font-jetbrains text-xs text-[#6b654c] uppercase tracking-wider mb-2 font-semibold">
                  <span>Sports Culture Campaign</span>
                  <span>●</span>
                  <span className="text-[#827e74]">2025</span>
                </div>

                <h3 className="font-syne text-2xl sm:text-3xl font-bold uppercase tracking-tight text-[#141414] group-hover:text-[#6b654c] transition-colors mb-3">
                  TEMPT GAMING CAFE
                </h3>

                <p className="font-grotesk text-sm sm:text-base text-[#5c5950] leading-relaxed mb-6">
                  Matchday atmosphere campaign establishing an energy drink as an essential ritual within competitive esports and community football fandom.
                </p>
              </div>

              <div className="pt-4 border-t border-[#e5e2da] flex items-center justify-between font-jetbrains text-xs">
                <span className="text-[#827e74]">Arena Visuals · Volumetric Prompt Architecture</span>
                <span className="text-[#141414] inline-flex items-center gap-1 group-hover:translate-x-1 transition-transform font-bold">
                  <span>EXPLORE CASE STUDY</span>
                  <ArrowRight size={14} className="text-[#6b654c]" />
                </span>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};

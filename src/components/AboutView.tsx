import React from 'react';
import { ScrollReveal } from './ScrollReveal';
import { PORTRAIT_IMAGE } from '../data/portfolioData';
import { ExperienceSection } from './ExperienceSection';
import { CreativeStackSection } from './CreativeStackSection';
import { ViewType } from '../types';
import { ArrowRight, MapPin } from 'lucide-react';

interface AboutViewProps {
  onNavigate: (view: ViewType) => void;
}

export const AboutView: React.FC<AboutViewProps> = ({ onNavigate }) => {
  return (
    <div id="about-view-container" className="w-full pt-[75px] bg-[#fbfbf9] text-[#141414]">
      {/* Top Personal Brand & Executive Profile Showcase */}
      <section className="w-full px-5 md:px-20 py-12 md:py-20 border-b border-[#e5e2da] bg-[#fbfbf9] relative">
        <div className="max-w-[1920px] mx-auto">
          {/* Header */}
          <ScrollReveal variant="fade-up">
            <div className="mb-10 md:mb-14 border-b border-[#e5e2da] pb-6 md:pb-8 flex flex-col md:flex-row md:items-end justify-between gap-6">
              <div>
                <span className="font-jetbrains text-xs text-[#6b654c] uppercase tracking-[0.25em] block mb-2.5 font-semibold">
                  03 / FOUNDER PROFILE &amp; IDENTITY
                </span>
                <h1 className="font-syne text-3xl sm:text-5xl md:text-6xl font-extrabold uppercase tracking-tight text-[#141414]">
                  THE MIND BEHIND <span className="font-serif italic font-normal text-[#6b654c]">THE CRAFT.</span>
                </h1>
              </div>

              <div className="hidden sm:flex items-center gap-2 font-jetbrains text-xs text-[#6b654c] border border-[#e5e2da] px-3.5 py-2 bg-[#ffffff] shadow-sm">
                <MapPin size={13} />
                <span>MADURAI · CHENNAI, INDIA</span>
              </div>
            </div>
          </ScrollReveal>

          {/* Primary Layout: Story & Main Brand Badge */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
            {/* Left Column: Narrative & Differentiator (7 Cols) */}
            <div className="lg:col-span-7 space-y-6">
              <ScrollReveal variant="fade-up" delay={100}>
                <div className="space-y-4 font-grotesk text-base sm:text-lg text-[#5c5950] leading-relaxed">
                  <p className="text-[#141414] text-lg sm:text-xl font-medium leading-snug">
                    I am an <span className="text-[#6b654c] font-semibold">AI Creative Designer</span> and <span className="text-[#6b654c] font-semibold">Prompt Engineer</span> based in Madurai and Chennai, specializing in character consistency, prompt architecture, and commercial brand storytelling.
                  </p>

                  <p>
                    My trajectory began in <strong className="text-[#141414] font-semibold">Business Development</strong> and <strong className="text-[#141414] font-semibold">Brand Marketing</strong>. This commercial foundation fundamentally changes how I direct generative models: I do not view AI as a novelty or automated replacement, but as an advanced creative apparatus that must serve rigorous business strategy, brand distinction, and measurable commercial recall.
                  </p>

                  <p>
                    From spearheading character-driven cinematic campaigns like <span className="text-[#141414] font-medium">JKANS Foods</span> to staging stadium-scale visual energy for <span className="text-[#141414] font-medium">Tempt Gaming Cafe</span>, my work unites authentic Tamil regional culture with bleeding-edge diffusion models, controlled LoRA weight distributions, and disciplined editorial typography.
                  </p>
                </div>
              </ScrollReveal>

              {/* Career Bridge Pillars */}
              <ScrollReveal variant="fade-up" delay={200}>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4 border-t border-[#e5e2da]">
                  <div className="p-5 bg-[#ffffff] border border-[#e5e2da] shadow-[0_1px_4px_rgba(0,0,0,0.02)]">
                    <span className="font-jetbrains text-[10px] text-[#6b654c] uppercase tracking-wider block mb-1 font-semibold">
                      01 // FOUNDATION
                    </span>
                    <h4 className="font-syne text-sm font-bold text-[#141414] mb-1">Business &amp; Market Strategy</h4>
                    <p className="font-grotesk text-xs text-[#5c5950]">
                      Commercial rigor, audience targeting, and real-world brand economics.
                    </p>
                  </div>

                  <div className="p-5 bg-[#ffffff] border border-[#e5e2da] shadow-[0_1px_4px_rgba(0,0,0,0.02)]">
                    <span className="font-jetbrains text-[10px] text-[#6b654c] uppercase tracking-wider block mb-1 font-semibold">
                      02 // TECHNICAL
                    </span>
                    <h4 className="font-syne text-sm font-bold text-[#141414] mb-1">Prompt Architecture</h4>
                    <p className="font-grotesk text-xs text-[#5c5950]">
                      Lighting physics, sensor geometry, LoRA tuning, and character consistency pipelines.
                    </p>
                  </div>

                  <div className="p-5 bg-[#ffffff] border border-[#e5e2da] shadow-[0_1px_4px_rgba(0,0,0,0.02)]">
                    <span className="font-jetbrains text-[10px] text-[#6b654c] uppercase tracking-wider block mb-1 font-semibold">
                      03 // ARTISTRY
                    </span>
                    <h4 className="font-syne text-sm font-bold text-[#141414] mb-1">Creative Direction</h4>
                    <p className="font-grotesk text-xs text-[#5c5950]">
                      Editorial typography, chromatic harmony, and human emotional resonance.
                    </p>
                  </div>
                </div>
              </ScrollReveal>

              {/* CTA Action */}
              <ScrollReveal variant="fade-up" delay={250}>
                <div className="pt-2 flex flex-wrap items-center gap-4">
                  <button
                    onClick={() => onNavigate('contact')}
                    className="inline-flex items-center gap-2 px-6 py-3 bg-[#141414] text-[#ffffff] font-jetbrains text-xs font-bold uppercase tracking-wider hover:bg-[#33302a] transition-colors cursor-pointer shadow-[0_2px_8px_rgba(20,20,20,0.08)]"
                  >
                    <span>Initiate Project Brief</span>
                    <ArrowRight size={14} />
                  </button>

                  <button
                    onClick={() => onNavigate('work')}
                    className="inline-flex items-center gap-2 px-6 py-3 bg-[#ffffff] border border-[#dad6cc] text-[#141414] font-jetbrains text-xs uppercase tracking-wider hover:border-[#141414] hover:bg-[#f4f2eb] transition-colors cursor-pointer"
                  >
                    <span>Explore Selected Works</span>
                  </button>
                </div>
              </ScrollReveal>
            </div>

            {/* Right Column: Founder Portrait (5 Cols) */}
            <div className="lg:col-span-5 flex items-center justify-center">
              <ScrollReveal variant="fade-up" delay={150}>
                <div className="p-4 sm:p-5 bg-[#ffffff] border border-[#dad6cc] shadow-[0_8px_30px_rgba(0,0,0,0.05)] relative group flex flex-col items-center">
                  {/* Technical Registration Marks */}
                  <div className="absolute top-2 left-2 w-3 h-3 border-t-2 border-l-2 border-[#6b654c]"></div>
                  <div className="absolute top-2 right-2 w-3 h-3 border-t-2 border-r-2 border-[#6b654c]"></div>
                  <div className="absolute bottom-2 left-2 w-3 h-3 border-b-2 border-l-2 border-[#6b654c]"></div>
                  <div className="absolute bottom-2 right-2 w-3 h-3 border-b-2 border-r-2 border-[#6b654c]"></div>

                  <img
                    src={PORTRAIT_IMAGE}
                    alt="Mathesh A K S - AI Creative Designer"
                    className="w-full max-w-[340px] sm:max-w-[380px] h-[380px] sm:h-[440px] object-cover object-top filter grayscale contrast-[1.06] hover:grayscale-0 transition-all duration-700 shadow-sm"
                    referrerPolicy="no-referrer"
                  />
                  
                  <div className="w-full mt-4 pt-3 border-t border-[#e5e2da] flex items-center justify-between text-center font-jetbrains text-[10px] text-[#5c5950]">
                    <span className="font-semibold text-[#141414]">MATHESH A K S</span>
                    <span className="flex items-center gap-1 text-[#6b654c]">
                      <MapPin size={10} />
                      <span>MADURAI · CHENNAI</span>
                    </span>
                    <span>FOUNDER // CREATIVE AI</span>
                  </div>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>

      {/* Career Evolution Timeline */}
      <ExperienceSection />

      {/* Creative & AI Technical Stack Matrix */}
      <CreativeStackSection />
    </div>
  );
};

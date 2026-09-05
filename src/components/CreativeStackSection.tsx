import React from 'react';
import { CREATIVE_STACK } from '../data/portfolioData';
import { Compass, Cpu, Palette, TrendingUp } from 'lucide-react';
import { ScrollReveal } from './ScrollReveal';

export const CreativeStackSection: React.FC = () => {
  const getIcon = (title: string) => {
    if (title.includes('Creative Direction')) return <Compass size={18} className="text-[#6b654c]" />;
    if (title.includes('AI Creative')) return <Cpu size={18} className="text-[#6b654c]" />;
    if (title.includes('Visual')) return <Palette size={18} className="text-[#6b654c]" />;
    return <TrendingUp size={18} className="text-[#6b654c]" />;
  };

  return (
    <section
      id="creative-stack-section"
      className="w-full px-5 md:px-20 py-16 md:py-24 border-b border-[#e5e2da] bg-[#fbfbf9]"
    >
      <div className="max-w-[1920px] mx-auto">
        {/* Section Header & Philosophy */}
        <ScrollReveal variant="fade-up">
          <div className="mb-12 md:mb-16 flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-[#e5e2da] pb-6 md:pb-8">
            <div>
              <span className="font-jetbrains text-xs text-[#6b654c] uppercase tracking-[0.25em] block mb-2.5 font-semibold">
                05 / CAPABILITIES &amp; SYSTEMS
              </span>
              <h2 className="font-syne text-3xl sm:text-5xl md:text-6xl font-extrabold text-[#141414] uppercase tracking-tight">
                MORE THAN A <span className="font-serif italic font-normal text-[#6b654c]">TOOLKIT.</span>
              </h2>
            </div>

            <div className="max-w-md border-l-2 border-[#6b654c] pl-5 py-1">
              <span className="font-jetbrains text-[10px] text-[#6b654c] uppercase tracking-[0.25em] block mb-1 font-semibold">
                EXECUTIVE CREATIVE THESIS
              </span>
              <p className="font-serif text-lg sm:text-xl text-[#141414] font-normal italic leading-snug">
                "AI is the medium. Direction is the difference."
              </p>
            </div>
          </div>
        </ScrollReveal>

        {/* Matrix of 4 Capability Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {CREATIVE_STACK.map((cat, idx) => (
            <ScrollReveal
              key={idx}
              variant="fade-up"
              delay={idx * 100}
              className="h-full"
            >
              <div
                id={`stack-card-${idx}`}
                className="p-6 md:p-7 bg-[#ffffff] border border-[#e5e2da] relative transition-all duration-300 hover:border-[#dad6cc] hover:shadow-[0_8px_25px_rgba(0,0,0,0.05)] flex flex-col justify-between h-full shadow-[0_1px_4px_rgba(0,0,0,0.02)]"
              >
                <div>
                  <div className="flex items-center justify-between mb-5 pb-3.5 border-b border-[#e5e2da]">
                    <div className="p-2 bg-[#f4f2eb] border border-[#e5e2da]">
                      {getIcon(cat.title)}
                    </div>
                    <span className="font-jetbrains text-xs text-[#827e74] font-semibold">0{idx + 1}</span>
                  </div>

                  <h3 className="font-syne text-lg font-bold mb-2.5 text-[#141414]">
                    {cat.title}
                  </h3>

                  <p className="font-grotesk text-xs text-[#5c5950] mb-5 leading-relaxed">
                    {cat.description}
                  </p>
                </div>

                {/* Skills Tags */}
                <div className="flex flex-wrap gap-1.5 pt-3.5 border-t border-[#e5e2da]">
                  {cat.items.map((skill, sIdx) => (
                    <span
                      key={sIdx}
                      className="font-jetbrains text-[10px] px-2 py-0.5 border border-[#e5e2da] text-[#5c5950] bg-[#f4f2eb]"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

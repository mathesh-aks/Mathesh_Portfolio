import React from 'react';
import { CREATIVE_STACK } from '../data/portfolioData';
import { Sparkles, Compass, Cpu, Palette, TrendingUp } from 'lucide-react';
import { ScrollReveal } from './ScrollReveal';

export const CreativeStackSection: React.FC = () => {
  const getIcon = (title: string) => {
    if (title.includes('Creative Direction')) return <Compass size={20} className="text-[#c4a47c]" />;
    if (title.includes('AI Creative')) return <Cpu size={20} className="text-[#c4a47c]" />;
    if (title.includes('Visual')) return <Palette size={20} className="text-[#c4a47c]" />;
    return <TrendingUp size={20} className="text-[#c4a47c]" />;
  };

  return (
    <section
      id="creative-stack-section"
      className="w-full px-5 md:px-20 py-24 border-b border-[#222222] bg-[#080808]"
    >
      <div className="max-w-[1920px] mx-auto">
        {/* Section Header & Philosophy */}
        <ScrollReveal variant="fade-up">
          <div className="mb-16 flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div>
              <span className="font-jetbrains text-xs text-[#c4a47c] uppercase tracking-[0.25em] block mb-3">
                05 / CREATIVE STACK
              </span>
              <h2 className="font-syne text-4xl sm:text-5xl md:text-6xl font-extrabold text-[#e5e5e5] uppercase tracking-tight">
                MORE THAN A <span className="font-serif italic font-light text-[#c4a47c]">TOOLKIT.</span>
              </h2>
            </div>

            <div className="max-w-md border-l-2 border-[#c4a47c] pl-5 py-1">
              <span className="font-jetbrains text-xs text-[#c4a47c] uppercase tracking-[0.25em] block mb-1">
                PHILOSOPHY
              </span>
              <p className="font-serif text-xl text-[#e5e5e5] font-light italic leading-snug">
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
                className={`p-8 bg-[#121212] border relative transition-all duration-300 hover:bg-[#161616] flex flex-col justify-between h-full ${
                  cat.highlightColor
                    ? 'border-[#c4a47c]/50 shadow-[0_0_25px_rgba(196,164,124,0.08)]'
                    : 'border-[#222222]'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-6 pb-4 border-b border-[#222222]">
                    <div className="p-2.5 bg-[#080808] border border-[#222222]">
                      {getIcon(cat.title)}
                    </div>
                    <span className="font-jetbrains text-xs text-[#666666]">0{idx + 1}</span>
                  </div>

                  <h3
                    className={`font-syne text-xl font-bold mb-3 ${
                      cat.highlightColor ? 'text-[#c4a47c]' : 'text-[#e5e5e5]'
                    }`}
                  >
                    {cat.title}
                  </h3>

                  <p className="font-grotesk text-xs text-[#888888] mb-6 leading-relaxed">
                    {cat.description}
                  </p>
                </div>

                {/* Skills Tags */}
                <div className="flex flex-wrap gap-2 pt-4 border-t border-[#222222]">
                  {cat.items.map((skill, sIdx) => (
                    <span
                      key={sIdx}
                      className={`font-jetbrains text-[11px] px-2.5 py-1 border transition-colors ${
                        cat.highlightColor
                          ? 'border-[#c4a47c]/40 text-[#c4a47c] bg-[#c4a47c]/5'
                          : 'border-[#222222] text-[#888888] bg-[#080808]'
                      }`}
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

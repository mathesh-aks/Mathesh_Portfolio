import React from 'react';
import { EXPERIENCES } from '../data/portfolioData';
import { ArrowRight, Briefcase, Calendar, CheckCircle2 } from 'lucide-react';
import { ScrollReveal } from './ScrollReveal';

export const ExperienceSection: React.FC = () => {
  const evolutionSteps = ['BUSINESS', 'MARKETING', 'CREATIVE', 'AI', 'NOW'];

  return (
    <section
      id="experience-section"
      className="w-full px-5 md:px-20 py-24 border-b border-[#222222] bg-[#080808] relative"
    >
      <div className="max-w-[1920px] mx-auto grid grid-cols-4 md:grid-cols-12 gap-6">
        {/* Left AI Signature Line (Desktop) */}
        <div className="hidden md:block col-span-1 h-full relative">
          <div className="ai-signature absolute right-8 h-full"></div>
        </div>

        {/* Main Content */}
        <div className="col-span-4 md:col-span-11">
          {/* Header */}
          <ScrollReveal variant="fade-up">
            <div className="mb-14">
              <span className="font-jetbrains text-xs text-[#c4a47c] uppercase tracking-[0.25em] block mb-3">
                04 / EXPERIENCE
              </span>
              <h2 className="font-syne text-4xl sm:text-5xl md:text-6xl font-extrabold text-[#e5e5e5] uppercase tracking-tight">
                THE WORK BEHIND <span className="font-serif italic font-light text-[#c4a47c]">THE WORK.</span>
              </h2>
            </div>
          </ScrollReveal>

          {/* Career Evolution Flow Strip */}
          <ScrollReveal variant="fade-up" delay={100}>
            <div className="mb-14 p-6 border border-[#222222] bg-[#121212] overflow-x-auto">
              <span className="font-jetbrains text-[10px] text-[#666666] uppercase tracking-[0.3em] block mb-4">
                CAREER EVOLUTION TRAJECTORY
              </span>
              <div className="flex items-center gap-3 sm:gap-6 min-w-max">
                {evolutionSteps.map((step, idx) => (
                  <React.Fragment key={step}>
                    <div
                      className={`flex items-center gap-2 font-jetbrains text-xs sm:text-sm uppercase tracking-wider px-3 py-1.5 border ${
                        step === 'NOW' || step === 'AI'
                          ? 'border-[#c4a47c] text-[#c4a47c] bg-[#c4a47c]/10 font-bold shadow-[0_0_12px_rgba(196,164,124,0.2)]'
                          : 'border-[#222222] text-[#888888] bg-[#080808]'
                      }`}
                    >
                      <span>{step}</span>
                    </div>
                    {idx < evolutionSteps.length - 1 && (
                      <span className="text-[#666666] font-jetbrains text-xs">→</span>
                    )}
                  </React.Fragment>
                ))}
              </div>
            </div>
          </ScrollReveal>

          {/* Experience Grid Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {EXPERIENCES.map((exp, idx) => (
              <ScrollReveal
                key={idx}
                variant="fade-up"
                delay={idx * 150}
                className="h-full"
              >
                <div
                  id={`experience-card-${idx}`}
                  className={`border p-8 bg-[#121212] relative transition-all duration-300 hover:bg-[#161616] flex flex-col justify-between h-full ${
                    exp.isCurrent ? 'border-[#c4a47c]/60 shadow-[0_0_20px_rgba(196,164,124,0.08)]' : 'border-[#222222]'
                  }`}
                >
                  {exp.isCurrent && (
                    <div className="absolute top-0 right-0 bg-[#c4a47c] text-[#080808] font-jetbrains text-[10px] font-bold px-3 py-1 uppercase tracking-wider">
                      CURRENT ROLE
                    </div>
                  )}

                  <div>
                    <div className="flex items-center gap-2 text-[#666666] font-jetbrains text-xs mb-4">
                      <Calendar size={13} className="text-[#c4a47c]" />
                      <span>{exp.period}</span>
                    </div>

                    <h3 className="font-syne text-2xl font-bold text-[#e5e5e5] mb-1">{exp.role}</h3>

                    <div className="font-jetbrains text-sm text-[#c4a47c] mb-4">{exp.company}</div>

                    <p className="font-grotesk text-sm text-[#888888] mb-6 leading-relaxed">
                      {exp.description}
                    </p>
                  </div>

                  {exp.deliverables && (
                    <div className="pt-4 border-t border-[#222222]">
                      <span className="font-jetbrains text-[10px] text-[#666666] uppercase block mb-2">
                        Key Deliverables
                      </span>
                      <div className="flex flex-wrap gap-1.5">
                        {exp.deliverables.map((item, dIdx) => (
                          <span
                            key={dIdx}
                            className="font-jetbrains text-[10px] px-2 py-0.5 bg-[#080808] border border-[#222222] text-[#888888]"
                          >
                            {item}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

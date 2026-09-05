import React from 'react';
import { EXPERIENCES } from '../data/portfolioData';
import { Calendar } from 'lucide-react';
import { ScrollReveal } from './ScrollReveal';

export const ExperienceSection: React.FC = () => {
  const evolutionSteps = [
    'BUSINESS DEVELOPMENT',
    'BRAND MARKETING',
    'PROMPT ARCHITECTURE',
    'AI CREATIVE DIRECTION',
  ];

  return (
    <section
      id="experience-section"
      className="w-full px-5 md:px-20 py-16 md:py-24 border-b border-[#e5e2da] bg-[#fbfbf9] relative"
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
            <div className="mb-10 md:mb-12">
              <span className="font-jetbrains text-xs text-[#6b654c] uppercase tracking-[0.25em] block mb-2.5 font-semibold">
                04 / CAREER MILESTONES
              </span>
              <h2 className="font-syne text-3xl sm:text-5xl md:text-6xl font-extrabold text-[#141414] uppercase tracking-tight">
                THE FOUNDATION BEHIND <span className="font-serif italic font-normal text-[#6b654c]">THE DIRECTION.</span>
              </h2>
            </div>
          </ScrollReveal>

          {/* Career Evolution Flow Strip */}
          <ScrollReveal variant="fade-up" delay={100}>
            <div
              className="mb-10 md:mb-12 p-5 md:p-6 border border-[#e5e2da] bg-[#ffffff] shadow-[0_1px_4px_rgba(0,0,0,0.02)] overflow-x-auto"
              style={{ touchAction: 'pan-x pan-y', WebkitOverflowScrolling: 'touch' }}
            >
              <span className="font-jetbrains text-[10px] text-[#5c5950] uppercase tracking-[0.25em] block mb-3.5 font-semibold">
                CROSS-DISCIPLINARY TRAJECTORY
              </span>
              <div className="flex items-center gap-2 sm:gap-4 min-w-max">
                {evolutionSteps.map((step, idx) => (
                  <React.Fragment key={step}>
                    <div
                      className={`flex items-center gap-2 font-jetbrains text-xs uppercase tracking-wider px-4 py-2 border ${
                        step === 'AI CREATIVE DIRECTION'
                          ? 'border-[#6b654c] text-[#ffffff] bg-[#141414] font-bold shadow-sm'
                          : 'border-[#e5e2da] text-[#5c5950] bg-[#f4f2eb]'
                      }`}
                    >
                      <span>{step}</span>
                    </div>
                    {idx < evolutionSteps.length - 1 && (
                      <span className="text-[#827e74] font-jetbrains text-xs">→</span>
                    )}
                  </React.Fragment>
                ))}
              </div>
            </div>
          </ScrollReveal>

          {/* Experience Grid Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            {EXPERIENCES.map((exp, idx) => (
              <ScrollReveal
                key={idx}
                variant="fade-up"
                delay={idx * 150}
                className="h-full"
              >
                <div
                  id={`experience-card-${idx}`}
                  className={`border p-6 md:p-8 bg-[#ffffff] relative transition-all duration-300 hover:border-[#dad6cc] hover:shadow-[0_8px_25px_rgba(0,0,0,0.05)] flex flex-col justify-between h-full shadow-[0_1px_4px_rgba(0,0,0,0.02)] ${
                    exp.isCurrent ? 'border-[#6b654c]' : 'border-[#e5e2da]'
                  }`}
                >
                  {exp.isCurrent && (
                    <div className="absolute top-0 right-0 bg-[#141414] text-[#ffffff] font-jetbrains text-[10px] font-bold px-3 py-1 uppercase tracking-wider">
                      CURRENT FOCUS
                    </div>
                  )}

                  <div>
                    <div className="flex items-center gap-2 text-[#5c5950] font-jetbrains text-xs mb-3">
                      <Calendar size={13} className="text-[#6b654c]" />
                      <span>{exp.period}</span>
                    </div>

                    <h3 className="font-syne text-xl sm:text-2xl font-bold text-[#141414] mb-1">{exp.role}</h3>

                    <div className="font-jetbrains text-xs text-[#6b654c] font-semibold mb-4">{exp.company}</div>

                    <p className="font-grotesk text-sm text-[#5c5950] mb-6 leading-relaxed">
                      {exp.description}
                    </p>
                  </div>

                  {exp.deliverables && (
                    <div className="pt-4 border-t border-[#e5e2da]">
                      <span className="font-jetbrains text-[10px] text-[#827e74] uppercase tracking-wider block mb-2">
                        Core Competencies
                      </span>
                      <div className="flex flex-wrap gap-1.5">
                        {exp.deliverables.map((item, dIdx) => (
                          <span
                            key={dIdx}
                            className="font-jetbrains text-[10px] px-2 py-1 bg-[#f4f2eb] border border-[#e5e2da] text-[#5c5950]"
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

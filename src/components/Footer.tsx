import React from 'react';
import { ViewType } from '../types';
import { ArrowUp, Sparkles, Mail, MessageSquare } from 'lucide-react';

interface FooterProps {
  onNavigate: (view: ViewType) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer id="main-footer" className="w-full bg-[#0c0c0c] border-t border-[#222222] pt-16 pb-10 px-5 md:px-20 text-[#e5e5e5]">
      <div className="max-w-[1920px] mx-auto">
        {/* Massive Display Title */}
        <div className="border-b border-[#222222] pb-10 mb-10 flex flex-col lg:flex-row lg:items-end justify-between gap-6">
          <div>
            <span className="font-jetbrains text-xs text-[#c4a47c] uppercase tracking-[0.25em] block mb-3">
              AI CREATIVE DESIGNER · PROMPT ENGINEER
            </span>
            <h2 className="font-syne text-4xl sm:text-6xl md:text-7xl lg:text-[80px] font-extrabold uppercase tracking-tight text-[#e5e5e5] leading-[90%]">
              MATHESH <span className="font-serif italic font-normal text-[#c4a47c]">A K S</span>
            </h2>
          </div>

          <button
            id="footer-scroll-top-btn"
            onClick={scrollToTop}
            className="self-start lg:self-auto px-5 py-3 border border-[#222222] bg-[#121212] text-[#888888] hover:text-[#c4a47c] hover:border-[#c4a47c] transition-all cursor-pointer flex items-center gap-2 font-jetbrains text-xs uppercase tracking-wider"
          >
            <span>BACK TO TOP</span>
            <ArrowUp size={14} />
          </button>
        </div>

        {/* Links & Details Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-10 mb-12 font-jetbrains text-xs">
          {/* Col 1: Navigation */}
          <div>
            <span className="text-[#888888] uppercase block mb-3.5 font-semibold tracking-wider">NAVIGATION</span>
            <ul className="space-y-2">
              <li>
                <button
                  onClick={() => {
                    onNavigate('home');
                    scrollToTop();
                  }}
                  className="text-[#888888] hover:text-[#c4a47c] transition-colors cursor-pointer"
                >
                  HOME
                </button>
              </li>
              <li>
                <button
                  onClick={() => {
                    onNavigate('work');
                    scrollToTop();
                  }}
                  className="text-[#888888] hover:text-[#c4a47c] transition-colors cursor-pointer"
                >
                  SELECTED WORKS
                </button>
              </li>
              <li>
                <button
                  onClick={() => {
                    onNavigate('about');
                    scrollToTop();
                  }}
                  className="text-[#888888] hover:text-[#c4a47c] transition-colors cursor-pointer"
                >
                  ABOUT &amp; EXPERIENCE
                </button>
              </li>
              <li>
                <button
                  onClick={() => {
                    onNavigate('contact');
                    scrollToTop();
                  }}
                  className="text-[#888888] hover:text-[#c4a47c] transition-colors cursor-pointer"
                >
                  CONTACT
                </button>
              </li>
            </ul>
          </div>

          {/* Col 2: Featured Case Studies */}
          <div>
            <span className="text-[#888888] uppercase block mb-3.5 font-semibold tracking-wider">CASE STUDIES</span>
            <ul className="space-y-2">
              <li>
                <button
                  onClick={() => {
                    onNavigate('jkans');
                    scrollToTop();
                  }}
                  className="text-[#c4a47c] hover:text-white transition-colors cursor-pointer text-left"
                >
                  01 / JKANS FOODS
                </button>
              </li>
              <li>
                <button
                  onClick={() => {
                    onNavigate('tempt');
                    scrollToTop();
                  }}
                  className="text-[#c4a47c] hover:text-white transition-colors cursor-pointer text-left"
                >
                  02 / TEMPT GAMING CAFE
                </button>
              </li>
            </ul>
          </div>

          {/* Col 3: Direct Connect */}
          <div>
            <span className="text-[#888888] uppercase block mb-3.5 font-semibold tracking-wider">DIRECT CONTACT</span>
            <div className="space-y-1.5 text-[#888888]">
              <a
                href="tel:+919789611569"
                className="hover:text-[#c4a47c] transition-colors block text-left font-jetbrains text-xs text-[#e5e5e5]"
              >
                +91 97896 11569
              </a>
              <a
                href="mailto:mathesh.aks@gmail.com"
                className="hover:text-[#c4a47c] transition-colors block text-left break-all text-xs"
              >
                mathesh.aks@gmail.com
              </a>
              <p className="text-[#888888] text-[11px] leading-relaxed pt-1">
                Madurai &amp; Chennai, Tamil Nadu, India
              </p>
              <span className="inline-block mt-1 px-2 py-0.5 border border-[#c4a47c]/40 text-[#c4a47c] text-[10px]">
                AVAILABLE FOR COLLABORATIONS
              </span>
            </div>
          </div>

          {/* Col 4: Socials */}
          <div>
            <span className="text-[#888888] uppercase block mb-3.5 font-semibold tracking-wider">CONNECT</span>
            <div className="flex flex-col space-y-2 text-[#888888]">
              <a
                href="https://www.linkedin.com/in/mathesh-a-k-s-1333241b9"
                target="_blank"
                rel="noreferrer"
                className="hover:text-[#c4a47c] transition-colors inline-flex items-center gap-1.5"
              >
                <span>LinkedIn Profile</span>
                <span className="text-[#c4a47c]">↗</span>
              </a>
              <a
                href="https://wa.me/919789611569"
                target="_blank"
                rel="noreferrer"
                className="hover:text-[#c4a47c] transition-colors inline-flex items-center gap-1.5"
              >
                <span>WhatsApp Direct</span>
                <span className="text-[#c4a47c]">↗</span>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Copyright Strip */}
        <div className="pt-6 border-t border-[#222222] flex flex-col sm:flex-row items-center justify-between gap-4 font-jetbrains text-[11px] text-[#888888]">
          <div>
            © 2025–2026 MATHESH A K S. Designed with intentional restraint.
          </div>

          <div className="flex items-center gap-2 text-[#c4a47c]">
            <span className="w-1.5 h-1.5 rounded-full bg-[#c4a47c]"></span>
            <span>M·AKS // PORTFOLIO</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

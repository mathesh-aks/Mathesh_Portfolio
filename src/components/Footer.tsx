import React from 'react';
import { ViewType } from '../types';
import { ArrowUp, Mail, Phone, MessageSquare } from 'lucide-react';

interface FooterProps {
  onNavigate: (view: ViewType) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const recipientEmail = 'matheshaks007@gmail.com';
  const phone = '+919360293974';
  const displayPhone = '+91 93602 93974';

  const handleWhatsAppClick = () => {
    const text = encodeURIComponent(
      `Hi Mathesh, I'm reaching out through your portfolio regarding an AI Creative / Brand Strategy project!`
    );
    window.open(`https://wa.me/919360293974?text=${text}`, '_blank');
  };

  return (
    <footer id="main-footer" className="w-full bg-[#ffffff] border-t border-[#e5e2da] pt-14 pb-10 px-5 md:px-20 text-[#141414]">
      <div className="max-w-[1920px] mx-auto">
        {/* Brand Wordmark & Back To Top */}
        <div className="border-b border-[#e5e2da] pb-8 mb-10 flex flex-col lg:flex-row lg:items-end justify-between gap-6">
          <div className="space-y-2">
            <h2 className="font-syne text-2xl sm:text-3xl font-extrabold uppercase tracking-tight text-[#141414]">
              MATHESH A K S
            </h2>
            <div className="flex flex-wrap items-center gap-2 font-jetbrains text-[10px] sm:text-[11px] text-[#6b654c] uppercase tracking-[0.18em]">
              <span>AI CREATIVE DESIGNER</span>
              <span className="text-[#dad6cc]">●</span>
              <span>PROMPT ENGINEER</span>
              <span className="text-[#dad6cc]">●</span>
              <span>VISUAL STORYTELLER</span>
            </div>
            <p className="font-grotesk text-xs sm:text-sm text-[#5c5950] max-w-xl pt-1">
              Directing creative AI, prompt architecture, and character consistency for commercial brands and cultural narratives.
            </p>
          </div>

          <button
            id="footer-scroll-top-btn"
            onClick={scrollToTop}
            className="self-start lg:self-auto px-5 py-3 border border-[#dad6cc] bg-[#f4f2eb] text-[#141414] hover:bg-[#141414] hover:text-[#ffffff] hover:border-[#141414] transition-all cursor-pointer flex items-center gap-2 font-jetbrains text-xs uppercase tracking-wider font-semibold"
          >
            <span>BACK TO TOP</span>
            <ArrowUp size={14} />
          </button>
        </div>

        {/* Links & Details Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-10 mb-12 font-jetbrains text-xs">
          {/* Col 1: Navigation */}
          <div>
            <span className="text-[#827e74] uppercase block mb-3.5 font-semibold tracking-wider">NAVIGATION</span>
            <ul className="space-y-2">
              <li>
                <button
                  onClick={() => {
                    onNavigate('home');
                    scrollToTop();
                  }}
                  className="text-[#5c5950] hover:text-[#141414] transition-colors cursor-pointer"
                >
                  HOME // OVERVIEW
                </button>
              </li>
              <li>
                <button
                  onClick={() => {
                    onNavigate('work');
                    scrollToTop();
                  }}
                  className="text-[#5c5950] hover:text-[#141414] transition-colors cursor-pointer"
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
                  className="text-[#5c5950] hover:text-[#141414] transition-colors cursor-pointer"
                >
                  FOUNDER PROFILE &amp; STACK
                </button>
              </li>
              <li>
                <button
                  onClick={() => {
                    onNavigate('contact');
                    scrollToTop();
                  }}
                  className="text-[#5c5950] hover:text-[#141414] transition-colors cursor-pointer"
                >
                  INITIATE BRIEF
                </button>
              </li>
            </ul>
          </div>

          {/* Col 2: Featured Case Studies */}
          <div>
            <span className="text-[#827e74] uppercase block mb-3.5 font-semibold tracking-wider">CASE STUDIES</span>
            <ul className="space-y-2">
              <li>
                <button
                  onClick={() => {
                    onNavigate('jkans');
                    scrollToTop();
                  }}
                  className="text-[#141414] hover:text-[#6b654c] transition-colors cursor-pointer text-left font-medium"
                >
                  01 / JKANS FOODS (FOOD &amp; CINEMA)
                </button>
              </li>
              <li>
                <button
                  onClick={() => {
                    onNavigate('tempt');
                    scrollToTop();
                  }}
                  className="text-[#141414] hover:text-[#6b654c] transition-colors cursor-pointer text-left font-medium"
                >
                  02 / TEMPT GAMING CAFE (SPORTS)
                </button>
              </li>
            </ul>
          </div>

          {/* Col 3: Direct Inquiries */}
          <div>
            <span className="text-[#827e74] uppercase block mb-3.5 font-semibold tracking-wider">COMMUNICATION</span>
            <ul className="space-y-2.5">
              <li>
                <a
                  href={`mailto:${recipientEmail}`}
                  className="inline-flex items-center gap-2 text-[#5c5950] hover:text-[#141414] transition-colors"
                >
                  <Mail size={13} className="text-[#6b654c]" />
                  <span>{recipientEmail}</span>
                </a>
              </li>
              <li>
                <a
                  href={`tel:${phone}`}
                  className="inline-flex items-center gap-2 text-[#5c5950] hover:text-[#141414] transition-colors"
                >
                  <Phone size={13} className="text-[#6b654c]" />
                  <span>{displayPhone}</span>
                </a>
              </li>
              <li>
                <button
                  onClick={handleWhatsAppClick}
                  className="inline-flex items-center gap-2 text-[#5c5950] hover:text-[#141414] transition-colors cursor-pointer"
                >
                  <MessageSquare size={13} className="text-[#6b654c]" />
                  <span>WhatsApp Direct Chat</span>
                </button>
              </li>
            </ul>
          </div>

          {/* Col 4: Location & Core Position */}
          <div>
            <span className="text-[#827e74] uppercase block mb-3.5 font-semibold tracking-wider">HEADQUARTERS</span>
            <p className="text-[#5c5950] leading-relaxed mb-3">
              Madurai · Chennai<br />
              Tamil Nadu, India
            </p>
            <div className="p-3 bg-[#f4f2eb] border border-[#e5e2da] font-jetbrains text-[10px] text-[#6b654c]">
              <span className="font-bold block text-[#141414]">CREATIVE THESIS</span>
              "AI is the medium. Direction is the difference."
            </div>
          </div>
        </div>

        {/* Bottom Bar with Copyright */}
        <div className="border-t border-[#e5e2da] pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 font-jetbrains text-[11px] text-[#827e74]">
          <div>
            <span>© 2026 MATHESH A K S. ALL RIGHTS RESERVED.</span>
          </div>

          <div className="flex items-center gap-4 text-[#5c5950]">
            <span>EXECUTIVE PORTFOLIO</span>
            <span>●</span>
            <span>TAMIL NADU → GLOBAL</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

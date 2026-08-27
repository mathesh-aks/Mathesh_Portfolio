import React, { useState } from 'react';
import { ViewType } from '../types';
import { Menu, X, ArrowUpRight, Sparkles } from 'lucide-react';

interface NavbarProps {
  currentView: ViewType;
  onNavigate: (view: ViewType) => void;
  onOpenContactModal?: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ currentView, onNavigate }) => {
  const [mobileOpen, setMobileOpen] = useState(false);

  const navItems: { label: string; view: ViewType }[] = [
    { label: 'WORK', view: 'work' },
    { label: 'ABOUT', view: 'about' },
    { label: 'CONTACT', view: 'contact' },
  ];

  const handleNavClick = (view: ViewType) => {
    onNavigate(view);
    setMobileOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <nav
      id="main-navigation"
      className="fixed top-0 w-full z-50 flex justify-between items-center px-5 md:px-20 py-4 bg-[#080808]/90 backdrop-blur-md border-b border-[#222222] transition-all duration-300"
    >
      {/* Brand / Logo */}
      <button
        id="nav-brand-btn"
        onClick={() => handleNavClick('home')}
        className="group flex items-center gap-3 text-left cursor-pointer"
      >
        <div className="w-1 h-7 gold-gradient transition-all duration-300 group-hover:h-8"></div>
        <div className="flex flex-col">
          <span className="font-serif text-2xl font-normal tracking-tight italic text-[#e5e5e5] group-hover:text-[#c4a47c] transition-colors">
            MATHESH A K S
          </span>
          <span className="font-jetbrains text-[9px] uppercase tracking-[0.3em] text-[#666666] -mt-1">
            AI CREATIVE &amp; PROMPT
          </span>
        </div>
      </button>

      {/* Desktop Navigation */}
      <div className="hidden md:flex gap-8 items-center">
        {navItems.map((item) => {
          const isActive =
            currentView === item.view ||
            (item.view === 'work' && (currentView === 'jkans' || currentView === 'tempt'));

          return (
            <button
              id={`nav-link-${item.view}`}
              key={item.view}
              onClick={() => handleNavClick(item.view)}
              className={`font-jetbrains text-[10px] uppercase tracking-[0.2em] transition-all duration-300 py-1 relative cursor-pointer ${
                isActive
                  ? 'text-[#c4a47c] font-semibold border-b border-[#c4a47c]'
                  : 'text-[#666666] hover:text-[#e5e5e5]'
              }`}
            >
              {item.label}
            </button>
          );
        })}
      </div>

      {/* Status Badge */}
      <div className="hidden lg:flex items-center gap-3 font-jetbrains text-xs text-[#666666] pl-6 border-l border-[#222222]">
        <span className="w-1.5 h-1.5 rounded-full bg-[#c4a47c] animate-pulse inline-block"></span>
        <span className="text-[#888888] text-[11px] tracking-wider">AI × Creative Technology</span>
      </div>

      {/* Mobile Menu Button */}
      <button
        id="mobile-menu-toggle"
        onClick={() => setMobileOpen(!mobileOpen)}
        className="md:hidden text-[#e5e5e5] p-2 hover:text-[#c4a47c] focus:outline-none"
        aria-label="Toggle menu"
      >
        {mobileOpen ? <X size={22} /> : <Menu size={22} />}
      </button>

      {/* Mobile Drawer */}
      {mobileOpen && (
        <div
          id="mobile-nav-drawer"
          className="md:hidden fixed top-[65px] left-0 w-full bg-[#080808] border-b border-[#222222] py-6 px-6 flex flex-col gap-5 shadow-2xl z-50 animate-in fade-in slide-in-from-top-4 duration-200"
        >
          <div className="flex items-center gap-2 font-jetbrains text-xs text-[#c4a47c] pb-3 border-b border-[#222222]">
            <Sparkles size={14} />
            <span>AI × Creative Technology</span>
          </div>

          {navItems.map((item) => (
            <button
              id={`mobile-link-${item.view}`}
              key={item.view}
              onClick={() => handleNavClick(item.view)}
              className={`font-serif text-xl uppercase tracking-wider text-left py-2 flex items-center justify-between cursor-pointer ${
                currentView === item.view ? 'text-[#c4a47c] font-semibold italic' : 'text-[#e5e5e5]'
              }`}
            >
              <span>{item.label}</span>
              <ArrowUpRight size={16} className="text-[#666666]" />
            </button>
          ))}

          <div className="pt-4 border-t border-[#222222] flex flex-col gap-2">
            <span className="font-jetbrains text-[10px] text-[#666666] uppercase tracking-widest">Quick Connect</span>
            <a
              href="mailto:mathesh.aks@gmail.com"
              className="font-jetbrains text-xs text-[#c4a47c] hover:underline"
            >
              mathesh.aks@gmail.com
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

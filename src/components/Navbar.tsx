import React, { useState, useEffect } from 'react';
import { ViewType } from '../types';
import { Menu, X, ArrowUpRight, Sparkles } from 'lucide-react';

interface NavbarProps {
  currentView: ViewType;
  onNavigate: (view: ViewType) => void;
  onOpenContactModal?: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ currentView, onNavigate }) => {
  const [mobileOpen, setMobileOpen] = useState(false);

  // Manage body scroll locking when mobile menu is active
  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileOpen]);

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
        <div className="w-8 h-8 border border-[#c4a47c]/60 bg-[#121212] flex items-center justify-center font-jetbrains text-xs font-bold text-[#c4a47c] tracking-wider transition-all duration-300 group-hover:border-[#c4a47c] group-hover:bg-[#c4a47c]/10">
          M·AKS
        </div>
        <div className="flex flex-col">
          <span className="font-syne text-base sm:text-lg font-bold tracking-tight text-[#e5e5e5] group-hover:text-[#c4a47c] transition-colors">
            MATHESH A K S
          </span>
          <span className="font-jetbrains text-[9px] uppercase tracking-[0.2em] text-[#888888] -mt-0.5">
            AI Creative Designer · Prompt Engineer
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
              className={`font-jetbrains text-xs uppercase tracking-[0.2em] transition-all duration-200 py-1 relative cursor-pointer ${
                isActive
                  ? 'text-[#c4a47c] font-semibold border-b border-[#c4a47c]'
                  : 'text-[#888888] hover:text-[#e5e5e5]'
              }`}
            >
              {item.label}
            </button>
          );
        })}
      </div>

      {/* Trajectory / Differentiator Signature Badge */}
      <div className="hidden lg:flex items-center gap-2.5 font-jetbrains text-[11px] text-[#888888] pl-6 border-l border-[#222222]">
        <span className="w-1.5 h-1.5 rounded-full bg-[#c4a47c] inline-block"></span>
        <span className="tracking-wider">Business → Marketing → AI → Creative</span>
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

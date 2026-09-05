import React, { useState, useEffect } from 'react';
import { ViewType } from '../types';
import { Menu, X, ArrowUpRight } from 'lucide-react';

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
      className="fixed top-0 w-full z-50 flex justify-between items-center px-5 md:px-20 py-3 bg-[#fbfbf9]/95 backdrop-blur-md border-b border-[#e5e2da] transition-all duration-300"
    >
      {/* Editorial Nameplate */}
      <button
        id="nav-brand-btn"
        onClick={() => handleNavClick('home')}
        className="group flex flex-col text-left cursor-pointer"
      >
        <span className="font-syne text-sm sm:text-base font-bold tracking-tight text-[#141414] group-hover:text-[#6b654c] transition-colors">
          MATHESH A K S
        </span>
        <span className="font-jetbrains text-[8px] sm:text-[9px] uppercase tracking-[0.2em] text-[#5c5950] -mt-0.5">
          AI Creative Designer · Prompt Engineer
        </span>
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
                  ? 'text-[#141414] font-bold border-b-2 border-[#6b654c]'
                  : 'text-[#5c5950] hover:text-[#141414]'
              }`}
            >
              {item.label}
            </button>
          );
        })}
      </div>

      {/* Trajectory / Executive Brand Signature */}
      <div className="hidden lg:flex items-center gap-2.5 font-jetbrains text-[11px] text-[#5c5950] pl-6 border-l border-[#e5e2da]">
        <span className="w-1.5 h-1.5 rounded-full bg-[#6b654c] inline-block"></span>
        <span className="tracking-wider">Business Strategy → Brand Marketing → AI Direction</span>
      </div>

      {/* Mobile Menu Button */}
      <button
        id="mobile-menu-toggle"
        onClick={() => setMobileOpen(!mobileOpen)}
        className="md:hidden text-[#141414] p-2 hover:text-[#6b654c] focus:outline-none"
        aria-label="Toggle menu"
      >
        {mobileOpen ? <X size={22} /> : <Menu size={22} />}
      </button>

      {/* Mobile Drawer */}
      {mobileOpen && (
        <div
          id="mobile-nav-drawer"
          className="md:hidden fixed top-[61px] left-0 w-full bg-[#ffffff] border-b border-[#e5e2da] py-6 px-6 flex flex-col gap-5 shadow-xl z-50 animate-in fade-in slide-in-from-top-4 duration-200"
        >
          <div className="flex items-center gap-2 font-jetbrains text-xs text-[#6b654c] pb-3 border-b border-[#e5e2da]">
            <span className="w-1.5 h-1.5 rounded-full bg-[#6b654c]"></span>
            <span>AI Creative Direction &amp; Prompt Architecture</span>
          </div>

          {navItems.map((item) => (
            <button
              id={`mobile-link-${item.view}`}
              key={item.view}
              onClick={() => handleNavClick(item.view)}
              className={`font-serif text-xl uppercase tracking-wider text-left py-2 flex items-center justify-between cursor-pointer ${
                currentView === item.view ? 'text-[#141414] font-semibold italic' : 'text-[#5c5950]'
              }`}
            >
              <span>{item.label}</span>
              <ArrowUpRight size={16} className="text-[#827e74]" />
            </button>
          ))}

          <div className="pt-4 border-t border-[#e5e2da] flex flex-col gap-2">
            <span className="font-jetbrains text-[10px] text-[#827e74] uppercase tracking-widest">Inquiries &amp; Briefs</span>
            <a
              href="mailto:mathesh.aks@gmail.com"
              className="font-jetbrains text-xs text-[#141414] hover:text-[#6b654c] font-medium"
            >
              mathesh.aks@gmail.com
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

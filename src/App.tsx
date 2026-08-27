import React, { useState, useEffect } from 'react';
import { ViewType, GalleryItem } from './types';
import { Navbar } from './components/Navbar';
import { ShaderBackground } from './components/ShaderBackground';
import { HeroSection } from './components/HeroSection';
import { FeaturedWorksSection } from './components/FeaturedWorksSection';
import { ExperienceSection } from './components/ExperienceSection';
import { CreativeStackSection } from './components/CreativeStackSection';
import { CaseStudyJkans } from './components/CaseStudyJkans';
import { CaseStudyTempt } from './components/CaseStudyTempt';
import { WorkView } from './components/WorkView';
import { ContactView } from './components/ContactView';
import { LightboxModal } from './components/LightboxModal';
import { Footer } from './components/Footer';

export function App() {
  const [currentView, setCurrentView] = useState<ViewType>('home');
  const [lightboxItem, setLightboxItem] = useState<GalleryItem | null>(null);

  const handleNavigate = (view: ViewType) => {
    setCurrentView(view);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleScrollToWork = () => {
    const el = document.getElementById('featured-works-section');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    } else {
      setCurrentView('work');
    }
  };

  return (
    <div className="min-h-screen bg-[#080808] text-[#e5e5e5] flex flex-col justify-between selection:bg-[#c4a47c] selection:text-[#080808] relative font-grotesk">
      {/* Top Fixed Navigation */}
      <Navbar
        currentView={currentView}
        onNavigate={handleNavigate}
        onOpenContactModal={() => handleNavigate('contact')}
      />

      {/* Main View Router */}
      <main className="flex-grow w-full">
        {currentView === 'home' && (
          <>
            <div className="relative">
              <ShaderBackground />
              <HeroSection onNavigate={handleNavigate} onScrollToWork={handleScrollToWork} />
            </div>
            <FeaturedWorksSection onNavigate={handleNavigate} />
            <ExperienceSection />
            <CreativeStackSection />
            
            {/* Quick Inquiry CTA Strip */}
            <section className="w-full px-5 md:px-20 py-20 border-b border-[#222222] bg-[#0c0c0c] text-center">
              <div className="max-w-3xl mx-auto">
                <span className="font-jetbrains text-xs text-[#c4a47c] uppercase tracking-[0.25em] block mb-3">
                  COLLABORATE &amp; EXPERIMENT
                </span>
                <h3 className="font-syne text-3xl sm:text-4xl md:text-5xl font-bold text-[#e5e5e5] uppercase mb-6">
                  Ready to turn an idea into a <span className="font-serif italic font-light text-[#c4a47c]">visual experience</span>?
                </h3>
                <div className="flex flex-wrap justify-center gap-4">
                  <button
                    onClick={() => handleNavigate('contact')}
                    className="px-8 py-4 bg-[#c4a47c] text-[#080808] font-jetbrains text-xs font-bold uppercase tracking-widest hover:bg-[#e5e5e5] transition-colors cursor-pointer shadow-[0_0_20px_rgba(196,164,124,0.2)]"
                  >
                    Initiate Project Brief
                  </button>
                  <button
                    onClick={() => handleNavigate('work')}
                    className="px-8 py-4 bg-transparent border border-[#222222] text-[#e5e5e5] font-jetbrains text-xs uppercase tracking-widest hover:border-[#c4a47c] hover:text-[#c4a47c] transition-colors cursor-pointer"
                  >
                    View All Works
                  </button>
                </div>
              </div>
            </section>
          </>
        )}

        {currentView === 'work' && <WorkView onNavigate={handleNavigate} />}

        {currentView === 'jkans' && (
          <CaseStudyJkans
            onNavigate={handleNavigate}
            onOpenLightbox={(item) => setLightboxItem(item)}
          />
        )}

        {currentView === 'tempt' && <CaseStudyTempt onNavigate={handleNavigate} />}

        {currentView === 'about' && (
          <div className="pt-[80px]">
            <ExperienceSection />
            <CreativeStackSection />
          </div>
        )}

        {currentView === 'contact' && <ContactView onNavigate={handleNavigate} />}
      </main>

      {/* Lightbox for inspecting campaign visuals */}
      <LightboxModal item={lightboxItem} onClose={() => setLightboxItem(null)} />

      {/* Persistent Footer */}
      <Footer onNavigate={handleNavigate} />
    </div>
  );
}

export default App;

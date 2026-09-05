import React, { useState } from 'react';
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
import { AboutView } from './components/AboutView';
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
      handleNavigate('work');
    }
  };

  return (
    <div className="min-h-screen bg-[#fbfbf9] text-[#141414] flex flex-col justify-between selection:bg-[#141414] selection:text-[#ffffff] relative font-grotesk">
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

            {/* Strategic Quick Inquiry CTA Strip */}
            <section className="w-full px-5 md:px-20 py-20 border-b border-[#e5e2da] bg-[#ffffff] text-center">
              <div className="max-w-3xl mx-auto">
                <span className="font-jetbrains text-xs text-[#6b654c] uppercase tracking-[0.25em] block mb-3 font-semibold">
                  COMMERCIAL COLLABORATION
                </span>
                <h3 className="font-syne text-3xl sm:text-4xl md:text-5xl font-bold text-[#141414] uppercase mb-6 leading-tight">
                  Ready to elevate brand strategy with <span className="font-serif italic font-normal text-[#6b654c]">directed AI</span>?
                </h3>
                <div className="flex flex-wrap justify-center gap-4">
                  <button
                    onClick={() => handleNavigate('contact')}
                    className="px-8 py-4 bg-[#141414] text-[#ffffff] font-jetbrains text-xs font-semibold uppercase tracking-widest hover:bg-[#33302a] transition-colors cursor-pointer shadow-[0_2px_10px_rgba(20,20,20,0.08)]"
                  >
                    Initiate Executive Brief
                  </button>
                  <button
                    onClick={() => handleNavigate('work')}
                    className="px-8 py-4 bg-[#ffffff] border border-[#dad6cc] text-[#141414] font-jetbrains text-xs uppercase tracking-widest hover:bg-[#f4f2eb] hover:border-[#141414] transition-colors cursor-pointer"
                  >
                    Explore Selected Works
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

        {currentView === 'about' && <AboutView onNavigate={handleNavigate} />}

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

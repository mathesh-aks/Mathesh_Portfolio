import React, { useEffect, useState } from 'react';
import { GalleryItem } from '../types';
import { X, Copy, Check } from 'lucide-react';

interface LightboxModalProps {
  item: GalleryItem | null;
  onClose: () => void;
}

export const LightboxModal: React.FC<LightboxModalProps> = ({ item, onClose }) => {
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    if (!item) return;

    // Lock body scrolling when modal is active
    document.body.style.overflow = 'hidden';

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [item, onClose]);

  if (!item) return null;

  const handleCopyPrompt = () => {
    navigator.clipboard.writeText(item.promptMetadata.corePrompt);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div
      id="lightbox-modal-backdrop"
      onClick={onClose}
      className="fixed inset-0 z-50 bg-[#141414]/80 backdrop-blur-sm flex items-center justify-center p-4 md:p-10 animate-in fade-in duration-200"
      style={{ touchAction: 'pan-y' }}
    >
      <div
        id="lightbox-modal-content"
        onClick={(e) => e.stopPropagation()}
        className="relative w-full max-w-6xl max-h-[90vh] max-h-[90dvh] bg-[#ffffff] border border-[#dad6cc] flex flex-col lg:flex-row overflow-hidden shadow-2xl"
      >
        {/* Close Button */}
        <button
          id="lightbox-close-btn"
          onClick={onClose}
          className="absolute top-4 right-4 z-30 p-2 bg-[#ffffff] border border-[#e5e2da] text-[#141414] hover:bg-[#141414] hover:text-[#ffffff] transition-colors cursor-pointer shadow-sm"
          aria-label="Close modal"
        >
          <X size={18} />
        </button>

        {/* Image Preview Container */}
        <div className="lg:w-3/5 bg-[#f4f2eb] flex items-center justify-center p-6 relative overflow-hidden min-h-[300px] sm:min-h-[350px]">
          <img
            src={item.imageUrl}
            alt={item.title}
            className="max-h-[60vh] lg:max-h-[75vh] w-auto object-contain shadow-md"
            referrerPolicy="no-referrer"
          />
        </div>

        {/* Prompt & Metadata Details Drawer */}
        <div
          className="lg:w-2/5 p-6 md:p-8 flex flex-col justify-between overflow-y-auto border-t lg:border-t-0 lg:border-l border-[#e5e2da] bg-[#ffffff]"
          style={{ overscrollBehavior: 'contain', WebkitOverflowScrolling: 'touch' }}
        >
          <div>
            <div className="flex items-center gap-2 font-jetbrains text-xs text-[#6b654c] uppercase mb-2 tracking-wider font-semibold">
              <span>{item.characterOrStar}</span>
              <span className="text-[#dad6cc]">●</span>
              <span className="text-[#827e74]">{item.promptMetadata.aspectRatio}</span>
            </div>

            <h3 className="font-syne text-2xl font-bold text-[#141414] mb-2">{item.title}</h3>

            <div className="font-grotesk text-sm text-[#6b654c] font-semibold mb-6">
              Featured Dish: {item.dishName}
            </div>

            {/* Prompt Section */}
            <div className="mb-6">
              <div className="flex items-center justify-between mb-2">
                <span className="font-jetbrains text-[10px] text-[#827e74] uppercase tracking-wider font-semibold">
                  SYNTHESIZED AI PROMPT
                </span>
                <span className="font-jetbrains text-[10px] text-[#141414] border border-[#e5e2da] bg-[#f4f2eb] px-2 py-0.5 font-medium">
                  {item.promptMetadata.model}
                </span>
              </div>

              <div className="bg-[#f4f2eb] p-4 border border-[#e5e2da] font-jetbrains text-xs text-[#141414] leading-relaxed">
                {item.promptMetadata.corePrompt}
              </div>
            </div>

            {/* Prompt Modifiers & Lighting */}
            <div className="space-y-4">
              <div>
                <span className="font-jetbrains text-[10px] text-[#827e74] uppercase tracking-wider block mb-1 font-semibold">
                  Lighting &amp; Volumetrics
                </span>
                <p className="font-grotesk text-xs text-[#5c5950] bg-[#fbfbf9] p-2.5 border border-[#e5e2da]">
                  {item.promptMetadata.lighting}
                </p>
              </div>

              <div>
                <span className="font-jetbrains text-[10px] text-[#827e74] uppercase tracking-wider block mb-2 font-semibold">
                  Style Keywords
                </span>
                <div className="flex flex-wrap gap-1.5">
                  {item.promptMetadata.styleKeywords.map((kw, i) => (
                    <span
                      key={i}
                      className="font-jetbrains text-[10px] px-2 py-1 bg-[#f4f2eb] border border-[#e5e2da] text-[#5c5950]"
                    >
                      {kw}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Action Footer */}
          <div className="pt-6 mt-6 border-t border-[#e5e2da] flex items-center justify-between">
            <button
              onClick={handleCopyPrompt}
              className="w-full inline-flex items-center justify-center gap-2 py-3 bg-[#141414] text-[#ffffff] font-jetbrains text-xs uppercase tracking-wider hover:bg-[#33302a] transition-all cursor-pointer font-semibold shadow-sm"
            >
              {copied ? (
                <>
                  <Check size={14} />
                  <span>PROMPT FORMULA COPIED</span>
                </>
              ) : (
                <>
                  <Copy size={14} />
                  <span>COPY PROMPT FORMULA</span>
                </>
              )}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

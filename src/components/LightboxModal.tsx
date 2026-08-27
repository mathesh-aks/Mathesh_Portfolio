import React, { useEffect, useState } from 'react';
import { GalleryItem } from '../types';
import { X, Copy, Check, Eye, Sliders, ExternalLink } from 'lucide-react';

interface LightboxModalProps {
  item: GalleryItem | null;
  onClose: () => void;
}

export const LightboxModal: React.FC<LightboxModalProps> = ({ item, onClose }) => {
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

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
      className="fixed inset-0 z-50 bg-[#080808]/95 backdrop-blur-md flex items-center justify-center p-4 md:p-10 animate-in fade-in duration-200"
    >
      <div
        id="lightbox-modal-content"
        onClick={(e) => e.stopPropagation()}
        className="relative w-full max-w-6xl max-h-[90vh] bg-[#121212] border border-[#222222] flex flex-col lg:flex-row overflow-hidden shadow-2xl"
      >
        {/* Close Button */}
        <button
          id="lightbox-close-btn"
          onClick={onClose}
          className="absolute top-4 right-4 z-30 p-2 bg-[#080808]/90 border border-[#222222] text-[#e5e5e5] hover:text-[#c4a47c] hover:border-[#c4a47c] transition-colors cursor-pointer"
          aria-label="Close modal"
        >
          <X size={20} />
        </button>

        {/* Image Preview Container */}
        <div className="lg:w-3/5 bg-[#080808] flex items-center justify-center p-4 relative overflow-hidden min-h-[350px]">
          <img
            src={item.imageUrl}
            alt={item.title}
            className="max-h-[75vh] w-auto object-contain"
          />
        </div>

        {/* Prompt & Metadata Details Drawer */}
        <div className="lg:w-2/5 p-6 md:p-8 flex flex-col justify-between overflow-y-auto border-t lg:border-t-0 lg:border-l border-[#222222] bg-[#121212]">
          <div>
            <div className="flex items-center gap-2 font-jetbrains text-xs text-[#c4a47c] uppercase mb-2 tracking-wider">
              <span>{item.characterOrStar}</span>
              <span className="text-[#666666]">●</span>
              <span className="text-[#888888]">{item.promptMetadata.aspectRatio}</span>
            </div>

            <h3 className="font-syne text-2xl font-bold text-[#e5e5e5] mb-2">{item.title}</h3>

            <div className="font-grotesk text-sm text-[#c4a47c] font-semibold mb-6">
              Dish: {item.dishName}
            </div>

            {/* Prompt Section */}
            <div className="mb-6">
              <div className="flex items-center justify-between mb-2">
                <span className="font-jetbrains text-[10px] text-[#888888] uppercase tracking-wider">
                  SYNTHESIZED AI PROMPT
                </span>
                <span className="font-jetbrains text-[10px] text-[#c4a47c] border border-[#c4a47c]/30 px-1.5 py-0.5">
                  {item.promptMetadata.model}
                </span>
              </div>

              <div className="bg-[#080808] p-3.5 border border-[#222222] font-jetbrains text-xs text-[#c4c7c7] leading-relaxed">
                {item.promptMetadata.corePrompt}
              </div>
            </div>

            {/* Technical Specs */}
            <div className="space-y-2.5 font-jetbrains text-xs text-[#888888] mb-6">
              <div>
                <span className="text-[#e5e5e5] block text-[10px] uppercase tracking-wider">Lighting Setup:</span>
                <span className="text-[#c4c7c7]">{item.promptMetadata.lighting}</span>
              </div>

              <div>
                <span className="text-[#e5e5e5] block text-[10px] uppercase tracking-wider">Key Style Modifiers:</span>
                <div className="flex flex-wrap gap-1 mt-1">
                  {item.promptMetadata.styleKeywords.map((kw, i) => (
                    <span
                      key={i}
                      className="px-2 py-0.5 bg-[#080808] border border-[#222222] text-[10px] text-[#888888]"
                    >
                      {kw}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Action Button */}
          <div className="pt-4 border-t border-[#222222]">
            <button
              onClick={handleCopyPrompt}
              className="w-full inline-flex items-center justify-center gap-2 py-3 bg-transparent border border-[#c4a47c] text-[#c4a47c] font-jetbrains text-xs uppercase tracking-widest hover:bg-[#c4a47c] hover:text-[#080808] transition-all cursor-pointer"
            >
              {copied ? (
                <>
                  <Check size={14} />
                  <span>PROMPT COPIED TO CLIPBOARD</span>
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

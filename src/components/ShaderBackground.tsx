import React, { useEffect, useRef } from 'react';

export const ShaderBackground: React.FC = () => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const container = containerRef.current;
    if (!canvas || !container) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let isVisible = true;
    let width = (canvas.width = container.clientWidth);
    let height = (canvas.height = container.clientHeight);

    const handleResize = () => {
      if (!container || !canvas) return;
      width = canvas.width = container.clientWidth;
      height = canvas.height = container.clientHeight;
      drawEditorialCanvas();
    };

    const observer = new ResizeObserver(handleResize);
    observer.observe(container);

    let t = 0;
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    const drawEditorialCanvas = () => {
      ctx.clearRect(0, 0, width, height);

      // Base warm editorial background
      const baseGrad = ctx.createLinearGradient(0, 0, width, height);
      baseGrad.addColorStop(0, '#fbfbf9');
      baseGrad.addColorStop(0.5, '#faf9f5');
      baseGrad.addColorStop(1, '#f3efe6');
      ctx.fillStyle = baseGrad;
      ctx.fillRect(0, 0, width, height);

      // Very subtle radial light warmth from top-left (ambient editorial illumination)
      const radGrad = ctx.createRadialGradient(
        width * 0.25,
        height * 0.2,
        20,
        width * 0.25,
        height * 0.2,
        Math.max(width, height) * 0.7
      );
      radGrad.addColorStop(0, 'rgba(255, 255, 255, 0.85)');
      radGrad.addColorStop(0.6, 'rgba(247, 244, 237, 0.4)');
      radGrad.addColorStop(1, 'rgba(241, 237, 227, 0)');
      ctx.fillStyle = radGrad;
      ctx.fillRect(0, 0, width, height);

      // Subtle editorial grid lines (fine 1px lines spaced 90px apart, ultra-low opacity)
      ctx.strokeStyle = 'rgba(107, 101, 76, 0.035)';
      ctx.lineWidth = 1;
      ctx.beginPath();
      const gridSize = 90;
      for (let x = 0; x < width; x += gridSize) {
        ctx.moveTo(x + 0.5, 0);
        ctx.lineTo(x + 0.5, height);
      }
      for (let y = 0; y < height; y += gridSize) {
        ctx.moveTo(0, y + 0.5);
        ctx.lineTo(width, y + 0.5);
      }
      ctx.stroke();

      // Subtle slow harmonic editorial light drift
      if (!prefersReducedMotion) {
        const xOffset = Math.sin(t * 0.0005) * 80;
        const yOffset = Math.cos(t * 0.0004) * 60;
        const driftGrad = ctx.createRadialGradient(
          width * 0.75 + xOffset,
          height * 0.6 + yOffset,
          10,
          width * 0.75 + xOffset,
          height * 0.6 + yOffset,
          width * 0.5
        );
        driftGrad.addColorStop(0, 'rgba(196, 164, 124, 0.025)');
        driftGrad.addColorStop(1, 'rgba(251, 251, 249, 0)');
        ctx.fillStyle = driftGrad;
        ctx.fillRect(0, 0, width, height);
      }
    };

    const animate = () => {
      if (!isVisible) return;
      t++;
      if (!prefersReducedMotion) {
        drawEditorialCanvas();
        animationFrameId = requestAnimationFrame(animate);
      }
    };

    drawEditorialCanvas();
    if (!prefersReducedMotion) {
      animationFrameId = requestAnimationFrame(animate);
    }

    const handleVisibilityChange = () => {
      isVisible = !document.hidden;
      if (isVisible && !prefersReducedMotion) {
        animationFrameId = requestAnimationFrame(animate);
      } else {
        cancelAnimationFrame(animationFrameId);
      }
    };

    document.addEventListener('visibilitychange', handleVisibilityChange);

    return () => {
      observer.disconnect();
      document.removeEventListener('visibilitychange', handleVisibilityChange);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="absolute inset-0 z-0 pointer-events-none overflow-hidden"
      aria-hidden="true"
    >
      <canvas ref={canvasRef} className="w-full h-full block" />
    </div>
  );
};

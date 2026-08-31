import React, { useEffect, useRef } from 'react';

export const ShaderBackground: React.FC = () => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const container = containerRef.current;
    if (!canvas || !container) return;

    let isVisible = true;
    let animationFrameId: number;

    const gl = canvas.getContext('webgl', { powerPreference: 'low-power' }) ||
      canvas.getContext('experimental-webgl');

    // Check for reduced motion preference
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (!gl) {
      // Fallback 2D canvas if WebGL is unavailable
      const ctx = canvas.getContext('2d');
      if (!ctx) return;
      let t = 0;
      const render2D = () => {
        if (!isVisible) return;
        t += 0.01;
        ctx.fillStyle = '#080808';
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        ctx.strokeStyle = 'rgba(196, 164, 124, 0.04)';
        ctx.lineWidth = 1;
        ctx.beginPath();
        for (let i = 0; i < canvas.width; i += 40) {
          ctx.moveTo(i, 0);
          ctx.lineTo(i, canvas.height);
        }
        for (let j = 0; j < canvas.height; j += 40) {
          ctx.moveTo(0, j);
          ctx.lineTo(canvas.width, j);
        }
        ctx.stroke();
        if (!prefersReducedMotion) {
          animationFrameId = requestAnimationFrame(render2D);
        }
      };

      render2D();
      return () => cancelAnimationFrame(animationFrameId);
    }

    const vs = `
      attribute vec2 a_position;
      varying vec2 v_texCoord;
      void main() {
        v_texCoord = a_position * 0.5 + 0.5;
        gl_Position = vec4(a_position, 0.0, 1.0);
      }
    `;

    const fs = `
      precision mediump float;
      varying vec2 v_texCoord;
      uniform float u_time;
      uniform vec2 u_resolution;
      uniform vec2 u_mouse;

      void main() {
        vec2 uv = v_texCoord;
        vec2 mouse = u_mouse / u_resolution;
        
        // Slow organic movement
        float t = u_time * 0.15;
        
        // Warm gold intelligence field radius around mouse
        float d = length(uv - mouse);
        float glow = smoothstep(0.45, 0.0, d) * 0.22;
        
        // Flowing dark silk waves
        float wave = sin(uv.y * 3.5 + t) * cos(uv.x * 2.5 - t * 0.4) * 0.05;
        float alpha = smoothstep(0.1, 0.5, abs(uv.y - 0.5 + wave));
        
        vec3 baseColor = vec3(0.031, 0.031, 0.031); // Obsidian #080808
        vec3 accentColor = vec3(0.768, 0.643, 0.486); // Warm antique champagne gold #c4a47c
        
        vec3 finalColor = mix(baseColor, accentColor * 0.25, glow);
        finalColor += (1.0 - alpha) * 0.02; // Subtle depth lines
        
        gl_FragColor = vec4(finalColor, 1.0);
      }
    `;

    function compileShader(type: number, src: string) {
      if (!gl) return null;
      const s = gl.createShader(type);
      if (!s) return null;
      gl.shaderSource(s, src);
      gl.compileShader(s);
      return s;
    }

    const vertShader = compileShader(gl.VERTEX_SHADER, vs);
    const fragShader = compileShader(gl.FRAGMENT_SHADER, fs);
    if (!vertShader || !fragShader) return;

    const prog = gl.createProgram();
    if (!prog) return;
    gl.attachShader(prog, vertShader);
    gl.attachShader(prog, fragShader);
    gl.linkProgram(prog);
    gl.useProgram(prog);

    const buf = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, buf);
    gl.bufferData(
      gl.ARRAY_BUFFER,
      new Float32Array([-1, -1, 1, -1, -1, 1, 1, 1]),
      gl.STATIC_DRAW
    );

    const pos = gl.getAttribLocation(prog, 'a_position');
    gl.enableVertexAttribArray(pos);
    gl.vertexAttribPointer(pos, 2, gl.FLOAT, false, 0, 0);

    const uTime = gl.getUniformLocation(prog, 'u_time');
    const uRes = gl.getUniformLocation(prog, 'u_resolution');
    const uMouse = gl.getUniformLocation(prog, 'u_mouse');

    let mouse = { x: window.innerWidth / 2, y: window.innerHeight / 2 };

    const handleMouseMove = (event: MouseEvent) => {
      if (!canvas || !isVisible) return;
      const rect = canvas.getBoundingClientRect();
      if (rect.width && rect.height) {
        const nx = (event.clientX - rect.left) / rect.width;
        const ny = 1.0 - (event.clientY - rect.top) / rect.height;
        mouse.x = nx * canvas.width;
        mouse.y = ny * canvas.height;
      }
    };

    // Passive touch handler that never calls preventDefault or blocks scroll
    const handleTouchMove = (event: TouchEvent) => {
      if (!canvas || !isVisible || !event.touches[0]) return;
      const touch = event.touches[0];
      const rect = canvas.getBoundingClientRect();
      if (rect.width && rect.height) {
        const nx = (touch.clientX - rect.left) / rect.width;
        const ny = 1.0 - (touch.clientY - rect.top) / rect.height;
        mouse.x = nx * canvas.width;
        mouse.y = ny * canvas.height;
      }
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    window.addEventListener('touchmove', handleTouchMove, { passive: true });

    const syncSize = () => {
      if (!canvas) return;
      // Cap devicePixelRatio to 1.5 on high-DPI mobile screens to save GPU
      const dpr = Math.min(window.devicePixelRatio || 1, 1.5);
      const w = Math.floor((canvas.clientWidth || window.innerWidth) * dpr);
      const h = Math.floor((canvas.clientHeight || window.innerHeight) * dpr);
      if (canvas.width !== w || canvas.height !== h) {
        canvas.width = w;
        canvas.height = h;
      }
    };

    syncSize();
    let resizeObserver: ResizeObserver | null = null;
    if (typeof ResizeObserver !== 'undefined') {
      resizeObserver = new ResizeObserver(syncSize);
      resizeObserver.observe(canvas);
    }

    const render = (t: number) => {
      if (!isVisible) return;
      syncSize();
      gl.viewport(0, 0, canvas.width, canvas.height);
      if (uTime) gl.uniform1f(uTime, t * 0.001);
      if (uRes) gl.uniform2f(uRes, canvas.width, canvas.height);
      if (uMouse) gl.uniform2f(uMouse, mouse.x, mouse.y);
      gl.drawArrays(gl.TRIANGLE_STRIP, 0, 4);

      if (!prefersReducedMotion) {
        animationFrameId = requestAnimationFrame(render);
      }
    };

    // Render initial frame
    animationFrameId = requestAnimationFrame(render);

    // Pause WebGL rendering loop when hero is scrolled out of viewport to free mobile/tablet CPU & GPU
    let visibilityObserver: IntersectionObserver | null = null;
    if ('IntersectionObserver' in window) {
      visibilityObserver = new IntersectionObserver(
        ([entry]) => {
          const wasVisible = isVisible;
          isVisible = entry.isIntersecting;
          if (isVisible && !wasVisible && !prefersReducedMotion) {
            cancelAnimationFrame(animationFrameId);
            animationFrameId = requestAnimationFrame(render);
          }
        },
        { threshold: 0 }
      );
      visibilityObserver.observe(container);
    }

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('touchmove', handleTouchMove);
      if (resizeObserver) resizeObserver.disconnect();
      if (visibilityObserver) visibilityObserver.disconnect();
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div
      ref={containerRef}
      id="webgl-shader-container"
      className="absolute inset-0 w-full h-full z-0 opacity-45 mix-blend-screen pointer-events-none overflow-hidden touch-none"
      style={{ touchAction: 'auto', pointerEvents: 'none' }}
    >
      <canvas
        ref={canvasRef}
        id="shader-canvas"
        className="w-full h-full block pointer-events-none"
      />
    </div>
  );
};


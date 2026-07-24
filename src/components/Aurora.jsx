import { useRef, useEffect } from "react";

/**
 * Aurora — 코발트 오로라 배경 (canvas, 저비용 blob 애니메이션)
 * ReactBits의 Aurora/Silk 계열을 코발트 톤으로 재해석.
 */
export default function Aurora() {
  const ref = useRef(null);

  useEffect(() => {
    const canvas = ref.current;
    const ctx = canvas.getContext("2d");
    let raf;
    let w, h, dpr;

    const blobs = [
      { hue: 232, x: 0.18, y: 0.28, r: 0.52, sx: 0.00004, sy: 0.00003, ph: 0 },
      { hue: 250, x: 0.72, y: 0.18, r: 0.5, sx: 0.00003, sy: 0.00005, ph: 2 },
      { hue: 210, x: 0.5, y: 0.75, r: 0.58, sx: 0.00005, sy: 0.000025, ph: 4 },
      { hue: 198, x: 0.86, y: 0.68, r: 0.38, sx: 0.000035, sy: 0.00004, ph: 1 },
    ];

    function resize() {
      dpr = Math.min(window.devicePixelRatio || 1, 2);
      w = canvas.width = window.innerWidth * dpr;
      h = canvas.height = window.innerHeight * dpr;
      canvas.style.width = window.innerWidth + "px";
      canvas.style.height = window.innerHeight + "px";
    }
    resize();
    window.addEventListener("resize", resize);

    function draw(t) {
      ctx.clearRect(0, 0, w, h);
      ctx.globalCompositeOperation = "source-over";
      // 베이스
      ctx.fillStyle = "#eef1f8";
      ctx.fillRect(0, 0, w, h);
      ctx.globalCompositeOperation = "multiply";

      for (const b of blobs) {
        const cx = (b.x + Math.sin(t * b.sx + b.ph) * 0.1) * w;
        const cy = (b.y + Math.cos(t * b.sy + b.ph) * 0.1) * h;
        const rad = b.r * Math.min(w, h);
        const g = ctx.createRadialGradient(cx, cy, 0, cx, cy, rad);
        g.addColorStop(0, `hsla(${b.hue}, 82%, 74%, 0.4)`);
        g.addColorStop(1, `hsla(${b.hue}, 82%, 74%, 0)`);
        ctx.fillStyle = g;
        ctx.beginPath();
        ctx.arc(cx, cy, rad, 0, Math.PI * 2);
        ctx.fill();
      }
      raf = requestAnimationFrame(draw);
    }
    raf = requestAnimationFrame(draw);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <canvas
      ref={ref}
      aria-hidden
      style={{
        position: "fixed",
        inset: 0,
        zIndex: -2,
        filter: "blur(60px) saturate(1.15)",
        opacity: 0.72,
      }}
    />
  );
}

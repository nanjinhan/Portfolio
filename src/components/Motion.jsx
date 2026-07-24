import { motion } from "framer-motion";

/**
 * ScrollReveal — 스크롤 진입 시 아래에서 페이드업 (ReactBits ScrollReveal/AnimatedContent)
 */
export function Reveal({ children, className, delay = 0, y = 30, style }) {
  return (
    <motion.div
      className={className}
      style={style}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-8%" }}
      transition={{ delay, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}

/**
 * CountUp — 숫자 카운트업 (ReactBits CountUp). 문자 접미사 지원.
 */
import { useEffect, useRef, useState } from "react";
export function CountUp({ value, className }) {
  const m = String(value).match(/^(\d+)(.*)$/);
  const target = m ? parseInt(m[1], 10) : null;
  const suffix = m ? m[2] : value;
  const [n, setN] = useState(target === null ? value : 0);
  const ref = useRef(null);
  const done = useRef(false);

  useEffect(() => {
    if (target === null) return;
    const el = ref.current;
    const io = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting && !done.current) {
          done.current = true;
          const start = performance.now();
          const dur = 1200;
          const tick = (t) => {
            const p = Math.min((t - start) / dur, 1);
            const eased = 1 - Math.pow(1 - p, 3);
            setN(Math.round(target * eased));
            if (p < 1) requestAnimationFrame(tick);
          };
          requestAnimationFrame(tick);
        }
      },
      { threshold: 0.6 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, [target]);

  if (target === null) return <span className={className}>{value}</span>;
  return (
    <span ref={ref} className={className}>
      {n}
      {suffix}
    </span>
  );
}

/**
 * Marquee — 무한 가로 흐름 (ReactBits LogoLoop/Marquee)
 */
export function Marquee({ items, className, speed = 40 }) {
  const doubled = [...items, ...items];
  return (
    <div className={`marquee ${className || ""}`} aria-hidden>
      <motion.div
        className="marquee-track"
        animate={{ x: ["0%", "-50%"] }}
        transition={{ duration: speed, ease: "linear", repeat: Infinity }}
      >
        {doubled.map((it, i) => (
          <span className="marquee-item" key={i}>
            {it}
          </span>
        ))}
      </motion.div>
    </div>
  );
}

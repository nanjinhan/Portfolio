import { useRef, useState, useEffect } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";

/**
 * TiltedCard — 마우스 따라 3D 기울기 (ReactBits TiltedCard)
 */
export function TiltedCard({ children, className, max = 12, style }) {
  const ref = useRef(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rx = useSpring(useTransform(y, [-0.5, 0.5], [max, -max]), { stiffness: 200, damping: 18 });
  const ry = useSpring(useTransform(x, [-0.5, 0.5], [-max, max]), { stiffness: 200, damping: 18 });

  function onMove(e) {
    const r = ref.current.getBoundingClientRect();
    x.set((e.clientX - r.left) / r.width - 0.5);
    y.set((e.clientY - r.top) / r.height - 0.5);
  }
  function onLeave() {
    x.set(0);
    y.set(0);
  }

  return (
    <motion.div
      ref={ref}
      className={className}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      style={{ rotateX: rx, rotateY: ry, transformStyle: "preserve-3d", transformPerspective: 900, ...style }}
    >
      {children}
    </motion.div>
  );
}

/**
 * Magnet — 커서에 자석처럼 끌림 (ReactBits Magnet)
 */
export function Magnet({ children, className, strength = 0.35, style, ...rest }) {
  const ref = useRef(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const sx = useSpring(x, { stiffness: 260, damping: 15 });
  const sy = useSpring(y, { stiffness: 260, damping: 15 });

  function onMove(e) {
    const r = ref.current.getBoundingClientRect();
    x.set((e.clientX - (r.left + r.width / 2)) * strength);
    y.set((e.clientY - (r.top + r.height / 2)) * strength);
  }
  function onLeave() {
    x.set(0);
    y.set(0);
  }

  return (
    <motion.div
      ref={ref}
      className={className}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      style={{ x: sx, y: sy, display: "inline-block", ...style }}
      {...rest}
    >
      {children}
    </motion.div>
  );
}

/**
 * SpotlightCard — 커서 위치에 빛 번짐 (ReactBits SpotlightCard)
 */
export function SpotlightCard({ children, className, style }) {
  const ref = useRef(null);
  const [pos, setPos] = useState({ x: -200, y: -200, on: false });

  function onMove(e) {
    const r = ref.current.getBoundingClientRect();
    setPos({ x: e.clientX - r.left, y: e.clientY - r.top, on: true });
  }

  return (
    <div
      ref={ref}
      className={className}
      onMouseMove={onMove}
      onMouseLeave={() => setPos((p) => ({ ...p, on: false }))}
      style={{ position: "relative", overflow: "hidden", ...style }}
    >
      <div
        aria-hidden
        style={{
          position: "absolute",
          inset: 0,
          pointerEvents: "none",
          opacity: pos.on ? 1 : 0,
          transition: "opacity .3s",
          background: `radial-gradient(220px circle at ${pos.x}px ${pos.y}px, rgba(36,39,255,0.14), transparent 60%)`,
        }}
      />
      {children}
    </div>
  );
}

/**
 * ClickSpark — 클릭 시 스파크 튐 (ReactBits ClickSpark). 전역 1개.
 * window 클릭 리스너를 써서 페이지 상호작용을 막지 않음.
 */
export function ClickSpark() {
  const [sparks, setSparks] = useState([]);

  useEffect(() => {
    function onClick(e) {
      const id = Date.now() + Math.random();
      const n = 8;
      const items = Array.from({ length: n }, (_, i) => ({
        id: id + i,
        x: e.clientX,
        y: e.clientY,
        angle: (i / n) * Math.PI * 2,
      }));
      setSparks((s) => [...s, ...items]);
      setTimeout(() => {
        setSparks((s) => s.filter((sp) => !items.find((it) => it.id === sp.id)));
      }, 600);
    }
    window.addEventListener("click", onClick);
    return () => window.removeEventListener("click", onClick);
  }, []);

  return (
    <div style={{ position: "fixed", inset: 0, zIndex: 9999, pointerEvents: "none" }}>
      {sparks.map((sp) => (
        <motion.span
          key={sp.id}
          initial={{ opacity: 1, x: sp.x, y: sp.y, scale: 1 }}
          animate={{
            opacity: 0,
            x: sp.x + Math.cos(sp.angle) * 26,
            y: sp.y + Math.sin(sp.angle) * 26,
            scale: 0.2,
          }}
          transition={{ duration: 0.55, ease: "easeOut" }}
          style={{
            position: "absolute",
            width: 6,
            height: 6,
            borderRadius: 2,
            background: "var(--accent)",
            translateX: "-50%",
            translateY: "-50%",
          }}
        />
      ))}
    </div>
  );
}

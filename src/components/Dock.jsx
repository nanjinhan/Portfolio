import { useRef } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";

/* 아이콘 (인라인 SVG) */
const ICONS = {
  home: "M3 11.5 12 4l9 7.5M5 10v9h5v-5h4v5h5v-9",
  award: "M12 15a5 5 0 1 0 0-10 5 5 0 0 0 0 10ZM9 13l-1.5 7L12 18l4.5 2L15 13",
  map: "M9 4 3 6v14l6-2 6 2 6-2V4l-6 2-6-2Zm0 0v14m6-12v14",
  grid: "M4 4h7v7H4V4Zm9 0h7v7h-7V4ZM4 13h7v7H4v-7Zm9 0h7v7h-7v-7Z",
  sparkle: "M12 3l1.8 5.2L19 10l-5.2 1.8L12 17l-1.8-5.2L5 10l5.2-1.8L12 3Z",
  mail: "M3 6h18v12H3V6Zm0 1 9 6 9-6",
};

function DockItem({ item, mouseX, onClick }) {
  const ref = useRef(null);

  const dist = useTransform(mouseX, (val) => {
    const b = ref.current?.getBoundingClientRect() ?? { x: 0, width: 0 };
    return val - b.x - b.width / 2;
  });
  const sizeT = useTransform(dist, [-140, 0, 140], [46, 74, 46]);
  const size = useSpring(sizeT, { mass: 0.1, stiffness: 200, damping: 14 });

  return (
    <motion.button
      ref={ref}
      style={{ width: size, height: size }}
      className="dock-item"
      onClick={onClick}
      aria-label={item.label}
      whileTap={{ scale: 0.85 }}
    >
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7"
        strokeLinecap="round" strokeLinejoin="round">
        <path d={ICONS[item.icon]} />
      </svg>
      <span className="dock-tip">{item.label}</span>
    </motion.button>
  );
}

export default function Dock({ items, onNavigate }) {
  const mouseX = useMotionValue(Infinity);

  return (
    <motion.nav
      className="dock glass"
      onMouseMove={(e) => mouseX.set(e.pageX)}
      onMouseLeave={() => mouseX.set(Infinity)}
      initial={{ y: 80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ delay: 1.2, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
    >
      {items.map((it) => (
        <DockItem key={it.id} item={it} mouseX={mouseX} onClick={() => onNavigate(it.id)} />
      ))}
    </motion.nav>
  );
}

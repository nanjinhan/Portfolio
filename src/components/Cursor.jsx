import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

/**
 * Cursor — 커서를 따라다니는 발광 원 + 인터랙티브 요소 위에서 확대
 * (고급 인터랙션 감성. 데스크톱에서만 표시)
 */
export default function Cursor() {
  const x = useMotionValue(-100);
  const y = useMotionValue(-100);
  const sx = useSpring(x, { stiffness: 400, damping: 30, mass: 0.3 });
  const sy = useSpring(y, { stiffness: 400, damping: 30, mass: 0.3 });
  const [hover, setHover] = useState(false);
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    // 터치 기기에서는 비활성화
    if (window.matchMedia("(pointer: coarse)").matches) return;
    setEnabled(true);
    document.body.classList.add("has-cursor");

    function move(e) {
      x.set(e.clientX);
      y.set(e.clientY);
      const el = e.target;
      const interactive = el.closest(
        "button, a, .proof-card, .making-item, .project-row, .contact-link, .char-dot, .dock-item, input"
      );
      setHover(!!interactive);
    }
    window.addEventListener("mousemove", move);
    return () => {
      window.removeEventListener("mousemove", move);
      document.body.classList.remove("has-cursor");
    };
  }, [x, y]);

  if (!enabled) return null;

  return (
    <>
      <motion.div
        className="cursor-dot"
        style={{ x, y }}
      />
      <motion.div
        className="cursor-ring"
        style={{ x: sx, y: sy }}
        animate={{ scale: hover ? 2.4 : 1, opacity: hover ? 0.5 : 0.9 }}
        transition={{ duration: 0.25 }}
      />
    </>
  );
}

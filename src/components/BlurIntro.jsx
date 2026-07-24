import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

/**
 * BlurIntro — 로딩 시 이름이 블러에서 선명해지며 사라지는 인트로
 * (김민서 포폴의 블러 인트로 참고)
 */
export default function BlurIntro() {
  const [done, setDone] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setDone(true), 2100);
    return () => clearTimeout(t);
  }, []);

  return (
    <AnimatePresence>
      {!done && (
        <motion.div
          className="intro"
          exit={{ opacity: 0, filter: "blur(20px)" }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
        >
          <motion.div
            className="intro-inner"
            initial={{ filter: "blur(24px)", opacity: 0, letterSpacing: "0.3em" }}
            animate={{ filter: "blur(0px)", opacity: 1, letterSpacing: "-0.02em" }}
            transition={{ duration: 1.4, ease: [0.22, 1, 0.36, 1] }}
          >
            <span className="intro-name">박진한</span>
            <span className="intro-sub">IT PRODUCT PLANNER · PORTFOLIO 2026</span>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { HERO, CHARACTERS, STACK } from "../data";
import { ShinyText } from "../components/TextEffects";
import { CountUp, Marquee } from "../components/Motion";

export default function Hero() {
  const [idx, setIdx] = useState(0);

  useEffect(() => {
    const t = setInterval(() => setIdx((i) => (i + 1) % CHARACTERS.length), 3600);
    return () => clearInterval(t);
  }, []);

  // 박→진→한 하이라이트 (캐릭터에 동기화)
  const litInitial = idx % HERO.initials.length;

  return (
    <section className="section hero" id="hero">
      <div className="wrap hero-inner">
        {/* 상단 메타 */}
        <motion.div
          className="hero-meta"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          <span>PARK JINHAN — IT PRODUCT PLANNER</span>
          <span>전남대학교 인공지능학부 · 2026</span>
        </motion.div>

        <div className="hero-main">
          {/* 왼쪽: 삼행시 */}
          <div className="hero-copy">
            <h1 className="hero-acrostic">
              {HERO.acrostic.map((line, li) => (
                <motion.span
                  key={li}
                  className="hero-line"
                  initial={{ y: 40, opacity: 0, filter: "blur(8px)" }}
                  animate={{ y: 0, opacity: 1, filter: "blur(0px)" }}
                  transition={{ delay: 0.4 + li * 0.15, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                >
                  <span className={`initial ${litInitial === li ? "lit" : ""}`}>
                    {line[0]}
                  </span>
                  {line.slice(1)}
                </motion.span>
              ))}
            </h1>

            <motion.p
              className="hero-sub"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9, duration: 0.7 }}
            >
              {HERO.sub}
            </motion.p>

            <motion.div
              className="hero-stats"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.1, duration: 0.7 }}
            >
              {HERO.stats.map((s, i) => (
                <div className="hero-stat" key={i}>
                  <CountUp value={s.num} className={`stat-num ${s.accent ? "accent" : ""}`} />
                  <span className="stat-cap">{s.cap}</span>
                </div>
              ))}
            </motion.div>
          </div>

          {/* 오른쪽: 캐릭터 스택 */}
          <motion.div
            className="hero-char"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.6, duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="char-stage">
              {CHARACTERS.map((c, i) => (
                <motion.img
                  key={i}
                  src={c.src}
                  alt={c.role}
                  className="char-img"
                  animate={{
                    opacity: idx === i ? 1 : 0,
                    scale: idx === i ? 1 : 0.92,
                    filter: idx === i ? "blur(0px)" : "blur(8px)",
                    rotate: idx === i ? 0 : 3,
                  }}
                  transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                  style={{ zIndex: idx === i ? 2 : 1 }}
                />
              ))}
            </div>
            <div className="char-caption">
              <ShinyText className="char-role">{CHARACTERS[idx].role}</ShinyText>
              <div className="char-dots">
                {CHARACTERS.map((_, i) => (
                  <button
                    key={i}
                    className={`char-dot ${idx === i ? "on" : ""}`}
                    onClick={() => setIdx(i)}
                    aria-label={`${i + 1}번째 모습`}
                  />
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        {/* 기술 스택 마퀴 */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.4, duration: 1 }}
        >
          <Marquee items={STACK} speed={45} className="hero-marquee" />
        </motion.div>
      </div>
    </section>
  );
}

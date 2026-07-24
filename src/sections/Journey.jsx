import { useState } from "react";
import { motion } from "framer-motion";
import { CHAPTERS, TIMELINE } from "../data";
import { SplitText } from "../components/TextEffects";
import { Reveal } from "../components/Motion";
import { TiltedCard } from "../components/Interactive";

function Chapter({ ch, i }) {
  const [open, setOpen] = useState(false);
  return (
    <div className={`chapter ${ch.dark ? "chapter-dark" : ""}`}>
      <div className="wrap chapter-grid">
        <div className="chapter-side">
          <motion.span
            className="chapter-num"
            style={{ color: ch.accent }}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            {ch.num}
          </motion.span>
          <span className="chapter-stage">{ch.stage}</span>
          <span className="chapter-year">{ch.year}</span>
        </div>

        <div className="chapter-body">
          <Reveal>
            <h3 className="chapter-title">
              {ch.title.map((t, ti) => (
                <span key={ti} style={{ display: "block" }}>
                  {t}
                </span>
              ))}
            </h3>
          </Reveal>
          {ch.paras.map((p, pi) => (
            <Reveal key={pi} delay={0.1 + pi * 0.08}>
              <p className="chapter-para">{p}</p>
            </Reveal>
          ))}

          <Reveal delay={0.2}>
            <TiltedCard max={8}>
              <div className="chapter-visual">
                <img src={ch.img} alt={ch.stage} />
              </div>
            </TiltedCard>
          </Reveal>

          <Reveal delay={0.15}>
            <button className="real-toggle" onClick={() => setOpen((o) => !o)}>
              <span className="real-ic">{open ? "−" : "+"}</span> 실제 현장 사진 보기
            </button>
            <motion.div
              className="real-grid"
              initial={false}
              animate={{ height: open ? "auto" : 0, opacity: open ? 1 : 0 }}
              style={{ overflow: "hidden" }}
              transition={{ duration: 0.4 }}
            >
              {ch.real.map((r, ri) => (
                <div className="ph real-ph" key={ri}>
                  <span>사진 자리 — {r}</span>
                </div>
              ))}
            </motion.div>
          </Reveal>

          <Reveal delay={0.1}>
            <blockquote className="chapter-quote" style={{ borderColor: ch.accent }}>
              {ch.quote}
            </blockquote>
          </Reveal>

          <Reveal delay={0.15}>
            <div className="tags">
              {ch.tags.map((t) => (
                <span className="tag" key={t}>
                  {t}
                </span>
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </div>
  );
}

export default function Journey() {
  return (
    <section className="section journey" id="journey">
      <div className="wrap">
        <Reveal>
          <span className="section-label">02 — Journey</span>
          <h2 className="h2">
            <SplitText text="동아리 방에서" />
            <br />
            <SplitText text="현업까지." delay={0.2} />
          </h2>
          <p className="section-sub">2022년부터 지금까지, 제가 지나온 자리들입니다.</p>
        </Reveal>
      </div>

      {CHAPTERS.map((ch, i) => (
        <Chapter key={i} ch={ch} i={i} />
      ))}

      <div className="wrap timeline-wrap">
        <Reveal>
          <span className="section-label">02.5 — Timeline</span>
          <h3 className="h2" style={{ fontSize: "clamp(28px,4vw,44px)" }}>
            그사이의 기록들.
          </h3>
        </Reveal>
        <ul className="timeline">
          {TIMELINE.map((t, i) => (
            <Reveal key={i} delay={i * 0.05}>
              <li>
                <span className="tl-year">{t.year}</span>
                <span className="tl-desc">{t.desc}</span>
                {t.ongoing && <span className="tl-badge">진행 중</span>}
              </li>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}

import { PROOF_CARDS, PROOF_LIST } from "../data";
import { SplitText } from "../components/TextEffects";
import { Reveal } from "../components/Motion";
import { TiltedCard, SpotlightCard } from "../components/Interactive";

export default function Proof() {
  return (
    <section className="section" id="proof">
      <div className="wrap">
        <Reveal>
          <span className="section-label">01 — Proof</span>
          <h2 className="h2">
            <SplitText text="결과부터" />
            <br />
            <SplitText text="보여드립니다." delay={0.2} />
          </h2>
        </Reveal>

        <div className="proof-grid">
          {PROOF_CARDS.map((c, i) => (
            <Reveal key={i} delay={i * 0.1}>
              <TiltedCard>
                <SpotlightCard className="proof-card glass">
                  <span className="badge">{c.badge}</span>
                  <h3 className="proof-title">{c.title}</h3>
                  <p className="proof-desc">{c.desc}</p>
                  <span className="proof-meta">{c.meta}</span>
                </SpotlightCard>
              </TiltedCard>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.2}>
          <ul className="proof-list">
            {PROOF_LIST.map((r, i) => (
              <li key={i}>
                <span className="proof-award">{r.award}</span>
                <span className="proof-row-desc">{r.desc}</span>
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}

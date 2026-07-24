import { useState } from "react";
import { DIRECTION, CONTACT } from "../data";
import { SplitText, ShinyText } from "../components/TextEffects";
import { Reveal } from "../components/Motion";
import { Magnet } from "../components/Interactive";

export default function Contact() {
  const [copied, setCopied] = useState(false);

  function copyEmail() {
    navigator.clipboard?.writeText(CONTACT.email).then(
      () => {
        setCopied(true);
        setTimeout(() => setCopied(false), 1800);
      },
      () => (window.location.href = "mailto:" + CONTACT.email)
    );
  }

  return (
    <>
      {/* Direction */}
      <section className="section direction" id="direction">
        <div className="wrap">
          <Reveal>
            <span className="section-label light">06 — Direction</span>
            <h2 className="h2" style={{ color: "#fff" }}>
              다음 판.
            </h2>
          </Reveal>
          <div className="direction-body">
            {DIRECTION.paras.map((p, i) => (
              <Reveal key={i} delay={i * 0.1}>
                <p className="direction-para">{p}</p>
              </Reveal>
            ))}
            <Reveal delay={0.3}>
              <p className="direction-final">
                <ShinyText>
                  {DIRECTION.final[0]}
                  <br />
                  {DIRECTION.final[1]}
                </ShinyText>
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section className="section contact" id="contact">
        <div className="wrap">
          <Reveal>
            <span className="section-label light">07 — Contact</span>
            <h2 className="h2 contact-title" style={{ color: "#fff" }}>
              <SplitText text="함께" />
              <br />
              <SplitText text="만들어가고" delay={0.15} />
              <br />
              <SplitText text="싶습니다." delay={0.3} />
            </h2>
          </Reveal>

          <div className="contact-links">
            <Magnet strength={0.25}>
              <button className={`contact-link glass ${copied ? "copied" : ""}`} onClick={copyEmail}>
                <span className="contact-key">EMAIL</span>
                <span className="contact-val">{CONTACT.email}</span>
                <span className="contact-hint">{copied ? "복사되었습니다!" : "클릭하면 복사됩니다"}</span>
              </button>
            </Magnet>
            <Magnet strength={0.25}>
              <a
                className="contact-link glass"
                href={`https://${CONTACT.github}`}
                target="_blank"
                rel="noopener"
              >
                <span className="contact-key">GITHUB</span>
                <span className="contact-val">{CONTACT.github}</span>
                <span className="contact-hint">새 탭으로 열립니다</span>
              </a>
            </Magnet>
          </div>

          <footer className="footer">
            <span>박진한 · IT Product Planner</span>
            <span>Chonnam National University · 2026</span>
          </footer>
        </div>
      </section>
    </>
  );
}

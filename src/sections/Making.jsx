import { MAKING, PEOPLE } from "../data";
import { SplitText } from "../components/TextEffects";
import { Reveal } from "../components/Motion";
import { TiltedCard } from "../components/Interactive";

export default function Making() {
  return (
    <section className="section" id="making">
      <div className="wrap">
        <Reveal>
          <span className="section-label">04 — Making</span>
          <h2 className="h2">
            <SplitText text="손으로 만든" />
            <br />
            <SplitText text="것들." delay={0.2} />
          </h2>
          <p className="section-sub">
            기획서 바깥에서 만든 결과물입니다. 카드뉴스부터 하드웨어까지 직접 제작했습니다.
          </p>
        </Reveal>

        <div className="making-grid">
          {MAKING.map((m, i) => (
            <Reveal key={i} delay={i * 0.06} className={m.tall ? "making-tall" : ""}>
              <TiltedCard max={10}>
                <div className="ph making-item">
                  <span>{m.cap}</span>
                </div>
              </TiltedCard>
            </Reveal>
          ))}
        </div>

        {/* People 브릿지 */}
        <Reveal>
          <span className="section-label" style={{ marginTop: 80 }}>
            05 — People
          </span>
          <h2 className="h2" style={{ fontSize: "clamp(30px,5vw,60px)" }}>
            어느 판에나 사람이 있었습니다.
          </h2>
        </Reveal>
        <div className="people-grid">
          {PEOPLE.map((p, i) => (
            <Reveal key={i} delay={i * 0.08}>
              <div className="people-card glass">
                <div className="ph people-ph">
                  <span>사진 자리</span>
                </div>
                <p className="people-msg">{p.msg}</p>
                <span className="people-org">{p.org}</span>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

import { PROJECTS } from "../data";
import { SplitText } from "../components/TextEffects";
import { Reveal } from "../components/Motion";
import { SpotlightCard } from "../components/Interactive";

export default function Projects({ onOpen }) {
  return (
    <section className="section" id="projects">
      <div className="wrap">
        <Reveal>
          <span className="section-label">03 — Projects</span>
          <h2 className="h2">
            <SplitText text="결론부터 말하는" />
            <br />
            <SplitText text="프로젝트 다섯." delay={0.2} />
          </h2>
        </Reveal>

        <div className="project-list">
          {PROJECTS.map((p, i) => (
            <Reveal key={i} delay={i * 0.06}>
              <SpotlightCard
                className="project-row glass"
                style={{ cursor: "pointer" }}
              >
                <button className="project-hit" onClick={() => onOpen(p)}>
                  <span className="badge">{p.badge}</span>
                  <span className="project-name">{p.name}</span>
                  <span className="project-oneline">{p.oneline}</span>
                  <span className="project-arrow">↗</span>
                </button>
              </SpotlightCard>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

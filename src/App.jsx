import { useEffect, useRef, useState } from "react";
import { NAV } from "./data";
import Aurora from "./components/Aurora";
import Cursor from "./components/Cursor";
import BlurIntro from "./components/BlurIntro";
import Dock from "./components/Dock";
import SideIndex from "./components/SideIndex";
import ProjectModal from "./components/ProjectModal";
import { ClickSpark } from "./components/Interactive";
import Hero from "./sections/Hero";
import Proof from "./sections/Proof";
import Journey from "./sections/Journey";
import Projects from "./sections/Projects";
import Making from "./sections/Making";
import Contact from "./sections/Contact";
import "./app.css";

export default function App() {
  const [active, setActive] = useState("hero");
  const [modal, setModal] = useState(null);
  const scrollRef = useRef(null);

  function navigate(id) {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
  }

  // 현재 섹션 추적
  useEffect(() => {
    const ids = NAV.map((n) => n.id).concat(["making", "direction"]);
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActive(e.target.id);
        });
      },
      { rootMargin: "-45% 0px -45% 0px" }
    );
    ids.forEach((id) => {
      const el = document.getElementById(id);
      if (el) io.observe(el);
    });
    return () => io.disconnect();
  }, []);

  return (
    <>
      <Aurora />
      <div className="grain" aria-hidden />
      <Cursor />
      <BlurIntro />
      <ClickSpark />

      <SideIndex items={NAV} active={active} onNavigate={navigate} />

      <main ref={scrollRef}>
        <Hero />
        <Proof />
        <Journey />
        <Projects onOpen={setModal} />
        <Making />
        <Contact />
      </main>

      <Dock items={NAV} onNavigate={navigate} />
      <ProjectModal project={modal} onClose={() => setModal(null)} />
    </>
  );
}

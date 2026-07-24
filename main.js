/* =========================================================
   박진한 Portfolio 2026 — interactions
   ========================================================= */

/* ---------- 1. 등장 애니메이션 (reveal) ---------- */
const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((e) => {
      if (e.isIntersecting) {
        e.target.classList.add("in");
        revealObserver.unobserve(e.target);
      }
    });
  },
  { threshold: 0.15 }
);
document.querySelectorAll(".reveal").forEach((el) => revealObserver.observe(el));

/* ---------- 2. 숫자 카운트업 ---------- */
function countUp(el) {
  const target = parseInt(el.dataset.count, 10);
  const suffix = el.dataset.suffix || "";
  const dur = 1200;
  const start = performance.now();
  function tick(now) {
    const p = Math.min((now - start) / dur, 1);
    const eased = 1 - Math.pow(1 - p, 3);
    el.textContent = Math.round(target * eased) + suffix;
    if (p < 1) requestAnimationFrame(tick);
  }
  requestAnimationFrame(tick);
}
const countObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((e) => {
      if (e.isIntersecting) {
        countUp(e.target);
        countObserver.unobserve(e.target);
      }
    });
  },
  { threshold: 0.6 }
);
document.querySelectorAll("[data-count]").forEach((el) => countObserver.observe(el));

/* ---------- 3. 배경색 전환 (챕터/섹션별) ---------- */
const DARK_BGS = ["#101322"];
const bgSections = document.querySelectorAll("[data-bg]");
const bgObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((e) => {
      if (e.isIntersecting) {
        const bg = e.target.dataset.bg;
        document.body.style.backgroundColor = bg;
        document.body.classList.toggle("on-dark", DARK_BGS.includes(bg));
      }
    });
  },
  { rootMargin: "-40% 0px -55% 0px" }
);
bgSections.forEach((el) => bgObserver.observe(el));

/* ---------- 4. 점 네비 활성화 ---------- */
const dotLinks = document.querySelectorAll(".dotnav a");
const dotTargets = [...dotLinks].map((a) => document.querySelector(a.getAttribute("href")));
const dotObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((e) => {
      if (e.isIntersecting) {
        const idx = dotTargets.indexOf(e.target);
        if (idx > -1) {
          dotLinks.forEach((d) => d.classList.remove("active"));
          dotLinks[idx].classList.add("active");
        }
      }
    });
  },
  { rootMargin: "-45% 0px -45% 0px" }
);
dotTargets.forEach((t) => t && dotObserver.observe(t));

/* ---------- 5. 헤더 스크롤 상태 ---------- */
const topbar = document.querySelector(".topbar");
window.addEventListener("scroll", () => {
  topbar.classList.toggle("scrolled", window.scrollY > 30);
}, { passive: true });

/* ---------- 6. 프로젝트 아코디언 ---------- */
document.querySelectorAll(".project-head").forEach((btn) => {
  btn.addEventListener("click", () => {
    const project = btn.closest(".project");
    const detail = project.querySelector(".project-detail");
    const isOpen = project.classList.contains("open");

    // 다른 항목 닫기
    document.querySelectorAll(".project.open").forEach((p) => {
      if (p !== project) {
        p.classList.remove("open");
        p.querySelector(".project-detail").style.maxHeight = null;
        p.querySelector(".project-head").setAttribute("aria-expanded", "false");
      }
    });

    project.classList.toggle("open", !isOpen);
    btn.setAttribute("aria-expanded", String(!isOpen));
    detail.style.maxHeight = !isOpen ? detail.scrollHeight + "px" : null;
  });
});

/* ---------- 6.5 실제 현장 사진 토글 ---------- */
document.querySelectorAll(".real-toggle").forEach((btn) => {
  btn.addEventListener("click", () => {
    const wrap = btn.closest(".real-photos");
    const grid = wrap.querySelector(".real-grid");
    const open = wrap.classList.toggle("open");
    btn.setAttribute("aria-expanded", String(open));
    if (open) {
      grid.hidden = false;
    } else {
      grid.hidden = true;
    }
  });
});

/* ---------- 7. 라이트박스 (사진 자리 확대) ---------- */
const lightbox = document.getElementById("lightbox");
const lightboxInner = lightbox.querySelector(".lightbox-inner");
document.querySelectorAll(".ph").forEach((ph) => {
  ph.addEventListener("click", () => {
    const label = ph.dataset.ph || "사진";
    const img = ph.querySelector("img");
    lightboxInner.innerHTML = "";
    if (img) {
      const big = img.cloneNode();
      big.style.position = "static";
      big.style.objectFit = "contain";
      big.style.maxHeight = "80vh";
      lightboxInner.appendChild(big);
    } else {
      lightboxInner.textContent = label + " — 실제 이미지로 교체 예정입니다.";
    }
    lightbox.hidden = false;
    document.body.style.overflow = "hidden";
  });
});
function closeLightbox() {
  lightbox.hidden = true;
  document.body.style.overflow = "";
}
lightbox.addEventListener("click", (e) => {
  if (e.target === lightbox || e.target.classList.contains("lightbox-close")) closeLightbox();
});
window.addEventListener("keydown", (e) => {
  if (e.key === "Escape" && !lightbox.hidden) closeLightbox();
});

/* ---------- 8. 히어로 3D 캐릭터 순환 ---------- */
(function charRotator() {
  const stage = document.getElementById("charStage");
  if (!stage) return;

  const slides = [...stage.querySelectorAll(".char-slide")];
  const roleEl = document.getElementById("charRole");
  const dotsEl = document.getElementById("charDots");
  let idx = 0;
  let timer = null;
  const INTERVAL = 3800;

  // 인디케이터 생성
  slides.forEach((_, i) => {
    const b = document.createElement("button");
    b.type = "button";
    b.setAttribute("aria-label", `${i + 1}번째 모습 보기`);
    b.addEventListener("click", () => {
      show(i);
      restart();
    });
    dotsEl.appendChild(b);
  });
  const dots = [...dotsEl.children];

  function show(i) {
    const prev = idx;
    idx = i;
    slides.forEach((s, n) => {
      const on = n === i;
      // 직전 활성 슬라이드는 '나가는' 모션을 주고, 나머지는 대기 상태로
      if (n === prev && prev !== i) {
        s.classList.remove("active");
        s.classList.add("leaving");
        // 전환이 끝나면 대기 상태로 복귀 (다음 등장 준비)
        setTimeout(() => s.classList.remove("leaving"), 700);
      } else if (on) {
        s.classList.remove("leaving");
        s.classList.add("active");
      } else {
        s.classList.remove("active", "leaving");
      }
      // 영상을 넣은 경우: 보이는 슬라이드만 재생합니다
      const v = s.querySelector("video");
      if (v) {
        if (on) { v.currentTime = 0; v.play().catch(() => {}); }
        else v.pause();
      }
    });
    dots.forEach((d, n) => d.classList.toggle("on", n === i));
    // 캡션 부드럽게 교체
    roleEl.style.opacity = "0";
    setTimeout(() => {
      roleEl.textContent = slides[i].dataset.role || "";
      roleEl.style.opacity = "1";
    }, 250);
  }

  function next() { show((idx + 1) % slides.length); }
  function restart() {
    clearInterval(timer);
    timer = setInterval(next, INTERVAL);
  }

  show(0);

  // 화면에 보일 때만 순환 (성능)
  const heroObserver = new IntersectionObserver((entries) => {
    entries.forEach((e) => {
      if (e.isIntersecting) restart();
      else clearInterval(timer);
    });
  }, { threshold: 0.2 });
  heroObserver.observe(stage);
})();

/* ---------- 9. 이메일 복사 ---------- */
const emailBtn = document.getElementById("copyEmail");
if (emailBtn) {
  emailBtn.addEventListener("click", async () => {
    try {
      await navigator.clipboard.writeText(emailBtn.dataset.email);
      const hint = emailBtn.querySelector(".copy-hint");
      const original = hint.textContent;
      emailBtn.classList.add("copied");
      hint.textContent = "복사되었습니다!";
      setTimeout(() => {
        emailBtn.classList.remove("copied");
        hint.textContent = original;
      }, 1800);
    } catch (err) {
      window.location.href = "mailto:" + emailBtn.dataset.email;
    }
  });
}

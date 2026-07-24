// ============================================================
// 박진한 Portfolio — 콘텐츠 데이터 (원본 website 내용 이식)
// ============================================================

export const HERO = {
  acrostic: ["박차고 나가서", "진짜로 파고들어", "한계까지 완성합니다."],
  initials: ["박", "진", "한"],
  sub: "회로 납땜부터 서비스 배포까지 직접 해냅니다. 아이디어를 실물로 완성해 온 IT 프로덕트 기획자 박진한입니다.",
  stats: [
    { num: "8+", cap: "수상 · 표창" },
    { num: "2개국", cap: "자체 기획 해외 IT 탐방" },
    { num: "9+", cap: "완성까지 간 프로젝트" },
    { num: "NOW", cap: "의료영상 백엔드 인턴", accent: true },
  ],
};

export const PROOF_CARDS = [
  {
    badge: "최우수상",
    title: "스마트 도어락",
    desc: "납땜부터 앱까지 직접 만든 IoT 실물 제품입니다.",
    meta: "2025 AI기반창업 Jump-UP · 산학협력단장상",
  },
  {
    badge: "이사장상",
    title: "BizSpot AI",
    desc: "광주 공공데이터로 창업 입지를 분석하는 웹 서비스입니다.",
    meta: "제12회 광주 공공데이터 활용 창업경진대회 · 한국장학재단",
  },
  {
    badge: "총장 수여",
    title: "이달의 전남대인",
    desc: "전남대학교 총장이 직접 수여했습니다.",
    meta: "전남대학교 · 2025",
  },
];

export const PROOF_LIST = [
  { award: "은상", desc: "디지털 경진대회 AI부문 — 2026.05" },
  { award: "광주광역시장상", desc: "5.18 기념 AI 벽화 기획 — 2025 오월 광주 유공" },
  { award: "장려상", desc: "AI 디지털 명함 플랫폼 — SW중심대학 생성형AI 경진대회 · NHN Cloud" },
  { award: "장려상", desc: "AGENT-X INTEL — 학생창업유망팀 U300" },
  { award: "입선 ×2", desc: "세이프컨트랙트 · 알러지 식품 분석 — 전남대 창업아이템 경진대회" },
];

export const CHARACTERS = [
  { src: "assets/char-01-hoodie.jpeg", role: "게임을 만들 때" },
  { src: "assets/char-02-mural.jpeg", role: "벽화를 그릴 때" },
  { src: "assets/char-03-present.jpeg", role: "발표할 때" },
  { src: "assets/char-04-travel.jpeg", role: "바다를 건널 때" },
  { src: "assets/char-05-work.jpeg", role: "현업에 있을 때" },
];

export const CHAPTERS = [
  {
    num: "①",
    stage: "동아리 방에서",
    year: "2022",
    title: ["게임 하나를 완성하며", "시작했습니다."],
    paras: [
      "창업동아리 세미콜론에서 점프업 게임의 기획을 총괄했습니다. 동아리원을 캐릭터로 만들었고, 강의실을 배경에 그대로 옮겼고, 시험지와 과제를 장애물로 떨어뜨렸습니다.",
    ],
    quote: "동아리원들이 게임 속에서 자기 캐릭터를 찾아내며 웃었습니다.",
    tags: ["Unity", "C#", "Game Design", "PM"],
    img: "assets/char-01-hoodie.jpeg",
    real: ["점프업 게임 플레이", "개발 화면"],
    accent: "#2427ff",
  },
  {
    num: "②",
    stage: "캠퍼스로",
    year: "2025",
    title: ["떠올린 아이디어로,", "100만 원을 만들었습니다."],
    paras: [
      "총축제 콘텐츠팀장으로, 1,000원짜리 콘텐츠 여러 개를 직접 기획하고 만들고 섭외했습니다. 아이디어부터 판매까지 전 과정을 맡아 100만 원이 넘는 수익을 냈습니다.",
      "같은 해 총학생회 소통혁신국장으로는 5.18 기념 AI 벽화를 기획했습니다. AI 초안부터 섭외, 설치까지 끌고 가 36개 조각을 학생들의 손으로 완성했고, 광주광역시장상을 받았습니다.",
    ],
    quote: "아이디어를 떠올리고, 만들고, 파는 것까지 — 전부 제 손을 거쳤습니다.",
    tags: ["콘텐츠팀장", "100만 원 수익", "소통혁신국장", "광주시장상"],
    img: "assets/char-02-mural.jpeg",
    real: ["총축제 콘텐츠", "벽화 작업", "완성된 벽화"],
    accent: "#5b3df5",
  },
  {
    num: "③",
    stage: "도시로",
    year: "2026",
    title: ["어디서 창업하느냐가", "절반을 결정합니다."],
    paras: [
      "많은 창업이 아이템이 아니라 '자리'에서 갈립니다. 그런데 정작 필요한 정보는 광주시 여기저기에 흩어져 있었습니다. 그 데이터를 한곳에 모아, 어느 지역에 어떤 업종이 맞는지 분석했습니다.",
      "분석에서 끝내지 않고, 예비 창업자가 그 자리에서 바로 상담까지 받을 수 있게 이어 붙였습니다. 이 서비스로 한국장학재단 이사장상을 받았습니다.",
    ],
    quote: "데이터 분석의 끝을 예비 창업자의 상담 한 번으로 설계했습니다.",
    tags: ["React", "Kakao Map API", "Gemini API", "공공데이터"],
    img: "assets/char-03-present.jpeg",
    real: ["BizSpot AI 서비스 화면", "발표 · 시연"],
    accent: "#2478ff",
  },
  {
    num: "④",
    stage: "바다 건너로",
    year: "2022 · 2025",
    title: ["가고 싶은 곳은,", "직접 뚫었습니다."],
    paras: [
      "일본과 대만의 IT 기업 탐방은 누가 만들어 준 자리가 아닙니다. 현지 기업에 직접 메일을 보내 연계했고, 일정을 짜서 두 나라를 다녀왔습니다. 발로 뛰지 않았으면 없었을 경험입니다.",
      "다음 해외 무대도 이미 잡혀 있습니다. 현대자동차그룹 해피무브 글로벌 청년봉사단에 선발되어 파견을 준비하고 있습니다.",
    ],
    quote: "낯선 담당자의 답장 한 통이 프로그램 전체의 시작이었습니다.",
    tags: ["자체 기획", "일본", "대만", "해피무브"],
    img: "assets/char-04-travel.jpeg",
    real: ["일본 탐방", "대만 탐방"],
    accent: "#00b4d8",
  },
  {
    num: "⑤",
    stage: "산업 현장으로",
    year: "2026 — NOW",
    title: ["의료영상 전송 시스템을", "구축하고 있습니다."],
    paras: [
      "㈜달구 백엔드 인턴으로 현업에 있습니다. 회원 · 인증 · 게시판 REST API를 만들었고, Redis와 Kafka로 대용량 비동기 처리를 다루고 있고, Docker · AWS · GitLab CI/CD로 배포 자동화를 구축하고 있습니다.",
    ],
    quote: "이 시스템의 끝에는 진단 결과를 기다리는 환자가 있습니다.",
    tags: ["Spring Boot", "Redis · Kafka", "Docker · AWS", "CI/CD"],
    img: "assets/char-05-work.jpeg",
    real: ["시스템 아키텍처", "인턴십 현장"],
    accent: "#2427ff",
    dark: true,
  },
];

export const TIMELINE = [
  { year: "2022 —", desc: "세미콜론 창업동아리 — 게임 개발 · 창업 아이디어", ongoing: true },
  { year: "2025 —", desc: "한국지도자육성장학재단 56기 장학생", ongoing: true },
  { year: "2025 —", desc: "차세대혁신융합대학사업단 서포터즈", ongoing: true },
  { year: "2025", desc: "SW 교학상장 멘토 — 후배 학업 · 자격증 · 대회 멘토링", ongoing: false },
  { year: "2026", desc: "만들닷 — 일경험 프로그램 (한 학기 병행)", ongoing: false },
  { year: "2026 —", desc: "㈜달구 — 백엔드 개발 인턴십", ongoing: true },
];

export const PROJECTS = [
  {
    badge: "최우수상",
    name: "스마트 도어락",
    oneline: "잠금 불안 → 납땜부터 앱까지 직접 만든 IoT 도어락",
    objective: "기존 도어락은 외출 후 잠금 여부를 확인할 수 없습니다. 하드웨어·소프트웨어 전 과정을 직접 구현해 원격 모니터링이 가능한 실동작 제품으로 완성했습니다.",
    points: [
      "회로 설계 · 납땜부터 Fusion 360 케이스까지 직접 제작했습니다.",
      "센서 · 액추에이터를 통합 제어해 원격 모니터링과 알림을 구현했습니다.",
      "전시 · 시연이 가능한 실동작 제품으로 마감했습니다.",
    ],
    tags: ["Arduino", "C/C++", "IoT", "Fusion 360"],
    period: "2025 · 팀 프로젝트",
  },
  {
    badge: "이사장상",
    name: "BizSpot AI",
    oneline: "흩어진 공공데이터 → 창업 입지 분석 웹 서비스",
    objective: "흩어진 광주 공공데이터를 한 화면에 모아 창업 입지와 업종 적합도를 분석하는 웹 서비스. 분석이 상담으로 이어지는 사용자 흐름을 직접 구현했습니다.",
    points: [
      "Kakao Map API로 자치구 · 상권 입지 정보를 시각화했습니다.",
      "Gemini API를 연동해 분석 결과 기반 창업 상담을 구현했습니다.",
      "Vercel로 웹 MVP를 배포하고 시연 환경을 구축했습니다.",
    ],
    tags: ["React", "Kakao Map", "Gemini", "Vercel"],
    period: "2026 · 팀 프로젝트",
  },
  {
    badge: "현업",
    name: "의료영상 전송 시스템",
    oneline: "느린 수작업 전송 → 자동 압축 · 전송 파이프라인",
    objective: "용량이 큰 의료영상은 기관 간 전송이 느리고 수작업에 의존합니다. 자동 압축·전송 파이프라인을 백엔드부터 인프라까지 직접 구축하고 있습니다.",
    points: [
      "회원 · 인증(이메일) · 게시판 REST API와 DB를 구축했습니다.",
      "Redis 캐시와 Kafka · RabbitMQ로 대용량 비동기 처리를 구현하고 있습니다.",
      "Docker · AWS 배포와 GitLab CI/CD 파이프라인을 구축했습니다.",
    ],
    tags: ["Spring Boot", "MySQL · Redis", "Kafka", "Docker · AWS"],
    period: "2026.06 – 현재 · 인턴십",
  },
  {
    badge: "장려상",
    name: "AGENT-X INTEL",
    oneline: "AI 에이전트 거래 시장 부재 → B2A 플랫폼 전략",
    objective: "AI 에이전트는 급증하지만 이를 거래·연결하는 표준화된 마켓이 없습니다. 환각 감지 에이전트 SHDA를 첫 상품으로 B2A 플랫폼 전략을 설계했습니다.",
    points: [
      "환각 감지 에이전트 SHDA를 첫 상품으로 ACP 마켓 등록 전략을 세웠습니다.",
      "트랙션 확보 후 한국형 에이전트 거래 플랫폼으로 확장하는 로드맵을 설계했습니다.",
      "학생창업유망팀 U300 전국대회 진출 지원 프로그램에 선정되었습니다.",
    ],
    tags: ["AI Agent", "B2A", "Startup", "Business Strategy"],
    period: "2026 · 창업 프로젝트",
  },
  {
    badge: "장려상",
    name: "AI 디지털 명함 플랫폼",
    oneline: "명함 제작의 번거로움 → 생성형 AI 자동 완성",
    objective: "생성형 AI가 사용자 정보 입력만으로 디자인·카피를 자동 완성하는 디지털 명함 플랫폼을 NHN Cloud 인프라 위에서 구현했습니다.",
    points: [
      "정보 입력만으로 디자인 · 카피가 완성되는 파이프라인을 만들었습니다.",
      "링크 · QR 기반 즉시 공유로 네트워킹 경험을 개선했습니다.",
      "NHN Cloud 인프라 위에서 구현하고 배포했습니다.",
    ],
    tags: ["Generative AI", "NHN Cloud", "Figma", "Web"],
    period: "2025 · 팀 프로젝트",
  },
];

export const MAKING = [
  { cap: "카드뉴스 — 총학생회 · 기획 · 디자인 직접", tall: true },
  { cap: "행사 포스터 — 총축제 콘텐츠" },
  { cap: "스마트 도어락 — 납땜 · 케이스 제작" },
  { cap: "AI 벽화 — 36조각 · 학생 참여", tall: true },
  { cap: "3D 프린팅 시제품 — 만들닷" },
  { cap: "점프업 게임 — Unity" },
];

export const PEOPLE = [
  { msg: "후배가 첫 자격증을 땄습니다.", org: "SW 교학상장 멘토링" },
  { msg: "학생들의 손으로 36조각이 완성됐습니다.", org: "5.18 기념 AI 벽화" },
  { msg: "아이들이 첫 키트를 조립했습니다.", org: "만들닷 메이커 교육" },
  { msg: "다음 무대는 해외의 마을입니다.", org: "해피무브 글로벌 청년봉사단" },
];

export const DIRECTION = {
  paras: [
    "개발자와 같은 언어로 말하기 위해, 하드웨어부터 백엔드까지 직접 만들었습니다.",
    "지금은 현업에서 실제 제품이 만들어지고 배포되는 사이클을 배우고 있습니다.",
    "다음 판에서는 기술을 아는 기획으로, 팀이 만든 것이 사용자에게 닿는 순간까지 책임지겠습니다.",
  ],
  final: ["기술의 가치는 결국", "사람에게서 나옵니다."],
};

export const CONTACT = {
  email: "wlsgks630@naver.com",
  github: "github.com/nanjinhan",
};

// 하단 Dock 네비게이션
export const NAV = [
  { id: "hero", label: "홈", icon: "home" },
  { id: "proof", label: "성과", icon: "award" },
  { id: "journey", label: "여정", icon: "map" },
  { id: "projects", label: "프로젝트", icon: "grid" },
  { id: "making", label: "메이킹", icon: "sparkle" },
  { id: "contact", label: "연락", icon: "mail" },
];

// 기술 스택 (마퀴)
export const STACK = [
  "Figma", "Jira", "Agile", "Python", "Pandas", "React", "Kotlin",
  "Arduino", "Fusion 360", "Spring Boot", "MySQL", "Redis", "Kafka",
  "Docker", "AWS", "CI/CD", "Gemini", "GPT", "Claude",
];

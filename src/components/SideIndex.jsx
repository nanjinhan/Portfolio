/**
 * SideIndex — 좌측 세로 섹션 인덱스 (김민서 포폴의 OUVERTURE/EPILOGUE 참고)
 */
export default function SideIndex({ items, active, onNavigate }) {
  return (
    <nav className="side-index" aria-label="섹션 인덱스">
      {items.map((it) => (
        <button
          key={it.id}
          className={`side-dot ${active === it.id ? "on" : ""}`}
          onClick={() => onNavigate(it.id)}
          aria-label={it.label}
        >
          <span className="side-diamond" />
          <span className="side-label">{it.label}</span>
        </button>
      ))}
    </nav>
  );
}

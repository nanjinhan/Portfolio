import { motion, AnimatePresence } from "framer-motion";
import { useEffect } from "react";

/**
 * ProjectModal — 프로젝트 클릭 시 상세 (김민서 포폴의 Works 상세 모달 참고)
 */
export default function ProjectModal({ project, onClose }) {
  useEffect(() => {
    if (!project) return;
    const onKey = (e) => e.key === "Escape" && onClose();
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [project, onClose]);

  return (
    <AnimatePresence>
      {project && (
        <motion.div
          className="modal-backdrop"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
        >
          <motion.div
            className="modal glass"
            initial={{ opacity: 0, y: 40, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 40, scale: 0.96 }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            onClick={(e) => e.stopPropagation()}
          >
            <button className="modal-close" onClick={onClose} aria-label="닫기">
              ×
            </button>
            <div className="modal-head">
              <span className="modal-eyebrow">
                <span className="badge">{project.badge}</span> · {project.period}
              </span>
              <h3 className="modal-title">{project.name}</h3>
              <p className="modal-oneline">{project.oneline}</p>
            </div>

            <div className="modal-grid">
              <div className="modal-visual ph">
                <span>{project.name} — 이미지 자리</span>
              </div>
              <div className="modal-info">
                <div className="modal-block">
                  <span className="modal-block-label">DESIGN OBJECTIVE</span>
                  <p>{project.objective}</p>
                </div>
                <div className="modal-block">
                  <span className="modal-block-label">KEY DEVELOPMENT</span>
                  <ul>
                    {project.points.map((p, i) => (
                      <li key={i}>{p}</li>
                    ))}
                  </ul>
                </div>
                <div className="tags">
                  {project.tags.map((t) => (
                    <span className="tag" key={t}>
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

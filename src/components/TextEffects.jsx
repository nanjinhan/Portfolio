import { motion } from "framer-motion";

/**
 * SplitText — 글자 단위로 순차 등장 (ReactBits SplitText)
 */
export function SplitText({ text, className, delay = 0, stagger = 0.03 }) {
  const chars = [...text];
  return (
    <span className={className} aria-label={text} style={{ display: "inline-block" }}>
      {chars.map((c, i) => (
        <motion.span
          key={i}
          aria-hidden
          style={{ display: "inline-block", whiteSpace: c === " " ? "pre" : "normal" }}
          initial={{ y: "0.6em", opacity: 0, filter: "blur(6px)" }}
          whileInView={{ y: 0, opacity: 1, filter: "blur(0px)" }}
          viewport={{ once: true, margin: "-10%" }}
          transition={{ delay: delay + i * stagger, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
          {c === " " ? " " : c}
        </motion.span>
      ))}
    </span>
  );
}

/**
 * ShinyText — 메탈릭 반짝임이 흐르는 텍스트 (ReactBits ShinyText)
 */
export function ShinyText({ children, className }) {
  return <span className={`shiny ${className || ""}`}>{children}</span>;
}

/**
 * BlurText — 단어 단위로 블러에서 선명하게 (ReactBits BlurText)
 */
export function BlurText({ text, className, delay = 0 }) {
  const words = text.split(" ");
  return (
    <span className={className}>
      {words.map((w, i) => (
        <motion.span
          key={i}
          style={{ display: "inline-block", marginRight: "0.28em" }}
          initial={{ opacity: 0, filter: "blur(10px)", y: 8 }}
          whileInView={{ opacity: 1, filter: "blur(0px)", y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: delay + i * 0.08, duration: 0.6, ease: "easeOut" }}
        >
          {w}
        </motion.span>
      ))}
    </span>
  );
}

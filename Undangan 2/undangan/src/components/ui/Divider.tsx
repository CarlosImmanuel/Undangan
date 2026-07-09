import { motion } from "motion/react";
import { GOLD } from "@/lib/data";

export default function Divider() {
  return (
    <motion.div className="flex items-center gap-4 my-5"
      initial={{ scaleX: 0, opacity: 0 }} whileInView={{ scaleX: 1, opacity: 1 }}
      viewport={{ once: true }} transition={{ duration: 0.7 }}>
      <div className="flex-1 h-px" style={{ background: `linear-gradient(to right, transparent, ${GOLD}60)` }} />
      <svg viewBox="0 0 16 16" width="10" height="10"><path d="M8 0l1.5 6.5L16 8l-6.5 1.5L8 16l-1.5-6.5L0 8l6.5-1.5Z" fill={GOLD} /></svg>
      <div className="flex-1 h-px" style={{ background: `linear-gradient(to left, transparent, ${GOLD}60)` }} />
    </motion.div>
  );
}

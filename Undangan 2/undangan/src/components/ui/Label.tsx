import { motion } from "motion/react";
import { GOLD } from "@/lib/data";

export default function Label({ children }: { children: string }) {
  return (
    <motion.p
      className="text-[10px] sm:text-[11px] tracking-[0.4em] uppercase mb-3"
      style={{ color: GOLD, fontFamily: "'Cinzel', serif" }}
      initial={{ opacity: 0, y: 8 }} whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }} transition={{ duration: 0.5 }}
    >
      {children}
    </motion.p>
  );
}

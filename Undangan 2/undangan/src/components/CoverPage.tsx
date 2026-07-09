import { useState } from "react";
import { motion } from "motion/react";
import { Heart, ArrowRight } from "lucide-react";
import { DARK, GOLD, ROSE, CREAM, BOKEH } from "@/lib/data";

export default function CoverPage({ onOpen }: { onOpen: () => void }) {
  const [hovered, setHovered] = useState(false);

  return (
    <motion.div
      key="cover"
      className="fixed inset-0 z-50 flex items-center justify-center overflow-hidden"
      style={{ background: DARK }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, scale: 1.06, transition: { duration: 0.75, ease: [0.76, 0, 0.24, 1] } }}
    >
      {/* Faint background photo */}
      <div className="absolute inset-0">
        <img
          src="/images/Slideshow1.JPG"
          alt=""
          className="w-full h-full object-cover opacity-[0.08]"
        />
      </div>

      {/* Bokeh orbs */}
      {BOKEH.map(b => (
        <motion.div key={b.id}
          className="absolute rounded-full pointer-events-none"
          style={{ width: b.w, height: b.w, left: b.left, top: b.top, background: `radial-gradient(circle, ${b.color}, transparent 70%)`, filter: "blur(40px)" }}
          animate={{ scale: [1, 1.25, 1], opacity: [0.6, 1, 0.6] }}
          transition={{ duration: b.dur, repeat: Infinity, delay: b.delay, ease: "easeInOut" }}
        />
      ))}

      {/* ── Main content ── */}
      <div className="relative z-10 text-center px-8 w-full max-w-xl mx-auto flex flex-col items-center">

        {/* Bismillah */}
        <motion.p
          className="text-sm sm:text-base mb-5"
          style={{ color: GOLD, fontStyle: "italic" }}
          initial={{ opacity: 0, y: -12 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2, duration: 0.8 }}
        >
        </motion.p>

        {/* Top decorative line */}
        <motion.div className="flex items-center gap-3 w-full max-w-xs mb-6"
          initial={{ scaleX: 0, opacity: 0 }} animate={{ scaleX: 1, opacity: 1 }} transition={{ delay: 0.4, duration: 0.7 }}>
          <div className="flex-1 h-px" style={{ background: `linear-gradient(to right, transparent, ${GOLD}80)` }} />
          <svg viewBox="0 0 12 12" width="8" height="8"><path d="M6 0l1.2 4.8L12 6l-4.8 1.2L6 12l-1.2-4.8L0 6l4.8-1.2Z" fill={GOLD} /></svg>
          <div className="flex-1 h-px" style={{ background: `linear-gradient(to left, transparent, ${GOLD}80)` }} />
        </motion.div>

        {/* Typographic date */}
        <motion.div className="mb-6"
          initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5, duration: 0.8 }}>
          <p className="text-[9px] sm:text-[10px] tracking-[0.6em] uppercase mb-2" style={{ color: `${CREAM}50`, fontFamily: "'Cinzel', serif" }}>
            Undangan Pernikahan
          </p>
          <div className="flex items-end justify-center gap-3 sm:gap-4">
            <p className="text-6xl sm:text-7xl lg:text-8xl font-bold leading-none" style={{ color: CREAM, fontFamily: "'Playfair Display', serif" }}>
              06
            </p>
            <div className="pb-2 text-left">
              <p className="text-xs sm:text-sm tracking-[0.25em] uppercase leading-snug" style={{ color: `${CREAM}AA`, fontFamily: "'Cinzel', serif" }}>September</p>
              <p className="text-xs sm:text-sm tracking-[0.25em]" style={{ color: `${CREAM}55`, fontFamily: "'Cinzel', serif" }}>2026</p>
            </div>
          </div>
        </motion.div>

        {/* Couple photos + heart */}
        <motion.div className="flex items-center gap-5 sm:gap-7 mb-6"
          initial={{ opacity: 0, scale: 0.85 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.65, duration: 0.8 }}>
          <motion.div
            className="relative rounded-full overflow-hidden flex-shrink-0"
            style={{ width: 72, height: 72, border: `1.5px solid ${GOLD}80` }}
            whileHover={{ scale: 1.06 }}
          >
            <img src="/images/FotoGallery4.JPG" alt="Mustopa" className="w-full h-full object-cover" />
            <div className="absolute inset-0 rounded-full" style={{ boxShadow: `inset 0 0 0 1px ${GOLD}30` }} />
          </motion.div>

          <motion.div animate={{ scale: [1, 1.2, 1] }} transition={{ duration: 1.5, repeat: Infinity }}>
            <Heart className="w-5 h-5" style={{ color: ROSE, fill: ROSE }} />
          </motion.div>

          <motion.div
            className="relative rounded-full overflow-hidden flex-shrink-0"
            style={{ width: 72, height: 72, border: `1.5px solid ${GOLD}80` }}
            whileHover={{ scale: 1.06 }}
          >
            <img src="/images/FotoGallery5.PNG" alt="Firsta" className="w-full h-full object-cover" />
            <div className="absolute inset-0 rounded-full" style={{ boxShadow: `inset 0 0 0 1px ${GOLD}30` }} />
          </motion.div>
        </motion.div>

        {/* Names */}
        <motion.div className="mb-2 overflow-visible"
          initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.8, duration: 0.9 }}>
          <p className="shimmer-name overflow-visible py-2"
            style={{ fontFamily: "'Great Vibes', cursive", fontSize: "clamp(2.8rem, 10vw, 4.5rem)", lineHeight: 1.2 }}>
            Mustopa &amp; Firsta
          </p>
        </motion.div>

        <motion.p className="text-[10px] sm:text-xs tracking-[0.2em] mb-8" style={{ color: `${CREAM}45`, fontFamily: "'Cinzel', serif" }}
          initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1, duration: 0.7 }}>
          MUSTOPA ABDUL MAJID, S.E &nbsp;·&nbsp; NS. FIRSTA HILWA, S.KEP
        </motion.p>

        {/* CTA button */}
        <motion.div
          initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1.2, duration: 0.7 }}
        >
          <motion.button
            onClick={onOpen}
            onHoverStart={() => setHovered(true)}
            onHoverEnd={() => setHovered(false)}
            className="relative overflow-hidden group px-10 py-4"
            style={{ border: `1px solid ${GOLD}60` }}
            whileTap={{ scale: 0.97 }}
          >
            {/* Fill on hover */}
            <motion.div
              className="absolute inset-0 pointer-events-none"
              style={{ background: GOLD, transformOrigin: "left center" }}
              initial={{ scaleX: 0 }}
              animate={{ scaleX: hovered ? 1 : 0 }}
              transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            />
            <span
              className="relative z-10 flex items-center gap-3 text-xs tracking-[0.35em] uppercase transition-colors duration-300"
              style={{ fontFamily: "'Cinzel', serif", color: hovered ? DARK : CREAM }}
            >
              Open Invitation
              <motion.div animate={{ x: hovered ? 4 : 0 }} transition={{ duration: 0.2 }}>
                <ArrowRight className="w-3.5 h-3.5" />
              </motion.div>
            </span>
          </motion.button>
        </motion.div>

        {/* Bottom line */}
        <motion.div className="flex items-center gap-3 w-full max-w-xs mt-8"
          initial={{ scaleX: 0, opacity: 0 }} animate={{ scaleX: 1, opacity: 1 }} transition={{ delay: 1.4, duration: 0.7 }}>
          <div className="flex-1 h-px" style={{ background: `linear-gradient(to right, transparent, ${GOLD}40)` }} />
          <p className="text-[9px] tracking-widest" style={{ color: `${GOLD}60`, fontFamily: "'Cinzel', serif" }}>
            YEYEP &nbsp;·&nbsp; DJUMINO
          </p>
          <div className="flex-1 h-px" style={{ background: `linear-gradient(to left, transparent, ${GOLD}40)` }} />
        </motion.div>
      </div>
    </motion.div>
  );
}

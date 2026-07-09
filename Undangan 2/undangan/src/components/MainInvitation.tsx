import { useRef, useState } from "react";
import { motion } from "motion/react";
import { Camera, MapPin, Heart, ExternalLink, Calendar, Clock, ChevronDown } from "lucide-react";
import { DARK, CREAM, GOLD, ROSE, GALLERY, TURUT } from "@/lib/data";
import Label from "@/components/ui/Label";
import Divider from "@/components/ui/Divider";

export default function MainInvitation() {
  const heroInputRef = useRef<HTMLInputElement>(null);
  const [heroPhoto, setHeroPhoto] = useState<string | null>(null);
  const handleHeroUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const f = e.target.files?.[0];
    if (f) { const r = new FileReader(); r.onload = ev => setHeroPhoto(ev.target?.result as string); r.readAsDataURL(f); }
  };
  const heroBg = heroPhoto || "/images/Slideshow1.JPG";
  const closingBg = "/images/CoverAkhir.PNG";
  const alamat = "Jl. Raya Bojong, RT.1/RW.2, Bojong, Kec. Kemang, Kabupaten Bogor, Jawa Barat 16310";
  const mapsUrl = `https://maps.google.com/?q=${encodeURIComponent(alamat)}`;
  const qrSrc = `https://api.qrserver.com/v1/create-qr-code/?size=200x200&margin=8&color=0D0608&bgcolor=FDF8EF&data=${encodeURIComponent(mapsUrl)}`;

  return (
    <motion.div
      key="main"
      initial={{ opacity: 0 }} animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      style={{ background: DARK, color: CREAM, fontFamily: "'EB Garamond', serif" }}
    >

      {/* ── HERO ── */}
      <section className="relative min-h-screen flex flex-col items-center justify-center" style={{ overflow: "clip" }}>
        <div className="absolute inset-0">
          <img src={heroBg} alt="Hero" className="w-full h-full object-cover opacity-30" />
          <div className="absolute inset-0" style={{ background: "linear-gradient(to bottom, rgba(13,6,8,.5) 0%, rgba(13,6,8,.2) 40%, rgba(13,6,8,.85) 100%)" }} />
        </div>

        {/* Floating orbs */}
        {[0, 1, 2].map(i => (
          <motion.div key={i} className="absolute rounded-full pointer-events-none"
            style={{
              width: 120 + i * 60, height: 120 + i * 60, left: `${20 + i * 25}%`, top: `${15 + i * 20}%`,
              background: `radial-gradient(circle, ${GOLD}18, transparent 70%)`
            }}
            animate={{ scale: [1, 1.3, 1], opacity: [.3, .7, .3] }}
            transition={{ duration: 4 + i, repeat: Infinity, delay: i * .8 }} />
        ))}

        <div className="relative z-10 text-center px-6 max-w-3xl mx-auto py-20">
          <motion.p className="text-sm sm:text-base mb-5 anim-bob"
            style={{ color: GOLD, fontStyle: "italic" }}
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: .3 }}>
          </motion.p>

          <motion.p className="text-[11px] tracking-[0.5em] uppercase mb-6"
            style={{ color: `${CREAM}80`, fontFamily: "'Cinzel', serif" }}
            initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: .5 }}>
            Undangan Pernikahan
          </motion.p>

          <motion.h1
            className="shimmer-name overflow-visible pt-3 pb-1 mb-1"
            style={{ fontFamily: "'Great Vibes', cursive", fontSize: "clamp(4rem, 14vw, 7rem)", lineHeight: 1.15 }}
            initial={{ opacity: 0, x: -60 }} animate={{ opacity: 1, x: 0 }}
            transition={{ delay: .7, duration: .9, ease: [0.22, 1, 0.36, 1] }}>
            Mustopa
          </motion.h1>

          <motion.div className="flex items-center justify-center gap-5 my-2"
            initial={{ opacity: 0, scale: 0 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: .9 }}>
            <div className="h-px w-12 sm:w-20" style={{ background: `linear-gradient(to right, transparent, ${GOLD})` }} />
            <motion.svg viewBox="0 0 20 20" width="16" height="16"
              animate={{ rotate: 360 }} transition={{ duration: 9, repeat: Infinity, ease: "linear" }}>
              <path d="M10 0L11.8 8.2L20 10L11.8 11.8L10 20L8.2 11.8L0 10L8.2 8.2Z" fill={GOLD} />
            </motion.svg>
            <div className="h-px w-12 sm:w-20" style={{ background: `linear-gradient(to left, transparent, ${GOLD})` }} />
          </motion.div>

          <motion.h1
            className="shimmer-name overflow-visible pt-2 pb-1"
            style={{ fontFamily: "'Great Vibes', cursive", fontSize: "clamp(4rem, 14vw, 7rem)", lineHeight: 1.15 }}
            initial={{ opacity: 0, x: 60 }} animate={{ opacity: 1, x: 0 }}
            transition={{ delay: .8, duration: .9, ease: [0.22, 1, 0.36, 1] }}>
            Firsta
          </motion.h1>

          <motion.div className="inline-flex items-center gap-2 mt-8 px-6 py-3"
            style={{ border: `1px solid ${GOLD}50`, background: `${GOLD}12`, backdropFilter: "blur(8px)" }}
            initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1.2 }}>
            <Calendar className="w-3.5 h-3.5" style={{ color: GOLD }} />
            <span className="text-xs sm:text-sm tracking-widest" style={{ fontFamily: "'Cinzel', serif" }}>
              MINGGU, 06 SEPTEMBER 2026
            </span>
          </motion.div>

          <motion.div className="mt-5 space-y-0.5"
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.4 }}>
            <p className="text-xs sm:text-sm" style={{ color: `${CREAM}70` }}>
              Putra: <span style={{ color: `${CREAM}95` }}>Bpk. Ustd. Yeyep Abu Bakar Soleh &amp; Ibu Siti Rohimah</span>
            </p>
            <p className="text-xs sm:text-sm" style={{ color: `${CREAM}70` }}>
              Putri: <span style={{ color: `${CREAM}95` }}>Bpk. Djumino &amp; Ibu Aenah</span>
            </p>
          </motion.div>
        </div>

        <motion.div className="absolute bottom-8 flex flex-col items-center gap-2"
          initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.8 }}
          style={{ animation: "scrollBounce 1.6s ease-in-out infinite" }}>
          <p className="text-[9px] tracking-[0.5em]" style={{ color: `${GOLD}80`, fontFamily: "'Cinzel', serif" }}>SCROLL</p>
          <ChevronDown className="w-4 h-4" style={{ color: GOLD }} />
        </motion.div>
      </section>

      {/* ── OPENING QUOTE ── */}
      <section className="py-16 sm:py-24 px-6" style={{ background: "#110508" }}>
        <div className="max-w-2xl mx-auto text-center">
          <Divider />
          <motion.p className="text-base sm:text-lg lg:text-xl leading-loose italic"
            style={{ color: `${CREAM}BB` }}
            initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }} transition={{ duration: .7 }}>
            &ldquo;Di antara tanda-tanda (kebesaran)-Nya ialah bahwa Dia menciptakan pasangan-pasangan untukmu dari (jenis) dirimu sendiri agar kamu merasa tenteram kepadanya. Dia menjadikan di antaramu rasa cinta dan kasih sayang. Sesungguhnya pada yang demikian itu benar-benar terdapat tanda-tanda (kebesaran Allah) bagi kaum yang berpikir.&rdquo;
          </motion.p>
          <motion.p className="mt-3 text-xs sm:text-sm" style={{ color: GOLD, fontFamily: "'Cinzel', serif" }}
            initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: .3 }}>
            QS. Ar-Rum : 21
          </motion.p>
          <Divider />
        </div>
      </section>

      {/* ── GALLERY ── */}
      <section className="py-10 sm:py-16 px-4 sm:px-8 relative overflow-hidden" style={{ background: DARK }}>
        <div className="max-w-3xl mx-auto">

          <div className="text-center mb-10 sm:mb-14">
            <Label>Momen Berharga</Label>
            <motion.h2
              className="text-2xl sm:text-3xl"
              style={{ fontFamily: "'Playfair Display', serif", color: CREAM }}
              initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }} transition={{ delay: 0.2, duration: 0.7 }}
            >
              Kisah Cinta Kami
            </motion.h2>
          </div>

          <div className="space-y-10 sm:space-y-16">
            {GALLERY.map((item, i) => (
              <motion.div
                key={item.id}
                className={`flex flex-col ${item.dir === "right" ? "sm:flex-row-reverse" : "sm:flex-row"} items-center gap-6 sm:gap-10`}
                initial={{ opacity: 0, x: item.dir === "left" ? -100 : 100 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
              >
                {/* Photo */}
                <motion.div
                  className="relative flex-shrink-0 w-full sm:w-auto"
                  whileHover={{ scale: 1.03 }}
                  transition={{ duration: 0.4 }}
                >
                  {/* Spinning outer ring */}
                  <motion.div
                    className="absolute pointer-events-none"
                    style={{
                      inset: -6,
                      background: `conic-gradient(from 0deg, ${GOLD}, transparent 30%, ${ROSE}88, transparent 60%, ${GOLD})`,
                      opacity: 0.5,
                      borderRadius: 4,
                    }}
                    animate={{ rotate: 360 }}
                    transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                  />
                  {/* White gap */}
                  <div className="absolute inset-0 z-10 pointer-events-none"
                    style={{ border: `4px solid ${DARK}`, borderRadius: 2 }} />
                  {/* Image */}
                  <div className="relative z-0 overflow-hidden"
                    style={{ width: "100%", maxWidth: 280, height: 340, margin: "0 auto" }}>
                    <img
                      src={item.url}
                      alt={item.caption}
                      className="w-full h-full object-cover"
                      style={{ filter: "brightness(0.92) contrast(1.05)" }}
                    />
                    {/* Gold overlay gradient */}
                    <div className="absolute inset-0"
                      style={{ background: `linear-gradient(to top, rgba(13,6,8,0.8) 0%, transparent 50%)` }} />
                  </div>
                </motion.div>

                {/* Text */}
                <motion.div
                  className={`text-center sm:text-${item.dir === "right" ? "right" : "left"} flex-1 px-2`}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.4 }}
                  transition={{ delay: 0.3, duration: 0.7 }}
                >
                  {/* Number */}
                  <p className="text-5xl sm:text-6xl font-bold mb-2 leading-none"
                    style={{ color: GOLD, fontFamily: "'Playfair Display', serif" }}>
                    0{i + 1}
                  </p>
                  <h3 className="text-xl sm:text-2xl leading-snug mb-3"
                    style={{ fontFamily: "'Great Vibes', cursive", color: GOLD, fontSize: "clamp(1.8rem, 6vw, 2.2rem)" }}>
                    {item.caption}
                  </h3>
                  <p className="text-sm leading-relaxed" style={{ color: `${CREAM}99`, fontFamily: "'EB Garamond', serif" }}>
                    {item.sub}
                  </p>
                  <div className={`mt-4 flex ${item.dir === "right" ? "sm:justify-end" : "sm:justify-start"} justify-center`}>
                    <div className="h-0.5 w-12" style={{ background: GOLD }} />
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── RESEPSI DETAIL ── */}
      <section className="py-16 sm:py-24 px-6 sm:px-10" style={{ background: "#110508" }}>
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12 sm:mb-16">
            <Label>Informasi Acara</Label>
            <motion.h2 className="text-3xl sm:text-4xl lg:text-5xl"
              style={{ fontFamily: "'Playfair Display', serif" }}
              initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}>
              Resepsi Pernikahan
            </motion.h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8">
            {/* Date + time card */}
            <motion.div
              className="p-8 sm:p-10 lg:p-12 relative"
              style={{ border: `1px solid ${GOLD}30`, backgroundColor: `${GOLD}06` }}
              initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }} transition={{ duration: .7 }}
              whileHover={{ backgroundColor: `${GOLD}0E` }}>
              {/* Corner accents */}
              {["top-0 left-0", "top-0 right-0", "bottom-0 left-0", "bottom-0 right-0"].map((cls, i) => (
                <div key={i} className={`absolute ${cls} w-5 h-5 pointer-events-none`}
                  style={{
                    borderTop: i < 2 ? `2px solid ${GOLD}` : undefined, borderBottom: i >= 2 ? `2px solid ${GOLD}` : undefined,
                    borderLeft: i % 2 === 0 ? `2px solid ${GOLD}` : undefined, borderRight: i % 2 === 1 ? `2px solid ${GOLD}` : undefined
                  }} />
              ))}
              <p className="text-xs tracking-[0.4em] mb-3" style={{ color: GOLD, fontFamily: "'Cinzel', serif" }}>HARI &amp; TANGGAL</p>
              <p className="text-base sm:text-lg tracking-wider mb-1" style={{ fontFamily: "'Cinzel', serif", color: CREAM }}>MINGGU</p>
              <p className="text-6xl sm:text-7xl lg:text-8xl font-bold leading-none" style={{ fontFamily: "'Playfair Display', serif", color: CREAM }}>06</p>
              <p className="text-xl sm:text-2xl mt-1 tracking-widest" style={{ color: `${CREAM}AA`, fontFamily: "'Playfair Display', serif" }}>
                September 2026
              </p>
              <div className="mt-6 pt-5 border-t flex items-center gap-3" style={{ borderColor: `${GOLD}20` }}>
                <Clock className="w-4 h-4 flex-shrink-0" style={{ color: GOLD }} />
                <div>
                  <p className="text-xs tracking-widest" style={{ color: GOLD, fontFamily: "'Cinzel', serif" }}>PUKUL</p>
                  <p className="text-xl sm:text-2xl mt-0.5" style={{ fontFamily: "'Playfair Display', serif", color: CREAM }}>10.00 WIB — Selesai</p>
                </div>
              </div>
            </motion.div>

            {/* Venue + QR card */}
            <motion.div className="flex flex-col gap-5"
              initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }} transition={{ delay: .15, duration: .7 }}>

              {/* Venue */}
              <div className="p-7 sm:p-8 flex-1"
                style={{ border: `1px solid ${GOLD}30`, background: `${GOLD}06` }}>
                <div className="flex items-start gap-3">
                  <motion.div animate={{ y: [0, -4, 0] }} transition={{ duration: 2.5, repeat: Infinity }}>
                    <MapPin className="w-5 h-5 mt-0.5 flex-shrink-0" style={{ color: GOLD }} />
                  </motion.div>
                  <div>
                    <p className="text-xs tracking-widest mb-2" style={{ color: GOLD, fontFamily: "'Cinzel', serif" }}>LOKASI</p>
                    <p className="text-base sm:text-lg font-medium leading-snug mb-2"
                      style={{ fontFamily: "'Playfair Display', serif", color: CREAM }}>
                      Jl. Raya Bojong, RT.1/RW.2
                    </p>
                    <p className="text-sm sm:text-base leading-relaxed" style={{ color: `${CREAM}80` }}>
                      Bojong, Kec. Kemang<br />Kabupaten Bogor, Jawa Barat 16310
                    </p>
                  </div>
                </div>
              </div>

              {/* QR */}
              <div className="p-7 sm:p-8 flex flex-col sm:flex-row items-center gap-5"
                style={{ border: `1px solid ${GOLD}30`, background: `${GOLD}06` }}>
                <motion.a href={mapsUrl} target="_blank" rel="noopener noreferrer"
                  className="group flex-shrink-0" whileHover={{ scale: 1.04 }} whileTap={{ scale: .97 }}>
                  <div className="p-2.5 group-hover:opacity-80 transition-opacity"
                    style={{ border: `1.5px solid ${GOLD}80`, background: "#FDF8EF" }}>
                    <img src={qrSrc} alt="QR Code" width={100} height={100} className="block" />
                  </div>
                </motion.a>
                <div>
                  <p className="text-xs tracking-widest mb-1.5" style={{ color: GOLD, fontFamily: "'Cinzel', serif" }}>SCAN LOKASI</p>
                  <p className="text-sm sm:text-base leading-relaxed mb-3" style={{ color: `${CREAM}70` }}>
                    Scan QR untuk membuka Google Maps
                  </p>
                  <a href={mapsUrl} target="_blank" rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-xs tracking-widest hover:opacity-70 transition-opacity"
                    style={{ color: GOLD, fontFamily: "'Cinzel', serif" }}>
                    <ExternalLink className="w-3 h-3" /> BUKA DI MAPS
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── MEMPELAI ── */}
      <section className="py-16 sm:py-24 px-6 sm:px-10">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12 sm:mb-16">
            <Label>Mempelai</Label>
            <Divider />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 sm:gap-8 lg:gap-16">
            {/* Pria */}
            <motion.div className="text-center sm:text-right"
              initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }} transition={{ duration: .8 }}>
              <motion.div className="w-28 h-28 sm:w-32 sm:h-32 lg:w-40 lg:h-40 rounded-full mx-auto sm:ml-auto sm:mr-0 mb-5 overflow-hidden"
                style={{ border: `2px solid ${GOLD}`, boxShadow: `0 0 30px ${GOLD}25` }}
                whileHover={{ scale: 1.04 }}>
                <img src="/images/FotoProfilPria.JPG"
                  alt="Mustopa" className="w-full h-full object-cover" />
              </motion.div>
              <h3 className="shimmer-name mb-2 leading-tight"
                style={{ fontFamily: "'Great Vibes', cursive", fontSize: "clamp(2.2rem, 6vw, 3rem)" }}>Mustopa</h3>
              <p className="text-sm sm:text-base font-medium mb-2" style={{ fontFamily: "'Playfair Display', serif", color: CREAM }}>
                Mustopa Abdul Majid, S.E
              </p>
              <p className="text-sm sm:text-base leading-relaxed" style={{ color: `${CREAM}65` }}>
                Putra dari<br />
                <span className="italic">Bpk. Ustd. Yeyep Abu Bakar Soleh</span>
                <br />&amp; <span className="italic">Ibu Siti Rohimah</span>
              </p>
            </motion.div>

            {/* Heart divider */}
            <motion.div className="hidden sm:flex flex-col items-center justify-center absolute left-1/2 -translate-x-1/2"
              initial={{ opacity: 0, scale: 0 }} whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }} transition={{ delay: .3 }}>
              <div className="h-16 w-px" style={{ background: `${GOLD}30` }} />
              <motion.div animate={{ scale: [1, 1.2, 1] }} transition={{ duration: 1.5, repeat: Infinity }}>
                <Heart className="w-7 h-7 my-3" style={{ color: ROSE, fill: ROSE }} />
              </motion.div>
              <div className="h-16 w-px" style={{ background: `${GOLD}30` }} />
            </motion.div>

            {/* Heart mobile */}
            <motion.div className="flex sm:hidden items-center justify-center gap-4"
              initial={{ opacity: 0, scale: 0 }} whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}>
              <div className="h-px flex-1" style={{ background: `${GOLD}30` }} />
              <Heart className="w-6 h-6" style={{ color: ROSE, fill: ROSE }} />
              <div className="h-px flex-1" style={{ background: `${GOLD}30` }} />
            </motion.div>

            {/* Wanita */}
            <motion.div className="text-center sm:text-left relative"
              initial={{ opacity: 0, x: 50 }} whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }} transition={{ duration: .8 }}>
              <motion.div className="w-28 h-28 sm:w-32 sm:h-32 lg:w-40 lg:h-40 rounded-full mx-auto sm:mr-auto sm:ml-0 mb-5 overflow-hidden"
                style={{ border: `2px solid ${GOLD}`, boxShadow: `0 0 30px ${GOLD}25` }}
                whileHover={{ scale: 1.04 }}>
                <img src="/images/FotoProfilWanita.jpg"
                  alt="Firsta" className="w-full h-full object-cover" />
              </motion.div>
              <h3 className="shimmer-name mb-2 leading-tight"
                style={{ fontFamily: "'Great Vibes', cursive", fontSize: "clamp(2.2rem, 6vw, 3rem)" }}>Firsta</h3>
              <p className="text-sm sm:text-base font-medium mb-2" style={{ fontFamily: "'Playfair Display', serif", color: CREAM }}>
                Ns. Firsta Hilwa, S.Kep
              </p>
              <p className="text-sm sm:text-base leading-relaxed" style={{ color: `${CREAM}65` }}>
                Putri dari<br />
                <span className="italic">Bpk. Djumino</span>
                <br />&amp; <span className="italic">Ibu Aenah</span>
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── TURUT MENGUNDANG ── */}
      <section className="py-16 sm:py-24 px-6 sm:px-10" style={{ background: "#110508" }}>
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-10 sm:mb-14">
            <Label>Keluarga &amp; Kolega</Label>
            <motion.h2 className="text-3xl sm:text-4xl lg:text-5xl"
              style={{ fontFamily: "'Playfair Display', serif" }}
              initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
              Turut Mengundang
            </motion.h2>
            <Divider />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-0">
            {TURUT.map((item, i) => (
              <motion.div key={i}
                className="flex items-center justify-between py-3 px-4 sm:px-5 group cursor-default"
                style={{ borderBottom: `1px solid ${GOLD}12`, backgroundColor: "rgba(0, 0, 0, 0)" }}
                initial={{ opacity: 0, x: i % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: .5 }}
                transition={{ delay: (i % 6) * 0.07, duration: .45 }}
                whileHover={{ backgroundColor: `${GOLD}08`, x: 4 }}>
                <div className="flex items-center gap-3">
                  <motion.div className="w-1 h-1 rounded-full flex-shrink-0" style={{ background: GOLD }}
                    animate={{ opacity: [0.4, 1, 0.4] }} transition={{ duration: 2, repeat: Infinity, delay: i * .12 }} />
                  <span className="text-sm sm:text-base" style={{ color: `${CREAM}DD` }}>
                    {item.nama}
                  </span>
                </div>
                {item.ket && (
                  <span className="text-xs italic ml-3 flex-shrink-0" style={{ color: `${GOLD}90` }}>
                    {item.ket}
                  </span>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CLOSING ── */}
      <section className="py-20 sm:py-28 px-6 text-center relative overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 overflow-hidden">
          <img src={closingBg} alt="Closing Background" className="w-full h-full object-cover opacity-30 scale-110" />
          <div className="absolute inset-0" style={{ background: "linear-gradient(to top, rgba(13,6,8,1) 0%, rgba(13,6,8,0) 25%, rgba(13,6,8,0) 75%, rgba(13,6,8,1) 100%)" }} />
        </div>

        {/* Big bg text */}
        <p className="absolute inset-0 flex items-center justify-center text-[15vw] font-bold select-none pointer-events-none"
          style={{ color: `${GOLD}04`, fontFamily: "'Playfair Display', serif" }}>
          LOVE
        </p>

        <div className="max-w-2xl mx-auto relative z-10">
          <Divider />

          <motion.div animate={{ y: [0, -6, 0] }} transition={{ duration: 4, repeat: Infinity }}>
            <p className="shimmer-name overflow-visible py-2"
              style={{ fontFamily: "'Great Vibes', cursive", fontSize: "clamp(3rem, 10vw, 5rem)", lineHeight: 1.2 }}>
              Mustopa &amp; Firsta
            </p>
          </motion.div>

          <p className="text-xs sm:text-sm tracking-widest mt-3 mb-8" style={{ color: GOLD, fontFamily: "'Cinzel', serif" }}>
            06 SEPTEMBER 2026
          </p>

          <motion.p className="text-base sm:text-lg lg:text-xl italic leading-loose"
            style={{ color: `${CREAM}80` }}
            initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}>
            Merupakan suatu kehormatan dan kebahagiaan bagi kami
            <br />apabila Bapak / Ibu berkenan hadir dan memberikan
            <br />do&apos;a restu kepada kedua mempelai.
          </motion.p>

          <motion.p className="mt-8 text-xs sm:text-sm tracking-[0.35em]"
            style={{ color: GOLD, fontFamily: "'Cinzel', serif" }}
            animate={{ opacity: [0.5, 1, 0.5] }} transition={{ duration: 3, repeat: Infinity }}>
            — KELUARGA BESAR YEYEP &amp; DJUMINO —
          </motion.p>

          <div className="flex justify-center gap-4 mt-8">
            {[0, 1, 2, 3, 4].map(i => (
              <motion.div key={i}
                animate={{ scale: [1, 1.35, 1], opacity: [.5, 1, .5] }}
                transition={{ duration: 1.6, repeat: Infinity, delay: i * .18 }}>
                <Heart className="w-4 h-4 sm:w-5 sm:h-5" style={{ color: i === 2 ? GOLD : ROSE, fill: i === 2 ? GOLD : ROSE }} />
              </motion.div>
            ))}
          </div>

          <Divider />
        </div>
      </section>
    </motion.div>
  );
}

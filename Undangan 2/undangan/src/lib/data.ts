export const GOLD = "#C9A84C";
export const ROSE = "#C4788A";
export const CREAM = "#FDF8EF";
export const DARK = "#0D0608";

export const PETALS = Array.from({ length: 24 }, (_, i) => ({
  id: i, left: `${(i * 4.1 + (i % 4) * 3) % 97 + 1}%`,
  dur: `${10 + (i % 5) * 2}s`, delay: `${(i * 1.3) % 16}s`,
  size: 11 + (i % 4) * 5, color: ["#F4B0B0", "#EDAAB8", "#F8D0D0", "#E899A8", "#FADDDD"][i % 5],
  dx: ((i % 5) - 2) * 18,
}));

export const SPARKLES = Array.from({ length: 28 }, (_, i) => ({
  id: i, left: `${(i * 3.6) % 97 + 1}%`, top: `${(i * 2.8 + 4) % 92}%`,
  dur: `${1.6 + (i % 5) * 0.5}s`, delay: `${(i * 0.35) % 6}s`, size: 3 + (i % 5) * 2,
}));

export const GALLERY = [
  {
    id: 1,
    url: "/images/FotoGallery1.PNG",
    caption: "Dua Hati, Satu Jiwa",
    sub: "Ikatan suci yang penuh cinta",
    dir: "left" as const,
  },
  {
    id: 2,
    url: "/images/FotoGallery2.PNG",
    caption: "Bersama Selamanya",
    sub: "Janji setia di hadapan Allah SWT",
    dir: "right" as const,
  },
  {
    id: 3,
    url: "/images/FotoGallery3.PNG",
    caption: "Cinta yang Abadi",
    sub: "Merajut mimpi bersama",
    dir: "left" as const,
  },
  {
    id: 5,
    url: "/images/FotoLoveStory.JPG",
    caption: "Hari yang Paling Indah",
    sub: "06 September 2026",
    dir: "right" as const,
  },
];

export const TURUT: { nama: string; ket?: string }[] = [
  { nama: "Bpk. Basri", ket: "Kakanda" },
  { nama: "Bpk. Kusnadi", ket: "KDS Bojong" },
  { nama: "Bpk. Sholeh Iskandar", ket: "Ketua RW.01" },
  { nama: "Bpk. Urip", ket: "Ketua RW.02" },
  { nama: "Bpk. Sakim", ket: "Ketua RT 01/02" },
  { nama: "Bpk. Jamhur, S.Pd.I", ket: "Adik" },
  { nama: "Keluarga Besar Bpk. Amin", ket: "Almarhum" },
  { nama: "Keluarga Besar Bpk. Syamsudin Serna", ket: "Almarhum" },
  { nama: "Keluarga Besar H. Nur Nde Sa'iya" },
  { nama: "Pengurus MUI Desa Bojong" },
  { nama: "Bpk. H. Dedi", ket: "Ponakan" },
  { nama: "M. Firdaus Mustaqim, M.Pd" },
  { nama: "Muhammad Saepudin Hidayatulloh, S.E" },
  { nama: "Ade Apriadi" },
  { nama: "Siti Latifah Sadiah, S.Ak" },
  { nama: "Siti Nurjanah, S.Pd" },
  { nama: "Choirunisa Dwi Faradina, S.E", ket: "Anak & Menantu" },
];

export const BOKEH = Array.from({ length: 7 }, (_, i) => ({
  id: i,
  w: 180 + i * 60,
  left: `${(i * 14 + 3) % 90}%`,
  top: `${(i * 11 + 5) % 80}%`,
  color: i % 2 === 0 ? `${GOLD}18` : `${ROSE}14`,
  dur: 5 + i * 1.2,
  delay: i * 0.6,
}));

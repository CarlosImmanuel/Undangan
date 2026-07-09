import { PETALS, SPARKLES, GOLD, DARK } from "@/lib/data";

export const CSS = `
  @keyframes petalFall {
    0%{transform:translateY(-60px)translateX(0)rotate(0deg);opacity:.85}
    30%{transform:translateY(30vh)translateX(var(--dx))rotate(140deg);opacity:.7}
    70%{transform:translateY(70vh)translateX(calc(var(--dx)*-.5))rotate(330deg);opacity:.4}
    100%{transform:translateY(108vh)rotate(470deg);opacity:0}
  }
  @keyframes twinkle{0%,100%{opacity:0;transform:scale(0)}45%,55%{opacity:1;transform:scale(1)}}
  @keyframes shimmerGold{0%{background-position:-300% center}100%{background-position:300% center}}
  @keyframes floatBob{0%,100%{transform:translateY(0)}50%{transform:translateY(-7px)}}
  @keyframes scrollBounce{0%,100%{transform:translateY(0)}50%{transform:translateY(7px)}}
  .p-fall{position:fixed;pointer-events:none;z-index:1;will-change:transform;animation:petalFall linear infinite}
  .p-spark{position:fixed;pointer-events:none;z-index:1;will-change:transform,opacity;animation:twinkle ease-in-out infinite}
  .shimmer-name{
    background:linear-gradient(90deg,#8B3A4E 0%,#C4788A 25%,#F5DEB3 50%,#C4788A 75%,#8B3A4E 100%);
    background-size:300% auto;-webkit-background-clip:text;-webkit-text-fill-color:transparent;
    background-clip:text;animation:shimmerGold 3s linear infinite
  }
  .anim-bob{animation:floatBob 3s ease-in-out infinite}
  ::-webkit-scrollbar{width:4px}
  ::-webkit-scrollbar-track{background:${DARK}}
  ::-webkit-scrollbar-thumb{background:${GOLD};border-radius:2px}
`;

export default function Particles() {
  return (
    <>
      <style>{CSS}</style>
      {PETALS.map(p => (
        <div key={p.id} className="p-fall"
          style={{ left: p.left, top: "-50px", animationDuration: p.dur, animationDelay: p.delay, "--dx": `${p.dx}px` } as React.CSSProperties}>
          <svg width={p.size} height={p.size * 1.4} viewBox="0 0 16 22" fill="none">
            <ellipse cx="8" cy="11" rx="7" ry="10" fill={p.color} opacity="0.8" transform="rotate(12 8 11)" />
            <ellipse cx="8" cy="11" rx="3" ry="7" fill={p.color} opacity="0.2" transform="rotate(12 8 11)" />
          </svg>
        </div>
      ))}
      {SPARKLES.map(s => (
        <div key={s.id} className="p-spark"
          style={{ left: s.left, top: s.top, animationDuration: s.dur, animationDelay: s.delay }}>
          <svg width={s.size} height={s.size} viewBox="0 0 20 20" fill="none">
            <path d="M10 0L11.8 8.2L20 10L11.8 11.8L10 20L8.2 11.8L0 10L8.2 8.2Z" fill={GOLD} opacity="0.8" />
          </svg>
        </div>
      ))}
    </>
  );
}

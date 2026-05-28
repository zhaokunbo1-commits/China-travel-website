// ── China Travel Compass — brand logo component ───────────────────────────────
// Icon-only (for nav bar & favicon-ish uses) + full lockup variant.

interface LogoIconProps {
  size?: number;
  className?: string;
}

/** Compass mark SVG — the enso ring + mountains + gold compass needle. */
export function LogoIcon({ size = 32, className }: LogoIconProps) {
  return (
    <svg
      viewBox="0 0 100 100"
      width={size}
      height={size}
      className={className}
      aria-hidden="true"
      fill="none"
    >
      {/* Enso-style ring — slightly open at top-right, brushstroke feel */}
      <path
        d="M82,50 A36,36 0 1,0 74,20"
        stroke="#2d3d2d"
        strokeWidth="5"
        strokeLinecap="round"
        fill="none"
      />

      {/* Mountain silhouette — three peaks */}
      <path
        d="M14,72 L29,46 L39,58 L53,30 L65,54 L73,66 L82,72 Z"
        fill="#2d3d2d"
      />

      {/* Winding river — light cut through mountains */}
      <path
        d="M40,72 Q49,63 56,72 Q63,63 71,72"
        stroke="#f0ece4"
        strokeWidth="2"
        strokeLinecap="round"
        fill="none"
      />

      {/* Compass needle — gold tip pointing NE */}
      <path d="M50,50 L72,20 L52,49 Z" fill="#c8a96e" />
      {/* Counter tail — muted green */}
      <path d="M50,50 L35,70 L48,51 Z" fill="#6b7a6b" opacity="0.55" />

      {/* Pivot circle */}
      <circle cx="50" cy="50" r="4" fill="#c8a96e" />
    </svg>
  );
}

interface LogoProps {
  /** "nav" = icon + text inline. "footer" = same but smaller. "full" = stacked lockup. */
  variant?: "nav" | "footer" | "full";
  /** Override text color (for dark/light backgrounds). Defaults to foreground. */
  textClass?: string;
}

/**
 * Full brand logo component.
 * Use variant="nav" in the navigation bar,
 *     variant="footer" in the footer,
 *     variant="full" for hero / about sections.
 */
export function Logo({ variant = "nav", textClass }: LogoProps) {
  if (variant === "full") {
    return (
      <div className="flex flex-col items-center gap-2 select-none">
        <LogoIcon size={72} />
        <div className="text-center">
          <p
            className={`font-['Instrument_Serif'] tracking-[0.18em] uppercase text-xl leading-tight ${textClass ?? "text-foreground"}`}
          >
            China Travel
          </p>
          <div className="flex items-center gap-2 justify-center mt-0.5">
            <span className="flex-1 h-px bg-[#c8a96e]" style={{ maxWidth: 22 }} />
            <p
              className="font-['DM_Mono'] text-[#c8a96e] tracking-[0.25em] text-[11px] uppercase"
            >
              Compass
            </p>
            <span className="flex-1 h-px bg-[#c8a96e]" style={{ maxWidth: 22 }} />
          </div>
        </div>
      </div>
    );
  }

  const iconSize = variant === "footer" ? 28 : 32;
  const textSize = variant === "footer" ? "text-sm" : "text-base";

  return (
    <div className="flex items-center gap-2.5 select-none">
      <LogoIcon size={iconSize} />
      <span className={`font-semibold tracking-tight leading-tight ${textSize} ${textClass ?? "text-foreground"}`}>
        China Travel Compass
      </span>
    </div>
  );
}

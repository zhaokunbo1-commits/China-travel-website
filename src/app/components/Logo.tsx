// ── China Travel Compass — brand logo component ───────────────────────────────
// The source PNG (public/logo.png) is the full lockup: circular compass mark
// + "CHINA TRAVEL / — COMPASS —" typographic treatment on a light background.
//
// Variants:
//   "nav"    → compact height, used in the top navigation bar
//   "footer" → slightly smaller, used in the footer
//   "full"   → large stacked version for hero / about sections

interface LogoProps {
  variant?: "nav" | "footer" | "full";
  className?: string;
}

export function Logo({ variant = "nav", className = "" }: LogoProps) {
  // Height at which to display the logo image.
  const heightClass =
    variant === "full"   ? "h-40" :
    variant === "footer" ? "h-14" :
    /* nav */               "h-14";

  return (
    <img
      src="/logo.png"
      alt="China Travel Compass"
      className={`${heightClass} w-auto object-contain select-none ${className}`}
      draggable={false}
    />
  );
}

// Convenience alias — icon-only usage (alias of Logo)
export function LogoIcon({ size = 40, className = "" }: { size?: number; className?: string }) {
  return (
    <img
      src="/logo.png"
      alt="China Travel Compass"
      style={{ height: size, width: "auto" }}
      className={`object-contain select-none ${className}`}
      draggable={false}
    />
  );
}

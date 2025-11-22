// BRAND COLORS (NOT EXPORTED)
export const BRAND_ACCENT = "#7B8B61";
export const BRAND_PRIMARY_ORIGINAL = "#AE2024";
export const BRAND_PRIMARY = "#C11310";
export const BRAND_SECONDARY = "#E92023";
export const BRAND_DARK = "#212120";
export const BRAND_BACKGROUND = "#F5F5DC";

const effects = {
  gradientHero: `linear-gradient(135deg, #C11310 0%, #E92023 100%)`,
  gradientSection: `linear-gradient(180deg, ${BRAND_BACKGROUND} 0%, hsl(60, 40%, 88%) 100%)`,
  shadowBrand: `0 10px 30px -10px hsl(1, 85%, 41%, 0.3)`,
  shadowGlow: `0 0 40px hsl(1, 84%, 53%, 0.2)`,
  transitionSmooth: `all 0.4s cubic-bezier(0.4, 0, 0.2, 1)`,
  transitionBounce: `all 0.6s cubic-bezier(0.68, -0.55, 0.265, 1.55)`,
  radius: "0.75rem",
};

export const theme = {
  // TEXT COLORS
  textStandard: `text-neutral-950`,
  textAccent: `text-[#7B8B61]`,
  textBrand: `text-[#C11310]`,
  textSecondary: `text-[#E92023]`,
  textTerciary: `text-stone-500`,
  // BACKGROUNDS
  bgStandard: `bg-[#fdfcf2]`,
  bgBrand: `bg-[#C11310]`,
  bgSecondary: `bg-[#E92023]`,
  bgAccent: `bg-[#7B8B61]`,
  bgOffwhite: `bg-[#f3f3d3]`,
  bgCard: `bg-[#FFFFFF]`,
  bgFooter: `bg-[#212120]`,
  // BORDERS
  borderBrand: `border-[#C11310]`,
  borderSecondary: `border-[#E92023]`,
  borderAccent: `border-[#7B8B61]`,
  borderCard: `border-1 border-[#D6D6C2]`,
  // GRADIENTS
  gradientHero: `bg-[linear-gradient(135deg, #C11310 0%, #E92023 100%)]`,
  gradientSection: `bg-[${effects.gradientSection}]`,
  // HOVER
  hoverTextBrand: `hover:text-[#C11310]`,
  hoverTextSecondary: `hover:text-[#E92023]`,
  hoverBgBrand: `hover:bg-[#C11310]`,
};

export const semantic = {
  background: BRAND_BACKGROUND,
  foreground: BRAND_DARK,
  card: "#FFFFFF",
  cardForeground: BRAND_DARK,
  popover: "#FFFFFF",
  popoverForeground: BRAND_DARK,
  primary: BRAND_PRIMARY,
  primaryForeground: "#FAFAFA",
  secondary: BRAND_SECONDARY,
  secondaryForeground: "#FAFAFA",
  muted: "hsl(60, 30%, 85%)",
  mutedForeground: BRAND_DARK,
  accent: BRAND_ACCENT,
  accentForeground: "#FAFAFA",
  destructive: "hsl(0, 84.2%, 60.2%)",
  destructiveForeground: "#FAFAFA",
  border: "hsl(60, 20%, 80%)",
  input: "#FFFFFF",
  ring: BRAND_PRIMARY,
};

export const pages = {
  HOME: "home",
  SERVICES: "services",
  PORTFOLIO: "portfolio",
  ABOUT: "about",
  FAQ: "fag",
};

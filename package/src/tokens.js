/** Design system tokens — nguồn nền tảng: trích từ assets/logo-full.svg (MagiCore: Blue #1736F5, Yellow #FEC70A). */
export const BRAND = {
  blue: "#1736F5",   // primary — Light theme
  yellow: "#FEC70A", // accent — Light theme
};

export const LIGHT_THEME = {
  background: "#FFFFFF",
  foreground: "#1C1B19",
  card: "#FFFFFF",
  popover: "#FFFFFF",
  primary: "#1736F5",
  primaryForeground: "#FFFFFF",
  secondary: "#EBE9E6",
  accent: "#FEC70A",
  muted: "#F2F1EF",
  border: "#E7E5E1",
  input: "#E7E5E1",
  ring: "#1736F5",
  destructive: "#D84949",
  success: "#059669",
  warning: "#D4A45F",
  info: "#2563EB",
};

export const DARK_THEME = {
  background: "#0E0D0B",
  foreground: "#F5F3E9",
  card: "#1B1812",
  popover: "#1B1812",
  primary: "#FEC70A",
  primaryForeground: "#0E0D0B",
  secondary: "#1736F5",
  accent: "#FEC70A",
  muted: "#27241E",
  border: "#3F3C32",
  input: "#3F3C32",
  ring: "#FEC70A",
  destructive: "#E36B6B",
  success: "#34D399",
  warning: "#FBBF24",
  info: "#60A5FA",
};

export const tokens = { brand: BRAND, light: LIGHT_THEME, dark: DARK_THEME };

export default tokens;

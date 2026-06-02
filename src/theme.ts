<<<<<<< HEAD
export const colors = {
  brand: {
    50: "#eeeef8",
    100: "#d4d4ef",
    200: "#aaaadf",
    300: "#7e7ecf",
    400: "#5555a0",
    500: "#353575",
    600: "#2b2b60",
    700: "#21214a",
    800: "#181836",
    900: "#0f0f22",
    950: "#080811",
=======
import { createSystem, defaultConfig, defineConfig } from "@chakra-ui/react"

const config = defineConfig({
  theme: {
    tokens: {
      fonts: {
        body: { value: "'Lexend', system-ui, -apple-system, 'Segoe UI', sans-serif" },
        heading: { value: "'Lexend', system-ui, -apple-system, 'Segoe UI', sans-serif" },
      },
      colors: {
        brand: {
          50:  { value: "#eeeef8" },
          100: { value: "#d4d4ef" },
          200: { value: "#aaaadf" },
          300: { value: "#7e7ecf" },
          400: { value: "#5555a0" },
          500: { value: "#353575" },
          600: { value: "#2b2b60" },
          700: { value: "#21214a" },
          800: { value: "#181836" },
          900: { value: "#0f0f22" },
          950: { value: "#080811" },
        },
      },
    },
    semanticTokens: {
      colors: {
        brand: {
          solid:      { value: "{colors.brand.500}" },
          contrast:   { value: "{colors.brand.50}" },
          fg:         { value: "{colors.brand.700}" },
          muted:      { value: "{colors.brand.100}" },
          subtle:     { value: "{colors.brand.200}" },
          emphasized: { value: "{colors.brand.300}" },
          focusRing:  { value: "{colors.brand.500}" },
        },
      },
    },
>>>>>>> origin/main
  },
  gray: {
    50: "#f9fafb",
    100: "#f3f4f6",
    200: "#e5e7eb",
    300: "#d1d5db",
    400: "#9ca3af",
    500: "#6b7280",
    600: "#4b5563",
    700: "#374151",
    800: "#1f2937",
    900: "#111827",
  },
  green: {
    50: "#f0fdf4",
    100: "#dcfce7",
    200: "#bbf7d0",
    300: "#86efac",
    400: "#4ade80",
    500: "#22c55e",
    600: "#16a34a",
    700: "#15803d",
  },
  red: {
    50: "#fef2f2",
    100: "#fee2e2",
    200: "#fecaca",
    300: "#fca5a5",
    400: "#f87171",
    500: "#ef4444",
    600: "#dc2626",
  },
  white: "#FFFFFF",
  black: "#000000",
  transparent: "transparent",
}

export const theme = {
  colors,
  fonts: {
    body: "System",
    heading: "System",
  },
}

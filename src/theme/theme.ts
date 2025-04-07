export const theme = {
  colors: {
    background: "#f9f9f9",
    white: "#fff",
    black: "#000",
    text: "#333",
    primary: "#007bff",
    secondary: "#0056b3",
    danger: "#e74c3c",
    warning: "#f39c12",
    success: "#2ecc71",
    shadow: "#0000001a",
    hover: "#e6f0ff"
  },
  borderRadius: {
    xl: "1rem"
  },
  spacing: {
    p8: "2rem"
  }
} as const;

export type AppTheme = typeof theme;

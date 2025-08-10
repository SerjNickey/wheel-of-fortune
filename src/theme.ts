import type { DefaultTheme } from "styled-components";

export const theme: DefaultTheme = {
  colors: {
    primary: "#4361ee",
    secondary: "#3f37c9",
    danger: "#ff4d6d",
  },
  spacing: (multiplier = 1) => `${4 * multiplier}px`,
};

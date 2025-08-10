import { DefaultTheme } from "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    colors: {
      primary: string;
      secondary: string;
      danger: string;
    };
    spacing: (multiplier?: number) => string;
  }
}

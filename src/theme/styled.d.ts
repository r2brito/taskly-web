import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    colors: {
      background: string;
      white: string;
      black: string;
      shadow: string;
      text: string;
      primary: string;
      secondary: string;
      danger: string;
      warning: string;
      success: string;
      hover: string;
    };
    borderRadius: {
      xl: string;
    };
    spacing: {
      p8: string;
    };
  }
}

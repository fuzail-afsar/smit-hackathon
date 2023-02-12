import variables from "../scss/_variables.scss";
import LinkBehavior from "./overrides/LinkBehavior";

const ThemeConfig = () => {
  return {
    palette: {
      primary: {
        main: variables.primaryColor,
      },
      secondary: {
        main: variables.secondaryColor,
      },
    },
    typography: {
      // fontFamily: variables.font,
      // h1: {
      //   fontWeight: 700,
      // },
      button: {
        textTransform: "none",
        color: "white",
      },
    },
    components: {
      MuiLink: {
        defaultProps: {
          component: LinkBehavior,
        },
      },
      MuiButtonBase: {
        defaultProps: {
          LinkComponent: LinkBehavior,
        },
        styleOverrides: {
          // Name of the slot
          root: {
            // Some CSS
            fontSize: "1rem",
            color: "#fff",
          },
        },
      },
      MuiPrimaryButton: {
        defaultProps: {
          LinkComponent: LinkBehavior,
        },
      },
    },
  };
};

export default ThemeConfig;

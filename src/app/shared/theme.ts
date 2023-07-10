import { createTheme } from "@mui/material/styles";

import inter from "./fonts";
import variables from "./variables-export.module.scss";

const {
  white,
  dark,
  purple,
  darkPurple,
  //blue,
  darkBlue,
  lightBlue,
  sand,
  //star,
  grey,
  fontSize: fS,
} = variables;

const fontSize = +fS.replace("px", "");

const theme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: lightBlue,
      dark: darkBlue,
      contrastText: white,
    },
    secondary: {
      main: purple,
      dark: darkPurple,
    },
    text: {
      primary: dark,
      secondary: dark,
      disabled: "rgba(87,49,4,0.4)",
    },
    divider: "rgba(0, 0, 0, 0.12)",
  },
  typography: {
    button: {
      fontSize: fontSize,
    },
    fontFamily: inter.style.fontFamily,
    fontSize: fontSize,
    htmlFontSize: fontSize,
    subtitle1: {
      fontSize: fontSize,
    },
    subtitle2: {
      fontSize: fontSize,
    },
    body1: {
      fontSize: fontSize,
    },
    body2: {
      fontSize: fontSize,
    },
  },
  components: {
    MuiMenu: {
      styleOverrides: {
        paper: {
          borderRadius: "24px",
          border: `0.5px solid ${sand}`,
          boxShadow: "none",
          marginTop: "2px",
        },
      },
    },
    MuiMenuItem: {
      styleOverrides: {
        root: {
          padding: "9px 20px",
          "& .MuiCheckbox-root": {
            padding: 0,
          },
        },
      },
    },
    MuiListItemText: {
      styleOverrides: {
        root: {
          fontSize: "14px",
          "& .MuiTypography-root": {
            fontSize: "14px",
          },
        },
      },
    },
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          borderRadius: "160px",
        },
        input: {
          padding: "12px 20px",
        },
        notchedOutline: {
          borderColor: grey,
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: ({ ownerState }) => ({
          //backgroundColor: "red",
          ...(ownerState.variant === "contained" && {
            padding: "100px",
          }),
        }),
      },
    },
  },
});

export default theme;

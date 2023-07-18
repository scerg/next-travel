import { createTheme } from "@mui/material/styles";

import { inter } from "./fonts";
import variables from "./variables-export.module.scss";

const {
  white,
  dark,
  purple,
  darkPurple,
  darkBlue,
  lightBlue,
  sand,
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
          border: `1px solid ${sand}`,
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
          "&.Mui-selected": {
            backgroundColor: "rgba(197, 177, 78, 0.08)",
            "&:hover": {
              backgroundColor: "rgba(197, 177, 78, 0.2)",
            },
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
        root: {
          borderRadius: "20px",
          padding: "13px 20px",
          width: "250px",
          textTransform: "none",
          boxShadow: "none",
          lineHeight: "130%",
        },
      },
    },
    MuiChip: {
      styleOverrides: {
        root: {
          fontSize: "14px",
          fontStyle: "normal",
          fontWeight: "400",
          lineHeight: "130%",
          borderRadius: "160px",
        },
      },
    },
  },
});

export default theme;

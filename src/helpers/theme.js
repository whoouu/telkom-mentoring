import { createTheme } from "@mui/material/styles";
import resolveConfig from "tailwindcss/resolveConfig";
import { outlinedInputClasses } from "@mui/material/OutlinedInput";
import tailwindConfig from "../../tailwind.config";
const fullConfig = resolveConfig(tailwindConfig);

// THIS OBJECT SHOULD BE SIMILAR TO ../tailwind.config.js
const themeConstants = {
  paper: "#fff",
  primary: {
    main: fullConfig.theme.colors.turqouise,
  },
  secondary: {
    main: fullConfig.theme.colors,
  },
  error: {
    main: fullConfig.theme.colors.red[400],
    dark: fullConfig.theme.colors.red[600],
  },
  warning: {
    main: "#e6ca19",
  },
  breakpoints: {
    xs: 0,
    mb: 350,
    sm: 640,
    md: 768,
    lg: 1024,
    xl: 1280,
    "2xl": 1528,
  },
};

const themeComponent = {
  MuiTextField: {
    styleOverrides: {
      root: {
        "--TextField-brandBorderColor":
          fullConfig.theme.colors.neutral[200],
        "--TextField-brandBorderHoverColor":
          fullConfig.theme.colors.neutral[600],
        "--TextField-brandBorderFocusedColor":
          fullConfig.theme.colors.neutral[700],
        fontSize: "1rem",
        borderRadius: "0.938em",
        "& label.Mui-focused": {
          color: "var(--TextField-brandBorderFocusedColor)",
          position: "relative !important",
        },
        // "&"
      },
      defaultProps: {
        InputLabelProps: { shrink: false },
        sx: {
          "& legend": { display: "none" },
          "& fieldset": { top: 0 },
        },
      },
    },
  },
  MuiInputBase: {
    styleOverrides: {
      root: {
        borderRadius: "0.938em",
        // padding: "20px 15px",
      },
    },
  },
  MuiOutlinedInput: {
    styleOverrides: {
      notchedOutline: {
        borderColor: "var(--TextField-brandBorderColor)",
      },
      root: {
        borderRadius: "0.938em",
        [`&:hover .${outlinedInputClasses.notchedOutline}`]:
          {
            borderColor:
              "var(--TextField-brandBorderHoverColor)",
          },
        [`&.Mui-focused .${outlinedInputClasses.notchedOutline}`]:
          {
            borderColor:
              "var(--TextField-brandBorderFocusedColor)",
          },
        "&.Mui-disabled": {
          backgroundColor: fullConfig.theme.colors.neutral[100],
          color: fullConfig.theme.colors.neutral[400],
        },
      },
    },
  },
  MuiInputLabel: {
    styleOverrides: {
      root: {
        color: "#98A2B3",
        "&.Mui-focused": {
          color: "#072448",
        },
      },
    },
  },
  MuiCheckbox: {
    styleOverrides: {
      root: {
        color: fullConfig.theme.colors.gray90,
      },
      colorSecondary: {
        "&$checked": {
          color: fullConfig.theme.colors.black,
        },
      },
    },
  },
  MuiButton: {
    styleOverrides: {
      root: {
        textTransform: "capitalize",
        borderRadius: "10px",
        padding: "10px 15px",
        fontWeight: 400,
        "&.Mui-disabled": {
          backgroundColor: `${fullConfig.theme.colors["light-gray"]} !important`,
        },
        "&.MuiButton-containedPrimary": {
          boxShadow: "none !important",
          backgroundColor: `${fullConfig.theme.colors.turqouise[25]}`,
          color: "#fff",
          "&:hover": {
            backgroundColor: `${fullConfig.theme.colors.turqouise[100]}`,
            color: "#FFF",
          },
          "&:active": {
            backgroundColor: `${fullConfig.theme.colors.turqouise[400]}`,
            color: "#FFF",
          },
        },
        "&.MuiButton-containedLight": {
          boxShadow: "none !important",
          backgroundColor: `${fullConfig.theme.colors.jet[25]}`,
          border: `1px solid ${fullConfig.theme.colors.jet[300]}`,
          color: fullConfig.theme.colors.jet[700],
          "&:hover": {
            backgroundColor: `${fullConfig.theme.colors.jet[100]}`,
            color: `${fullConfig.theme.colors.jet[700]}`,
          },
          "&:active": {
            backgroundColor: `${fullConfig.theme.colors.jet[700]}`,
            color: "#FFF",
          },
        },
        "&.MuiButton-containedError": {
          boxShadow: "none !important",
          backgroundColor: `${fullConfig.theme.colors.red[400]}`,
          color: `#fff`,
          "&:hover": {
            backgroundColor: `${fullConfig.theme.colors.red[500]}`,
            color: `#fff`,
          },
          "&:active": {
            backgroundColor: `${fullConfig.theme.colors.red[600]}`,
            color: "#FFF",
          },
        },
        "&.MuiButton-containedWarning": {
          boxShadow: "none !important",
          backgroundColor: `${fullConfig.theme.colors.warning.main}`,
          color: "#FFF",
          "&:hover": {
            backgroundColor: `${fullConfig.theme.colors.warning.hover}`,
          },
          "&:active": {
            backgroundColor: `${fullConfig.theme.colors.warning.pressed}`,
          },
        },
        "&.MuiButton-containedSuccess": {
          boxShadow: "none !important",
          backgroundColor: `${fullConfig.theme.colors.success.main}`,
          color: "#FFF",
          "&:hover": {
            backgroundColor: `${fullConfig.theme.colors.success.hover}`,
          },
          "&:active": {
            backgroundColor: `${fullConfig.theme.colors.success.pressed}`,
          },
        },
        "&.MuiButton-containedDanger": {
          boxShadow: "none !important",
          backgroundColor: `${fullConfig.theme.colors.danger.main}`,
          color: "#FFF",
          "&:hover": {
            backgroundColor: `${fullConfig.theme.colors.danger.hover}`,
          },
          "&:active": {
            backgroundColor: `${fullConfig.theme.colors.danger.pressed}`,
          },
        },
      },
    },
  },
  MuiChip: {
    styleOverrides: {
      root: {
        borderRadius: "10px",
        padding: "3px 10px",
      },
      filled: {
        color: "#FFF",
      },
    },
  },
};

// Check here for more configurations https://material-ui.com/customization/default-theme/
const theme = createTheme({
  typography: {
    fontFamily: `"Poppins", "Helvetica", "Arial", sans-serif`,
  },
  palette: {
    mode: "light",
    primary: themeConstants.primary,
    neutral: themeConstants.neutral,
    secondary: themeConstants.secondary,
    light: themeConstants.light,
    background: { paper: themeConstants.paper },
    text: {
      primary: themeConstants.fg.main,
      secondary: themeConstants.fg.dark,
    },
    error: themeConstants.error,
    warning: themeConstants.warning,
  },
  breakpoints: {
    values: themeConstants.breakpoints,
  },
  components: {
    ...themeComponent,
  },
});

export { theme };

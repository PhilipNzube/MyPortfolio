import { createTheme, responsiveFontSizes } from "@mui/material/styles";

let theme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: "#1976D2", // Vibrant blue for buttons and accents
      light: "#63A4FF",
      dark: "#004BA0",
      contrastText: "#FFFFFF",
    },
    secondary: {
      main: "#F50057", // Pinkish-red for secondary accents
      light: "#FF5983",
      dark: "#C51162",
      contrastText: "#FFFFFF",
    },
    background: {
      default: "#FCF9F8", // Light, warm background for main content
      paper: "#FCF9F8", // Consistent with default for cards, drawers, etc.
      dark: "#121212", // Dark background for cards, buttons, etc.
    },
    text: {
      primary: "#121212", // Dark text for readability
      secondary: "#6B7280", // Muted grey for secondary text
    },
  },
  typography: {
    fontFamily: `'Sora', sans-serif`,
    h1: {
      fontSize: "3rem", // 48px
      fontWeight: 700,
    },
    h2: {
      fontSize: "2.25rem", // 36px
      fontWeight: 600,
    },
    h3: {
      fontSize: "2rem", // 32px
      fontWeight: 600,
    },
    h4: {
      fontSize: "1.75rem", // 28px
      fontWeight: 600,
    },
    h5: {
      fontSize: "1.5rem", // 24px
      fontWeight: 500,
    },
    h6: {
      fontSize: "1.25rem", // 20px
      fontWeight: 500,
    },
    subtitle1: {
      fontSize: "1rem",
      fontWeight: 400,
    },
    subtitle2: {
      fontSize: "0.875rem",
      fontWeight: 400,
    },
    body1: {
      fontSize: "1rem",
      fontWeight: 400,
    },
    body2: {
      fontSize: "0.875rem",
      fontWeight: 400,
    },
    caption: {
      fontSize: "0.75rem",
      fontWeight: 300,
    },
    overline: {
      fontSize: "0.7rem",
      fontWeight: 300,
      textTransform: "uppercase",
    },
    button: {
      fontSize: "0.875rem",
      fontWeight: 500,
      textTransform: "uppercase",
    },
  },
  components: {
    MuiAppBar: {
      styleOverrides: {
        root: {
          backgroundColor: "#FCF9F8", // Light background for navbar
          boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          backgroundColor: "#121212", // Dark background for project cards
          color: "#FFFFFF",
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        contained: {
          backgroundColor: "#121212", // Dark buttons for contrast
          "&:hover": {
            backgroundColor: "#1F2937",
          },
        },
        outlined: {
          borderColor: "#E5E7EB",
          color: "#FFFFFF",
          "&:hover": {
            backgroundColor: "#1F2937",
            borderColor: "#E5E7EB",
          },
        },
      },
    },
    MuiDrawer: {
      styleOverrides: {
        paper: {
          backgroundColor: "#FCF9F8", // Light background for mobile drawer
        },
      },
    },
  },
});

// Enable automatic scaling across screen sizes
theme = responsiveFontSizes(theme);

export default theme;

import { alpha, createTheme } from '@mui/material/styles';

// Brand palette, drawn from the Rietow logo
export const brand = {
  red: '#B3261E', // logo red, deepened so white text on it stays readable
  redDark: '#8F1E18',
  charcoal: '#2D2A2A',
  grey: '#9A9A9A', // logo grey: dividers and icons only, too light for text
  blush: '#FBEDEC',
  cream: '#F7F5F2',
};

const headingFont = '"Libre Baskerville", Georgia, "Times New Roman", serif';
const bodyFont = '"Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif';

const theme = createTheme({
  palette: {
    primary: { main: brand.red, dark: brand.redDark, contrastText: '#fff' },
    secondary: { main: brand.charcoal, contrastText: '#fff' },
    text: { primary: brand.charcoal, secondary: '#5F5A58' },
    background: { default: brand.cream, paper: '#fff' },
    divider: alpha(brand.charcoal, 0.12),
  },
  typography: {
    fontFamily: bodyFont,
    h1: { fontFamily: headingFont, fontWeight: 700 },
    h2: { fontFamily: headingFont, fontWeight: 700 },
    h3: { fontFamily: headingFont, fontWeight: 700 },
    h4: { fontFamily: headingFont, fontWeight: 700 },
    h5: { fontFamily: headingFont, fontWeight: 700 },
    h6: { fontWeight: 700 },
    button: { textTransform: 'none', fontWeight: 600, letterSpacing: 0.2 },
    overline: { fontWeight: 700, letterSpacing: 1.5 },
  },
  shape: { borderRadius: 10 },
  components: {
    MuiButton: {
      defaultProps: { disableElevation: true },
      styleOverrides: { root: { borderRadius: 8 }, sizeLarge: { padding: '10px 22px' } },
    },
    MuiCard: {
      styleOverrides: { root: { boxShadow: `0 1px 3px ${alpha(brand.charcoal, 0.08)}, 0 4px 16px ${alpha(brand.charcoal, 0.06)}` } },
    },
    MuiPaper: { styleOverrides: { rounded: { borderRadius: 12 } } },
    MuiChip: { styleOverrides: { root: { fontWeight: 600 } } },
    MuiLink: { defaultProps: { color: 'primary' } },
  },
});

export default theme;

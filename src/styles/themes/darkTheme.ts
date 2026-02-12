import { Theme } from './_theme'

export const darkTheme: Theme = {
  defaults: {
    headerHeight: '75px',
  },

  fonts: {
    default: 'var(--font-roboto)',
  },

  fontSizes: {
    xxs: '0.6875rem',
    xs: '0.75rem',
    sm: '0.875rem',
    md: '1rem',
    lg: '1.125rem',
    xl: '1.25rem',
    '2xl': '1.5rem',
    '3xl': '2rem',
  },

  fontWeights: {
    regular: '400',
    medium: '500',
    semiBold: '600',
    bold: '700',
  },

  lineHeights: {
    shorter: '125%',
    short: '140%',
    base: '160%',
    tall: '180%',
  },

  colors: {
    white: '#ffffff',
    black: '#121212',

    accentColor: '#00b37e',
    accentColorDark: '#00875f',

    gray100: '#e1e1e6',
    gray300: '#c4c4cc',
    gray400: '#8d8d99',
    gray600: '#323238',
    gray700: '#29292e',
    gray800: '#202024',
    gray900: '#121214',

    red500: '#f75a78',
  },

  space: {
    px: '1px',
    1: '0.25rem',
    2: '0.5rem',
    3: '0.75rem',
    4: '1rem',
    5: '1.25rem',
    6: '1.5rem',
    7: '1.75rem',
    8: '2rem',
    9: '2.25rem',
    10: '2.5rem',
  },

  radius: {
    xs: '2.5px',
    sm: '5px',
    md: '10px',
    lg: '20px',
    full: '9999px',
  },
}
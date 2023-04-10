/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    },
    colors: {
      'primary': {
        1: '#CFF1FF',
        5: '#ACCFFF',
        10: '#88AEFF',
        20: '#658FE8',
        30: '#3F70C6',
        40: '#0554A5',
        50: '#0353A4',
        60: '#003985'
      },
      'primary-1': '#CFF1FF',
      'primary-5': '#ACCFFF',
      'primary-10': '#88AEFF',
      'primary-20': '#658FE8',
      'primary-30': '#3F70C6',
      'primary-40': '#0554A5',
      'primary-50': '#0353A4',
      'primary-60': '#003985',
      'secondary': {
        1: '#FFEDF1',
        5: '#FFB7C8',
        10: '#FF819F',
        20: '#EF476F',
        40: '#C62F53',
        50: '#750E27',
        60: '#4C0516'
      },
      'secondary-1': '#FFEDF1',
      'secondary-5': '#FFB7C8',
      'secondary-10': '#FF819F',
      'secondary-20': '#EF476F',
      'secondary-40': '#C62F53',
      'secondary-50': '#750E27',
      'secondary-60': '#4C0516',
      'black': {
        100: '#070D12',
        90: '#303A47',
        80: '#303A47',
        70: '#424C5A',
        60: '#555F6D',
        50: '#697381',
        40: '#919CAC',
        30: '#A7B1C1',
        20: '#BCC7D8',
        10: '#D3DEEE'
      },
      'black-100': '#070D12',
      'black-90': '#303A47',
      'black-80': '#303A47',
      'black-70': '#424C5A',
      'black-60': '#555F6D',
      'black-50': '#697381',
      'black-40': '#919CAC',
      'black-30': '#A7B1C1',
      'black-20': '#BCC7D8',
      'black-10': '#D3DEEE',
      'white': {
        100: '#FFFFFF',
        90: '#FBFDFF',
        80: '#EFF4FB',
        70: '#F5F9FF',
        60: '#EFF3FA',
        50: '#E9EEF4',
        40: '#E3E8EF',
        30: '#DDE2E9',
        20: '#D8DDE3',
        10: '#D2D7DD'
      },
      'white-100': '#FFFFFF',
      'white-90': '#FBFDFF',
      'white-80': '#EFF4FB',
      'white-70': '#F5F9FF',
      'white-60': '#EFF3FA',
      'white-50': '#E9EEF4',
      'white-40': '#E3E8EF',
      'white-30': '#DDE2E9',
      'white-20': '#D8DDE3',
      'white-10': '#D2D7DD',
      'primary': '#0353A4',
      'secondary': '#EF476F',
      'white': '#ffffff',
      'success': '#01A63E',
      'danger': '#E73F3F',
      'warning': '#F4A118',
      'info': '#2080F7',
      'label-other-1': '#9B47EF',
      'label-other-2': '#4C53F9',
      'label-other-3': '#30A8BE',
      'border-light': '#EFEFEF',
      'border-default': '#E6E6E6',
      'border-hover': '#E0E0E0',
      'border-disable': '#F4F4F4',
      'background-light': '#EFEFEF',
      'disabled': '#cccccc',
      'textDisabled': '#666666'
    },
    fontSize: {
      'h1': ['62px', {
        lineHeight: '1.5rem',
        letterSpacing: '0px',
      }],
      'h2': ['50px', {
        lineHeight: '1.5rem',
        letterSpacing: '0px',
      }],
      'h3': ['40px', {
        lineHeight: '1.5rem',
        letterSpacing: '0px',
      }],
      'h4': ['32px', {
        lineHeight: '1.5rem',
        letterSpacing: '0px',
      }],
      'h5': ['25px', {
        lineHeight: '1.5rem',
        letterSpacing: '0px',
      }],
      'h6': ['20px', {
        lineHeight: '1.5rem',
        letterSpacing: '0px',
      }],
      'title': ['16px', {
        lineHeight: '1.5rem',
        letterSpacing: '0px',
      }],
      'subtitle': ['14px', {
        lineHeight: '1.5rem',
        letterSpacing: '0px',
      }],
      'body': ['13px', {
        lineHeight: '1.5rem',
        letterSpacing: '0px',
      }],
      'caption': ['12px', {
        lineHeight: '1.125rem',
        letterSpacing: '0px',
      }],
    },
    fontWeight: {
      light: '300',
      reguler: '400',
      medium: '500',
      'semi-bold': '600',
      bold: '700',
      'extra-bold': '800'
    },
    fontFamily: {
      sans: ['Poppins', 'sans-serif']
    },
    extend:
    {
      fontFamily: {
        sans: ['Poppins', 'sans-serif']
      },
    },
  },
  plugins: [],
}

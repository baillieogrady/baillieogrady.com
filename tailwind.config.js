module.exports = {
  purge: [
    './src/**/*.html',
    './src/**/*.js',
    './src/**/*.jsx',
  ],
  theme: {
    screens: {
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1140px',
    },
    fontFamily: {
      'body': ['Inter', 'Arial', 'sans-serif']
    },
    container: {
      center: true,
      padding: {
        default: '1.5rem',
        md: '0.9375rem',
      },
    },
    extend: {
      colors: {
        'brand-primary-700': '#6690FF',
        'brand-primary-800': '#3366FF',
        'brand-primary-900': '#254EDA',
        'brand-black-400': '#28293D',
        'brand-black-200': '#8E90A6',
        'brand-black-300': '#555770',
        'brand-grey-200': '#FAFAFC',
        'brand-grey-300': '#F2F2F5',
        'brand-grey-400': '#EBEBF0',
        'brand-grey-500': '#E3E4EB',
      },
      lineHeight: {
        'brand-tight': '1.2',
        'brand-7': '1.7'
      },
      fontSize: {
        'brand-4xl': '2.5rem'
      },
      letterSpacing: {
        'brand-wider': '.0469rem',
        'brand-widest': '.125rem'
      },
      spacing: {
        'brand-1/2': '0.125rem',
        'brand-4': '0.9375rem',
        'brand-8': '1.875rem',
        'brand-10': '2.40625rem',
        'brand-24': '6.1875rem',
        'brand-64': '16.1875rem'
      },
      height: {
        'brand-05': '0.125rem',
        'brand-105': '105%',
      },
      boxShadow: {
        'brand-xs': '0px 0px 1px rgba(40, 41, 61, 0.08), 0px 0.5px 2px rgba(96, 97, 112, 0.16);',
        'brand-3xl': '0px 2px 8px rgba(40, 41, 61, 0.08), 0px 20px 32px rgba(96, 97, 112, 0.24)'
      },
      inset: {
        '-brand-05': '0.5rem',
        'brand-80': '5rem',
        'brand-50': '50%'
      },
      width: {
        'brand-46': '46.060606%',
        'brand-76': '76.96969697%',
        'brand-mobile-full': 'calc(100% - 16px)'
      },
      borderRadius: {
        'brand-lg': '1rem'
      }

    },
  },
  variants: {},
  plugins: [],
}
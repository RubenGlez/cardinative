import { DefaultTheme } from 'styled-components'

// REF: https://evergreen.segment.com/foundations/colors

const lightTheme: DefaultTheme = {
  fontFamily: {
    thin: 'SFProText-Thin',
    light: 'SFProText-Light',
    regular: 'SFProText-Regular',
    medium: 'SFProText-Medium',
    semibold: 'SFProText-Semibold',
    heavy: 'SFProText-Heavy'
  },
  fontSize: {
    s: '10px',
    m: '14px',
    l: '18px',
    xl: '24px'
  },
  lineHeight: {
    s: '12px',
    m: '18px',
    l: '21px',
    xl: '28px'
  },
  space: {
    xs: '2px',
    s: '4px',
    sm: '8px',
    m: '16px',
    ml: '24px',
    l: '32px',
    xl: '48px'
  },
  radius: {
    s: '2px',
    m: '4px',
    l: '8px',
    xl: '12px'
  },
  color: {
    // Text
    text_primary: '#101840',
    text_secondary: '#696F8C',
    text_active: '#3366FF',
    text_inactive: '#D8DAE5',
    text_alt: '#FFFFFF',
    // Backgrounds
    bg_1: '#FFFFFF',
    bg_2: '#F9FAFC',
    bg_3: '#F4F5F9',
    bg_4: '#E6E8F0',
    bg_5: '#C1C4D6',
    // CTA's
    cta_primary: '#3366FF',
    cta_secondary: '#E6E8F0',
    // Utils
    util_success: '#52BD95',
    util_danger: '#D14343',
    util_warning: '#FFB020',
    util_info: '#3366FF'
  }
}

export default lightTheme

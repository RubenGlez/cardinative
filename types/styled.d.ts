import 'styled-components'

declare module 'styled-components' {
  export interface DefaultTheme {
    fontFamily: {
      thin: string
      light: string
      regular: string
      medium: string
      semibold: string
      heavy: string
    }
    fontSize: {
      s: string
      m: string
      l: string
      xl: string
    }
    lineHeight: {
      s: string
      m: string
      l: string
      xl: string
    }
    space: {
      xs: string
      s: string
      sm: string
      m: string
      ml: string
      l: string
      xl: string
      xxl: string
    }
    radius: {
      s: string
      m: string
      l: string
      xl: string
    }
    color: {
      text_primary: string
      text_secondary: string
      text_active: string
      text_inactive: string
      text_alt: string
      bg_1: string
      bg_2: string
      bg_3: string
      bg_4: string
      bg_5: string
      cta_primary: string
      cta_secondary: string
      util_success: string
      util_danger: string
      util_warning: string
      util_info: string
    }
  }
}

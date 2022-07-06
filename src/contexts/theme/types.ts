export type ThemeType = 'dark' | 'light'

export interface Theme {
  primary: string
}

export interface IThemeContext {
  currentTheme: ThemeType
  setCurrentTheme: (themeType: ThemeType) => void
}

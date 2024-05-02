import 'styled-components'

declare module 'styled-components' {
  export interface DefaultTheme {
    title: string
    primary: { 100: string; 200: string }
    secondary: { 100: string; 200: string; 300: string }
    terciary: string
    shadow: string
  }
}

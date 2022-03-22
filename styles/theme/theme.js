import { extendTheme } from "@chakra-ui/react"

export const theme = extendTheme({
  initialColorMode: "light",
  useSystemColorMode: true,
  semanticTokens: {
    font: {
      Anaheim: "'Anaheim', sans-serif",
      Share: "'Share', cursive",
      Dosis: "'Dosis', sans-serif",
      BenchNine: "'BenchNine', sans-serif",
      Oxygen: "'Oxygen', sans-serif",
      Kalam: "'Kalam', cursive"
    }
  }
})

export default theme

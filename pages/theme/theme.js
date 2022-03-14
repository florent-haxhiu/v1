import { extendTheme } from "@chakra-ui/react"

const config = {
  initialColorMode: "light",
  useSystemColorMode: true,
}

const fonts = {
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
}

const theme = extendTheme({ fonts, config })

export default theme

import { ChakraProvider } from '@chakra-ui/react'
import Layout from './layout/main'
import '../styles/main.scss'
import theme from './theme/theme'

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider theme={theme}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ChakraProvider>
  ) 
}

export default MyApp

import { ChakraProvider } from '@chakra-ui/react'
import Layout from './layout/main'
import '../styles/main.scss'

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ChakraProvider>
  ) 
}

export default MyApp

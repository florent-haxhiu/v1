import { Box, Container } from "@chakra-ui/react"
import Head from "next/head"
import Footer from "../components/footer"
import Navbar from "../components/navbar"

const Layout = ({ children }) => {
  return (
    <>
      <Head>
        <meta name='viewport' content='width=content-device, initial-scale=1' />
        <title>Florent Haxhiu</title>
      </Head>
      <Navbar />
      <Box pt={16}>
        { children }
      </Box>
      <Footer />
    </>
  )
}

export default Layout